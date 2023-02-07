var fs = require('fs');
var parse = require('xml-parser');
var xml = fs.readFileSync('products.xml', 'utf8');
var inspect = require('util').inspect;
 
var obj = parse(xml);
// console.log(inspect(obj, { colors: true, depth: Infinity }));
//converting obj to string.
var parsedXml=JSON.stringify(obj)

fs.writeFile('./parsedXml.json',parsedXml,'utf8',(err)=>{
    if(err) return err;
    
    console.log('sucessfully parsed xml file.')
})
