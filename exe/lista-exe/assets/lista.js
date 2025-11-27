// Elementos
const input = document.querySelector("input");
const lista = document.querySelector("ul");

// Funções
function novoItem(e) {
  if (e.key === "Enter") {
    // Adicionar elemento na lista
    const novaLista = document.createElement("li");
    novaLista.innerHTML = input.value;
    lista.appendChild(novaLista);

    // Limpar o campo de texto
    input.value = "";
  }
}

// Eventos
input.addEventListener("keyup", novoItem);
