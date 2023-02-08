//Name: Akash Kumar
const Handlebars = require("handlebars");
const fs=require('fs')
//input handlebars
const products=require('./handlebarInput').data
//template for the handlebars.
const productTemplate=require('./template').template
//compiling our productTemplate.
const template=Handlebars.compile(productTemplate)
//get the response on our handlbars.
var response=template({products})
//showing response on console.
console.log(response)

// writing the output xml in new file through file system.
fs.writeFileSync('./handlbarOutput.xml',response,'utf8',(err)=>{

  if(err) return err;
  fs.close()
})
