class Pessoa {
  idade = 0;

  constructor(nome) {
    this.nome = nome;
  }
}

class Estudante extends Pessoa {
  // extends (é a extensão da classe Pessoa) onde resecebemos a herança da Pessoa
  constructor(nome, id) {
    super(nome); // Super é referencia do construtor da classe pai que é Pessoa. Assim posso usar a variável do constructor que no caso é nome. E como é construtor chamosmos por "super(nome") = me refirindo ao nome de Pessoa.
    this.id = id;
  }
}

let p1 = new Estudante("Emerson", 1029231);

console.log(`${p1.nome} tem ${p1.idade} anos, e sua matrícula é: ${p1.id}`);
