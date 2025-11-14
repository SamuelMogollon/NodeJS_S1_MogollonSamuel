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
        fechaGasto: dayjs().format("DD/MM/YYYY")
    });

    console.log("Gasto registrado con éxito");
}

export function listarGastos() {
  console.clear();
  console.log("Lista de gastos");
  console.log("--------------------------------");

  if (dataSave.length === 0) {
    console.log("No hay gastos registrados");
    return;
  }

  console.table(dataSave);
}
