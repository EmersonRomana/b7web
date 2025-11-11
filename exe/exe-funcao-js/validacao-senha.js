/**
 * Valida o usuário e a senha, retornando uma mensagem de status específica.
 * A função agora cuida de toda a lógica e retorna a mensagem final.
 */
function validar(usuario, senha) {
  const usuarioCorreto = "pedro";
  const senhaCorreta = "123";

  // 1. Verifica se o usuário é válido (ignorando maiúsculas/minúsculas)
  const usuarioValido = usuario.toLowerCase() === usuarioCorreto;

  // 2. Verifica se a senha é válida
  const senhaValida = senha === senhaCorreta;

  // 3. Retorna a mensagem exata para cada cenário
  //    A função PARA no primeiro 'return' que encontrar.

  // Caso 1: Tudo certo
  if (usuarioValido && senhaValida) {
    return "seja bem vindo.";
  }

  // Caso 2: Os dois errados
  if (!usuarioValido && !senhaValida) {
    return "erro de login, usuario incorreto e senha incorreta";
  }

  // Caso 3: Apenas o usuário errado
  if (!usuarioValido) {
    return "erro de login, usuario incorreto";
  }

  // Caso 4: Apenas a senha errada
  // (Se chegou aqui, o usuário estava certo, mas a senha não)
  if (!senhaValida) {
    return "erro de login, senha incorreta";
  }
}

console.log("--- Teste 1: Tudo Errado ---");
let usuario1 = "emerson";
let senha1 = "1234";
let mensagem1 = validar(usuario1, senha1);
console.log(mensagem1);

console.log("\n--- Teste 2: Apenas Usuário Errado ---");
let usuario2 = "emerson";
let senha2 = "123";
let mensagem2 = validar(usuario2, senha2);
console.log(mensagem2);

console.log("\n--- Teste 3: Apenas Senha Errada ---");
let usuario3 = "Pedro";
let senha3 = "senha-errada";
let mensagem3 = validar(usuario3, senha3);
console.log(mensagem3);

console.log("\n--- Teste 4: Tudo Certo ---");
let usuario4 = "PEDRO";
let senha4 = "123";
let mensagem4 = validar(usuario4, senha4);
console.log(mensagem4);
