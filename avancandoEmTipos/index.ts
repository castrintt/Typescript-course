//method 1
const arrayNumbers: number[] = [1, 2, 3, 4, 5];
const arrayStrings: string[] = ["ola", "mundo", "type", "script"];

console.log(arrayNumbers);
console.log(arrayStrings);

//method 2
const anotherArrayOfNumbers: Array<number> = [1, 24, 5, 16, 12];
const anotherArrayOfStrings: Array<string> = ["ola", "mundo", "novamente"];

console.log(anotherArrayOfNumbers);
console.log(anotherArrayOfStrings);

//tipo any

const newArray: any[] = [1, "ola", true];
const newArrayAny: Array<any> = [4, "mundo", false];

console.log(newArray);
console.log(newArrayAny);

// parâmetros

const firstNumber: number = Math.round(Math.random() * 100);

const secondNumber: number = Math.round(Math.random() * 100);

const sumNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(sumNumbers(firstNumber, secondNumber));

//tipo de retorno

const randomName: string = "Malenia";
const randomMiddleName: string = "Blade of Mikala";
const matchStrings = (stringOne: string, stringTwo: string): string => {
  return stringOne + stringTwo;
};

console.log(randomName, randomMiddleName);

// funções anonimas

setTimeout((): string => {
  const salary: number = 3500;
  console.log(`meu salario é ${salary}`);
  return `${salary}`;
}, 2000);

// tipos de objetos

const objetPeople: { nome: string; idade: number } = {
  nome: "igor",
  idade: 23,
};

//ou

const newObjetPeople = { nome: "igor", idade: 23 };

// propriedades opcionais

const showNumbers = (a: number, b: number, c?: number) => {
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

const advancedGreeting = (name: string, lastName?: string): string => {
  if (lastName !== undefined) {
    return `Ola ${name} ${lastName}`;
  } else {
    return `Olá ${name}`;
  }
};

console.log(advancedGreeting("matheus", "batistitt"));
console.log(advancedGreeting("matheus"));

// Union type

let stringOrNumber: string | number = "igor";

console.log(stringOrNumber);

stringOrNumber = 1;

console.log(stringOrNumber);

const arrayAllOptions: Array<number | string | boolean> = ["igor", 23, true];
// or
const otherArrayAllOptions: (number | string | boolean)[] = ["igor", 23, true];

// avançando em Union types --> verificando tipos

const functionWithMoreThanOneType = (type: number | string): string => {
  if (typeof type === "string") {
    return `my type is a string`;
  }
  return `my type is a number`;
};

console.log(functionWithMoreThanOneType("Olá"));
console.log(functionWithMoreThanOneType(1));

// type alias

type ID = string | number;

const showId = (id: ID) => {
  return `o ID é: ${id} e seu tipo ${typeof id}`;
};

console.log(showId("hsa1ln234"));

type LOG = boolean | number;

let userIsLoged: LOG = 0;

userIsLoged = true;

// interfaces

//tipando
interface Point {
  x: number;
  y: number;
  z: number;
}

//referenciandoa  tipagem
const showCords = (obj: Point): string => {
  return `coordenadas  X: ${obj.x} Coordenadas Y: ${obj.y} Coordenadas Z: ${obj.z}`;
};
//referenciando a tipagem
const objetoTipado: Point = { x: 20, y: 30, z: 50 };

console.log(showCords(objetoTipado));

//alias vs interface

//alias --> imutavel
// interface --> mutavel

//logo

type newObjectAlias = {
  name: string;
  age: number;
};

//parece um let, só declarar de novo e alterar a estrutura
interface newObjectInterface {
  name: string;
  age: number;
}

interface newObjectInterface {
  lastName: string;
  motherName: string;
}

//literal types

let test: "testando";
//não podemos alterar essa variavel, pois ela esta recebendo um tipo especifico(string) e tambem um valor especifico ('testando')

//nesse caso essa função só aceita string e essa string pode ser 3 valores
const showDirection = (direction: "left" | "right" | "center"): string => {
  return `A direção escolhida foi ${direction}`;
};

console.log(showDirection("left"));
console.log(showDirection("right"));
console.log(showDirection("center"));
