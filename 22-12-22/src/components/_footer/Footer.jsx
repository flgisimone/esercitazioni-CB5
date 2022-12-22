import "./footer.scss"

export const Footer = () =>{

    const sitemapItems = [
        { label: "Home", href: "#home", id: 1 },
        { label: "Chi sono", href: "#about", id: 2 },
        { label: "Portfolio", href: "#portfolio", id: 3 },
        { label: "Contattami", href: "#contattami", id: 4 },
    ]

    return(
        <footer className="Footer">
            <div className="containerFooter">
                <div className="logo">
                    <span>LOGO</span>
                </div>
                <nav className="navSitemap">
                    <h5>Sitemap</h5>
                    <ul className="ulSitemap" role="menu">
                        {
                            sitemapItems.map(function(sitemapItems){
                                return(
                                    <li className="liSitemap" key={sitemapItems.id} role="sitemapItem">
                                        <a href={sitemapItems}>{sitemapItems.label}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <span>Made with ⚛️ by Giulio Simone Floresta</span>
        </footer>
    )

}