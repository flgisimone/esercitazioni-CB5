//Esercizio 1

function sommaArtimetica(n1,n2){
    return n1 + n2;
}

let risultato = sommaArtimetica(5,5);
console.log("Il risultato è: ", risultato)


//Versione con inserimento valori da calcolare parte dell'utente
/*function sommaAritmetica(){
    return n1 + n2
}
 
let n1 = prompt("Inserisci il primo numero: "); 
let n2 = prompt("Inserisci il secondo numero: "); 
n1 = parseFloat(n1); 
n2 = parseFloat(n2); 
 
let risultato = sommaAritmetica(n1, n2); 
console.log(risultato);
alert("Il risultato è: " + risultato);*/

// ---------------------------------------------------------- //

//Esercizio 2

 const character = {
    Nome: "Lucario",
    Razza: "Pokemon",
    Tipo: "Lotta / Acciaio",
    Generazione: "Quarta",
    Pokedex: 448,
    Altezza: "1.2m",
    Peso: "54kg",
    Pre_evoluzione: [
        "\n Riolu (Pre evoluzione)",
        "\n 0.7m",
        "\n 20.2kg",
    ],
    Mega_evoluzione: [
        "\n MegaLucario",
        "\n 1.3m",
        "\n 57.5kg",
    ],
};

console.log("Dati Pokemon: ");
for (const [key, value] of Object.entries(character)) {
    console.log(`, ${key}: ${value}`);
}

console.log(Object.keys(character));
console.log(Object.values(character));

//Il button nell'html è disattivato in quanto la funzione non è attiva.

/*function infoLucario (){
    const character = {
        Nome: "Lucario",
        Razza: "Pokemon",
        Tipo: "Lotta / Acciaio",
        Generazione: "Quarta",
        Pokedex: 448,
        Altezza: "1.2m",
        Peso: "54kg",
        Pre_evoluzione: [
            "\n Riolu (Pre evoluzione)",
            "\n 0.7m",
            "\n 20.2kg",
        ],
        Mega_evoluzione: [
            "\n MegaLucario",
            "\n 1.3m",
            "\n 57.5kg",
        ],
    };

    console.log("Dati Pokemon: ");
    for (const [key, value] of Object.entries(character)) {
        console.log(`, ${key}: ${value}`);
    }
  
    console.log(Object.keys(character));
    console.log(Object.values(character));

    
    alert(
        character.Nome + "\n" 
        + "\n" + character.Razza
        + "\n" + character.Tipo
        + "\n" + character.Generazione
        + "\n" + character.Pokedex
        + "\n" + character.Altezza
        + "\n" + character.Peso
        + "\n");
}*/

// ---------------------------------------------------------- //

//Esercizio 3

/*let nCount = prompt("Inserisci il numero di valori da calcolare: ");
nCount = parseFloat(nCount);
let sum = 0;

for(let i=1; i<=nCount; i++){
    let n = prompt("Inserisci il numero");
    n = parseFloat(n);
    sum =+ n;
}*/

function calculator(){
    let nCount = prompt("Inserisci il numero di valori da calcolare: ");
    nCount = parseFloat(nCount);

    for(let i=1; i<=nCount; i++){
        let n = prompt("Inserisci il numero");
        console.log(n);
        n = parseFloat(n);
    }

    let operator = prompt("Inserisci l'operatore di calcolo tra: \n+ \n-\n* \n/");
    switch (x){
        case "+":
            sum =+ n;
            console.log(sum);
            break;
        case "-":
            sub =- n;
            console.log(sub);
            break;
        case "*":
            mult = mult * n;
            console.log(mult);
            break;    
        case "+":
            div = div / n;
            console.log(div);
            break;
            default:
                console.log ("Inserito operatore o numero non valido");
        }

}

calculator();










    