let logDetails: (object: {

   name: string,

   age: number

}) => void



logDetails = (ninja: {name: string, age: number}) => {

   console.log(`${ninja.name} is ${ninja.age} years old`)

}