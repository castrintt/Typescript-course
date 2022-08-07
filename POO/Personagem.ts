// energia, vida, ataque, defesa e nome

class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
}

const espartano: Personagem = new Personagem("Kratos", 100, 200, 90, 100);
