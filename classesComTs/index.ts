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
