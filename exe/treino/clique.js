function clicou() {
  console.log("Botão clicado");

  if (document.body.style.backgroundColor === "") {
    document.body.style.backgroundColor = "#fcdd32ff";
  } else {
    document.body.style.backgroundColor = "";
  }
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", clicou);
