// script.js

// Función para cargar la imagen
function cargarImagen(imagenURL) {
  // Redirige a la página externa y pasa la URL de la imagen como parámetro
  window.location.href = 'pagina-externa.html?imagen=' + encodeURIComponent(imagenURL);
}
