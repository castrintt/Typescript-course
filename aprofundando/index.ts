// void

const newFunction = (): void => {
  console.log("função sem retorno!");
};

newFunction();

// callback

const greeting = (name: string): string => {
  return `ola ${name}`;
};

const preGreeting = (
  myFunction: (name: string) => string,
  userName: string
): void => {
  console.log("preparando a função");

  const greet = myFunction(userName);

  console.log(greet);
};

preGreeting(greeting, "Igor de castro");

//generic function

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement(["igor", "matheus", "castro", "ribas"]));
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement([true, false]));
console.log(
  firstElement([
    { name: "igor", age: 23 },
    { name: "maria", age: 20 },
  ])
);

// constraints

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}

console.log(biggestNumber(1, 2));
console.log(biggestNumber("12", "14"));

//especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3, 4], [1, 4, 5, 56]));
console.log(mergeArrays<number | string>([1, 2, 3, 4], ["teste", "testando"]));

// parametros opcionais

const newTest = (name: string, age?: number) => {
  if (age) {
    console.log(`my name is ${name} and i am ${age} years`);
  } else {
    console.log("my name is ${name}");
  }
};

newTest("igor", 23);
newTest("maria", 20);

// parametro default

const testing = (name: string, age: number = 23) => {
  console.log(`my name is ${name} and i am ${age}`);
};

testing("igor");

type userData = {
  id: number;
  name: string;
  email: string;
  address: string[];
};

const novo: userData[] = [
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

function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log(x ** 2);
  } else if (typeof x === "string") {
    console.log(x);
  }
}

doSomething(3);
doSomething("ola");
doSomething([1, 2, 4, 5, 6, 7]);

// never

function showErrorMessage(msg: string): never {
  throw new Error(msg);
}
