//importing all necessary module here.
const resources=require('../../lib');
const Json=require('./Json')

//handling Json related stuff here.
const integrationJson=Json.update;

//handling token and id related stuff here.
const token=`72ae4ba38fc549ff847baea145291fd8`
const id=``

//handling all methods related stuff here.
const updateIntegrationIntegrator= async(token,id,integrationJson)=>{
   try{
   let data= await resources.updateIntegration(token,id,integrationJson);
   console.log(data)
   }catch(err){
       console.log(err)
   }
   
}

//handling functions call here.
updateIntegrationIntegrator(token,id,integrationJson);



