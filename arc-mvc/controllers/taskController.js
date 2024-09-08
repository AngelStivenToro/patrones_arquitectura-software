// controllers/taskController.js
const readline = require("readline");
const taskModel = require("../models/taskModel");
const taskView = require("../views/taskView");

// delay de cierre de sesión
function timeSignOut(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("-------------------------------------");
  console.log(" ");
  console.log("SISTEMA DE ADMINISTRACION DE TAREAS");
  console.log(" ");
  console.log("-------------------------------------");
  console.log("Opciones");
  console.log("1. Ver todas las tareas");
  console.log("2. Añadir tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Eliminar tarea");
  console.log("5. Salir");
}

function optionSelected(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function handleMenuChoice(opcion) {
  switch (opcion) {
    case "1":
      const tasks = taskModel.getAllTasks();
      taskView.showTasks(tasks);
      await optionSelected("Presiona Enter para volver al menú principal...");
      break;
    case "2":
      rl.question("Descripción de la tarea: ", (description) => {
        taskModel.addTask(description);
        taskView.showMessage("Tarea añadida.");
        showMenuOptions();
      });
      return;
    case "3":
      rl.question("ID de la tarea a marcar como completada: ", (id) => {
        taskModel.markTaskAsCompleted(parseInt(id));
        taskView.showMessage("Tarea marcada como completada.");
        showMenuOptions();
      });
      return;
    case "4":
      rl.question("ID de la tarea a eliminar: ", (id) => {
        taskModel.deleteTask(parseInt(id));
        taskView.showMessage("Tarea eliminada.");
        showMenuOptions();
      });
      return;
    case "5":
      console.log("Cerrando sesión...");
      await timeSignOut(1500);
      console.log("Sesión Cerrada.");
      rl.close();
      return;
    default:
      taskView.showMessage("Opción no válida.");
  }

  showMenuOptions();
}

async function showMenuOptions() {
  showMenu();
  const opcion = await optionSelected("Elija una opción: ");
  await handleMenuChoice(opcion);
}

function startApp() {
  showMenuOptions();
}

module.exports = { startApp };
