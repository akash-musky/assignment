//it will sort array in ascending order.
class SortArray{

    constructor(inputArray){
        //private properties
        this.originalArray=inputArray
        //private methods.
        //comparatorFunction to sort the number array or string array.
        const comparatorFunction=(a,b)=> a>b?1:-1
        //used sort method of javascript.
        this.sortArray=() => inputArray.sort(comparatorFunction)
    }
    //public function can be accessed user can call it.
    getSortedArray=()=>this.sortArray()

}


class SortObjectArray extends SortArray {
    
    constructor(inputObjectArray){
        super(inputObjectArray) //SortArray.constructor(inputObjectArray)
        //pass the properties on which we want to sort.
        const sortByProperty=(property)=>{  
            return (a,b)=> a[property]>b[property]?1:-1
         }
       
        this.sortObjectArray=(property)=> inputObjectArray.sort(sortByProperty(property))
       

    }

    //passing the property of object according to which we want to sort the object array.
    getSortedObjectArray=(property)=>this.sortObjectArray(property)
}

//number array
const inputArray=[43,1,45,34,5,6,2,23]
const obj=new SortArray(inputArray)
console.log(obj.getSortedArray())

//string array
const string=['b','c','a']
const stringObj=new SortArray(string)
console.log(stringObj.getSortedArray())

const objectArray=[ 
    { 
        movieName: 'Harry Potter',
        ticketPrice: 400 
    },
    {
        movieName: 'Lucy',
        ticketPrice: 900
    },
    {
        movieName: 'Peaky Blenders',
        ticketPrice: 1000
    },
    {
        movieName: 'Money Heist',
        ticketPrice: 700
     
    },
    {
        movieName: 'Dark',
        ticketPrice: 600
    },
    {
        movieName: 'The Stranger Things',
        ticketPrice: 300
    }
]

const objJson=new SortObjectArray(objectArray);
//sorting object array on ticketPrice.
console.log(objJson.getSortedObjectArray('ticketPrice'))

