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
//                              o this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}
const myTruck = new Truck("Scania", 4000);
myTruck.showDetails();
//                                    Getters
class Character {
    constructor(name, power) {
        this.__name = name;
        this.__power = power;
    }
    get name() {
        return `My name is ${this.__name}`;
    }
    set CharacterName(otherName) {
        this.__name = otherName;
    }
}
const geralt = new Character("Geralt de Rivia", 100);
console.log(geralt.name);
geralt.CharacterName = "Igor de RiverWood";
console.log(geralt.name);
//                          setters
class Coords {
    get showX() {
        return this.__x;
    }
    get showY() {
        return this.__y;
    }
    set setX(newX) {
        this.__x = newX;
    }
    set setY(newY) {
        this.__y = newY;
    }
}
const coordenadas = new Coords();
coordenadas.setX = 30;
coordenadas.setY = 40;
console.log(coordenadas.showX);
console.log(coordenadas.showY);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o titulo do post é ${this.title}`;
    }
}
const newPost = new BlogPost("aprendendo typescript");
console.log(newPost.itemTitle());
//                                override
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
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
    constructor(meat, drink) {
        this.meat = meat;
        this.drink = drink;
        this.meat = meat;
        this.drink = drink;
    }
}
class SubClassFood extends Food {
    constructor(meat, drink) {
        super(meat, drink);
        this.meat = meat;
        this.drink = drink;
    }
}
const meal = new Food("Carne", "Água");
const newMeal = new SubClassFood("Carne", "Refri");
console.log(meal);
console.log(newMeal);
// protected
class E {
    constructor() {
        this.x = 10;
    }
    someMethod() {
        console.log("esse metodo é protegido! só pode ser acessado por outro metodo");
    }
}
class F extends E {
    get showX() {
        return this.x;
    }
    get showProtectedMethod() {
        return this.someMethod();
    }
    set changeX(newX) {
        this.x = newX;
    }
}
const fInstance = new F();
console.log(fInstance.showX); //somente com um metodo (nesse caso um get que podemos acessar as o valor da classe)
fInstance.changeX = 40; // só podemos alterar a propriedade por meio de um metodo tbm (nesse caso um setter)
console.log(fInstance.showX);
fInstance.showProtectedMethod;
