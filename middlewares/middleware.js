let validar = (req, res, next) => {
  const fs = require("fs");
  let user = JSON.parse(
    fs.readFileSync("D:/Bootcamp/DesafioAbracadabra/usuarios.json")
  ).usuarios;
  let usuario = req.params.usuario;
  if (user.includes(usuario)) {
    next();
  } else {
    res.sendFile("D:/Bootcamp/DesafioAbracadabra/assets/img/who.jpeg");
  }
};

module.exports = validar;
