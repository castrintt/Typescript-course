"use strict";
// interface
const showProductBasicInformation = (product) => {
    return `The product name is ${product.name} his price is ${product.price} and ${product.isAvailable ? "still available" : "it is not available"}`;
};
const newShirt = {
    name: "Beavis and ButtHead blue shirt",
    price: 14.99,
    isAvailable: true,
};
const newClothe = {
    name: "Beavis and ButtHead blue clothe",
    price: 30.99,
    isAvailable: false,
};
console.log(showProductBasicInformation(newShirt));
console.log(showProductBasicInformation(newClothe));
const showPersonDataInformation = (personalData) => {
    if (personalData.sex) {
        let condition = personalData.sex === "masculino" ? "His" : "Her";
        return `${condition} name is ${personalData.name} and ${condition} is ${personalData.age} years old`;
    }
    else {
        return `Your name is ${personalData.name} and you is ${personalData.age} years old`;
    }
};
const maria = {
    name: "Maria",
    age: 20,
    sex: "feminino",
};
const isabela = {
    name: "isabela",
    age: 17,
};
const igor = {
    name: "Igor",
    age: 23,
    sex: "masculino",
};
console.log(showPersonDataInformation(maria));
console.log(showPersonDataInformation(isabela));
console.log(showPersonDataInformation(igor));
const fusca = {
    brand: "Fusca",
    wheels: 4,
};
//podemos alterar o valor da propriedade brand do objeto fusca
fusca.brand = "Ferrari";
// explicando a sintaxe
// [index:string] --> determina que a chave recebida vai ser uma string, e seu valor um number
let coords = {
    x: 10,
};
coords.y = 20; // assim podemos adicionar propriedades novas tbm, respeitando a tipagem definida na interface
console.log(coords);
// nesse caso [index: number] --> nesse caso estou dizendo para o typescript que a chave que eu vou receber como index, signature sera um number, e o valor dessa chave tbm será um number
let newCoords = {
    10: 10,
};
newCoords[20] = 20;
console.log(newCoords);
const dog = {
    type: "Dog",
    pawns: 4,
};
const butterfly = {
    type: "ButterFly",
    pawns: 0,
    shell: true,
};
