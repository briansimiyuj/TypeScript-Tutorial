import { Payment } from './classes/payments.js'

import { HasFormatter } from './interfaces/hasFormatter.js'




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





const form = document.querySelector(".new-item-form") as HTMLFormElement,

   type = document.querySelector("#type") as HTMLSelectElement,

   toFrom = document.querySelector("#tofrom") as HTMLInputElement,

   details = document.querySelector("#details") as HTMLInputElement,

   amount = document.querySelector("#amount") as HTMLInputElement



form.addEventListener("submit", (e: Event) =>{

   e.preventDefault()


   let doc: HasFormatter

   if (type.value === "invoice"){

      doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
      
   }else{

      doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)

   }


   console.log(doc)

})