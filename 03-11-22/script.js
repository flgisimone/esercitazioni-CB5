import champions from "./champions.js"


//---------------------FIGHTER
const fighterSection = document.createElement("section");
const fightertitle = document.createElement("span");  
const divFighter = document.createElement("div")

fighterSection.className = "fighterSection";
fightertitle.textContent = "Combattenti"; 
divFighter.className = "divFighter";

choose__Champion.appendChild(fighterSection); 
fighterSection.appendChild(fightertitle);
fighterSection.appendChild(divFighter);

const createCardFighter = (name, icon, parent) => { 
    const cardEl = document.createElement("div"); 
    cardEl.className = "card";
    
    const titleEl = document.createElement("span"); 
    titleEl.textContent = name; 
    const imgEl = document.createElement("img"); 
    imgEl.setAttribute("src", icon); 
    
    cardEl.append(titleEl, imgEl);
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

//---------------------ASSASSIN
const assassinSection = document.createElement("section"); 
const assassintitle = document.createElement("span");
const divAssassin = document.createElement("div");

assassinSection.className = "assassinSection";
assassintitle.textContent = "Assassini";
divAssassin.className = "divAssassin";

choose__Champion.appendChild(assassinSection);
assassinSection.appendChild(assassintitle);
assassinSection.appendChild(divAssassin);

const createCardAssassin = (name, icon, parent) => {
    const cardEl = document.createElement("div");
    const titleEl = document.createElement("span");
    const imgEl = document.createElement("img");

    cardEl.className = "card";
    titleEl.textContent = name;
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

//---------------------MAGE
const mageSection = document.createElement("section"); 
const magetitle = document.createElement("span");
const divMage = document.createElement("div");
      
mageSection.className = "mageSection";
magetitle.textContent = "Maghi";
divMage.className = "divMage";
      
choose__Champion.appendChild(mageSection);
mageSection.appendChild(magetitle);
mageSection.appendChild(divMage);
      

const createCardMage = (name, icon, parent) => {
    const cardEl = document.createElement("div");
    const titleEl = document.createElement("span");
    const imgEl = document.createElement("img");

    cardEl.className = "card";
    titleEl.textContent = name;
    imgEl.setAttribute("src", icon);
        
    cardEl.append(titleEl, imgEl);
    parent.appendChild(cardEl);
    };
        
    const mageEl = document.querySelector(".divMage");
        
    champions
        .filter((champion) => champion.tags[0] === "Mage")
        .map((champion) => {
            createCardMage(
            champion.name,
            champion.icon,
            mageEl
            );
        });

//---------------------TIRATORI
const marksmanSection = document.createElement("section"); 
const marksmantitle = document.createElement("span");
const divMarksman = document.createElement("div");
      
marksmanSection.className = "marksmanSection";
marksmantitle.textContent = "Tiratori";
divMarksman.className = "divMarksman";
      
choose__Champion.appendChild(marksmanSection);
marksmanSection.appendChild(marksmantitle);
marksmanSection.appendChild(divMarksman);
      

const createCardMarksman = (name, icon, parent) => {
    const cardEl = document.createElement("div");
    const titleEl = document.createElement("span");
    const imgEl = document.createElement("img");

    cardEl.className = "card";
    titleEl.textContent = name;
    imgEl.setAttribute("src", icon);
        
    cardEl.append(titleEl, imgEl);
    parent.appendChild(cardEl);
    };
        
    const marksmanEl = document.querySelector(".divMarksman");
        
    champions
        .filter((champion) => champion.tags[0] === "Marksman")
        .map((champion) => {
            createCardMarksman(
            champion.name,
            champion.icon,
            marksmanEl
            );
        });

//---------------------SUPPORTI
const supportSection = document.createElement("section"); 
const supporttitle = document.createElement("span");
const divSupport = document.createElement("div");
      
supportSection.className = "supportSection";
supporttitle.textContent = "Supporti";
divSupport.className = "divSupport";
      
choose__Champion.appendChild(supportSection);
supportSection.appendChild(supporttitle);
supportSection.appendChild(divSupport);
      

const createCardSupport = (name, icon, parent) => {
    const cardEl = document.createElement("div");
    const titleEl = document.createElement("span");
    const imgEl = document.createElement("img");

    cardEl.className = "card";
    titleEl.textContent = name;
    imgEl.setAttribute("src", icon);
        
    cardEl.append(titleEl, imgEl);
    parent.appendChild(cardEl);
    };
        
    const supportEl = document.querySelector(".divSupport");
        
    champions
        .filter((champion) => champion.tags[0] === "Support")
        .map((champion) => {
            createCardSupport(
            champion.name,
            champion.icon,
            supportEl
            );
        });

//---------------------TANK
const tankSection = document.createElement("section"); 
const tankttitle = document.createElement("span");
const divTank = document.createElement("div");
      
tankSection.className = "tankSection";
tankttitle.textContent = "Tank";
divTank.className = "divTank";
      
choose__Champion.appendChild(tankSection);
tankSection.appendChild(tankttitle);
tankSection.appendChild(divTank);
      

const createCardTank = (name, icon, parent) => {
    const cardEl = document.createElement("div");
    const titleEl = document.createElement("span");
    const imgEl = document.createElement("img");

    cardEl.className = "card";
    titleEl.textContent = name;
    imgEl.setAttribute("src", icon);
        
    cardEl.append(titleEl, imgEl);
    parent.appendChild(cardEl);
    };
        
    const tankEl = document.querySelector(".divTank");
        
    champions
        .filter((champion) => champion.tags[0] === "Tank")
        .map((champion) => {
            createCardTank(
            champion.name,
            champion.icon,
            tankEl
            );
        });

const buttonEl = document.querySelectorAll(".buttonPlay");
const buttonEls = document.querySelectorAll(".buttonPlay");
buttonEls.forEach(button =>{
    button.addEventListener ("click", () => alert("Server momentaneamente offline"));
})

