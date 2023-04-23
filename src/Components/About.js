import React from "react";
import About1 from "./images/pic7.jpg";


function About(){

    return(

        <div className="background">
            <img className="About" src={About1} alt="Aboutus"/>
            <p className="Ab1">Who Are We?</p>
            <p className="Ab2">We are highly passionate about Web and<br/> 
            Mobile application Development Services.</p>
            <p className="Ab3">
                <i>App design, web development, digital marketing,<br/>
                e-commerce solutions and cloud development are just<br/>
                a few of the many services offered by our specialists<br/>
                We use some of the greatest individuals in the sector <br/>
                and keep up with technology to develop cutting edge <br/>
                digital goods that satisfy customer needs across company.</i>
            </p>
        </div>
    )
}


export default About;