
export function Button(){

    const textBtn = () =>{
        const App = document.querySelector(".App");
        const textContainer = document.createElement("div");
        const textPar = document.createElement("p");

        textContainer.className = "textContainer";
        textPar.className = "textP";
        textPar.textContent = "Hello World ma col button";

        console.log(textPar.outerText);

        textContainer.append(textPar);
        App.append(textContainer);
    }

    return (
        <button className="button" onClick={textBtn}>
            Cliccami!
        </button>
    );
}