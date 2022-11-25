// FUNZIONI OPERAZIONI
const formElement = document.forms.formEl.elements;
const btnCalc = document.querySelector(".btnCalc")
const btnSum = formElement.btnSum;
const btnDiff = formElement.btnDiff;
const btnMult = formElement.btnMult;
const btnDiv = formElement.btnDiv;
const risEl = document.querySelector("h3");

console.log(formElement)

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data));
};

// EVENTO SOMMA AL CLICK

if(formElement[2] === btnSum){
  btnSum.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });  
} else if(formElement[2] === btnDiff){
  btnDiff.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
} else if(formElement[2] === btnMult){
  btnMult.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
} else if(formElement[2] === btnDiv){
  btnDiv.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });}





