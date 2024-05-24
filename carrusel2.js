// Iniciar el carrusel
$('#carouselExampleIndicators').carousel();

// Cambiar automáticamente cada 10 segundos
setInterval(function () {
    $('#carouselExampleIndicators').carousel('next');
}, 10000);