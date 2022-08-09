//                                             review generics

function showData<T>(arg: T): string {
  return `o dado é ${arg}`;
}

console.log(showData(5));
console.log(showData("testando generic"));

// review alterando dados dentro de um array de objetos

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


//                        reduzindo tipos em generics


function showProductName<T extends {name:string}>(obj: T) {
  return `o retorno do produto é: ${obj.name}`;
}

const myObj = { name: "porta", cor: "branca" };

console.log(showProductName(myObj));



//                      interfaces com generics

//