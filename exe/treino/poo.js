// 1. A CLASSE (O Molde)
class Pessoa {
  idade = 0;
  passos = 0;

  // 2. O CONSTRUCTOR  (informções que o objeto tem)
  constructor(nome) {
    this.nome = nome; // Define a pessoa
  }

  contadorPassos() {
    this.passos++;
  }
}

// Colocndo new e usando o nome da classe nos atribuimos Emerson como se fosse um objeto dando o nome e logo enseguida a idade também.
const p1 = new Pessoa("Emerson");
const p2 = new Pessoa("Thay");
const p3 = new Pessoa("Angelo");

p1.contadorPassos();
console.log(`Passos de ${p1.nome}: Foram ${p1.passos}`);
