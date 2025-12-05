class Person {
  _idade = 10;
  passos = 0;

  constructor(primeiroNome, segundoNome) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
  }

  //   Metodo
  contagemDPassos() {
    this.passos++;
  }

  get nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  get idade() {
    return this._idade;
  }

  set idade(x) {
    if (typeof x == "number") {
      this._idade = x;
    }
  }
}

// Git Criando as Pessoas
let p1 = new Person("João", "Aguiar");
let p2 = new Person("Maria", "Silva");
let p3 = new Person("Pedro", "Arruda");

p1.idade = 20;
console.log(`${p1.nomeCompleto} tem ${p1.idade} anos`);
