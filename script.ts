type cardNumber = {

   number: string

}



type cardDate = {

   date: string

}



type carDetails = cardNumber & cardDate & {

   cvv: number

}
