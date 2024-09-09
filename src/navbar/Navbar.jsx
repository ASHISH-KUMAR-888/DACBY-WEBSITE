import React, {useRef} from "react";
import Dropdown from "../dropdown/Dropdown.jsx";
import "./navbar.css";

function Navbar(){

const burger_container = useRef(null);

const content_container = useRef(null);

const burger_container_cross = useRef(null);


function burger(){

burger_container.current.classList.remove("burger_return_transition");
 
burger_container.current.classList.add("burger_transition");

burger_container_cross.current.style.display =  "block";

content_container.current.classList.add("burger_content_container_transition");
          
}


function cross(){

content_container.current.classList.remove("burger_content_container_transition");
    
burger_container_cross.current.style.display = "none";
  
burger_container.current.classList.remove("burger_transition");
    
burger_container.current.classList.add("burger_return_transition");
    
}



    return(
        <>
        
        <div className="navbar_container">

<div className="burger_container" onClick={burger} ref={burger_container}>

<div></div>

<div></div>

<div></div>
    
</div>


<div className="burger_container_cross" onClick={cross} ref={burger_container_cross}>

<div className="one_line"></div>

<div className="two_line"></div>
    
</div>



<div className="logo_icon_container">

<div className="logo_container">

<p>D</p> 

<img src="images/logo.jpg" alt="Logo" />

<p>CBY</p> 
 
</div>





<div className="icons_container">

<span className="material-symbols-outlined icons">
person
</span> 

<span className="material-symbols-outlined icons cart">
shopping_cart
<span className="cart_number"><pre>0</pre></span>
</span>

<span className="material-symbols-outlined
icons">
search
</span>

</div>
</div>

</div>


<div className="burger_content_container" ref={content_container}>
 
<Dropdown image="images/gamepad.png" name="Games"/>

{/* <Dropdown image="images/console.png" name="Consoles"/>

<Dropdown image="images/pink_gamepad.png" name="Accessories"/>

<Dropdown image="images/red_gamepad.png" name="Others"/> */}
  
</div>
        
        </>
    )
}

export default Navbar;