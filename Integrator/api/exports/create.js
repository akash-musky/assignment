//importing all necessary module here.
const resources=require('../../lib');
const Json=require('./Json')

//handling Json related stuff here.
const exportJson=Json.create;

//handling token and id related stuff here.
const token=`89da90528d1648b28de486f1ba615649`;

//handling  methods related stuff here.
const createExportIntegrator= async(token,exportJson)=>{
    try{
    let data= await resources.createExport(token,exportJson);
    console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

//handling functions call here.
createExportIntegrator(token,exportJson);



