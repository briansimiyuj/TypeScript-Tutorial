type stringOrNumber = string | number

type objectWithName = {name: string, uid: stringOrNumber}



const logDetails = (uid: stringOrNumber, item: string) =>{

   console.log(`${item} has a uid of ${uid}`)

}



const greet = (user: objectWithName) =>{

   console.log(`${user.name} says hello`)

}