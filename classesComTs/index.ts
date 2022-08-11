//                                  campos em calsse

class User {
  name!: string;
  age!: number;
}

const Igor = new User();
console.log(Igor);
Igor.name = "Igor";
Igor.age = 23;
console.log(Igor);

//                                   constructor

class Person {
  constructor(
    public name: string,
    public age: number,
    public profession: string
  ) {
    (this.name = name), (this.age = age), (this.profession = profession);
  }
}

const Jao = new Person("Jaozin", 16, "programmer");

console.log(Jao);

class NewPerson {
  name;
  age;
  profession;
  constructor(name: string, age: number, profession: string) {
    (this.name = name), (this.age = age), (this.profession = profession);
  }
}

const newJao = new Person("Jaozin", 16, "programmer");

console.log(newJao);

//                                  readonly

class Animal {
  name;
  readonly isAlive: boolean = true;
  pawns;
  constructor(name: string, pawns: number) {
    this.name = name;
    this.pawns = pawns;
  }
}

const dog = new Animal("Robert", 5);

console.log(dog);

//                               herança

class Computer {
  on;
  ram;
  hd;
  constructor(on: boolean, ram: number, hd: number) {
    this.on = on;
    (this.ram = ram), (this.hd = hd);
  }
}

class MiniComputer extends Computer {
  pixels;
  constructor(on: boolean, ram: number, hd: number, pixels: string) {
    super(on, ram, hd);
    this.pixels = pixels;
  }
}

const myComputer = new Computer(true, 64, 1000);

console.log(myComputer);

const myMiniComputer = new MiniComputer(false, 8, 120, "20pixels");

console.log(myMiniComputer);

//                      metodos

class KillerMachine {
  name;
  guns;
  constructor(name: string, guns: number) {
    this.name = name;
    this.guns = guns;
  }

  kill = (): number | string => {
    if (this.guns === 0) {
      return `out of guns`;
    }
    this.guns -= 1;
    return this.guns;
  };

  recharge = (): number => {
    this.guns = 20;
    return this.guns;
  };
}

const destroyer = new KillerMachine("Destroyer", 5);

console.log(destroyer);

console.log(destroyer.kill());
console.log(destroyer.kill());
console.log(destroyer.kill());
console.log(destroyer.kill());
console.log(destroyer.kill());
console.log(destroyer.kill());

console.log(destroyer.recharge());

console.log(destroyer.kill());
console.log(destroyer.kill());
console.log(destroyer.kill());
console.log(destroyer.kill());

//                              o this

class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`
    );
  }
}

const myTruck = new Truck("Scania", 4000);

myTruck.showDetails();

//                                    Getters

class Character {
  __name;
  __power;

  constructor(name: string, power: number) {
    this.__name = name;
    this.__power = power;
  }

  get name(): string {
    return `My name is ${this.__name}`;
  }

  set CharacterName(otherName: string) {
    this.__name = otherName;
  }
}

const geralt = new Character("Geralt de Rivia", 100);

console.log(geralt.name);

geralt.CharacterName = "Igor de RiverWood";

console.log(geralt.name);

//                          setters

class Coords {
  __x!: number;
  __y!: number;

  get showX() {
    return this.__x;
  }
  get showY() {
    return this.__y;
  }

  set setX(newX: number) {
    this.__x = newX;
  }
  set setY(newY: number) {
    this.__y = newY;
  }
}

const coordenadas = new Coords();
coordenadas.setX = 30;
coordenadas.setY = 40;

console.log(coordenadas.showX);
console.log(coordenadas.showY);

//                        herança de interfaces

interface showTitle {
  itemTitle(): string;
}

class BlogPost implements showTitle {
  title;
  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return `o titulo do post é ${this.title}`;
  }
}

const newPost = new BlogPost("aprendendo typescript");

console.log(newPost.itemTitle());

//                                override

class Base {
  someMethod(): void {
    console.log("alguma coisa");
  }
}

class Nova extends Base {
  someMethod(): void {
    console.log("alterado");
  }
}

const myNewObject = new Base();
const myObject = new Nova();

myNewObject.someMethod();
myObject.someMethod();

//                        visibilidade

// public, protected  e private

//public

class Food {
  constructor(public meat: string, public drink: string) {
    this.meat = meat;
    this.drink = drink;
  }
}

class SubClassFood extends Food {
  constructor(public meat: string, public drink: string) {
    super(meat, drink);
  }
}

const meal = new Food("Carne", "Água");
const newMeal = new SubClassFood("Carne", "Refri");

console.log(meal);
console.log(newMeal);

// protected

class E {
  protected x = 10;
  protected someMethod() {
    console.log(
      "esse metodo é protegido! só pode ser acessado por outro metodo"
    );
  }
}

class F extends E {
  get showX(): number {
    return this.x;
  }

  get showProtectedMethod() {
    return this.someMethod();
  }

  set changeX(newX: number) {
    this.x = newX;
  }
}

const fInstance = new F();

console.log(fInstance.showX); //somente com um metodo (nesse caso um get que podemos acessar as o valor da classe)

fInstance.changeX = 40; // só podemos alterar a propriedade por meio de um metodo tbm (nesse caso um setter)

console.log(fInstance.showX);
fInstance.showProtectedMethod;
