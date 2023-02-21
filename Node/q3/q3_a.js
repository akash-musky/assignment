const request = require('request');
const fs=require('fs')
const https = require('https');
https.get('https://www.google.com', (resp)=>{

  let data = '';
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
        fs.writeFileSync('./google.html', data,'utf-8',(err)=>{
         if(err) return err;
         fs.close();
        }) 
  });
  
}).on("error", (err) => {
    console.log("Error: " + err.message);
});


