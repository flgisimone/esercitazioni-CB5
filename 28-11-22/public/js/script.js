const form = document.forms.calcolatrice.elements
const param1 = form.par1
const param2 = form.par2
const btn = document.querySelectorAll(".btn")
const risultato = document.querySelector("h2")

const GET = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => { risultato.innerHTML = "Risultato: " + data.risultato });
  };

for(let i = 0 ; i < btn.length; i++){

    btn[i].addEventListener("click", (e) => {
        e.preventDefault();
        const par1 = param1.value;
        const par2 = param2.value;
        const par3 = btn[i].classList[1]
        console.log(par1, par2)
        console.log(btn[i])
        console.log(btn[i].classList[1])

        let url = `http://localhost:3000/calcolatrice?param1=${par1}&param2=${par2}&param3=${par3}`
        GET(url)
    }) 

}



