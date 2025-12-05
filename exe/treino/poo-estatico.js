class Pessoa {
  static maos = 2; // Aqui diz que esse código é estático (O estático ele se transforma em um objeto geral)
  idade = 0;

  constructor(nome) {
    this.nome = nome;
  }

  digaOi() {
    console.log(`Oi, eu sou o ${this.nome} e tenho ${Pessoa.maos} mãos`); // Para usar a parte estática tenho que vincular na classe Pessoa e não no this.maos
  }
}

let p1 = new Pessoa("Emerson");
p1.digaOi();
