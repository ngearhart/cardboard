
const box = require("./box_util");

let express = require('express');
let app = express();

let path = require('path');
let fs = require('fs');

let http = require('http');

let httpPort = 80;

// For angular
app.use(express.static(path.join(__dirname, 'client/cardboard-client/dist/cardboard-client/')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/cardboard-client/dist/cardboard-client/index.html'));
// });

app.get('/box-api/:method', (req, res) => {
    switch(req.params.method) {
        case "list-music":
            box.getFolderContents(57913274114).then(entries => {
                res.json(box.extractFileData(entries));
            }).catch((err) => {
                console.log(err);
            });
            break;
        case "download":
            box.getReadStream('' + req.query.id).then(stream => {
                //res.contentType("application/pdf");
                //res.setHeader("Content-Disposition", "inline; filename='nfos.pdf';");
                res.writeHead(200, {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': "inline; filename='music.pdf';"
                });
                stream.pipe(res);
            }).catch((err) => console.log(err));
            break;
    }
    //res.sendFile(path.join(__dirname, "posts/posts.json"));
});


app.set('port', httpPort);
var httpServer = http.createServer(app);
httpServer.listen(httpPort, () => console.log(`Web server running on port: ${httpPort}`));
