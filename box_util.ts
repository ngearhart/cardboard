// This is an example of a typescript version of box_util, much more well written than the vanilla js version
// Not actually used in this proof of concept project though

import { Logger } from './logger';
import { existsSync, readFileSync, ReadStream } from 'fs';

const boxSDK = require('box-node-sdk');  // Box SDK

// Fetch config file for instantiating SDK instance
var client: any = {};

if (!existsSync('keys/box_config.json')) {
    Logger.error("WARNING: Box configuration file not found.");
    Logger.error("\tAll box utility calls will break!");
    Logger.error("\tYou better be doing only development!");
} else {
    var configJSON = JSON.parse(readFileSync('keys/box_config.json').toString());

    // Instantiate instance of SDK using generated JSON config
    var sdk = boxSDK.getPreconfiguredInstance(configJSON);
    
    // Create auth client
    client = sdk.getAppAuthClient('enterprise', configJSON.enterpriseId);
}

export class Box {

    // Create a folder in the parent folder "parent" called "name", with optional callback => (err, res)
    static createFolder(parent: number, name: string, callback: Function): void {
        client.folders.create(parent || 0, name, callback || Box.defaultCallback);
    };
    
    static async createFolderAsync(parent: number, name: string): Promise<any> {
        return new Promise((res, rej) => {
            client.folders.create(parent || 0, name, (err, result) => {
                if (err) 
                    rej(err);
                else
                    res(result);
            });
        });
    };
    
    // Async method to search for a folder id with the given name
    static getFolderIdFromName(name: string): Promise<number> {
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
    static getFolderContents(folderId): Promise<{ type: string; id: any; name: any; }[]> {
        return new Promise((resolve, reject) => {
            client.folders.get(folderId, {
                limit: 10000
            }).then((folder) => {
                resolve(folder.item_collection.entries);
            });
        });
    }
    
    static getFolderContentsCount(folderId: number): Promise<number> {
        return new Promise((resolve, reject) => {
            client.folders.get(folderId).then((folder) => {
                resolve(folder.item_collection.total_count);
            });
        });
    }
    
    static extractFileData(entries: { type: string; id: any; name: any; }[]): {id: number, title: string}[] {
        var result = [];
        
        entries.forEach((entry: { type: string; id: any; name: any; }) => {
            if (entry.type == 'file')
                result.push({id: entry.id, title: entry.name});
        });
    
        return result;
    }

    static async findFile(folderId: number, name: string): Promise<number> {
        return new Promise((res, rej) => {
            client.search.query(name, {
                ancestor_folder_ids: "" + folderId,
                fields: 'name',
                limit: 5
            }).then(results => {
                if (results.total_count > 0) {
                    res(results.entries[0].id);
                } else rej("Either no or multiple files found when searching for " + name + ": " + JSON.stringify(results));
            }).catch((err) => rej(err));
        });
    }
    
    static getReadStream(id: number): Promise<ReadStream> {
        return client.files.getReadStream(id);
    }
    
    static getThumb(id: number): any {
        return client.files.getThumbnail(id, {min_height: 256, min_width: 256});
    }
    
    // Async returns Collaboration object
    static shareFolder(folderId: number, userId: number): Promise<any> {
        return client.collaborations.createWithUserID(userId, folderId, client.collaborationRoles.EDITOR);
    }
    
    static upload(folderId: number, name: string, readStream: ReadStream): Promise<{entries: {id: number}[]}> {
        return client.files.uploadFile(folderId, name, readStream);
    }
    
    private static defaultCallback(err, res) {
        console.log("Callback - Err: " + err + ", res: " + JSON.stringify(res, null, 4));
    }
}