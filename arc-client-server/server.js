// Server.js
const net = require("net");

const port = 3000;

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  socket.on("data", (data) => {
    const message = data.toString().trim();
    console.log(" ");
    console.log(`Mensaje recibido: ${message}`);
    socket.write(`Servidor recibió: ${message}`);
  });

  socket.on("end", () => {
    console.log(" ");
    console.log("Cliente desconectado");
    console.log(" ");
  });
});

server.listen(port, () => {
  console.log(" ");
  console.log(`Servidor de chat escuchando en puerto ${port}`);
});
