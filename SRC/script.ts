import { Payment } from './classes/payments.js'

import { HasFormatter } from './interfaces/hasFormatter.js'


import { Invoice } from './classes/invoice.js'

import { ListTemplate } from './classes/lisTemplate.js'





const form = document.querySelector(".new-item-form") as HTMLFormElement,

   type = document.querySelector("#type") as HTMLSelectElement,

   toFrom = document.querySelector("#tofrom") as HTMLInputElement,

   details = document.querySelector("#details") as HTMLInputElement,

   amount = document.querySelector("#amount") as HTMLInputElement



// List Template Instance

const ul = document.querySelector("ul")!

const list = new ListTemplate(ul)



form.addEventListener("submit", (e: Event) =>{

   e.preventDefault()

   let values: [string, string, number]

   values = [toFrom.value, details.value, amount.valueAsNumber]



   let doc: HasFormatter

   if (type.value === "invoice"){

      doc = new Invoice(...values)
      
   }else{

      doc = new Payment(...values)

   }


   list.render(doc, type.value, 'end')

})
