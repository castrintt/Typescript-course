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
