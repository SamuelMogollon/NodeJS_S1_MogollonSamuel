import PromptSync from "prompt-sync";
import { registrarGasto, listarGastos, calcularGastos, reporteGastos } from "./controllers/controllers.js";

const prompt = PromptSync()

let programaEnFuncionamiento = true;

while (programaEnFuncionamiento) {
    console.log("=============================================");
    console.log("         Simulador de Gasto Diario           ");
    console.log("=============================================");
    console.log("1. Registrar nuevo gasto");
    console.log("2. Listar gastos");
    console.log('3. Calcular total de gastos                  ')
    console.log('4. Generar reporte de gastos                 ')
    console.log('5. Actualizar gasto                          ')
    console.log('6. Eliminar Gasto                            ')
    console.log('7. Salir                                     ')
    console.log("=============================================");

    const opcion = Number(prompt("Elige una opción:  "));

    if (opcion === 1) {
        registrarGasto();
    } else if (opcion === 2) {
        listarGastos();
    } else if (opcion === 3) {
        calcularGastos();
    } else if (opcion === 4) {
        reporteGastos();
    } else {
        console.log("Opción inválida");
    }
}