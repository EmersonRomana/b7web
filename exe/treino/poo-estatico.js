class Pessoa {
  static maos = 2;
  idade = 0;

  constructor(nome) {
    this.nome = nome;
  }

  digaOi() {
    console.log(`Oi, eu sou o ${this.nome} e tenho ${Pessoa.maos} mãos`);
  }
}

let p1 = new Pessoa("Emerson");
p1.digaOi();
