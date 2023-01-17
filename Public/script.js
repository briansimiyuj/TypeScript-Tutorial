import { Invoice } from './invoice.js';
const invOne = new Invoice('Brian', 'App Development', 1000000);
const invTwo = new Invoice('Simiyu', 'System Development', 2500000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const form = document.querySelector(".new-item-form"), type = document.querySelector("#type"), toFrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
