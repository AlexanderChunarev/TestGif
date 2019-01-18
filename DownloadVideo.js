var fs = require('fs');
var youtubedl = require('youtube-dl');
var video = youtubedl('https://www.youtube.com/watch?v=09NJc8fevyA',
    ['--format=18'],
    { cwd: __dirname });

video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info.filename);
    console.log('size: ' + info.size);
});

video.pipe(fs.createWriteStream('myvideo.mp4'));

module.exports.downloadVideo = downloadVideo;