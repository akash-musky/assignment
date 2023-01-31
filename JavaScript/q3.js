
const groupObjectsBy=(jsonObject, channel)=>{
 
    //we are combining all the objects and adding key as channel and value as array of all objects
    
    //defining empty object.
    const outputObject={}

    for(let object of jsonObject){
        //look if object.channel has this channel 
        //then push the current object into the output[channel]
        if(outputObject.hasOwnProperty(object.channel)){
            outputObject[object.channel].push(object);
        }else
        { 
            //if not then create a key=current object as channel and value as an array of this 
            //object.
            outputObject[object.channel]=[object];
        
        }
       
    }

    return outputObject;

}

//calling the funtion
const jsonObject=[ { "channel": "A",  "name": "shoe" }, {  "channel": "A",  "name": "electronics" }, 
{"channel": "B", "name": "apparel" }, {  "channel": "C", "name": "electronics"  } ]

console.log(groupObjectsBy(jsonObject,'channel'))
  