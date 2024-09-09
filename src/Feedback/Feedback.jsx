import React from "react";
import "./feedback.css";

function Feedback(props) {

    return(
        <>
        
        <div className="feedback">

<div className="image">
<img src={props.image} alt="Customer Photo" /> 
</div> 


<div className="content">
<h2>{props.title}</h2>

<p>{props.para}</p>


<div className="rating">
<p>{props.name}</p>
<img src="images/Customer/rating.jpg" alt="Rating Image" />
</div>
</div>   
    
</div>
        
        </>
    )
    
}

export default Feedback;