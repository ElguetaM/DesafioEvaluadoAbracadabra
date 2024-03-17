let validar = (req, res, next) => {
  const fs = require("fs");
  let user = JSON.parse(
    fs.readFileSync("D:/Bootcamp/DesafioAbracadabra/usuarios.json")
  ).usuarios;
  let usuario = req.params.usuario;

  usuario = usuario.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });

  if (user.includes(usuario)) {
    next();
  } else {
    res.sendFile("D:/Bootcamp/DesafioAbracadabra/assets/img/who.jpeg");
  }
};

module.exports = validar;
