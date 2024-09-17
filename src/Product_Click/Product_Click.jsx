import React from "react";
import "./product_click.css";
import { useParams } from "react-router-dom";
import Pre_Order from "../product_json/Pre_Order.jsx";
import PS4 from "../product_json/PS4.jsx";
import PS5 from "../product_json/PS5.jsx";
import Console from "../product_json/Console.jsx";
import Controller from "../product_json/Controller.jsx";


function Product_Click(){

let {id} = useParams();

let Remember = null;

if(id.includes("Pre")){
    Remember = Pre_Order;
}

else if(id.includes("PS4")){
    Remember = PS4;
}

else if(id.includes("PS5")){
    Remember = PS5;
}

else if(id.includes("Console")){
    Remember = Console;
}

else{
    Remember = Controller;
}



let product = Remember.find((p)=>{

return p.id == id

});



    return(
      
        
        <div className="product_click">
 {product ?(
    <>
<div className="image">
 <button>Pre Order</button>
<img src={`../`+ product.image} alt="Product Image" /> 
</div> 


<div className="both">

<div className="category">
    <button>Pre Order</button>
</div>


<div className="title">
<h2>{product.title}</h2>
</div>


<div className="price">
<p>₹{product.price}</p>
<p>{product.old_price}</p>    
</div>

<div className="buy_btn">
<button>ADD TO CART</button>
<button>BUY NOW</button>    
</div>

</div>

</>
 ): (
    <p>NOT FOUND</p>
 )}
     
</div>

        
        
    )
    
}

export default Product_Click;