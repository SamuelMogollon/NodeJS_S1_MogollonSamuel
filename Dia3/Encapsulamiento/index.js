// ###########
// P.O.O - Encapsulamiento
// ###########
/*
El encapsulamiento consiste en ocultar los detalles internos de una clase y exponer solo lo necesario 
a través de una interfaz pública. En JavaScript esto se puede lograr mediante convenciones 
(como usar _ para indicar que algo es privado), o más formalmente usando el símbolo # para declarar atributos verdaderamente privados.
*/
const Animal = require('./models/Animal');
let animal1 = new Animal("Paco");
console.log(animal1.nombre);
animal1.verificarNombre("Paco");
//❌
animal1.scrambleNombre();