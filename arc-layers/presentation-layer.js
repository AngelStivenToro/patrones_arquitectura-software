const readline = require("readline");
const { getUser, createUser } = require("./business-layer");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function optionSelected(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function timeSignOut(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mostrarMenu() {
  let salir = false;

  while (!salir) {
    console.log("-------------------------------------");
    console.log(" ");
    console.log("SISTEMA DE ADMINISTRACION DE USUARIO");
    console.log(" ");
    console.log("-------------------------------------");
    console.log("Opciones");
    console.log(" ");
    console.log("1 - Ver usuarios");
    console.log("2 - Crear usuario");
    console.log("3 - Editar usuario");
    console.log("4 - Eliminar usuario?");
    console.log("5 - Salir del sistema");
    console.log(" ");
    console.log("---------------------");

    const opcion = await optionSelected("Selecciona una opción: ");
    console.log(" ");

    switch (opcion) {
      case "1":
        console.log(" ");
        getUser();
        const backMenu = await optionSelected("Volver al menú: ");
        if (backMenu === "0") {
          console.log("Volviendo al menú principal...");
          console.log(" ");
          continue;
        }
        break;
      case "2":
        const nombre = await optionSelected("Introduce el nombre del nuevo usuario: ");
        const correo = await optionSelected("Introduce el correo del nuevo usuario: ");
        const edad = await optionSelected("Introduce la edad del nuevo usuario: ");

        createUser(nombre, correo, edad);

        console.log("Nuevo usuario creado exitosamente.");
        console.log(" ");
        break;
      case "3":
        const idUsuario = await optionSelected(
          "Introduce el ID del usuario a editar: "
        );
        break;
      case "4":
        const idEliminar = await optionSelected(
          "Introduce el ID del usuario a eliminar: "
        );
        break;
      case "5":
        console.log("Cerrando sesión...");
        await timeSignOut(2000);
        console.log("Sesión Cerrada.");
        salir = true;
        break;
      default:
        console.log(
          "Opción no válida. Por favor, selecciona una opción entre 1 y 5."
        );
    }
  }

  rl.close();
}

mostrarMenu();
