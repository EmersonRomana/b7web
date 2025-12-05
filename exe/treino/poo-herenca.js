class Pessoa {
  idade = 0;

  constructor(nome) {
    this.nome = nome;
  }
}

class Estudante extends Pessoa {
  constructor(nome, id) {
    super(nome);
    this.id = id;
  }
}

let p1 = new Estudante("Emerson", 1029231);

console.log(`${p1.nome} tem ${p1.idade} anos, e sua matrícula é: ${p1.id}`);
