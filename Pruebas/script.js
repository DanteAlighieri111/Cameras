document.getElementById("mostrar").addEventListener("click", function() {
  document.getElementById("barra-lateral").style.width = "250px";
  document.getElementById("barra-lateral").style.right = "0";
});

document.getElementById("cerrar").addEventListener("click", function() {
  document.getElementById("barra-lateral").style.width = "0";
  document.getElementById("barra-lateral").style.right = "-250px";
});