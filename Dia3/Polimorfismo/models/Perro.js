const Animal = require("./Animal");
class Perro extends Animal{
    hablar(){
        console.log(`Soy un perro llamado ${this.nombre} que habla!`);
    }
}
module.exports = Perro;