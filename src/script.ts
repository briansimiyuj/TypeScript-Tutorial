function calculateTax(income: number): number{

   if (income < 50_000){

    return income * 1.2

   }else{

    return income * 1.3

   }

}