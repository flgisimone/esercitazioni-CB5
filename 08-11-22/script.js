fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
.then((response) => response.json())
.then((pokemon) => {
    pokemon.results.forEach((info) => fetch(info.url)
        .then((subResponse) => subResponse.json())
        .then((infoPoke) => createCardPokemon(infoPoke))
        )});

        const sectionEl = document.querySelector(".sectionPokemon");
        const bodyEl = document.querySelector("body");

        const createCardPokemon = (dati) => {
            const cardPokemonDiv = document.createElement("div");
            const pokemonImg = document.createElement("img") 
            const pokemonName = document.createElement("h1");
            const pokemonNumber = document.createElement("h3");
            const typePokemon = document.createElement("h2");
        
            cardPokemonDiv.className = "cardPokemonDiv";
            pokemonImg.setAttribute("src", dati.sprites.front_default)
            pokemonImg.setAttribute("alt", dati.name)
            pokemonName.textContent = dati.name;
            pokemonNumber.textContent = dati.id;
            typePokemon.textContent = dati.types[0].type.name;
        
            cardPokemonDiv.append(pokemonImg, pokemonName, pokemonNumber, typePokemon);
            sectionEl.append(cardPokemonDiv);
            bodyEl.append(sectionEl);

            switch(dati.types[0].type.name){
                case "electric":
                    cardPokemonDiv.style = "background-color:#FCF7DE";
                    break;  
                case "water":
                    cardPokemonDiv.style = "background-color:#DEF3FD";
                    break;  
                case "ground":
                    cardPokemonDiv.style = "background-color:#f4e7da";
                    break;  
                case "rock":
                    cardPokemonDiv.style = "background-color:#d5d5d4";
                    break;  
                case "fairy":
                    cardPokemonDiv.style = "background-color:#fceaff";
                    break;  
                case "poison":
                    cardPokemonDiv.style = "background-color:#98d7a5";
                    break;
                case "bug":
                    cardPokemonDiv.style = "background-color:#f8d5a3";
                    break;
                case "dragon":
                    cardPokemonDiv.style = "background-color:#97b3e6";
                    break;
                case "psychic":
                    cardPokemonDiv.style = "background-color:#eaeda1";
                    break;
                case "flying":
                    cardPokemonDiv.style = "background-color:#F5F5F5";
                    break;
                case "fighting":
                    cardPokemonDiv.style = "background-color:#E6E0D4";
                    break;
                case "normal":
                    cardPokemonDiv.style = "background-color:#F5F5F5";
                    break;
                case "fire":
                    cardPokemonDiv.style = "background-color:#FDDFDF";
                    break;
                case "grass":
                    cardPokemonDiv.style = "background-color:#DEFDE0";
                    break;
                case "ghost":
                    cardPokemonDiv.style = "background-color:#705898";
                    break;
                case "ice":
                    cardPokemonDiv.style = "background-color:#98d8d8";
                    break;
                default:
            }
    };

          
