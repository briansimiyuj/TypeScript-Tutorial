"use strict";
class User {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1;
        this.city = 'Nairobi';
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set getCourseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('Course number must be greater than 1');
        }
        this._courseCount = courseNumber;
    }
}
const brian = new User('brian@techfybiz.co.ke', 'Brian', 1234765);
brian.email = 'briansimiyuj@gmail.com';
