"use strict";
class User {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this.city = '';
    }
}
const brian = new User('brian@techfybiz.co.ke', 'Brian', 1234765);
brian.email = 'briansimiyuj@gmail.com';
