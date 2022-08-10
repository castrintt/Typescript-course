"use strict";
//                                  campos em calsse
class User {
}
const Igor = new User();
console.log(Igor);
Igor.name = "Igor";
Igor.age = 23;
console.log(Igor);
//                                   constructor
class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        (this.name = name), (this.age = age), (this.profession = profession);
    }
}
const Jao = new Person("Jaozin", 16, "programmer");
console.log(Jao);
class NewPerson {
    constructor(name, age, profession) {
        (this.name = name), (this.age = age), (this.profession = profession);
    }
}
const newJao = new Person("Jaozin", 16, "programmer");
console.log(newJao);
//                                  readonly
class Animal {
    constructor(name, pawns) {
        this.isAlive = true;
        this.name = name;
        this.pawns = pawns;
    }
}
const dog = new Animal("Robert", 5);
console.log(dog);
//                               herança
class Computer {
    constructor(on, ram, hd) {
        this.on = on;
        (this.ram = ram), (this.hd = hd);
    }
}
class MiniComputer extends Computer {
    constructor(on, ram, hd, pixels) {
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
    constructor(name, guns) {
        this.kill = () => {
            if (this.guns === 0) {
                return `out of guns`;
            }
            this.guns -= 1;
            return this.guns;
        };
        this.recharge = () => {
            this.guns = 20;
            return this.guns;
        };
        this.name = name;
        this.guns = guns;
    }
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
