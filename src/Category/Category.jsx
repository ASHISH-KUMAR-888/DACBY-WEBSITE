import React from "react";
import "./category.css";

function Category(props) {

    return(

        <>
        
        <div className="menu_slider">

<div className="images">
<img src={props.image} alt="Game Photo" />

<div className="title">
<p>{props.title}</p>    
</div>

</div>
</div> 
        
        
        </>
    )
    
}

export default Category;