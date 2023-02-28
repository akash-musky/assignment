//importing all necessary module here.
const resources=require('../../lib');
const Json=require('./Json');

//handling Json related stuff here.
const createFlowJson=Json.create;

//handling token and id related stuff here.
const token=`7b7b3bced5d34d69b2bdd41ddae21407`;
//handling  methods related stuff here.
const createFlowIntegrator= async(token,createFlowJson)=>{
    try{
        let data=await resources.createFlow(token,createFlowJson);
        console.log(data)
    }catch(err){
        console.log(err);
    }
}

//handling function call here.
createFlowIntegrator(token,createFlowJson);

