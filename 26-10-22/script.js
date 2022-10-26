/* -------- ESERCIZIO 1 -------- */

const arrayIdentity = ["Giulio Simone", "Floresta", 25, "Diploma"];
console.log(arrayIdentity);

/* -------- ESERCIZIO 2 -------- */

arrayIdentity.splice(2,1);
console.log(arrayIdentity);
arrayIdentity.splice(2,0, "06-11-1996"); 
console.log(arrayIdentity);
arrayIdentity[0] = arrayIdentity[0].toUpperCase();
arrayIdentity[1] = arrayIdentity[1].toUpperCase();
console.log(arrayIdentity);

/* -------- AVANZATO -------- */

/* 

let str = "";

for (let i = 0; i <= 6; i++) {
  str += "#";
  console.log(str);
}

*/

let str = "########";

for (let i = 0; i < 7; i++) {
  str = str.slice(1);
  console.log(str);
}


