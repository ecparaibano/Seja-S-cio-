let socios = localStorage.getItem("socios");
socios = socios ? parseInt(socios) : 661;

document.getElementById("totalSocios").innerText = socios;

function mostrarComprar(plano) {
  document.getElementById("planoEscolhido").innerText =
    "Plano selecionado: Carcará " + plano;
  document.getElementById("comprarBox").style.display = "block";
}

function comprar() {
  socios++;
  localStorage.setItem("socios", socios);
  document.getElementById("totalSocios").innerText = socios;
  alert("Compra simulada com sucesso!");
}
