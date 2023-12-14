function toggleMenu(numero) {
  const contenedor = document.getElementById(`contenedor${numero}`);
  const menu = document.getElementById(`menu${numero}`);
  menu.classList.toggle('mostrar-menu');
  contenedor.classList.toggle('mostrar-menu');
}
