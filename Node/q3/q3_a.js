const fs = require('fs');
const https = require('https');
  
// URL of the image
const url = 'GFG.jpeg';
  
https.get(url,(res) => {
    // Image will be stored at this path
    const path = `${__dirname}/files/img.jpeg`; 
    const filePath = fs.createWriteStream(path);
    res.pipe(filePath);
    filePath.on('finish',() => {
        filePath.close();
        console.log('Download Completed'); 
    })
})