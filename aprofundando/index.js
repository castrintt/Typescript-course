"use strict";
// void
const newFunction = () => {
    console.log("função sem retorno!");
};
newFunction();
// callback
const greeting = (name) => {
    return `ola ${name}`;
};
const preGreeting = (myFunction, userName) => {
    console.log("preparando a função");
    const greet = myFunction(userName);
    console.log(greet);
};
preGreeting(greeting, "Igor de castro");
//generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(["igor", "matheus", "castro", "ribas"]));
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement([true, false]));
console.log(firstElement([
    { name: "igor", age: 23 },
    { name: "maria", age: 20 },
]));
// constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(1, 2));
console.log(biggestNumber("12", "14"));
//especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3, 4], [1, 4, 5, 56]));
console.log(mergeArrays([1, 2, 3, 4], ["teste", "testando"]));
// parametros opcionais
const newTest = (name, age) => {
    if (age) {
        console.log(`my name is ${name} and i am ${age} years`);
    }
    else {
        console.log("my name is ${name}");
    }
};
newTest("igor", 23);
newTest("maria", 20);
// parametro default
const testing = (name, age = 23) => {
    console.log(`my name is ${name} and i am ${age}`);
};
testing("igor");
const novo = [
    {
        id: 1,
        name: "igor",
        email: "igordc38@gmail.com",
        address: ["casa", "apartamento"],
    },
    {
        id: 2,
        name: "igor",
        email: "igordc38@gmail.com",
        address: ["casa", "apartamento"],
    },
    {
        id: 3,
        name: "igor",
        email: "igordc38@gmail.com",
        address: ["casa", "apartamento"],
    },
];
console.log(novo);
//tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(x ** 2);
    }
    else if (typeof x === "string") {
        console.log(x);
    }
}
doSomething(3);
doSomething("ola");
doSomething([1, 2, 4, 5, 6, 7]);
// never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//rest operator
function sumAll(...nums) {
    return nums.reduce((num, sum) => {
        return num + sum;
    });
}
console.log(sumAll(1, 2, 4, 5, 6, 7, 8));
// destructuring
const showProductDetails = (obj) => {
    return `O nome do produto é ${obj.name} e ele custa ${obj.price}`;
};
const shirt = { name: "t-shirt", price: 49.2 };
console.log(showProductDetails(shirt));
