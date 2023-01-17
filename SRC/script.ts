class Invoice{

   client: string

   details: string

   amount: number


   constructor(client: string, details: string, amount: number){

      this.client = client
      
      this.details = details

      this.amount = amount

   }


   format(){

      return `${this.client} owes sh${this.amount} for ${this.details}`

   }

}



const invOne = new Invoice('Brian', 'App Development', 1000000)

const invTwo = new Invoice('Simiyu', 'System Development', 2500000)


let invoices: Invoice[] = []

invoices.push(invOne)

invoices.push(invTwo)

console.log(invoices)




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