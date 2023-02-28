//importing all necessary module here.
const resources=require('../../lib');
const Json=require('./Json')

//handling Json related stuff here.
const importJson=Json.create

//handling token and id related stuff here.
const token=`89da90528d1648b28de486f1ba615649`;

//handling all methods related stuff here.
const createImportIntegrator= async(token,importJson)=>{
    try{
    let data= await resources.createImport(token,importJson);
    console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

//handling functions call here.
createImportIntegrator(token,importJson);
