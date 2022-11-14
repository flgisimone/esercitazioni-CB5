let i = 1;
let result = `https://jsonplaceholder.typicode.com/posts/${i}`;

const loader = document.querySelector(".loader")
const container = document.querySelector(".container")

fetch(result)
.then((res) => res.json())
.then((res) => createCard(res))
.finally(() => {
    loader.style = "display:none;"
    container.style = "display:block;"
  });

//Creazione elementi card dinamica

const cardPost = document.querySelector(".cardPost")

const card = document.createElement("div") //contiene div title_id e div phraseBox
const title_id = document.createElement("div") //contiene elemento title ed elemento id
const title = document.createElement("h1")
const id = document.createElement("span")
const phrase = document.createElement("p")

const createCard = (res) => {

    card.className = "card";
    title_id.className = "title_id";

    title.textContent = res.title;
    id.textContent = res.id;
    phrase.textContent = res.body;

    title_id.append(title, id)
    card.append(title_id, phrase)
    cardPost.append(card)

}

const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")

btnNext.addEventListener("click", () => {
  i++
  result = `https://jsonplaceholder.typicode.com/posts/${i}`;
  fetch(result)
  .then((res) => res.json())
  .then((res) => createCard(res));  
  if (i >= 10) btnNext.disabled = true;
  if (i === 1) btnPrev.disabled = true;
  else btnPrev.disabled = false;
})

btnPrev.addEventListener("click", () => {
  if (i <= 2) 
  btnPrev.disabled = true;
  btnNext.disabled = false;
  i--
  result = `https://jsonplaceholder.typicode.com/posts/${i}`;
  fetch(result)
  .then((res) => res.json())
  .then((res) => createCard(res));
})

window.onload = btnPrev.disabled = true;