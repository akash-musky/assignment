//importing all necessary module here.
const resources=require('../../lib');
const Json=require('./Json');

//handling Json related stuff here.
const updateJson=Json.update;

//handling token and id related stuff here.
const token=`89da90528d1648b28de486f1ba615649`;
const id=``

//handling all methods related stuff here.
const updateFlowIntegrator= async(token,id,updateJson)=>{
    try{
    let data= await resources.updateFlow(token,id,updateJson);
    console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

//handling functions call here.
updateFlowIntegrator(token,id,updateJson);
