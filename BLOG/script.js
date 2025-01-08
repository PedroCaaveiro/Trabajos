
const formulario = document.querySelector(".formulario");
const parrafo = document.querySelector(".parrafo");
formulario.addEventListener('submit',function (event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    
    if (nombre === '' || email === '' || mensaje === '') {
        parrafo.textContent = "Porfavor rellene los campos";
    }else{
        parrafo.textContent = " Se envio la informacion correctamente";
    }

});













