"use strict";
// energia, vida, ataque, defesa e nome
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}

const espartano = new Personagem("Kratos", 100, 200, 90, 100);
