// 1. A CLASSE (O Molde)
class Pessoa {
  idade = 0;

  // 2. O CONSTRUCTOR (A Preparação)
  constructor(nome) {
    this.nome = nome; // Define a pessoa
  }
}

const p1 = new Pessoa("Emerson");
p1.idade = 33;

console.log(`${p1.nome} tem ${p1.idade} anos`);
