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