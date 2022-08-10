//                                             review generics

function showData<T>(arg: T): string {
  return `o dado é ${arg}`;
}

console.log(showData(5));
console.log(showData("testando generic"));

//                              review alterando dados dentro de um array de objetos

interface colors {
  color: boolean;
  name?: string;
}

type specific = number[] | string[] | boolean[] | object[];

let data: Array<colors> = [
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

const filterData: specific = data.map((values) => {
  if (values.color === false) {
    return {
      ...values,
      color: true,
      name: "yellow",
    };
  }
  return values;
});

console.log(filterData);

//                                 reduzindo tipos em generics

function showProductName<T extends { name: string }>(obj: T) {
  return `o retorno do produto é: ${obj.name}`;
}

const myObj = { name: "porta", cor: "branca" };

console.log(showProductName(myObj));

//                                  interfaces com generics

interface MyObject<T> {
  name: string;
  wheel: T;
  engine: T;
  color?: string;
}

type Car = MyObject<number>;

type Pen = MyObject<boolean>;

const myCar: Car = { name: "fusca", wheel: 4, engine: 2.0 };
const myPen: Pen = { name: "caneta", wheel: false, engine: false };
const myNewPen: Pen = {
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
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `a chave ${String(key)} esta presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: "2TP",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram")); ///a chave ram esta presente no objeto e tem o valor de 32GB

//                      keyof type operator

type Character = { name: string; age: number; hasDriveLicense: boolean };

// dessa forma consigo fazer com que uma das chaves do alias Character seja passada como argumento de uma função, pois ele recebe as keys de Character e Character é um objeto
type C = keyof Character;

const showCharacterName = (obj: Character, name: C): string => {
  return `name ${name} should be igual to ${obj[name]}`;
};

const newCharacter: Character = {
  name: "igor",
  age: 23,
  hasDriveLicense: false,
};

console.log(showCharacterName(newCharacter, "hasDriveLicense"));

//                            typeof type operator

const userName: string = "matheus";

const newUserName: typeof userName = "igor";

type x = typeof userName;

const createUser: x = "Deus";

//                          indexed Access types

type Truck = { km: number; kg: number; description: string };

type Km = Truck["km"];

// indexed access types é bem parecido com keyof, porem indexed access types é mais especifico, ja o keyof diz q a tipagem deve ser igual a qualquer uma das chaves

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "caminhão para pouca carga",
};

function showKm(km: Km) {
  return `o veiculo tem o km de ${km}`;
}

console.log(showKm(newTruck.km)); ///o veiculo tem o km de 10000

//              conditional expressions type

interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

const someVar: myType = 5;

//              template literals type

type testA = "text"; // dessa forma esse alias recebe uma string com o valor de text, tudo que for tipado com o type testA deve receber uma string com valor text

type customType = `some ${testA}`;

const myssType: customType = "some text";

type a1 = "testando";
type a2 = "unimos";
type a3 = a1 | a2;

const mySjTypes: a3 = "testando";
const mySjTypes2: a3 = "unimos";
