const pokemonArray = []; //creazione array vuoto che funge da contenitore per ogni singolo url

for (let i = 1; i <= 150; i++) { //inizializzazione di un ciclo che ha come scopo includere nell'array fino a 150 url
    pokemonArray.push(`https://pokeapi.co/api/v2/pokemon/${i}/`); //push degli url nell'array
  }

  let request = pokemonArray.map((url) => {//assegnazione di un valore "request" all'array (pokemonArray) per mappare gli url
    return fetch(url).then((res) => res.json()); //ritorno dell'array mappato con gli url
  });
  
  Promise.all(request).then((res) => res.map((r) => createCardPokemon(r)))
  //consumo dell'array di promises e map per prendere i singoli oggetti per la creazione delle card

  const sectionEl = document.querySelector(".sectionPokemon");
  const bodyEl = document.querySelector("body");

  const createCardPokemon = (dati) => {
    const cardPokemonDiv = document.createElement("div");
    cardPokemonDiv.className = "cardPokemonDiv";
    cardPokemonDiv.classList.add(`bg-${dati.types[0].type.name}`); 
    //aggiunta della classe che identifica il colore tramite il metodo "bg-" 

    const pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("src", dati.sprites.front_default)
    pokemonImg.setAttribute("alt", dati.name)

    const pokemonName = document.createElement("h1");
    pokemonName.textContent = dati.name;

    const pokemonId = document.createElement("h3");
    pokemonId.className = "idPokemon"; //creazione della classe dell'h3
    pokemonId.textContent = "# " + createId(dati.id); //invocazione della funzione per generare l'id
    function createId(id){ // funzione per creare l'id in base al numero
      if (!id) return null;
      if (id < 10) {return `00${id}`}
      else if (id < 100) {return `0${id}`}
      return id
    }

    const typePokemon = document.createElement("h2");
    typePokemon.textContent = "Type: " + dati.types[0].type.name;

    cardPokemonDiv.append(pokemonImg, pokemonName, pokemonId, typePokemon);
    sectionEl.append(cardPokemonDiv);
    bodyEl.append(sectionEl);
  }