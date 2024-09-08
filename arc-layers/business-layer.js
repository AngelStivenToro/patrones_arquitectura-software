const { users } = require("./data-layer");

// Obtener usuario
function getUser() {
  users.map((user, i) => {
    console.log(user.id);
    console.log("-----------------------------");
    console.log("Nombre: " + user.nombre);
    console.log("Correo: " + user.email);
    console.log("Edad: " + user.edad);
    console.log("-----------------------------");
    console.log(" ");
  });
  console.log("0 - Volver al inicio");
  console.log(" ");
}

// Crear usuarios
function createUser(nombre, correo, edad) {
  const lastId = users.reduce((maxId, user) => Math.max(maxId, user.id), 0);

  const newUser = {
    id: lastId + 1,
    nombre: nombre,
    email: correo,
    edad: parseInt(edad, 10),
  };

  users.push(newUser);

  console.log("-----------------------------");
  console.log("Nombre: " + newUser.nombre);
  console.log("Correo: " + newUser.email);
  console.log("Edad: " + newUser.edad);
  console.log("-----------------------------");
  console.log(" ");
}

// Editar usuarios
function editUser(id, option, value) {
  const findUser = users.find((user) => user.id == id);

  if (!findUser) {
    console.log("No existe un usuario con este ID.");
    return;
  }

  console.log(" ");

  if (option == 1) {
    findUser.nombre = value;
  } else if (option == 2) {
    findUser.email = value;
  } else if (option == 3) {
    findUser.edad = value;
  } else {
    return;
  }

  console.log("");
  console.log(findUser.id);
  console.log("-----------------------------");
  console.log("Nombre: " + findUser.nombre);
  console.log("Correo: " + findUser.email);
  console.log("Edad: " + findUser.edad);
  console.log("-----------------------------");
  console.log(" ");
  console.log("Usuario guardado con éxito!");
  console.log(" ");
}

// Eliminar usuarios
function deleteUser(id) {
  const findUser = users.find((user) => user.id == id);

  if (!findUser) {
    console.log("No existe un usuario con este ID.");
    return;
  }

  const newUsers = users.filter((user) => user.id != id);

  users.length = 0;
  users.push(...newUsers);

  console.log(" ");
  console.log("Usuario eliminado con éxito!");
}

module.exports = {
  getUser,
  createUser,
  editUser,
  deleteUser,
};
