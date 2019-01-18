const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const urlEncoderParser = bodyParser.urlencoded({extend: false});
const downloadImage = require('./DownloadImage');
const makeGif = require('./MakeGIf');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', urlEncoderParser, function (req, res) {
    downloadImage.downloadImage(req.body.url);
});

app.get('/gif', function (req, res) {
    res.sendFile(__dirname + "/gif.html");
});

app.listen(3000);