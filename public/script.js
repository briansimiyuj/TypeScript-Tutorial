"use strict";
function calculateTax(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
