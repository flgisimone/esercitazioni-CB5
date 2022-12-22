import "./header.scss"

export const Header = () =>{

    const menuItems = [
        { label: "Home", href: "#home", id: 1 },
        { label: "Chi sono", href: "#about", id: 2 },
        { label: "Portfolio", href: "#portfolio", id: 3 },
        { label: "Contattami", href: "#contattami", id: 4 },
    ];

    const btnOpenMenu = () =>{
        const ulMenu = document.querySelector(".ulMenu");
        const bnOpenMenu = document.querySelector(".bnOpenMenu");
        const bnCloseMenu = document.querySelector(".bnCloseMenu");
        ulMenu.style = "display: flex";
        bnOpenMenu.style = "display: none";
        bnCloseMenu.style = "display: flex";
    }

    const btnCloseMenu = () =>{
        const ulMenu = document.querySelector(".ulMenu");
        const bnOpenMenu = document.querySelector(".bnOpenMenu");
        const bnCloseMenu = document.querySelector(".bnCloseMenu");
        ulMenu.style = "display: none";
        bnOpenMenu.style = "display: flex";
        bnCloseMenu.style = "display: none";
    }

    return(
        <section className="header">
            <div className="containerHeader">
                <div className="logo">
                    <span>LOGO</span>
                </div>
                <div className="menuContainer">
                    <nav className="navMenu">
                        <ul className="ulMenu" role="menu">
                            {
                                menuItems.map(function(menuItem){

                                    return (
                                        <li className = "liItem"key={menuItem.id} role = "menuitem">
                                            <a href={menuItem.href}>{menuItem.label}</a>
                                        </li>
                                    )                      
                                })
                            }
                        </ul>
                        <button className="bnOpenMenu" onClick = {(btnOpenMenu)}><i className="fa-solid fa-bars"></i></button>
                        <button className="bnCloseMenu" onClick = {btnCloseMenu}><i className="fa-solid fa-circle-xmark"></i></button>
                    </nav>
                </div>
            </div>
        </section>
    )

}