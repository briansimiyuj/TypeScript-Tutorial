"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLocaleLowerCase;
    }
    return val + 4;
}
function provideID(ID) {
    if (!ID) {
        console.log('Please provide a valid ID');
        return;
    }
    ID.toLocaleLowerCase();
}
