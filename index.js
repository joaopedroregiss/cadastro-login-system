const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("okay");
});

app.get("/api/:param/:param2", (req, res) => {
  console.log("Usuario: " + req.params.param)
  console.log("Senha: " + req.params.param2)

  if (req.params.param == "joaopedro" && req.params.param2 == '123') {
    res.send('1');
  } else {
    res.send('0');
  }
});

app.listen(3000, () => {
  console.log("Rodando em http://localhost:3000")
});