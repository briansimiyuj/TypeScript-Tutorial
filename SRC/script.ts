interface isPerson{

   name: string

   age: number

   speak(a: string): void

   spend(a: number): number

}


const me: isPerson = {

   name: 'Mike',
   
   age: 20,

   speak(text: string): void{

      console.log(text)

   },


   spend(amount: number): number {

      console.log('I spend', amount)

      return amount

   }

}



const greetPerson = (person: isPerson) =>{

   console.log('Hello', person.name)

}

greetPerson(me)

import { Invoice } from './classes/invoice.js';


const invOne = new Invoice('Brian', 'App Development', 1000000)

const invTwo = new Invoice('Simiyu', 'System Development', 2500000)


let invoices: Invoice[] = []

invoices.push(invOne)

invoices.push(invTwo)



invoices.forEach((invoice) =>{

   console.log(invoice.client, invoice.amount, invoice.format()) 

})




const form = document.querySelector(".new-item-form") as HTMLFormElement,

   type = document.querySelector("#type") as HTMLSelectElement,

   toFrom = document.querySelector("#tofrom") as HTMLInputElement,

   details = document.querySelector("#details") as HTMLInputElement,

   amount = document.querySelector("#amount") as HTMLInputElement



form.addEventListener("submit", (e: Event) =>{

   e.preventDefault()

   console.log(

      type.value,

      toFrom.value,

      details.value,

      amount.valueAsNumber

   )

})