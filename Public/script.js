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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({
    name: 'John Doe',
    age: 50
});
const docThree = {
    uid: 1,
    resourceName: 'user',
    data: { name: 'John Doe', age: 50 }
};
const docFour = {
    uid: 1,
    resourceName: 'Shopping List',
    data: ['Item 1', 'Item 2', 'Item 3']
};
console.log(docThree, docFour);
