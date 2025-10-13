// Año automático
document.getElementById('current-year').textContent = new Date().getFullYear();

// Efecto al mostrar el modal
document.getElementById('modalActividades').addEventListener('shown.bs.modal', function () {
    const cards = document.querySelectorAll('.activity-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transitionDelay = `${index * 0.1}s`;
            
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
    });
});

// Mostrar automáticamente el modal de actividades al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el modal existe
    var actividadesModalElement = document.getElementById('modalActividades');
    
    if (actividadesModalElement) {
        // Crear una instancia del modal de actividades
        var actividadesModal = new bootstrap.Modal(actividadesModalElement);
        
        // Mostrar el modal después de un breve retraso para mejor experiencia de usuario
        setTimeout(function() {
            actividadesModal.show();
        }, 1000); // 1 segundo de retraso
    }
});

// Carrusel personalizado
// let currentIndex = 0;
// const track = document.getElementById('carouselTrack');
// const slides = document.querySelectorAll('.carousel-slide');
// const indicatorsContainer = document.getElementById('carouselIndicators');
        
// Calcular el número de slides visibles según el ancho de la pantalla
// function getVisibleSlides() {
    // if (window.innerWidth < 768) return 1;
    // if (window.innerWidth < 992) return 2;
    // return 3;
// }
        
// Crear indicadores
// function createIndicators() {
    // indicatorsContainer.innerHTML = '';
    // const totalSlides = slides.length;
    // const visibleSlides = getVisibleSlides();
    // const indicatorCount = Math.ceil(totalSlides / visibleSlides);
            
    // for (let i = 0; i < indicatorCount; i++) {
        // const indicator = document.createElement('div');
        // indicator.classList.add('carousel-indicator');
        // if (i === 0) indicator.classList.add('active');
        // indicator.addEventListener('click', () => {
            // currentIndex = i * visibleSlides;
            // updateCarousel();
        // });
        // indicatorsContainer.appendChild(indicator);
    // }
// }
        
// Actualizar carrusel
// function updateCarousel() {
    // const slideWidth = slides[0].offsetWidth;
    // const visibleSlides = getVisibleSlides();
    // track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            
    // Actualizar indicadores
    // const indicators = document.querySelectorAll('.carousel-indicator');
    // const activeIndicator = Math.floor(currentIndex / visibleSlides);
    // indicators.forEach((indicator, index) => {
        // indicator.classList.toggle('active', index === activeIndicator);
    // });
// }
        
// Mover slides
// function moveSlide(direction) {
    // const visibleSlides = getVisibleSlides();
    // const maxIndex = slides.length - visibleSlides;
            
    // currentIndex += direction;
            
    // Asegurarse de que el índice esté dentro de los límites
    // if (currentIndex < 0) {
        // currentIndex = 0;
    // } else if (currentIndex > maxIndex) {
        // currentIndex = maxIndex;
    // }
            
    // updateCarousel();
// }
        
// Inicializar carrusel
// window.addEventListener('load', () => {
    // createIndicators();
    // updateCarousel();
// });
        
// window.addEventListener('resize', () => {
    // createIndicators();
    // updateCarousel();
//});

///////////////////////////////////////////////////////////////////////////

// Script para prevenir la descarga del video pero permitir controles
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-full');
            
    // Deshabilitar el menú contextual
    video.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Esta función está deshabilitada para proteger el contenido.');
        return false;
    });
})
        