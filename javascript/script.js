/* variables */
let nombre = "pedro";
let apellido =" caaveiro";
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
 