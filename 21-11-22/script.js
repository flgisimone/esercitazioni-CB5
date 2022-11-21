//VERSIONE CON IF

/*const argvs = process.argv
const argv = argvs.slice(2)
const operatore = argv[0]
const num1 = parseFloat(argv[1])
const num2 = parseFloat(argv[2])

if (operatore === "somma" && !isNaN(num1) && !isNaN(num2)){
    console.log("La " + operatore + " è uguale a: " + (num1 + num2));
}
if (operatore === "sottrazione" && !isNaN(num1) && !isNaN(num2)){
    console.log("La " + operatore + " è uguale a: " + (num1 - num2));
}
if (operatore === "divisione" && !isNaN(num1) && !isNaN(num2)){
    if (num2 == 0){
        console.log("Il risultato non esiste")
    } else{
        console.log("La " + operatore + " è uguale a: " + (num1 / num2));
    }
}
if (operatore === "moltiplicazione" && !isNaN(num1) && !isNaN(num2)){
    console.log("La " + operatore + " è uguale a: " + (num1 * num2));
} else{
    console.log("Operatore o numeri non validi")
}*/

// VERSIONE CON SWITCH

function somma(num1, num2){
    parseFloat(num1, num2);
    return num1 + num2;
}

function sottrazione(num1, num2){
    parseFloat(num1, num2);
    return num1 - num2 ;
}

function moltiplicazione(num1, num2){
    parseFloat(num1, num2);
    return num1 * num2;
}

function divisione(num1, num2){
    parseFloat(num1, num2);
    return num1 / num2;
}

const myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case '+':
        let totSomma = somma(parseFloat(myArgs[1]), parseFloat(myArgs[2]));
        console.log(totSomma)
    break;

    case '-':
        let totSottrazione = sottrazione(parseFloat(myArgs[1]), parseFloat(myArgs[2]));
        console.log(totSottrazione)
    break;

    case '*':
        let totMoltiplicazione = moltiplicazione(parseFloat(myArgs[1]), parseFloat(myArgs[2]));
        console.log(totMoltiplicazione)
    break;

    case '/':
        if(myArgs[2] == 0){
            console.log("Il numero non esiste")
            break;
        } else {
            let totDivisione = divisione(parseFloat(myArgs[1]), parseFloat(myArgs[2]));
            console.log(totDivisione)
        }
        break;
    
    default:
    console.log('Errore');
    break
}