const url_actor = "http://localhost:3000/attori"

fetch(url_actor)
.then(resp => resp.json())
.then(item => createActor(item));

createActor = (data) => {

    const containerCard = document.querySelector(".containerCard")
    

    for (let item of data){
        const cardActor = document.createElement("div")

        const imgActor = document.createElement("div")
        const nameActor = document.createElement("span")
        const surnameActor = document.createElement("span")
        const birthData = document.createElement("span")

        cardActor.className="cardActor";
        imgActor.className = "imgActor";
        nameActor.className = "nameActor";
        surnameActor.className = "surnameActor";
        birthData.className = "birthData";

        nameActor.textContent = "Nome: " + item.nome;
        surnameActor.textContent = "Cognome: " + item.cognome;
        birthData.textContent = "Data di nascita: " + item.data_nascita;

        cardActor.append(imgActor, nameActor, surnameActor, birthData);
        containerCard.appendChild(cardActor);
}}

