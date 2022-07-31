//number
var x = 10;
console.log(x);
var y = 124124.212;
//string
var text = "um texto aqui";
console.log(typeof text);
console.log(text);
text = "texto alterado";
console.log(text.toUpperCase());
//boolean
var itsTrue = true;
var itsFalse = false;
var whatItIs;
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
        console.log('é falso');
    }
}
verifyType(itsTrue);
verifyType(itsFalse);
