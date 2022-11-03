import champions from "./champions.js";
const body = document.querySelector("body");

//INIZIO SECTION HERO
const hero = document.createElement("section");
hero.className = "hero";
body.appendChild(hero);

//DIV INFO HERO
const infoHero = document.createElement("div")
infoHero.className = "infoHero"
hero.appendChild(infoHero);

const imgInfoHero = document.createElement("img");
imgInfoHero.setAttribute("src", "./media/heroImg.jpg")
imgInfoHero.setAttribute("alt", "img hero")
infoHero.appendChild(imgInfoHero);

const h1InfoHero = document.createElement("h1");
h1InfoHero.textContent = "Choose Your Champions";
infoHero.appendChild(h1InfoHero);

//DIV IMG HERO
const imgHero = document.createElement("div")
imgHero.className = "imgHero"
hero.appendChild(imgHero);

const heroImg = document.createElement("img");
heroImg.setAttribute("src", "./media/imghero.jpg")
heroImg.setAttribute("alt", "img hero 2")
imgHero.appendChild(heroImg);
//FINE SECTION HERO

//INIZIO SECTION FIGHTER
const fighterSection = document.createElement("section"); 
fighterSection.className = "fighterSection"; 
body.appendChild(fighterSection); 

const fighterh1 = document.createElement("h1"); 
fighterh1.textContent = "Fighter"; 
fighterSection.appendChild(fighterh1);

const divFighter = document.createElement("div")
divFighter.className = "divFighter";
fighterSection.appendChild(divFighter);

const createCardFighter = (name, icon, parent) => { //assegnazione constante con relativa callback (name, icon, parent) da inserire nel div 
  const cardEl = document.createElement("div"); //assegnazione constante al div da creare
  cardEl.className = "card"; //assegnazione nome classe da assegnare al div

  const titleEl = document.createElement("h1"); //assegnazione constante all'h1 della classe "card"
  titleEl.textContent = name; //assegnazione nome alla constante corrispondente al valore della chiave "name" dell'object e relativo al primo parametro della callback
  const imgEl = document.createElement("img"); //assegnazione constante all'img della class "card"
  imgEl.setAttribute("src", icon); //assegnazione nome alla costante costante corrispondente al valore della chiave "icon" e relativo al secondo parametro della callback

  cardEl.append(titleEl, imgEl); //aggiunta dell'h1 e l'img (icona) tramite le rispettive constanti "titleEl" e "imgEl" corrispondenti ai valori delle chiavi "name" e "icon" dell'oggetto
  parent.appendChild(cardEl);
};

const fighterEl = document.querySelector(".divFighter");

champions
    .filter((champion) => champion.tags[0] === "Fighter")
    .map((champion) => {
      createCardFighter(
        champion.name,
        champion.icon,
        fighterEl
      );
    });
//FINE SECTION FIGHTER

//INIZIO SECTION ASSASSIN
const assassinSection = document.createElement("section"); 
assassinSection.className = "assassinSection";
body.appendChild(assassinSection);

const assassinh1 = document.createElement("h1");
assassinh1.textContent = "Assassin";
assassinSection.appendChild(assassinh1);

const divAssassin = document.createElement("div")
divAssassin.className = "divAssassin"
assassinSection.appendChild(divAssassin);

const createCardAssassin = (name, icon, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const titleEl = document.createElement("h1");
  titleEl.textContent = name;
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", icon);

  cardEl.append(titleEl, imgEl);
  parent.appendChild(cardEl);
};

const assassinEl = document.querySelector(".divAssassin");

champions
    .filter((champion) => champion.tags[0] === "Assassin")
    .map((champion) => {
      createCardAssassin(
        champion.name,
        champion.icon,
        assassinEl
      );
    });
//FINE SECTION ASSASSIN

  