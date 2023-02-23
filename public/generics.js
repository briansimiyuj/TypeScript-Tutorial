"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree('Hello');
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: 'CocaCola', type: 'Fanta' });
function getSearchProducts(products) {
    // Do some database queries
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // Do some database queries
    const myIndex = 4;
    return products[myIndex];
};
