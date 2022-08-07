"use strict";
// review
//                               primitive types
const str = "tipo string";
const nmb = 1;
const bool = true;
//                          inference and annotation
// inf
const oneString = "ola";
// ann
const otherString = "ola";
//                                 other types
//arrays
const arr = ["um", "array"];
//or
const arrr = ["um", "array tambem"];
const myType = 1;
const myOtherType = "hello";
const usingAliasType = ["igor", "beliria", "abelardo", "isabela"];
const myInterfaceObject = { name: "igor", age: 23 };
//                          alias vs interface
// alias can't make changes, interface can. Interface work only for object types and alias work for all of the types
//                             literal types
// you can type and specify the value at the same time
let literalType;
const useArrayType = [1];
const useArrayTypeAgain = [1, "ok"];
//                              symbol
//create a unique value
let doSomething = Symbol("ola");
let doAnotherSomething = Symbol("ola");
console.log(doSomething === doAnotherSomething); // false
//                              generic
// is similar to any type, but now we are expecting some value
function genericThing(data) {
    return data;
}
genericThing(1);
genericThing(false);
genericThing("string");
//                                 constraints
function otherGenericValue(a, b) {
    let values;
    if (+a > +b) {
        values = a;
    }
    else {
        values = b;
    }
    return values;
}
otherGenericValue(1, 2);
otherGenericValue(2, 1);
