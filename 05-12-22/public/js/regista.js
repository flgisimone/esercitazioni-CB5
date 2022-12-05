const url_director = "http://localhost:3000/registi"
const delete_url = "http://localhost:3000/regista"
const add_url = "http://localhost:3000/regista"

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

fetch(url_director)
.then(resp => resp.json())
.then(item => creatDirector(item));

const creatDirector = (data) => {

    const containerCardDirector = document.querySelector(".containerCardDirector")

    for (let item of data){

        const id = item.id

        const cardDirector = document.createElement("div")
        const imgDirector = document.createElement("div")
        const nameDirector = document.createElement("span")
        const surnameDirector = document.createElement("span")
        const btnDel = document.createElement("button")

        cardDirector.className="cardDirector";
        imgDirector.className = "imgDirector";
        nameDirector.className = "nameDirector";
        surnameDirector.className = "surnameDirector";
        btnDel.className = "btnDel"

        nameDirector.textContent = item.nome;
        surnameDirector.textContent = item.cognome;
        btnDel.textContent = "Cancella"

        cardDirector.append(imgDirector, nameDirector, surnameDirector, btnDel);
        containerCardDirector.appendChild(cardDirector);
        
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

  const form = document.forms.director.elements;
  const btnAdd = form.btnAdd
  
  btnAdd.addEventListener("click", () => {
    let data = {
        nome: form.nomeDirector.value,
        cognome: form.cognomeDirector.value
    }

    POST (add_url, data)
  })
