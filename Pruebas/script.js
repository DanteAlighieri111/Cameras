// Función para cargar la imagen con una función llamada cargarImagen
function cargarImagen(imagenURL) {
  // Redirige a la página externa y pasa la URL de la imagen como parámetro
  window.location.href = 'pagina-externa.html?imagen=' + encodeURIComponent(imagenURL);
}

// Función para cargar otra imagen con una función llamada cargarOtraImagen
function cargarOtraImagen(imagenURL) {
  // Redirige a la página externa y pasa la URL de la imagen como parámetro
  window.location.href = 'pagina-externa.html?imagen=' + encodeURIComponent(imagenURL);
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
