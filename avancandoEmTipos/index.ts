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




