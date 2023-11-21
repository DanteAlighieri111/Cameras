function cargarPagina(paginaURL) {
  // Redirige a la página externa
  window.location.href = paginaURL;
}

function cargarImagen(imagenURL) {
  // Redirige a la página externa y pasa la URL de la imagen como parámetro
  window.location.href = 'pagina-externa.html?imagen=' + encodeURIComponent(imagenURL);
}

function UbicacionImagen(imagenURL) {
  // Redirige a la página externa y pasa la URL de la imagen como parámetro
  window.location.href = 'pagina-externa.html?imagen=' + encodeURIComponent(imagenURL);
}

// Función para obtener parámetros de la URL
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}
// Obtén la URL de la imagen de los parámetros
const imagenURL = obtenerParametroURL('imagen');

if (imagenURL) {
    // Crea un elemento de imagen y establece la fuente
    const imagen = document.createElement('img');
    imagen.src = imagenURL;

    // Agrega la imagen al contenedor
    document.getElementById('contenedor-imagen').appendChild(imagen);
}


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