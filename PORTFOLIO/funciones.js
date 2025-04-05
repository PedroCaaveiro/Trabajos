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
    threshold: 0.5 
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
    threshold: 0.5 
});

// Aplica el observer a ambos encabezados
headings.forEach(heading => observer.observe(heading));
// Abre el primer modal y actualiza el contenido con la información de la imagen
function openModal(info) {
    document.getElementById("modal").style.display = "flex"; // Muestra el primer modal
    document.getElementById("modal-text").textContent = info; // Actualiza el texto del modal
}

// Cierra el primer modal
function closeModal() {
    document.getElementById("modal").style.display = "none"; // Oculta el primer modal
}

// Abre el segundo modal (formulario de contacto)
function openContactForm() {
    document.getElementById("modal").style.display = "none"; // Cierra el primer modal
    document.getElementById("contactModal").style.display = "flex"; // Muestra el modal del formulario
}

// Cierra el segundo modal (formulario de contacto)
function closeContactForm() {
    document.getElementById("contactModal").style.display = "none"; // Oculta el modal del formulario
}




document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carrusel-imagen');
    let current = 0;

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 4000);
  });