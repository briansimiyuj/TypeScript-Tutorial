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






enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }



interface Resource<T> {


   uid: number

   resourceName: ResourceType

   data: T

}


const docTwo: Resource<object> ={

   uid: 1,

   resourceName: ResourceType.BOOK,

   data: {title: 'Name of the wind'}

}


const docThree: Resource<object> ={

   uid: 10,

   resourceName: ResourceType.AUTHOR,

   data: {name: 'Yoshi'}

}


console.log(docTwo, docThree)