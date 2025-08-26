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