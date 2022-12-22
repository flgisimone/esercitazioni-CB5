import { Header } from "../_header/Header"
import { Footer } from "../_footer/Footer"
import "./Layout.scss"

export const Layout = (props) =>{

    const {
        title = "Un bell'esercizio con React per imparare a fare cose belle!",
    } = props


    return(
        <div className="Container">
            <Header />
            <main className="mainContainer"> <h1>{title}</h1></main>
            <Footer />
        </div>
    );

}