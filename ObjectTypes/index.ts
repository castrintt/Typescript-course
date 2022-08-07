// interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

const showProductBasicInformation = (product: Product): string => {
  return `The product name is ${product.name} his price is ${
    product.price
  } and ${product.isAvailable ? "still available" : "it is not available"}`;
};

const newShirt: Product = {
  name: "Beavis and ButtHead blue shirt",
  price: 14.99,
  isAvailable: true,
};
const newClothe: Product = {
  name: "Beavis and ButtHead blue clothe",
  price: 30.99,
  isAvailable: false,
};

console.log(showProductBasicInformation(newShirt));
console.log(showProductBasicInformation(newClothe));

// interface with optional params

interface Person {
  name: string;
  age: number;
  sex?: string;
}

const showPersonDataInformation = (personalData: Person): string => {
  if (personalData.sex) {
    let condition = personalData.sex === "masculino" ? "His" : "Her";
    return `${condition} name is ${personalData.name} and ${condition} is ${personalData.age} years old`;
  } else {
    return `Your name is ${personalData.name} and you is ${personalData.age} years old`;
  }
};

const maria: Person = {
  name: "Maria",
  age: 20,
  sex: "feminino",
};
const isabela: Person = {
  name: "isabela",
  age: 17,
};
const igor: Person = {
  name: "Igor",
  age: 23,
  sex: "masculino",
};

console.log(showPersonDataInformation(maria));
console.log(showPersonDataInformation(isabela));
console.log(showPersonDataInformation(igor));

// readonly

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "Fusca",
  wheels: 4,
};

//podemos alterar o valor da propriedade brand do objeto fusca
fusca.brand = "Ferrari";

//porem não podemos alterar o valor da propriedade wheels do objeto fusca (pois é readonly)
// fusca.wheels = 2;

// index signature

interface CoordObject {
  [index: string]: number;
}

// explicando a sintaxe

// [index:string] --> determina que a chave recebida vai ser uma string, e seu valor um number

let coords: CoordObject = {
  x: 10,
};

coords.y = 20; // assim podemos adicionar propriedades novas tbm, respeitando a tipagem definida na interface

console.log(coords);

interface NewCoords {
  [index: number]: number;
}

// nesse caso [index: number] --> nesse caso estou dizendo para o typescript que a chave que eu vou receber como index, signature sera um number, e o valor dessa chave tbm será um number

let newCoords: NewCoords = {
  10: 10,
};

newCoords[20] = 20;

console.log(newCoords);

// extending types

interface Animal {
  type: string;
  pawns: number;
}

//Insects herda de Animal, ou seja, as propriedades declaradas em Animal são herdadas para insects, logo todo objeto instanciado usando a interface Insects deve conter {type,pawns e shell}, sendo type e pawns propriedades da interface Animal e shell da interface Insects
interface Insects extends Animal {
  shell: boolean;
}

const dog: Animal = {
  type: "Dog",
  pawns: 4,
};

const butterfly: Insects = {
  type: "ButterFly",
  pawns: 0,
  shell: true,
};

// intersection types

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const intersection: HumanWithGun = {
  name: "Castro",
  type: "Pistol Magnum",
  caliber: 44,
};



// readonly array

