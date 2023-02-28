//importing all necessary module here.
const resources=require('../../lib');
const Json=require('./Json')

//handling Json related stuff here.
const connectionJson=Json.create;

//handling token and id related stuff here.
const token='2695c8cd49d44eddb3c34ce4ac08055c';


//handling all methods related stuff here.
const createConnectionIntegrator= async(token,connectionJson)=>{
    try{
    let data= await resources.createConnection(token,connectionJson);
    console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

//handling functions call here.
createConnectionIntegrator(token,connectionJson)
