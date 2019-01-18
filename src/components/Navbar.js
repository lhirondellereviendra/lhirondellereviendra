import React from 'react' /* eslint-disable */
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
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
                            <a className="navbar-item is-size-5 " aria-hidden="true" target="_blank" href="https://www.instagram.com/elisabeth_aht/">Instagram </a>
          </div>
          <div className="navbar-end" id="navMenu">
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
  )}
}

export default Navbar
