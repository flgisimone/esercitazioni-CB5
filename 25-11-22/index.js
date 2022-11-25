// inclusione modulo express
const express = require("express");
// inclusione nostro modulo calcolatrice
const mod_calc = require("./src/modulo_calcolatrice");

const app = express();

// rende disponibile all'esterno la cartella public
app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000!");
});

//HOME
app.get("/pagina_calcolatrice", function(req, res){
    res.sendFile("home.html", {root: __dirname+"/src/resources"});
});

//SOMMA
app.get("/somma", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1 + " param2: " + p2);
    const result = mod_calc.somma(p1, p2);
    console.log("risultato: " + result);
    res.status(200).send(result + "");
});

app.get("/pagina_somma", function(req, res){
    res.sendFile("somma.html", {root: __dirname+"/src/resources"});
});

//SOTTRAZIONE
app.get("/sottrazione", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1 + " param2: "+ p2);
    const result = mod_calc.sottrazione(p1, p2);
    console.log("risultato: " + result);
    res.status(200).send(result + "");
});

app.get("/pagina_sottrazione", function(req, res){
    res.sendFile("sottrazione.html", {root: __dirname+"/src/resources"});
});

//MOLTIPLICAZIONE
app.get("/moltiplicazione", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1 + " param2: " + p2);
    const result = mod_calc.moltiplicazione(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/pagina_moltiplicazione", function(req, res){
    res.sendFile("moltiplicazione.html", {root: __dirname+"/src/resources"});
});

//DIVISIONE
app.get("/divisione", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: " + p1 + " param2: " + p2);
    const result = mod_calc.divisione(p1, p2);
    console.log("risultato: " + result);
    res.status(200).send(result + "");
});

app.get("/pagina_divisione", function(req, res){
    res.sendFile("divisione.html", {root: __dirname+"/src/resources"});
});

