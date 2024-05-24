const carouselSlide = document.getElementById('carouselSlide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = carouselItems.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

function showPrevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Cambiar automáticamente cada 5 segundos
setInterval(showNextSlide, 10000);