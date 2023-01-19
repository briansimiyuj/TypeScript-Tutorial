import { Payment } from './classes/payments.js';
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/lisTemplate.js';
const form = document.querySelector(".new-item-form"), type = document.querySelector("#type"), toFrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount");
// List Template Instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
let arr = ['Derick', 40, true];
arr[0] = false;
arr[1] = 'Arnold';
arr[2] = 32;
let tup = ['Derick', 40, true]; // Types positions are fixed
/* tup[0] = false // Won't work because tup[0] must be a string */
let student;
student = ['Abigael', 1523378];
