"use strict";
// narrowing
// type guard
const sum = (a, b) => {
    if (typeof a === "string" && typeof b === "string") {
        return parseFloat(a) + parseFloat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return `tipos de dados diferentes!`;
    }
};
console.log(sum(1, 2)); // 3
console.log(sum("1", "2")); // 3
console.log(sum(1, "2")); // 3 tipos de dados diferentes
//checando se o valor existe
const whatOperation = (arr, operation) => {
    if (operation) {
        if (operation === 1) {
            const sum = arr.reduce((prev, actual) => {
                return prev + actual;
            });
            return `a soma de todos os valores é ${sum}`;
        }
        else if (operation === 2) {
            const mult = arr.reduce((prev, actual) => {
                return prev * actual;
            });
            return `a multiplicação é ${mult}`;
        }
    }
};
console.log(whatOperation([1, 2, 4, 56, 6, 88])); // undefined
console.log(whatOperation([1, 2, 4, 56, 6, 88], 1)); // 157
console.log(whatOperation([1, 2, 4, 56, 6, 88], 2)); // 236544
//instance Of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
const userGreeting = (user) => {
    if (user instanceof SuperUser) {
        return `super!`;
    }
    else if (user instanceof User) {
        return `comum`;
    }
};
console.log(userGreeting(jhon));
console.log(userGreeting(paul));
//operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("bob", "pastor alemão");
const verifyIfExistBreed = (dog) => {
    if ("breed" in dog) {
        return `${dog.breed}`;
    }
    else {
        return `vira lata`;
    }
};
console.log(verifyIfExistBreed(turca));
console.log(verifyIfExistBreed(bob));
