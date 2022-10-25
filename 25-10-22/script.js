let num1 = prompt("Inserisci il primo numero da calcolare");
num1 = parseFloat(num1);
let operator = prompt ("Inserisci l'operatore di calcolo tra: \n + (addizione) \n - (sottrazione) \n / (divisione) \n * (moltiplicazione)");
let num2 = prompt ("Inserisci il secondo numero da calcolare");
num2 = parseFloat(num2);

 if (operator === "+" || operator === "-" || operator === "/" || operator === "*"){
    if (operator === "+"){
        let sum = num1 + num2;
        sum = parseFloat (sum);
        console.log("Il risultato della somma è: ", sum);
        alert ("Il risultato della somma è " + sum);
    } else if(operator === "-"){
        let diff = num1 - num2;
        diff = parseFloat (diff);
        console.log("Il risultato della sottrazione è: ", diff);
        alert ("Il risultato della sottrazione è " + diff);
    } else if(operator === "/"){
        let div = num1 / num2;
        div = parseFloat (div);
        console.log("Il risultato della divisione è: ", div);
        alert ("Il risultato della divisione è " + div);
    } else if(operator === "*"){
        let molt = num1 * num2;
        molt = parseFloat (molt);
        console.log("Il risultato della moltiplicazione è: ", molt);
        alert ("Il risultato della moltiplicazione è " + molt);
    } 
} else {
    alert ("Hai utilizzato un operatore di calcolo o un numero sconosciuto :(");
} 

/*switch (operator){
    case ("+"):
        let sum = num1 + num2;
        sum = parseFloat (sum);
        console.log("Il risultato della somma è: ", sum);
        alert ("Il risultato della somma è " + sum);
    break;
    case ("-"):
        let diff = num1 - num2;
        diff = parseFloat (diff);
        console.log("Il risultato della sottrazione è: ", diff);
        alert ("Il risultato della sottrazione è " + diff);
    break;
    case ("/"):
        let div = num1 / num2;
        div = parseFloat (div);
        console.log("Il risultato della divisione è: ", div);
        alert ("Il risultato della divisione è " + div);
     break;
     case ("*"):
        let molt = num1 * num2;
        molt = parseFloat (molt);
        console.log("Il risultato della moltiplicazione è: ", molt);
        alert ("Il risultato della moltiplicazione è " + molt);
     break;
     default:  
     alert ("Hai utilizzato un operatore di calcolo o un numero sconosciuto :(");
}*/
