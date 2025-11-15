import PromptSync from "prompt-sync";
import dayjs from "dayjs";
import { db } from "../db.js";

const prompt = PromptSync();

export async function registrarGasto(db) {
    console.log("- Monto del gasto:");
    const montoGasto = parseFloat(prompt("> "));

    console.log("- Categoría (ej. comida, transporte, entretenimiento, otros):");
    const categoriaGasto = prompt("> ");

    console.log("- Descripción (opcional):");
    const descripcionGasto = prompt("> ");

    const fechaGasto = dayjs().format("DD/MM/YYYY");

    await db.collection("gastos").insertOne({
        montoGasto,
        categoriaGasto,
        descripcionGasto,
        fechaGasto
    });

    console.log("Gasto registrado con éxito");
}

export async function listarGastos(db) {

    console.log("=============================================");
    console.log("               Lista de gastos");
    console.log("=============================================");

    const gastos = await db.collection("gastos").find().toArray();

    if (gastos.length === 0) {
        console.log("No hay gastos registrados");
        return;
    }

    console.table(gastos);
}

export async function calcularGastos(db) {
    const gastos = await db.collection("gastos").find().toArray();

    if (gastos.length === 0) {
        console.log("No hay gastos registrados todavía.");
        return;
    }

    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        total += Number(gastos[i].montoGasto);
    }

    console.log("=============================================");
    console.log("              Total de Gastos                ");
    console.log("=============================================");
    console.log(`Total gastado: $${total}`);
    console.log("=============================================");
}

export async function reporteGastos(db) {
    const gastos = await db.collection("gastos").find().toArray();

    if (gastos.length === 0) {
        console.log("No hay gastos registrados todavía.");
        return;
    }

    console.log("=============================================");
    console.log("            Reporte de Gastos                ");
    console.log("=============================================");

    gastos.forEach((gasto, index) => {
        console.log(`Gasto #${index + 1}`);
        console.log(`  Fecha:        ${gasto.fechaGasto}`);
        console.log(`  Monto:        $${gasto.montoGasto}`);
        console.log(`  Categoría:    ${gasto.categoriaGasto}`);
        console.log(`  Descripción:  ${gasto.descripcionGasto}`);
        console.log("=============================================");
    });

    console.log("Fin del reporte.");
}

export async function actualizarGastos(db) {
    const gastos = await db.collection("gastos").find().toArray();

    if (gastos.length === 0) {
        console.log("No hay gastos para actualizar.");
        return;
    }

    console.log("=== Lista de Gastos ===");
    gastos.forEach((gasto, index) => {
        console.log(`Gasto #${index + 1}`);
        console.log(`  Fecha:        ${gasto.fechaGasto}`);
        console.log(`  Monto:        $${gasto.montoGasto}`);
        console.log(`  Categoría:    ${gasto.categoriaGasto}`);
        console.log(`  Descripción:  ${gasto.descripcionGasto}`);
        console.log("=============================================");
    });

    const index = Number(prompt("Elige el número del gasto que quieres actualizar: "));

    if (isNaN(index) || index < 1 || index > gastos.length) {
        console.log("Opción inválida.");
        return;
    }

    const gasto = gastos[index - 1];

    console.log("Nuevo monto:");
    const nuevoMonto = parseFloat(prompt("> "));

    console.log("Nueva categoría:");
    const nuevaCategoria = prompt("> ");

    console.log("Nueva descripción:");
    const nuevaDescripcion = prompt("> ");

    await db.collection("gastos").updateOne(
        { _id: gasto._id },
        {
            $set: {
                montoGasto: nuevoMonto,
                categoriaGasto: nuevaCategoria,
                descripcionGasto: nuevaDescripcion
            }
        }
    );

    console.log("Gasto actualizado con éxito.");
}

export async function eliminarGasto(db) {
    const gastos = await db.collection("gastos").find().toArray();

    if (gastos.length === 0) {
        console.log("No hay gastos para eliminar.");
        return;
    }

    console.log("=============================================");
    console.log("               Lista de gastos");
    console.log("=============================================");

    if (gastos.length === 0) {
        console.log("No hay gastos registrados");
        return;
    }

    console.table(gastos);

    const index = Number(prompt("Elige el número del gasto que quieres eliminar: "));

    if (isNaN(index) || index < 1 || index > gastos.length) {
        console.log("Opción inválida.");
        return;
    }

    const gastoAEliminar = gastos[index - 1];

    await db.collection("gastos").deleteOne({ _id: gastoAEliminar._id });

    console.log("Gasto eliminado con éxito.");
}
