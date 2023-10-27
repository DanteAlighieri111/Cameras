document.getElementById('linkModulo1').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que la página se cargue de inmediato

    // Realiza alguna animación o transición aquí antes de redirigir a la otra página
    // Por ejemplo, puedes desvanecer la página actual
    document.body.style.opacity = '0';

    // Luego, redirige a la otra página después de un cierto tiempo (por ejemplo, 0.5 segundos)
    setTimeout(function() {
        window.location.href = event.target.href; // Redirige a la otra página
    }, 500); // 500 milisegundos (0.5 segundos) de retraso
});
