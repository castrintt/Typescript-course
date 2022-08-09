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
//                        reduzindo tipos em generics
function showProductName(obj) {
    return `o retorno do produto é: ${obj.name}`;
}
const myObj = { name: "porta", cor: "branca" };
console.log(showProductName(myObj));
//                      interfaces com generics
//
