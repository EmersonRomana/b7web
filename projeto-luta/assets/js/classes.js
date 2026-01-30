// Guerreiro ou mago
//Monstro pequeno ou grande monstro

class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._life;
  }
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

class Guerreiro extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 20;
    this.defense = 16;
    this.maxLife = this.life;
  }
}

class Mago extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.attack = 28;
    this.defense = 6;
    this.maxLife = this.life;
  }
}
