const express = require("express");
const fs = require ("fs")

const app = express()

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000")
})

app.get("/home", function (req, res) {
    res.sendFile("index.html", {root: __dirname + "/src"})
});

app.get("/attori", function(req, res){
    const attori_text = fs.readFileSync("./src/attori.json", "utf8");
    const attori = JSON.parse(attori_text)

    const arr_attori = attori.map((att) => {
        const id = att.id;
        const nome = att.nome;
        const cognome = att.cognome;
        const data_nascita = att.data_nascita

        return {id, nome, cognome, data_nascita}
    });

    res.json(arr_attori)
});

app.get("/attore", function(req, res){
    const id_attore = parseInt(req.query.id)
    if(isNan(id_attore)){
        res.status(400).send("Parametro mancante");
    }

    const attori_text = fs.readFileSync(".src/attori.json", "utf8")
    const attori = JSON.parse(attori_text);

    const attr = attori.find((attore) => {
        return attore.id == id_attore;
    });

    if(typeof attr === "undefined"){
        res.status(400).send("Attore non trovato!");
    } else{
        res.json(attr);
    }
});

app.post("/attore", function(req, res){
    if(req.body.nome == undefined){
        res.status(400).send("Parametro nome mancante!")
    }
    if(req.body.nome === undefined){
        res.status(400).send("Parametro cognome mancante")
    }

    const nuovo_attore = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const attori_text = fs.readFileSynv("./src/attori.json", "utf8");
    const attori = JSON.parse(attori_text);

    const index = Number(nuovo.attore.id)-1;
    attori[index] = nuovo_attore;

    fs.writeFileSync('./src/attori.json',JSON.stringify(attori));
    res.status(200).send("Attore creato");
})

app.put("/attore", function(req, res){
    if(req.body.nome == undefined){
        res.status(400).send("Parametro nome mancante!")
    }
    if(req.body.nome === undefined){
        res.status(400).send("Parametro cognome mancante")
    }

    const nuovo_attore = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);

    const index = attori.findIndex((attore) => {
        return attore.id === nuovo_attore.id
    });

    if (index > 0){
        attori.splice(index, 1, nuovo_attore);
        fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
        res.status(200).send("Attore aggiornato");
    } else {
        res.status(200).send("Attore non trovato")
    }
});

app.delete("/attore", function(req, res){
    if (req.body.id === undefined){
        res.status(400).send("Parametro id mancante!");
    }
    if (isNaN(parseInt(req.body.id))) {
        res.status(400).send("Parametro non numerico!");
    }

    const id_da_cancellare = req.body.id;

    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);

    const attr = attori.filter((attore)=>{
        return attore.id == id_da_cancellare;
    });

    if (attr.length > 0) {
        const array_deleted = attori.filter((attore)=>{
            return attore.id != id_da_cancellare;
        });
        fs.writeFileSync('./src/attori.json',JSON.stringify(array_deleted));
        res.status(200).send("Attore cancellato");
    } else {
        res.status(200).send("Attore da cancellare non trovato");
    }
})

