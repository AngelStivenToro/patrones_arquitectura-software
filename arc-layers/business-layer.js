const { users } = require("./data-layer");

function getUser() {
  users.map((user, i) => {
    console.log(i + 1);
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

function createUser(nombre, correo, edad) {
  const newUser = {
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

module.exports = {
  getUser,
  createUser,
};
