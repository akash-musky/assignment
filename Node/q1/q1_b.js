const fs=require('fs')
var convert = require('xml-js');

//reading file from the file system.
fs.readFile('./products.xml','utf-8',(err,content)=>{
    
    //if file not found then returning the cause of error.
    if(err) return err;

    //converting xml to json.//content=xml
    var jsonFormat = convert.xml2json(content, { compact: true, spaces: 4 });

    console.log(typeof(jsonFormat))
    fs.writeFile('./xml2Json.json',jsonFormat,'utf8',(err)=>{
        if(err) return err;

        return;

    })


})