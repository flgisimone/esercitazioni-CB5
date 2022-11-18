import { q, GET, POST, c, DELETE, PATCH } from "./utils.js"; // importo le utils
const url = "http://localhost:3000/pokemon"; // assegno alla constante url l'indirizzo del database

let id;

//FORM per aggiunta card Pokemon
const formAdd = document.forms.pokemonAdd; 
const elementAdd = formAdd.elements; 

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: id+1,
    name: elementAdd.pkmName.value,
    type: elementAdd.pkmType.value
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

//FORM per modifiche card Pokemon (PATCH)
const formEdit = document.forms.pokemonEdit;
const elementEdit = formEdit.elements;

formEdit.addEventListener("submit", (e) =>{
  e.preventDefault();

  const id = elementEdit.editpkmID.value

  const data = {
    name: elementEdit.editpkmName.value,
    type: elementEdit.editpkmType.value
  };
  console.log(data)

  PATCH(url, id, data)
  .then(() => location.reload)
  .carch(e => console.log(e))
})

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
const pokemonEditForm = q(".pokemonEdit");

const createCard = (url, id, resPoke) =>{

  const card = c("div")
  const imgDiv = c("div")
  const namePoke = c("h3")
  const typePoke = c("h4")
  const idPoke = c("h4")
  const btnCard = c("div")

  const btnDelete = c("button")
  const imgBtnDelete = c("img")
  const btnEdit = c("button")
  const imgBtnEdit = c("img")
  

  card.className = "card"
  card.classList.add(`bg-${resPoke.type}`); 
  imgDiv.className = "imgDiv"
  namePoke.textContent = resPoke.name
  typePoke.textContent = resPoke.type.toLowerCase()
  idPoke.textContent = resPoke.id
  btnCard.className = "btnCard"
  btnDelete.className = "btnDelete"
  btnEdit.className = "btnEdit"
  imgBtnDelete.setAttribute("src", "./assets/poke.gif")
  imgBtnEdit.setAttribute("src", "./assets/pencil.png")

  btnEdit.addEventListener("click", () => {
    const editForm = document.forms.pokemonEdit;
    const elements = editForm.elements;

    elements.editpkmID.value = id;
    elements.editpkmName.value = namePoke.textContent;
    elements.editpkmType.value = typePoke.textContent;
  })

  btnDelete.append(imgBtnDelete)
  btnEdit.append(imgBtnEdit)
  btnCard.append(btnDelete, btnEdit)
  card.append(imgDiv, namePoke, typePoke, idPoke, btnCard)
  containerCard.append(card)

  btnDelete.addEventListener("click", () => {
    DELETE(url, id)
        .then(() => location.reload())
})

}

