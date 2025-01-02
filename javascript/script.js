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

function sumar(){
    console.log(10+10);
}
sumar();

const sumar2 = function(){
    console.log(3+3);
}
sumar2();

(function(){
console.log("esto a s una function");
})();

