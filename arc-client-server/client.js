// Client.js
const net = require("net");
const readline = require("readline");

const host = "127.0.0.1";
const port = 3000;

const client = new net.Socket();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.connect(port, host, () => {
  console.log("Conectado al servidor");
  rl.setPrompt("Escribe un mensaje: ");
  rl.prompt();
});

client.on("data", (data) => {
  console.log(data.toString());
  rl.prompt();
});

client.on("close", () => {
  console.log("Conexión cerrada");
  rl.close();
});

client.on("error", (err) => {
  console.error("Error en el cliente:", err);
});

rl.on("line", (line) => {
  client.write(line);
});
