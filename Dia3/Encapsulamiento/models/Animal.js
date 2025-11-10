class Animal{
    #nombre;
    constructor(nombre){
        this.#nombre=nombre;
    }

    verificarNombre(entrada){
        if(entrada != this.#nombre){
            console.log("No es el nombre del animal");
        }
        else{
            console.log("Ese es el nombre del animal");
        }
    }
    scrambleNombre(){
        console.log(`aergupaj${this.#nombre}r&TGS)&F/(HWH)J)(#)`);
    }
}
module.exports = Animal;