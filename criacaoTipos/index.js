"use strict";
//                                             review generics
function showData(arg) {
    return `o dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
let data = [
    {
        color: true,
        name: "blue",
    },
    {
        color: true,
        name: "red",
    },
    {
        color: false,
    },
];
console.log(data);
const filterData = data.map((values) => {
    if (values.color === false) {
        return Object.assign(Object.assign({}, values), { color: true, name: "yellow" });
    }
    return values;
});
console.log(filterData);
//                                 reduzindo tipos em generics
function showProductName(obj) {
    return `o retorno do produto é: ${obj.name}`;
}
const myObj = { name: "porta", cor: "branca" };
console.log(showProductName(myObj));
const myCar = { name: "fusca", wheel: 4, engine: 2.0 };
const myPen = { name: "caneta", wheel: false, engine: false };
const myNewPen = {
    name: "caneta",
    wheel: false,
    engine: false,
    color: "blue",
};
console.log(myCar);
console.log(myPen);
console.log(myNewPen);
//                                    type parameters
// usamos o extends keyof para indicar q o K é uma key (chave) que pertence ao generic T
// preciso de K dentro de T, caso contrario é invalido
function getSomeKey(obj, key) {
    return `a chave ${String(key)} esta presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TP",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram")); ///a chave ram esta presente no objeto e tem o valor de 32GB
const showCharacterName = (obj, name) => {
    return `name ${name} should be igual to ${obj[name]}`;
};
const newCharacter = {
    name: "igor",
    age: 23,
    hasDriveLicense: false,
};
console.log(showCharacterName(newCharacter, "hasDriveLicense"));
//                            typeof type operator
const userName = "matheus";
const newUserName = "igor";
const createUser = "Deus";
// indexed access types é bem parecido com keyof, porem indexed access types é mais especifico, ja o keyof diz q a tipagem deve ser igual a qualquer uma das chaves
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "caminhão para pouca carga",
};
function showKm(km) {
    return `o veiculo tem o km de ${km}`;
}
console.log(showKm(newTruck.km)); ///o veiculo tem o km de 10000
const someVar = 5;
const myssType = "some text";
const mySjTypes = "testando";
const mySjTypes2 = "unimos";
