import PromptSync from "prompt-sync";
import { registrarGasto, listarGastos } from "./controllers/controllers.js";

const prompt = PromptSync()

let programaEnFuncionamiento = true;

while (programaEnFuncionamiento) {
    console.log("=============================================");
    console.log("         Simulador de Gasto Diario");
    console.log("=============================================");
    console.log("1. Registrar nuevo gasto");
    console.log("2. Listar gastos");
    console.log("3. Salir");
    console.log("=============================================");

    const opcion = Number(prompt("Elige una opción:  "));

    if (opcion === 1) {
        registrarGasto();
    } else if (opcion === 2) {
        listarGastos();
    } else {
        console.log("Opción inválida");
    }
}