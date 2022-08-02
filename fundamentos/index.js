"use strict";
//number
let x = 10;
console.log(x);
const y = 124124.212;
//string
let text = "um texto aqui";
console.log(typeof text);
console.log(text);
text = "texto alterado";
console.log(text.toUpperCase());
//boolean
const itsTrue = true;
const itsFalse = false;
let whatItIs;
console.log(typeof itsTrue);
console.log(itsTrue);
console.log(typeof itsFalse);
console.log(itsTrue);
whatItIs = false;
whatItIs = true;
function verifyType(type) {
    if (type) {
        console.log("é verdadeiro o valor!");
    }
    else {
        console.log("é falso");
    }
}
verifyType(itsTrue);
verifyType(itsFalse);
//annotation and inference
//annotation
const ann = "olá tudo bem?";
//inference
let inf = "teste";
const myName = "Igor";
console.log(`my name is ${myName}`);
const newNumber = 1;
const convertNumber = newNumber.toString();
const newString = `o numero convertido é ${convertNumber}`;
console.log(newString);
