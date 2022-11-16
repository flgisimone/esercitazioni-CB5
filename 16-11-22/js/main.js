import { q, GET, POST, c, DELETE } from "./utils.js"; // importo le utils
const url = "http://localhost:3000/pokemon"; // assegno alla constante url l'indirizzo del database

let id;

const form = document.forms.pokemon; // assegno alla constante form il nome del form dell'HTML
const element = form.elements; // assegno alla constante element gli input del form

const ul = q(".pokemonList"); // assegno alla constante ul la classe pokemonList dell'HTML

//eseguo una funzione sul form che al clic del bottone submit inserisce nel database i valori degli input dati
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: id+1,
    name: element.pkmName.value,
    type: element.pkmType.value
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
window.onload = GET(url).then((resPoke) => {
    id = resPoke[resPoke.length-1].id 
    resPoke.map((pkm) => {
        createCard(url, pkm.id, pkm)
    })
}
);

//--------------- CREAZIONE CARD -------------------//

const containerCard = q(".containerCard");

const createCard = (url, id, resPoke) =>{

  const card = c("div")
  const imgDiv = c("div")
  const namePoke = c("h3")
  const typePoke = c("h4")
  const idPoke = c("h4")
  const btnDelete = c("button")
  const imgBtnDelete = c("img")

  card.className = "card"
  card.classList.add(`bg-${resPoke.type}`); 
  imgDiv.className = "imgDiv"
  namePoke.textContent = "Name: " + resPoke.name
  typePoke.textContent = "Type: " + resPoke.type
  idPoke.textContent = "ID: " + resPoke.id
  btnDelete.className = "btnDelete"
  imgBtnDelete.setAttribute("src", "./assets/poke.gif")

  btnDelete.append(imgBtnDelete)
  card.append(imgDiv, namePoke, typePoke, idPoke, btnDelete)
  containerCard.append(card)

  btnDelete.addEventListener("click", () => {
    DELETE(url, id)
        .then(() => location.reload())
})

}