(function() {
    const boxSDK = require('box-node-sdk');  // Box SDK
    const fs = require('fs');                // File system for config

    // Fetch config file for instantiating SDK instance
    const configJSON = JSON.parse(fs.readFileSync('box_config.json'));

    // Instantiate instance of SDK using generated JSON config
    const sdk = boxSDK.getPreconfiguredInstance(configJSON);

    // Create auth client
    const client = sdk.getAppAuthClient('enterprise', configJSON.enterpriseId);

    // PERFORM API ACTIONS WITH CLIENT

    // Create a folder in the parent folder "parent" called "name", with optional callback => (err, res)
    module.exports.createFolder = (parent, name, callback) => {
        client.folders.create(parent || 0, name, callback || defaultCallback);
    };

    // Async method to search for a folder id with the given name
    module.exports.getFolderIdFromName = (name) => {
        return new Promise((resolve, reject) => {
            client.search.query(
                name, {"type": "folder"},
                (err, res) => {
                    if (err) reject(err);
                    else resolve(res.entries[0].id);
                });
        });
    };

    // Async returns entry[] for a given folder
    module.exports.getFolderContents = (folderId) => {
        return new Promise((resolve, reject) => {
            client.folders.get(folderId).then((folder) => {
                resolve(folder.item_collection.entries);
            });
        });
    }

    module.exports.extractFileData = (entries) => {
        var result = [];
        
        entries.forEach((entry) => {
            if (entry.type == 'file')
                result.push({id: entry.id, title: entry.name});
        });

        return result;
    }

    module.exports.getReadStream = (id) => {
        return client.files.getReadStream(id);
    }

    // Async returns Collaboration object
    module.exports.shareFolder = (folderId, userId) => {
        return client.collaborations.createWithUserID(userId, folderId, client.collaborationRoles.EDITOR);
    }

    function defaultCallback(err, res) {
        console.log("Callback - Err: " + err + ", res: " + JSON.stringify(res, null, 4));
    }

    // 3678411487 = nlg29

    // 57913274114 = Full Scores folder id
})();