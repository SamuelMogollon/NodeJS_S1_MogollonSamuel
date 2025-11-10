// Clase base o superclase
class Animal{
    //Atributos
    //nombre
    constructor(nombre){
        this.nombre=nombre;
    }

    //Métodos -> Funcionalidades
    hablar(){
        console.log(`Soy un animal llamado ${this.nombre} que habla!`);
    }
}
module.exports = Animal;