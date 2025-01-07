/* variables */
/*let nombre = "pedro";
let apellido ="caaveiro";
let edad = 42;
const dias = ["lunes","martes","miercoles","jueves","viernes"];

console.log(dias[1]);
// string
const producto = "monitor de 20 pulgadas";
console.log(typeof producto);
const producto2 = String('monitor de 40 pulgadas');
console.log(typeof producto2);

// metodos 

// lenght 
console.log(producto.length);

// indexof

console.log(producto.indexOf("20"));

// include

console.log(producto.includes("19"));

// numeros
const numero1= 100;
const numero2 = 200;
let suma= numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let dividir = numero1 / numero2;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(dividir);

let resultado = Math.PI;
console.log(resultado);

let numero3 = Math.random() * 30;
console.log(numero3);

console.log(`nombre: ${nombre} apellido: ${apellido}`);
// objetovs 
const nombreProducto = "pantalla";
const precio1 = 20;
const disponible = true;

const objetc ={
    nombreProducto: "pantalla",
    precio:  300,
    disponible:  false
};

console.log(objetc.nombreProducto);

console.log(objetc["disponible"]);

delete objetc.nombreProducto;
console.log(objetc);

const {precio} = objetc.precio;

console.log(precio);

const producto3 ={
    nombreProducto: "pantalla",
    precio:  300,
    disponible:  false
};
// no permite agregar
Object.freeze(producto3);
producto3.imagen = "imagen.jpg";

console.log(producto3);

 const nuevoProducto = {
    ...producto,...producto2
 };
 console.log(nuevoProducto);

 const numeros =[10,20,30,40,50];
 console.table(numeros);
 const arreglo = ["hola",1,true,"no"];
 console.table(arreglo);
 console.log(arreglo[2]);

 numeros.forEach( function(numero) {
        console.log(numero)
 });

 const nuevoArreglo = [...numeros,60,70];
 console.log(nuevoArreglo);
*/
/*
function sumar(){
   // console.log(10+10);
}
sumar();

const sumar2 = function(){
    //console.log(3+3);
}
sumar2();

(function(){
//console.log("esto a s una function");
})();

const reservacion = {
    nombre:"pedro",
    apellido : "caaveiro",
    total:600,
    pagado:true,
    informacion: function() 
{
    console.log(`el cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
}
}

//reservacion.informacion();

function Productos(nombre,precio){
this.nombre = nombre;
this.precio = precio;


}
const producto6 = new Productos("monitor curvo de 40",800);
//console.log(producto6);

function formatearProducto(producto){

    return `El producto ${producto.nombre} tiene un precio ${producto.precio}`;

}
//console.log(formatearProducto(producto6));

// prototype 
//Productos.prototype.formatearProducto= function(){};
/*
class Producto1{
constructor(nombre,precio){
this.nombre = nombre;
this.precio = precio;
}
formatearProducto(){
    return `El producto ${this.nombre} tiene un precio ${this.precio}`;
}


}
const producto10 = new Producto1("monitoe curvo 50",600);
const producto11 = new Producto1("monitoe curvo 20",200);

//console.log(producto11.formatearProducto());
//console.log(producto10);

class Libro extends Productos{

    constructor(nombre,precio,isbn){
super(nombre,precio);
    }

}
//const libro1 = new Libro("javasvript", 500,15151515);
//console.log(libro1.formatearProducto());

/*
const numero10 = 20;
const numero11 = 30;

console.log(numero11);
console.log(numero10);
try {
    
    console.log(numero12);
} catch (error) {
    console.log("hay un errror no existe el numero")
}*/
/*
const usuarioAutenticado = new Promise((resolve,reject) =>{
const auth = false;

if(auth){
resolve("usuario autentico");
}else{
reject("usuario falso");
}
});
usuarioAutenticado.then((resultado) => console.log(resultado))
                    .catch((resultado) => console.log(resultado));


                 const boton = document.querySelector("#boton")

                 boton.addEventListener("click",function(){
                    Notification.requestPermission()
                    .then(resultado => console.log("el resultado es:", resultado))

                    if (Notification.permission == 'granted') {
                        new Notification("esta es una ntificacion")
                    }

                 });

function descargarClientes(){
    return new Promise (resolver =>{
        console.log("descargado clientes... espere....")
        setTimeout(function(){
           resolve("los clientes fueron descargados");
            },5000);

    });
}


 async function obtenerEmpleado(){
const archivo = 'empleados.json';
    fetch(archivo)
    .then(resultado =>{
        return resultado.json();
    })
    .then(datos =>{
        console.log(datos)
    })
const resultado = await fetch(archivo);
const datos = await resultado.json();
console.log(datos);
}
obtenerEmpleado();*/

