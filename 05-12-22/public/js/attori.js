const url_actor = "http://localhost:3000/attori"
const delete_url = "http://localhost:3000/attore"
const add_url = "http://localhost:3000/attore"

let id;

const DELETE = async (url,id) => {
    await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'id':id})
    });
    return res.json();
};

fetch(url_actor)
.then(resp => resp.json())
.then(item => createActor(item));

const createActor = (data) => {

    const containerCardActor = document.querySelector(".containerCardActor")

    for (let item of data){

        const id = item.id

        const cardActor = document.createElement("div")
        const imgActor = document.createElement("div")
        const nameActor = document.createElement("span")
        const surnameActor = document.createElement("span")
        const btnDel = document.createElement("button")

        cardActor.className="cardActor";
        imgActor.className = "imgActor";
        nameActor.className = "nameActor";
        surnameActor.className = "surnameActor";
        btnDel.className = "btnDel"

        nameActor.textContent = item.nome;
        surnameActor.textContent = item.cognome;
        btnDel.textContent = "Cancella"

        cardActor.append(imgActor, nameActor, surnameActor, btnDel);
        containerCardActor.appendChild(cardActor);
        
        btnDel.addEventListener("click", (e) =>{
            DELETE(delete_url, id)
            console.log(id)
            location.reload();
        })
}}

const POST = async (BASE_URL, data) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams( data ),
    });
    return res.json();
  };

  const form = document.forms.actor.elements;
  const btnAdd = form.btnAdd
  
  btnAdd.addEventListener("click", () => {
    let data = {
        nome: form.nomeActor.value,
        cognome: form.cognomeActor.value
    }

    POST (add_url, data)
  })
