import React from 'react' /* eslint-disable */
import logo from '../img/logo.svg'

const Navbar = () => (
<div>
  <nav role="navigation" aria-label="main navigation" className="navbar-menu" id="navMenu">
            <div>
                    <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                    </a>  
            </div>


          <div className="navbar-brand" id="navMenu">
                            <a className="navbar-item is-size-5 " aria-hidden="true" target="_blank" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/">Facebook </a> 
                            <a className="navbar-item is-size-5 " aria-hidden="true" target="_blank" href="https://www.instagram.com/bijoulisa_/" >Instagram </a>

          </div>
          <div className="navbar-end">
                            <a className="navbar-item is-size-5 " aria-hidden="true" href="https://lhirondellereviendra.com/about">Me connaitre </a> 
                            <p className="navbar-item-trait"> | </p>                            
                            <a className="navbar-item is-size-5 " aria-hidden="true" href="https://lhirondellereviendra.com/blog" >Mon Blog </a>
                            <p className="navbar-item-trait"> | </p>                            
                            <a className="navbar-item is-size-5 " aria-hidden="true" href="https://lhirondellereviendra.com/#contact">Me suivre </a>

          </div>
          </nav>   
                    <a href="/">                                           
                            <figure className="image" style={{maxWidth:"900px",minWidth:"200px",margin:"auto"}}>
                                    <img src={logo} alt="FamilyCoach" />
                            </figure>
                    </a>
          <hr className="hr"/>
</div>
)

export default Navbar
