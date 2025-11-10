// #############
// P.O.O - Polimorfismo
// #############

/*

El polimorfismo es un concepto fundamental en la programación orientada a objetos (P.O.O.) que se refiere a la capacidad 
de una entidad —como una clase o un método— de asumir múltiples formas o comportamientos. En términos prácticos, esto 
significa que diferentes clases pueden implementar el mismo método, pero con comportamientos distintos, y que una 
misma operación puede aplicarse a diferentes tipos de objetos de manera coherente.
*/
const Perro = require('./models/Perro');
//❌
let perro1= new Perro("Paco");
perro1.hablar();