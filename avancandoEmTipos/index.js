"use strict";
//method 1
const arrayNumbers = [1, 2, 3, 4, 5];
const arrayStrings = ["ola", "mundo", "type", "script"];
console.log(arrayNumbers);
console.log(arrayStrings);
//method 2
const anotherArrayOfNumbers = [1, 24, 5, 16, 12];
const anotherArrayOfStrings = ["ola", "mundo", "novamente"];
console.log(anotherArrayOfNumbers);
console.log(anotherArrayOfStrings);
//tipo any
const newArray = [1, "ola", true];
const newArrayAny = [4, "mundo", false];
console.log(newArray);
console.log(newArrayAny);
// parâmetros
const firstNumber = Math.round(Math.random() * 100);
const secondNumber = Math.round(Math.random() * 100);
const sumNumbers = (n1, n2) => {
    return n1 + n2;
};
console.log(sumNumbers(firstNumber, secondNumber));
//tipo de retorno
const randomName = "Malenia";
const randomMiddleName = "Blade of Mikala";
const matchStrings = (stringOne, stringTwo) => {
    return stringOne + stringTwo;
};
console.log(randomName, randomMiddleName);
// funções anonimas
setTimeout(() => {
    const salary = 3500;
    console.log(`meu salario é ${salary}`);
    return `${salary}`;
}, 2000);
// tipos de objetos
const objetPeople = {
    nome: "igor",
    idade: 23,
};
//ou
const newObjetPeople = { nome: "igor", idade: 23 };
// propriedades opcionais
const showNumbers = (a, b, c) => {
    console.log("A" + a);
    console.log("B" + b);
    if (c) {
        console.log("C" + c);
    }
};
showNumbers(1, 2);
showNumbers(1, 2, 3);
// review
// const testArrayNumbers: number[] = [1, 23, 6, 7];
// const testArrayStrings: string[] = ["teste", "teste2"];
// const testArrayAny: any[] = ["string", 1, true];
// const testArrayBoolean: boolean[] = [true, false, true];
// let oneOfAny: any = "teste";
// oneOfAny = 1;
// oneOfAny = true;
// const newFunction = (name: string, age: number): string => {
//   return `my name is ${name} and i have ${age} years`;
// };
// console.log(newFunction("igor", 23));
// const newFunctionTest = (name: string, age?: number): string => {
//   if (age) {
//     return `my name is ${name} and i have ${age} year`;
//   } else {
//     return `my name is ${name}`;
//   }
// };
// const myNameIs: string = "Igor de castro";
// const myAge: number = 23;
// console.log(newFunctionTest(myNameIs));
// console.log(newFunctionTest(myNameIs, myAge));
// validação de props opcionais
const advancedGreeting = (name, lastName) => {
    if (lastName !== undefined) {
        return `Ola ${name} ${lastName}`;
    }
    else {
        return `Olá ${name}`;
    }
};
console.log(advancedGreeting("matheus", "batistitt"));
console.log(advancedGreeting("matheus"));
// Union type
let stringOrNumber = "igor";
console.log(stringOrNumber);
stringOrNumber = 1;
console.log(stringOrNumber);
const arrayAllOptions = ["igor", 23, true];
// or
const otherArrayAllOptions = ["igor", 23, true];
// avançando em Union types --> verificando tipos
const functionWithMoreThanOneType = (type) => {
    if (typeof type === "string") {
        return `my type is a string`;
    }
    return `my type is a number`;
};
console.log(functionWithMoreThanOneType("Olá"));
console.log(functionWithMoreThanOneType(1));
const showId = (id) => {
    return `o ID é: ${id} e seu tipo ${typeof id}`;
};
console.log(showId("hsa1ln234"));
let userIsLoged = 0;
userIsLoged = true;
//referenciandoa  tipagem
const showCords = (obj) => {
    return `coordenadas  X: ${obj.x} Coordenadas Y: ${obj.y} Coordenadas Z: ${obj.z}`;
};
//referenciando a tipagem
const objetoTipado = { x: 20, y: 30, z: 50 };
console.log(showCords(objetoTipado));
//literal types
let test;
//não podemos alterar essa variavel, pois ela esta recebendo um tipo especifico(string) e tambem um valor especifico ('testando')
//nesse caso essa função só aceita string e essa string pode ser 3 valores
const showDirection = (direction) => {
    return `A direção escolhida foi ${direction}`;
};
console.log(showDirection("left"));
console.log(showDirection("right"));
console.log(showDirection("center"));
//revisando
const n = "igor";
const a = 23;
const t = true;
const nA = ["a", "b", "c"];
const aA = [1, 2, 3];
const tA = [true, false, true];
let allTheTypes = "hello";
allTheTypes = 1;
allTheTypes = true;
const person = { name: "maria", age: 20 };
const newPerson = { name: "maria", age: 23, hobbie: "chess" };
let personData;
let numberOneOnly;
//non-null assertion operators
const p = document.getElementById("some-p");
console.log(p?.innerText);
//bigint
let bigintTest;
bigintTest = 100n;
// symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB); //false
