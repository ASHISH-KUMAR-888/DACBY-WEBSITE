import React, {useRef, useEffect} from "react";
import "./category_container.css";
import Data from "./Data.jsx";
import Category from "./Category.jsx";

function Category_Cotainer() {

const menu_slider1 = useRef(null);


useEffect(()=>{

    

document.querySelector(".menu_slider_main .previous").addEventListener("click", ()=>{

menu_slider1.current.scrollBy({top: 0, left: -350, behavior: "smooth"});

});   

document.querySelector(".menu_slider_main .next").addEventListener("click", ()=>{

menu_slider1.current.scrollBy({top: 0, left: 350, behavior: "smooth"});

})







}, []);





    return(
        <>

<div className="menu_slider_main_title"><h2>EXPLORE OUR CATEGORIES</h2></div>

        
        <div className="menu_slider_main"> 



<div className="previous"><span className="material-symbols-outlined slide_btn">
arrow_back_ios
</span></div>  

<div className="next"><span className="material-symbols-outlined slide_btn">
arrow_forward_ios
</span></div>  
    
    
<div className="menu_slider1" ref={menu_slider1}>
    
   {Data.map((value)=>{

    return(

    <Category 
    image={value.image}
    title={value.title}
    />

    )



   })} 
    
    </div> 
</div>
        
        
        </>
    )
    
}

export default Category_Cotainer;