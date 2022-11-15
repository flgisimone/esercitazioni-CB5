import { q, GET, POST, c } from "./utils.js"; // importo le utils
const url = "http://localhost:3000/pokemon"; // assegno alla constante url l'indirizzo del database 

const form = document.forms.pokemon; // assegno alla constante form il nome del form dell'HTML
const element = form.elements; // assegno alla constante element gli input del form

const ul = q(".pokemonList"); // assegno alla constante ul la classe pokemonList dell'HTML

//eseguo una funzione sul form che al clic del bottone submit inserisce nel database i valori degli input dati
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    img: element.pkmImg.value,
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

//eseguo una funzione che al caricamento della pagina manda a schermo i valori inseriti in input
window.onload = GET(url).then((resPoke) => resPoke.map((pkm) => createCard(pkm)
));

//--------------- CREAZIONE CARD -------------------//

const containerCard = q(".containerCard");

const createCard = (resPoke) =>{

  const card = c("div")
  const imgDiv = c("div")
  const imgPoke = c("img")
  const namePoke = c("h3")
  const typePoke = c("h4")

  card.className = "card"
  card.classList.add(`bg-${resPoke.type}`); 
  imgDiv.className = "imgDiv"
  imgPoke.setAttribute("src", resPoke.img)
  imgPoke.setAttribute("alt", resPoke.name)
  namePoke.textContent = "Name: " + resPoke.name
  typePoke.textContent = "Type: " + resPoke.type

  card.append(imgPoke, imgDiv, namePoke, typePoke)
  containerCard.append(card)

}