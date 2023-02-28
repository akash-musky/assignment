//importing all necessary module here.
const resources=require('../../lib');


//handling token and id related stuff here.
const token=`7b7b3bced5d34d69b2bdd41ddae21407`;
const id=`63fdf3ced4ccce3c01aab36c`

//handling all methods related stuff here.
const getFlowIntegrator= async(token,id)=>{
    try{
    let data= await resources.getFlow(token,id);
    data=JSON.parse(data)
    console.dir(data, {depth: null, colors: true})
    }catch(err){
        console.log(err)
    }
    
}

//handling functions call here.
getFlowIntegrator(token,id);

