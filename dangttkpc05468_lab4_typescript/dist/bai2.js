"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hello!");
        }
    };
    return Person;
}());
var user1;
user1 = new Person("Manu");
user1.greet("Hi there - I am");
console.log(user1);
