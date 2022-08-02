//number
let x: number = 10;

console.log(x);

const y: number = 124124.212;

//string

let text: string = "um texto aqui";

console.log(typeof text);
console.log(text);

text = "texto alterado";

console.log(text.toUpperCase());

//boolean

const itsTrue: boolean = true;
const itsFalse: boolean = false;

let whatItIs: boolean;

console.log(typeof itsTrue);
console.log(itsTrue);

console.log(typeof itsFalse);
console.log(itsTrue);

whatItIs = false;

whatItIs = true;

function verifyType(type: boolean) {
  if (type) {
    console.log("é verdadeiro o valor!");
  } else {
    console.log("é falso");
  }
}
verifyType(itsTrue);
verifyType(itsFalse);

//annotation and inference

//annotation

const ann: string = "olá tudo bem?";

//inference

let inf = "teste";

const myName: string = "Igor";

console.log(`my name is ${myName}`);

const newNumber: number = 1;

const convertNumber: string = newNumber.toString();

const newString: string = `o numero convertido é ${convertNumber}`;

console.log(newString);
