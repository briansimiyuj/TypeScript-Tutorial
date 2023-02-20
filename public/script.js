"use strict";
class User {
    constructor(email, name) {
        this.city = '';
        this.email = email;
        this.name = name;
        this.city = 'Nairobi';
    }
}
const brian = new User('brian@techfybiz.co.ke', 'Brian');
brian.city = 'Mombasa';
