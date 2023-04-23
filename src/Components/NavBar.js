// import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "./images/logo.jpg";
import React from "react";


function Navbar() {

    
    return(
        <>
 

        <header>
           

            <div id="menu" className="fas fa-bars"></div>

            <nav className="navbar">
                <ul>
                    <li >
                    <img className="logo" src={Logo} alt="logo"/>
                    {/* <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 419L0 479.2l.8-328C.8 85.3 54 32 120 32h327.2c-93 28.9-189.9 94.2-253.9 168.6C122.7 282 82.6 338 32 419M448 32S305.2 98.8 261.6 199.1c-23.2 53.6-28.9 118.1-71 158.6-28.9 27.8-69.8 38.2-105.3 56.3-23.2 12-66.4 40.5-84.9 66h328.4c66 0 119.3-53.3 119.3-119.2-.1 0-.1-328.8-.1-328.8z"/></svg> */}
                    </li>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="about.html">About us</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="service.html">Service</a></li>
                    <li><a href="plan.html">Contact</a></li>
                    <li><a href="contact.html">Register now</a></li>
                </ul>
            </nav>
        </header>
        
            <p className="para-1">Copywriting services for <br/>
               complex businesses.<br/>
            <div className="para-2">You deserve to be heard and understood with the<br/>
             message you've been trying to say all along.</div>
             
             <button className="btn-book">Register Now</button>
             
             </p>

            
        </>
    )
}




export default Navbar;