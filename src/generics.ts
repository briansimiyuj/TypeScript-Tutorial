const score: Array<number> = []

const names: Array<string> = []



function identityOne(val: boolean | number): boolean | number {

    return val

}




function identityTwo(val: any): any {

   return val

}




function identityThree<Type>(val: Type):Type{

   return val

}

identityThree(3)

identityThree('Hello')

identityThree(true)



function identityFour<T>(val: T):T{

    return val

}





interface Bottle{

    brand: string,

    type: string

}


identityFour<Bottle>({brand: 'CocaCola', type: 'Fanta'})






function getSearchProducts<T>(products: T[]):T{

    // Do some database queries

    const myIndex = 3

   return products[myIndex]
   

}




interface Database{

    connection: string,

    username: string,
    
    password: string

}





const getMoreSearchProducts = <T>(products: T[]): T =>{

    // Do some database queries

    const myIndex = 4

    return products[myIndex]

}





function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object{

   return{

      valOne,

      valTwo

   }

}


anotherFunction(45, {connection: 'mysql', username: 'root', password: 'root'})






interface Quiz{

    name: string

    type: string

}


interface Course{

    name: string

    author: string

    subject: string

}




class Sellable<T>{

    public cart: T[] = []


    addToCart(product:T){

        this.cart.push(product)

    }

}