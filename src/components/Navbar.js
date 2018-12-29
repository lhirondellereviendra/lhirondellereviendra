import React from 'react' /* eslint-disable */
import logo from '../img/logo.svg'
import './menumobile.js'


const Navbar = () => (
<div>


<nav>
        <div className="menu-mobile" >
                    <div className="navbar-brand">
                              <a className="navbar-item is-size-5 " aria-hidden="true" target="_blank" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/"><i className="fab fa-facebook "></i> </a> 
                            <a className="navbar-item is-size-5 " aria-hidden="true" target="_blank" href="https://www.instagram.com/bijoulisa_/" ><i className="fab fa-instagram "></i> </a>

                     </div>
                     <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                    </a>  
        </div>
</nav>



  <div role="navigation" aria-label="main navigation" className="navbar" > 

          <div className="navbar-brand sociaux-barre">
                            <a className="navbar-item is-size-5 " aria-hidden="true" target="_blank" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/"><i className="fab fa-facebook "></i> </a> 
                            <a className="navbar-item is-size-5 " aria-hidden="true" target="_blank" href="https://www.instagram.com/bijoulisa_/" ><i className="fab fa-instagram "></i> </a>

          </div>
          
          <div className="navbar-menu" id="navMenu">
                <div className="navbar-end"> 

                            <a className="navbar-item is-size-5 " aria-hidden="true" href="https://lhirondellereviendra.com/apropos">Me connaitre </a> 
                            <p className="navbar-item-trait"> | </p>                            
                            <a className="navbar-item is-size-5 " aria-hidden="true" href="https://lhirondellereviendra.com/blog" >Mon Blog </a>
                            <p className="navbar-item-trait"> | </p>                            
                            <a className="navbar-item is-size-5 " aria-hidden="true" href="https://lhirondellereviendra.com/#contact">Me suivre </a>
                </div>
          </div>
                    <a href="/">                                           
                            <figure className="image" style={{maxWidth:"900px",minWidth:"200px",margin:"auto"}}>
                                    <img src={logo} alt="FamilyCoach" />
                            </figure>
                    </a>
          <hr className="hr"/>
</div>
</div>
)

export default Navbar


