export function Button(){

    const textBtn = () =>{
        const textP = document.querySelector(".textP")
        console.log("Hello world");
        textP.style = "display: block";
    }

    return (
        <button className="button" onClick={textBtn}>
            Cliccami!
        </button>
    );

}