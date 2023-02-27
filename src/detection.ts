function detectType(val: number | string){

   if(typeof val === 'string'){

        return  val.toLocaleLowerCase

   }

   return val + 4

}





function provideID(ID: string | null){

   if (!ID) {
    
        console.log('Please provide a valid ID')

        return

    }

    ID.toLocaleLowerCase()

}