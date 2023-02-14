function getDBid(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else {
        id - 2;
    }
}
getDBid(7);
getDBid('7');
