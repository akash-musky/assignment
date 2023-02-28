//importing all necessary module here.
const resources=require('../../lib');

//handling Json related stuff here.

//handling token and id related stuff here.
const token=`72ae4ba38fc549ff847baea145291fd8`
const id=``

//handling all methods related stuff here.
const getIntegrationIntegrator= async(token,id)=>{
   try{
   let data= await resources.getIntegration(token,id);
   console.log(data)
   }catch(err){
       console.log(err)
   }
   
}

//handling functions call here.
getIntegrationIntegrator(token,id);




