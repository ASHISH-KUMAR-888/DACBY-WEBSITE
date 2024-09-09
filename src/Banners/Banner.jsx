import React from "react";
import "./banner.css";

function Banner(props) {
    
    return(

        <>
        
        <div className="landing_page_banner">

<img src={props.image} alt="BANNER PHOTO" />


<div className="text">
<h2>{props.title}</h2>    
</div>

    
</div>
        
        
        
        
        </>
    )
    
}

export default Banner;