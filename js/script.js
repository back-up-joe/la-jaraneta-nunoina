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