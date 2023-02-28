//importing all necessary module here.
const resources=require('../../lib');

//handling Json related stuff here.

//handling token and id related stuff here.
const token=`89da90528d1648b28de486f1ba615649`;
const id=``;

//handling all methods related stuff here.
const getImportIntegrator= async(token,id)=>{
    try{
    let data= await resources.getImport(token,id);
    console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

//handling functions call here.
getImportIntegrator(token,id);
