let i = 1;
let result = `https://pokeapi.co/api/v2/pokemon/${i}`;

fetch(result)
.then((res) => res.json())
.then((res) => createCardPokemon(res));

const cardPokemon = document.createElement("div")
const imgPokemon = document.createElement("img")
const namePokemon = document.createElement("h1")
const idPokemon = document.createElement("h2")
const typePokemon = document.createElement("h3")

const container = document.querySelector(".container")

const createCardPokemon = (res) =>{

  cardPokemon.className = "cardPokemon"
  cardPokemon.classList.add(`bg-${res.types[0].type.name}`) 
  imgPokemon.setAttribute("src", res.sprites.other.dream_world.front_default)
  imgPokemon.setAttribute("alt", res.name)
  namePokemon.textContent = res.name

  if (res.id < 10) {
    idPokemon.textContent = "#00" + res.id;
  } else if (res.id < 100) {
    idPokemon.textContent = "#0" + res.id;
  } else {
    idPokemon.textContent = "#" + res.id;
  }
  typePokemon.textContent = res.types[0].type.name + " / " + res.types[1].type.name;

  cardPokemon.append(imgPokemon, namePokemon, idPokemon, typePokemon)
  container.append(cardPokemon)
}

const btnPrev = document.querySelector(".btnPrev")
const btnNext = document.querySelector(".btnNext")

btnNext.addEventListener("click", () => {
  i++
  result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
  .then((res) => res.json())
  .then((res) => createCardPokemon(res));  
  if (i >= 10) btnNext.disabled = true;
  if (i === 1) btnPrev.disabled = true;
  else btnPrev.disabled = false;
})

btnPrev.addEventListener("click", () => {
  if (i <= 2) 
  btnPrev.disabled = true;
  btnNext.disabled = false;
  i--
  result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
  .then((res) => res.json())
  .then((res) => createCardPokemon(res));
})

window.onload = btnPrev.disabled = true;

