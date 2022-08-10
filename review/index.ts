// review

//                               primitive types

const str: string = "tipo string";

const nmb: number = 1;

const bool: boolean = true;

//                          inference and annotation

// inf
const oneString = "ola";
// ann
const otherString: string = "ola";

//                                 other types

//arrays

const arr: Array<string> = ["um", "array"];
//or
const arrr: string[] = ["um", "array tambem"];
// this work for every type --> number, string, boolean, any, unknown, ever, object, return type

//                                    Union types

//receives the first type OR the second
type twoTypes = string | number;

const myType: twoTypes = 1;
const myOtherType: twoTypes = "hello";

//                       type alias

type myAliasType = number | string | Array<string> | Array<number>;

const usingAliasType: myAliasType = ["igor", "beliria", "abelardo", "isabela"];

//                      interface

interface something {
  name: string;
  age: number;
}

const myInterfaceObject: something = { name: "igor", age: 23 };

//                          alias vs interface

// alias can't make changes, interface can. Interface work only for object types and alias work for all of the types

//                             literal types

// you can type and specify the value at the same time

let literalType: "igor";
//my variable only can have the value 'igor', and the type string

//                         non-null assertion operator

// ? --> use this signal to affirm that variable state is optional

type arrayType = [number, string?];

const useArrayType: arrayType = [1];
const useArrayTypeAgain: arrayType = [1, "ok"];

//                              symbol

//create a unique value

let doSomething = Symbol("ola");
let doAnotherSomething = Symbol("ola");

console.log(doSomething === doAnotherSomething); // false

//                              generic

// is similar to any type, but now we are expecting some value

function genericThing<T>(data: T): T {
  return data;
}

genericThing(1);
genericThing(false);
genericThing("string");

//                                 constraints

function otherGenericValue<T extends string | number>(a: T, b: T): T {
  let values: T;
  if (+a > +b) {
    values = a;
  } else {
    values = b;
  }
  return values;
}

otherGenericValue(1, 2);
otherGenericValue(2, 1);

//                                unknown

const returnSomeValue = (x: unknown): unknown => {
  if (typeof x === "string") {
    return `é uma string`;
  } else if (typeof x === "number") {
    return x ** x;
  } else if (typeof x === "boolean") {
    return true;
  }
};

console.log(returnSomeValue("ola"));
console.log(returnSomeValue(4));
console.log(returnSomeValue(false));

//                              never / void

// ambos não retornando nada, tipo void não retorna nada, é só uma função que faz alguma coisa ou executa uma rotina

//never retorna algo que nunca vai acontecer

const erroMessage = (err: string): never => {
  throw Error(`error message: ${err}`);
};

//                              rest operator

const arrSomething = (...nums: number[]): number[] => {
  return [...nums];
};

console.log(arrSomething(1, 2, 4, 5, 6, 6, 7, 8, 9, 0));

//                             destructuring

interface Person {
  name: string;
  age: number;
}

const destructuringSomething = (obj: Person): void => {
  console.log(obj.name);
  console.log(obj.age);
};

const myObject: Person = { name: "igor", age: 23 };

destructuringSomething(myObject);

// review creation types

