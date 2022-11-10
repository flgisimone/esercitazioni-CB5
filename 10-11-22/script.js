const btn = document.querySelector(".btn-generator");  //dichiaro una constante btn corrispondente alla classe btn-generator
const advice = document.querySelector(".advice");      //dichiaro una constante corrispondente alla classe advice
const idAdvice = document.querySelector(".idAdvice")   //dichiaro una costante corrispondente alla classe idAdvice
const urlAdvice = "https://api.adviceslip.com/advice"; //dichiato una constate corrispondete all'endpoint


const getAdvice = (URL) => {                        // dichiaro una constante corrispondete ad una funzione che ha come argomento URL
  fetch(URL, { cache: "no-cache" })                 // eseguo il fetch andando a stabilire che non bisogna memorizzare nulla nella cache
    .then((res) => res.json())                      // attraverso il .then viene restituita la promise che viene convertita in JSON
    .then((res) => {                                // si richiama la promise convertita in json e tramite la funzione andiamo a sostituire nelle varie classi il contenuto con quello presente nell'end point
        idAdvice.innerHTML = "ADVICE #"+res.slip.id //andiamo ad inserire l'id dell'endpoint dentro la classe idAdvice
        advice.innerHTML = `"`+res.slip.advice+`"`  //andiamo ad inserire l'advice dell'endpoint dentro la classe advice
    })
    .catch((e) => console.log("Error:" + e));       //utilizzando il metodo catch verrà segnalato in console gli errori ove presenti
};

const onFirstLoad = () => {                         //dichiaro una constante corrispondente ad una funzione
  btn.addEventListener("click", () => {             //assegno alla constante btn un evento che al click esegue richiama la funzione getAdvice
    getAdvice(urlAdvice);                           //la funzione getAdvice in questo caso avrà al suo interno come parametro l'end-point
  });
  getAdvice(urlAdvice);                             //invoco la funzione
};

window.onload = onFirstLoad;                        //al caricamento della pagina viene eseguira la funzione onFirstLoad