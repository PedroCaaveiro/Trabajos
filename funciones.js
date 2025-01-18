
  document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('click', () => {
      producto.classList.toggle('clicado');
    });
  });

