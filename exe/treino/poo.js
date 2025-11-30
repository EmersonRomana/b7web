// 1. A CLASSE (O Molde)
class Pessoa {
  idade = 0;

  // 2. O CONSTRUCTOR  (informções que o objeto tem)
  constructor(nome) {
    this.nome = nome; // Define a pessoa
  }
}

const p1 = new Pessoa("Emerson"); // Colocndo new e usando o nome da classe nos atribuimos Emerson como se fosse um objeto dando o nome e logo enseguida a idade também.
p1.idade = 33;

console.log(`${p1.nome} tem ${p1.idade} anos`);
