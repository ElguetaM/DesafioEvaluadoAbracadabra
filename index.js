const express = require("express");
const app = express();
const port = 3000;

const validar = require("./middlewares/middleware");

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);

app.use(express.static("assets/img"));

app.get("/abracadabra/usuarios", function (req, res) {
  res.sendFile(__dirname + "/usuarios.json");
});

app.get("/abracadabra/juego/:usuario", validar, (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/abracadabra/conejo/:n", (req, res) => {
  const numero = Math.floor(Math.random() * (4 - 1) + 1);
  const n = req.params.n;
  n == numero
    ? res.sendFile(__dirname + "/assets/img/conejito.jpg")
    : res.sendFile(__dirname + "/assets/img/voldemort.jpg");
});

app.get("*", (req, res) => {
  res.send("<h1>Esta página no existe...</h1>");
});
