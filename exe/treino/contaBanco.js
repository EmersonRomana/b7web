// 1. A CLASSE (O Molde)
class ContaBancaria {
  // 2. O CONSTRUCTOR (A Preparação)
  constructor(nomeDoTitular) {
    this.titular = nomeDoTitular; // Define o dono
    this.saldo = 0; // Começa zerada
    console.log(`Conta criada para ${this.titular}!`);
  }

  // 3. MÉTODOS (As Ações)
  depositar(valor) {
    this.saldo = this.saldo + valor;
    console.log(`Depósito de R$${valor} feito. Saldo atual: R$${this.saldo}`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Erro: Saldo insuficiente!");
    } else {
      this.saldo = this.saldo - valor;
      console.log(`Saque de R$${valor} realizado. Sobrou: R$${this.saldo}`);
    }
  }
}

// 4. A INSTÂNCIA (O Objeto Real)
// Estamos criando uma cópia do molde para o Emerson
const minhaConta = new ContaBancaria("Emerson");

// Usando o objeto
minhaConta.depositar(100); // Adiciona 100
minhaConta.sacar(30); // Tira 30
minhaConta.sacar(200); // Tenta tirar 200 (vai dar erro)
