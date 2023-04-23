import React from "react";
import Slogan from "./images/pic4.jpg";

function Box(){

    return(
        <>
        
        <div  style ={{backgroundImage: `url(${Slogan})`,backgroundRepeat:"no-repeat" , height: "500px",width: "1450px",backgroundSize:"cover"}}>
        <div className="Slogan1">Find the right Work</div>
        <div className="Slogan2">Find the right Place</div>
        <div className="Slogan3">Find the right People</div>
        </div>
        

        </>
    )
}

export default Box;