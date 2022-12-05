const express = require("express");
const { readFileSync, writeFileSync } = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const middlewareRichiesta = (req, res, next) => {
  console.log("Richiesta ricevuta.");
  
  next();
};

app.listen(3000, () => {
  console.log("Server avviato sulla port 3000");
});

app.get("/home", middlewareRichiesta, function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

app.get("/attori", function (req, res) {

  const attori_json = readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_json);

  const arr_attori = attori.map((data) => {
    const { id, nome, cognome } = data;
    return { id, nome, cognome };
  });
  res.json(arr_attori);
});

app.get("/attore", function (req, res) {
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status().write("Manca un ID!");
  }

  const attori_json = readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_json);

  const attributo = attori.find((attore) => {
    return attore.id == id_attore;
  });
  res.json(attributo);
});

app.post("/attore", function (req, res) {
  const attori_json = readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_json);

  const nuovo_attore = {
    id: attori.length == 0 ? 1 : attori[attori.length - 1].id + 1,
    nome: req.body.nome == undefined ? "" : req.body.nome,
    cognome: req.body.cognome == undefined ? "" : req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  attori.push(nuovo_attore);
  console.log(attori);

  writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).json({ messaggio: "stringa attore creato" });
});

app.delete("/attore", function (req, res) {
  if (req.body.id == undefined) {
    res.status(400).send("Parametro id mancante");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico");
  }

  const id_da_cancellare = req.body.id;

  const attori_json = readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_json);

  const array_deleted = attori.filter((attore) => {
    return attore.id != id_da_cancellare;
  });

  writeFileSync("./src/attori.json", JSON.stringify(array_deleted));
  res.json(array_deleted);
});

//REGISTI

app.get("/registi", middlewareRichiesta, function (req, res) {
  res.sendFile("registi.html", { root: __dirname + "/src" });
});

app.get("/registi", function (req, res) {

  const registi_json = readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_json);

  const arr_registi = registi.map((data) => {
    const { id, nome, cognome } = data;
    return { id, nome, cognome };
  });
  res.json(arr_registi);
});

app.get("/regista", function (req, res) {
  const id_regista = parseInt(req.query.id);
  if (isNaN(id_regista)) {
    res.status().write("Manca un ID!");
  }

  const registi_json = readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_json);

  const attributo = registi.find((regista) => {
    return regista.id == regista;
  });
  res.json(attributo);
});

app.post("/regista", function (req, res) {
  const registi_json = readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_json);

  const nuovo_regista = {
    id: registi.length == 0 ? 1 : registi[registi.length - 1].id + 1,
    nome: req.body.nome == undefined ? "" : req.body.nome,
    cognome: req.body.cognome == undefined ? "" : req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  registi.push(nuovo_regista);
  console.log(registi);

  writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).json({ messaggio: "stringa regista creata" });
});

app.delete("/regista", function (req, res) {
  if (req.body.id == undefined) {
    res.status(400).send("Parametro id mancante");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico");
  }

  const id_da_cancellare = req.body.id;

  const registi_json = readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_json);

  const array_deleted = registi.filter((regista) => {
    return regista.id != id_da_cancellare;
  });

  writeFileSync("./src/registi.json", JSON.stringify(array_deleted));
  res.json(array_deleted);
});