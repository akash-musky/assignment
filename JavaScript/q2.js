//2.1
class metaDataParser{

    constructor(){
        //defining _version and _channel as private
        let _channel="";
        let _version="";
        
        this.setChannel=(channel)=> this._channel=channel;
        this.setVersion=(version)=> this._version=version;
        this.getChannel=()=> this._channel;
        this.getVersion=()=> this._version
        this.getKeyFields=(jsonObject)=> {
          
          //jsonObject is the array of Object
          let n=jsonObject.length;
          if(!n){
            return [];
          }
          const output=[]
          for(let object of jsonObject){
            const valueArray=new Array()
            for( let key in object){
                //pushing all the value of the key which has been passed as an
                //input in getKeyFields.
                 valueArray.push(object[key]);
            }

            output.push(valueArray)
          }

          return output;
        }
        
    }
}


//creating first object.
const firstObject=new metaDataParser();
firstObject.setChannel('A')
firstObject.setVersion('1.0')


console.log(`channel: ${firstObject.getChannel()}\nversion: ${firstObject.getVersion()}\n`)

//creating second object.
const secondObject=new metaDataParser();
secondObject.setChannel('B')
secondObject.setVersion('2.0')

console.log(`channel: ${secondObject.getChannel()}\nversion: ${secondObject.getVersion()}\n`)

//creating third object
const thirdObject=new metaDataParser();
thirdObject.setChannel('C')
thirdObject.setVersion('3.0')

console.log(`channel: ${thirdObject.getChannel()}\nversion: ${thirdObject.getVersion()}\n`)

jsonObject=[{channel: "A"}, {channel: "B"}, {channel: "C"}]
console.log(thirdObject.getKeyFields(jsonObject));