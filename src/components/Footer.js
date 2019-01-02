import React from 'react'   /* eslint-disable */



const Footer = () => (
    <div>
            <section className=" section secteurdark has-text-centered is-medium" id="contact">
                    <h1 className="title titlewhite is-size-4-mobile"> ME SUIVRE </h1>
                    <a aria-hidden="true" href="https://www.instagram.com/bijoulisa_/"><h1 className="title titlewhite has-text-left is-size-5 ">@bijoulisa_ </h1></a>
                    <div className="level" style={{marginTop: "40px"}}>
                            <script src="https://snapwidget.com/js/snapwidget.js"></script>
                            <iframe src="https://snapwidget.com/embed/623987" className="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{border:"none", overflow:"hidden", width:"100%"}}></iframe>
                    </div>  
                    
                    <nav className="navbar">
                        <div className="navbar" >
                                <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/">FACEBOOK </a> 
                                <p className="navbar-item-trait"> / </p>                            
                                <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.instagram.com/elisabeth_aht/" >INSTAGRAM </a>
                                <p className="navbar-item-trait"> / </p>                            
                                <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="#">TWITTER </a>
                        </div>  
                    </nav>
            </section>

            <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                        <strong>© L'hirondelle Reviendra</strong> par <a href="https://kedora.fr">Kedora.fr</a> -Tous les droits sont réservés-
                        </p>
                    </div>
            </footer>
    </div>
)
export default Footer
