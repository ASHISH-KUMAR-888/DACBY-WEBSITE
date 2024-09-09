import React, {useRef} from "react";
import "./product_container.css";
import Product from "../product/Product.jsx";
import Slider from "../Modules/Slider.jsx";
import Pre_Order from "../product_json/Pre_Order.jsx";


function Product_container({title, DATA}) {

const product_slider1_target = useRef(null);

const product_slider1_previous = useRef(null);

const product_slider1_next = useRef(null);

Slider(product_slider1_target, product_slider1_previous, product_slider1_next, 400);


    return(
        <>
        <div className="product_slider1">

        <div className="previous" ref={product_slider1_previous} ><span className="material-symbols-outlined slide_btn">
arrow_back_ios
</span></div>  

<div className="next" ref={product_slider1_next}><span className="material-symbols-outlined slide_btn">
arrow_forward_ios
</span></div>  
    

<div className="title"><h2>{title}</h2></div>




        <div className="product_slider"  ref={product_slider1_target}>
        
       

        {DATA.map((val)=>{

return(
    <Product
    key={DATA.id}
    image={val.image}
    title={val.title}
    price={val.price}
    old_price={val.old_price}
   
    />
)

})}



        </div>
        
        


        </div>
        </>
    );
    
}

export default Product_container;