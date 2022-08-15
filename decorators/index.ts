// criando decorator

function myDecorator() {
  console.log("iniciando decorator");

  return function (
    target: any,
    propertyKeys: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertyKeys);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  public testing() {
    console.log("terminando execução do método");
  }
}

const myObj = new MyClass();

myObj.testing();

// multiplos decorators

function a() {
  return function (
    target: any,
    propertyKeys: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou A");
  };
}
function b() {
  return function (
    target: any,
    propertyKeys: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou B");
  };
}

class Multiple {
  @a()
  @b()
  testing() {
    console.log("terminando execução");
  }
}

const mul = new Multiple();

mul.testing();

// executou B
// executou A
// terminando execução

// class decorator

function classDecorator(constructor: Function) {
  console.log(constructor);
  //constructor name === nome da classe
  if (constructor.name === "User") {
    console.log("Criando usuário");
  }
}

@classDecorator
class User {
  constructor(public name: string) {
    this.name = name;
  }
}

const matheus = new User("Matheus");

console.log(matheus);

// decorator de metodo

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  constructor(public name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName(): string {
    console.log(this);
    return `o nome da maquina é ${this.name}`;
  }
}

const trator = new Machine("Killer machine");

console.log(trator.showName());

// accessor decorator

class Monster {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  @enumerable(true)
  get showName(): string {
    return `o nome do monstro é ${this.name}`;
  }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander);

// property decorator

function formatNumber() {
  return function (target: any, propertyKey: string) {
    let value: string;
    const getter = () => {
      return value;
    };
    const setter = (newValue: string) => {
      value = newValue.padStart(5, "0");
    };
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;
  constructor(id: string) {
    this.id = id;
  }
}

const newId = new ID("1");

console.log(newId.id);

// exemplo real de class decorator

function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}
@createdDate
class Pen {
  id;
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const pen = new Pen(55);

console.log(newBook);
console.log(pen);
