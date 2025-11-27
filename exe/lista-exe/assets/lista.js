// Elementos
const input = document.querySelector("input");
const lista = document.querySelector("ul");

// Funções
function novoItem(e) {
  if (e.key === "Enter") {
    const novaLista = document.createElement("li");
    novaLista.innerHTML = input.value;
    lista.appendChild(novaLista);
  }
}

// Eventos
input.addEventListener("keyup", novoItem);
