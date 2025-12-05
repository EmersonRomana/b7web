class Person {
  idade = 0;
  passos = 0;

  constructor(nome) {
    this.nome = nome;
  }

  contagemDPassos() {
    this.passos++;
  }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.idade = 20;
console.log(`${p1.nome} tem ${p1.idade} anos`);
