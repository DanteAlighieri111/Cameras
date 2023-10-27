// Obtén los elementos relevantes
// Define una función para mostrar/ocultar el menú y cambiar la clase del contenedor
/*document.getElementById("mostrar").addEventListener("click", function() {
    document.getElementById("barra-lateral").style.width = "800px";
    document.getElementById("barra-lateral").style.right = "0";
  });
  
  document.getElementById("cerrar").addEventListener("click", function() {
    document.getElementById("barra-lateral").style.width = "0";
    document.getElementById("barra-lateral").style.right = "-250px";
  }); */
function toggleMenu(buttonId, menuId) {
    const botonSuperpuesto = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);

    botonSuperpuesto.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        botonSuperpuesto.parentElement.classList.toggle('mostrar-menu');
    });
}

// Llama a la función para cada par de botón y menú
toggleMenu('boton-superpuesto1', 'menu1');
toggleMenu('boton-superpuesto2', 'menu2');
toggleMenu('boton-superpuesto3', 'menu3');
toggleMenu('boton-superpuesto4', 'menu4');
toggleMenu('boton-superpuesto5', 'menu5');
toggleMenu('boton-superpuesto6', 'menu6');
toggleMenu('boton-superpuesto7', 'menu7');
toggleMenu('boton-superpuesto8', 'menu8');
toggleMenu('boton-superpuesto9', 'menu9');
toggleMenu('boton-superpuesto10', 'menu10');
toggleMenu('boton-superpuesto11', 'menu11');
toggleMenu('boton-superpuesto12', 'menu12');
toggleMenu('boton-superpuesto13', 'menu13');
toggleMenu('boton-superpuesto14', 'menu14');
toggleMenu('boton-superpuesto15', 'menu15');
toggleMenu('boton-superpuesto16', 'menu16');
toggleMenu('boton-superpuesto17', 'menu17');
toggleMenu('boton-superpuesto18', 'menu18');
toggleMenu('boton-superpuesto19', 'menu19');
toggleMenu('boton-superpuesto20', 'menu20');
toggleMenu('boton-superpuesto21', 'menu21');
toggleMenu('boton-superpuesto22', 'menu22');