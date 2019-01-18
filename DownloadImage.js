const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function downloadImage(url) {
    const pathToImagesDirectory = path.resolve(__dirname, 'images', path.basename(url));
    const writer = fs.createWriteStream(pathToImagesDirectory);

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(fs.createWriteStream(pathToImagesDirectory));

    return new Promise((resolve, reject) => {
        writer.on('end', resolve);
        writer.on('error', reject)
    })
}

module.exports.downloadImage = downloadImage;