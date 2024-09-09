import React from "react";
import "./product.css";

function Product(props) {
    return(
        <> 

<div className="product_container">
    
<div className="pre_order">

<div><p>Pre Order</p></div> 
    
</div>    

<div className="product_image">
<img src={props.image} alt="Game CD" />
</div> 

<div className="product_title">
<p>{props.title}</p>    
</div>

<div className="product_price">
<p className="price_one">₹{props.price}</p>   

<p className="price_two">{props.old_price}</p> 
</div>
   
    
</div>
  
        </>
    )
    
}

export default Product;