let total = localStorage.getItem("socios");
total = total ? parseInt(total) : 0;

document.getElementById("contador").innerText = total;

function mostrarComprar(botao) {
  botao.style.display = "none";
  botao.nextElementSibling.style.display = "block";
}

function comprar() {
  total++;
  localStorage.setItem("socios", total);
  document.getElementById("contador").innerText = total;
  alert("Compra simulada com sucesso!");
}
