//importing all necessary module here.
const resources=require('../../lib');

//handling Json related stuff here.


//handling token and id related stuff here.
const token='2695c8cd49d44eddb3c34ce4ac08055c';


//handling all methods related stuff here.
const getAllConnectionsIntegrator= async(token)=>{
    try{
    let data= await resources.getAllConnections(token);
    console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

//handling functions call here.
getAllConnectionsIntegrator(token);

