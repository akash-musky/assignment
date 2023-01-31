const person={
    "firstName": "Akash",
    "lastName":  "Kumar",
    "age":  21
}


console.log('Iterating Object Using for...In:')
for( let  key in person){
    console.log(`${key}: ${person[key]}`)

}

console.log('\nIterating Object using for...Of:')
for(let key of Object.keys(person)){
    console.log(`${key}: ${person[key]}`) 
}