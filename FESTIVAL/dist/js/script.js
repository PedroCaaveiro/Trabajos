document.addEventListener('DOMContentLoaded', function() {
    creargaleria();
});

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    
    if (!header || !sobreFestival) return;  // Verifica que los elementos existan

    window.addEventListener('scroll', function() {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
             
        } else {
            header.classList.remove('fixed');
            
        }
    });
}

document.addEventListener('DOMContentLoaded', navegacionFija);


function creargaleria() {
    const cantidadImagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen de la galería ${i}`;

        // Al hacer clic en la imagen se llama a mostrarImagen
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = `Imagen de la galería ${i}`;

    // Crear el modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');

    // Crear el botón de cerrar
    const cerrarModalboton = document.createElement('BUTTON');
    cerrarModalboton.textContent = 'X';
    cerrarModalboton.classList.add('boton-cerrar');
    cerrarModalboton.onclick = function(event) {
        event.stopPropagation(); // Evita que el clic en el botón se propague al modal
        cerrarModal();
    }

    // Evitar que el clic en la imagen cierre el modal
    imagen.onclick = function(event) {
        event.stopPropagation(); // Evitar que el clic en la imagen cierre el modal
    }

    // Agregar el botón de cerrar y la imagen al modal
    modal.appendChild(cerrarModalboton);
    modal.appendChild(imagen);

    // Solo el botón "X" cierra el modal
  

    // Agregar el modal al body
    const body = document.querySelector('body');
    body.classList.add('overflow-hiden');
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hiden');
    }, 500);
}
