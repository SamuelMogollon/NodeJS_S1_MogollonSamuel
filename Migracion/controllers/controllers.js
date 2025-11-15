import PromptSync from "prompt-sync";
import dayjs from "dayjs";

const prompt = PromptSync();
let dataSave = [];

export function registrarGasto() {
    console.log("- Monto del gasto:");
    const montoGasto = parseFloat(prompt("> "));

    console.log("- Categoría (ej. comida, transporte, entretenimiento, otros):");
    const categoriaGasto = prompt("> ");

    console.log("- Descripción (opcional):");
    const descripcionGasto = prompt("> ");

    const fechaGasto = dayjs().format("DD/MM/YYYY");

    dataSave.push({
        montoGasto,
        categoriaGasto,
        descripcionGasto,
        fechaGasto
    });

    console.log("Gasto registrado con éxito");
}

export function listarGastos() {
    console.log("=============================================");
    console.log("               Lista de gastos");
    console.log("=============================================");

    if (dataSave.length === 0) {
        console.log("No hay gastos registrados");
        return;
    }

    console.table(dataSave);
}

export function calcularGastos() {
    if (dataSave.length === 0) {
        console.log("No hay gastos registrados todavía.");
        return;
    }

    let total = 0;

    for (let i = 0; i < dataSave.length; i++) {
        total += Number(dataSave[i].montoGasto);
    }

    console.log("=============================================");
    console.log("              Total de Gastos                ");
    console.log("=============================================");
    console.log(`Total gastado: $${total}`);
    console.log("=============================================");
}

export function reporteGastos() {
    if (dataSave.length === 0) {
        console.log("No hay gastos registrados todavía.");
        return;
    }

    console.log("=============================================");
    console.log("            Reporte de Gastos                ");
    console.log("=============================================");

    for (let i = 0; i < dataSave.length; i++) {
        const gasto = dataSave[i];
        console.log(`Gasto #${i + 1}`);
        console.log(`  Fecha:        ${gasto.fechaGasto}`);
        console.log(`  Monto:        $${gasto.montoGasto}`);
        console.log(`  Categoría:    ${gasto.categoriaGasto}`);
        console.log(`  Descripción:  ${gasto.descripcionGasto}`);
        console.log("---------------------------------------------");
    }

    console.log("Fin del reporte.");
}