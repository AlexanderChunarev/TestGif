const spawn = require('child_process').spawn;

function testGif() {
    const args = ['-delay', '100', '-loop', '0', './images/*.jpg', '*.png', 'my.gif'];
    return spawn('convert', args);
}

testGif();

module.exports.testGif = testGif;







