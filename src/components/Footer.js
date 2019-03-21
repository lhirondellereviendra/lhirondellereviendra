import React from 'react'   /* eslint-disable */



const Footer = () => (
    <div>
            <section className=" section secteurdark has-text-centered is-medium" id="contact">
                    <h1 className="title titlewhite is-size-4-mobile"> ME SUIVRE </h1>
                    <a aria-hidden="true" href="https://www.instagram.com/lhirondellereviendra/"><h1 className="title titlewhite has-text-left is-size-5 ">@lhirondellereviendra </h1></a>
                    <div className="level" style={{marginTop: "40px"}}>
                            <script src="https://snapwidget.com/js/snapwidget.js"></script>
                            <iframe src="https://snapwidget.com/embed/623987" className="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{ border: "none",
                             overflow: "hidden", width: "68%", margin: "auto", marginBottom:"18px", height: "auto"}}></iframe>
                    </div>  
                    
                    <nav className="navbar">
                        <div className="navbar" >
                                <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/">FACEBOOK </a> 
                                <p className="navbar-item-trait"> / </p>                            

                                <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.instagram.com/lhirondellereviendra/" >INSTAGRAM </a>

                                <p className="navbar-item-trait"> / </p>                            
                                <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://twitter.com/LReviendra">TWITTER </a>
                        </div>  
                    </nav>
            </section>

            <footer className="footer">
                    <div className="content has-text-centered">
                        <p> - Tous les droits sont réservés -</p>
                        <p>
                        <strong>© L'hirondelle Reviendra</strong> par <b><u><a href="https://alexislepresle.com">alexislepresle.com</a></u></b>
                        </p>
                    </div>
            </footer>
    </div>
)
export default Footer
