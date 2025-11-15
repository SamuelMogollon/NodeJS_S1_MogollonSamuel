import PromptSync from "prompt-sync";
import { registrarGasto, listarGastos, calcularGastos, reporteGastos, actualizarGastos, eliminarGasto } from "./controllers/controllers.js";
import { testConnection } from "./db.js";

const db = await testConnection();
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
        await registrarGasto(db);
    } else if (opcion === 2) {
        await listarGastos(db);
    } else if (opcion === 3) {
        await calcularGastos(db);
    } else if (opcion === 4) {
        await reporteGastos(db);
    } else if (opcion === 5) {
        await actualizarGastos(db);
    } else if (opcion === 6) {
        await eliminarGasto(db);
    } else if (opcion === 7) {
        console.log("Hasta Prontooo")
        programaEnFuncionamiento = false;
    } else {
        console.log("Opción inválida");
    }
}