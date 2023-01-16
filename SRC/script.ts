// const form = document.querySelector("form")!

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