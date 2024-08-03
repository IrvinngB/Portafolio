// transition.js

function transitionPage(event, url) {
    event.preventDefault(); // Evita el enlace normal
    const transition = document.querySelector('.page-transition');

    // Muestra la transición
    transition.classList.add('show');

    // Después de la animación, redirige a la nueva página
    setTimeout(() => {
        window.location.href = url;
    }, 500); // Debe coincidir con la duración de la transición en CSS
}
