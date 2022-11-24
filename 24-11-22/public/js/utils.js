function func_somma() {
    const fai_somma = async () => {
        //param1 = prendere valore da html
        const url = "http://localhost:3000/somma?param1=2&param2=3";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        return await res.json();
    }
    let result =  fai_somma(); 
    alert(result);
}

function func_sottrai() {
    const fai_sottrazione = async () => {
        //param1 = prendere valore da html
        const url = "http://localhost:3000/sottrazione?param1=2&param2=3";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        //alert(res);
        return await res.json();
    }
    let result =  fai_sottrazione(); 
    alert(result);
}

function func_moltiplicazione() {
    const fai_moltiplicazione = async () => {
        //param1 = prendere valore da html
        const url = "http://localhost:3000/moltiplicazione?param1=2&param2=3";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        //alert(res);
        return await res.json();
    }
    let result =  fai_moltiplicazione(); 
    alert(result);
}

function func_divisione() {
    const fai_divisione = async () => {
        //param1 = prendere valore da html
        const url = "http://localhost:3000/divisione?param1=2&param2=3";
        console.log("Async start");
        const res = await fetch(url);
        console.log(res);
        //alert(res);
        return await res.json();
    }
    let result =  fai_divisione(); 
    alert(result);
}


