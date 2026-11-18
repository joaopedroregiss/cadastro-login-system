const express = require("express");
const cors = require("cors");
const sqlite = require("sqlite3");
const path = require("path");

const app = express();
app.use(cors());

var db = new sqlite.Database("Database.sqlite");

function create_() {
  var query = "CREATE TABLE LOGIN (ID INTEGER PRIMARY KEY AUTOINCREMENT, USUARIO VARCHAR, SENHA VARCHAR, NOME VARCHAR)";
  db.run(query, (err) => {
    if(err) console.log(err);
    else console.log("Table criada login com sucesso!")
  })
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
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