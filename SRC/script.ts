let calc: (x: number, y: number, z: string) => number


calc = (numOne: number, numTwo: number, action: string) => {

   if (action === "add") {
   
      return numOne + numTwo
      
   }else{

      return numOne - numTwo
            

   }
   
}
