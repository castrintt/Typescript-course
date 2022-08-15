"use strict";
// criando decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("iniciando decorator");
    return function (target, propertyKeys, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKeys);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
// multiplos decorators
function a() {
    return function (target, propertyKeys, descriptor) {
        console.log("executou A");
    };
}
function b() {
    return function (target, propertyKeys, descriptor) {
        console.log("executou B");
    };
}
class Multiple {
    testing() {
        console.log("terminando execução");
    }
}
__decorate([
    a(),
    b()
], Multiple.prototype, "testing", null);
const mul = new Multiple();
mul.testing();
// executou B
// executou A
// terminando execução
// class decorator
function classDecorator(constructor) {
    console.log(constructor);
    //constructor name === nome da classe
    if (constructor.name === "User") {
        console.log("Criando usuário");
    }
}
let User = class User {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const matheus = new User("Matheus");
console.log(matheus);
// decorator de metodo
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    showName() {
        console.log(this);
        return `o nome da maquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Killer machine");
console.log(trator.showName());
// accessor decorator
class Monster {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `o nome do monstro é ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = () => {
            return value;
        };
        const setter = (newValue) => {
            value = newValue.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    id;
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newId = new ID("1");
console.log(newId.id);
// exemplo real de class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const pen = new Pen(55);
console.log(newBook);
console.log(pen);
