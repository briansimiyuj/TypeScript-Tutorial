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


   let doc: HasFormatter

   if (type.value === "invoice"){

      doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
      
   }else{

      doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)

   }


   list.render(doc, type.value, 'end')

})




const addUID = <T extends {name: string}>(obj: T) => {

   let uid = Math.floor(Math.random() * 100)
   
   return {...obj, uid}
}


let docOne = addUID({

   name: 'John Doe',

   age: 50

})





interface Resource<T> {


   uid: number

   resourceName: string

   data: T

}


const docThree: Resource<object> ={

   uid: 1,

   resourceName: 'user',

   data: {name: 'John Doe', age: 50}
   

}


const docFour: Resource<string[]> ={

   uid: 1,

   resourceName: 'Shopping List',

   data: ['Item 1', 'Item 2', 'Item 3']

}


console.log(docThree, docFour)