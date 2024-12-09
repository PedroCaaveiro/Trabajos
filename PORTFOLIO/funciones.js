// Selecciona todos los bloques
const bloques = document.querySelectorAll('.main__3__bloque');

// Configura el observer
const ver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añade la clase 'visible' cuando el elemento es visible
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Deja de observar el elemento
        }
    });
}, {
    threshold: 0.5 // El 50% del elemento debe ser visible
});

// Aplica el observer a cada bloque
bloques.forEach(bloque => ver.observe(bloque));

// Selecciona ambos encabezados
const headings = document.querySelectorAll('h2, h3');

// Configura el observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añade la clase 'visible' para activar la animación
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Deja de observar el elemento
        }
    });
}, {
    threshold: 0.5 // El 50% del elemento debe ser visible
});

// Aplica el observer a ambos encabezados
headings.forEach(heading => observer.observe(heading));
