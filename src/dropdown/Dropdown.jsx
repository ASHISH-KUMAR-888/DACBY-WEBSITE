import React, {useRef} from "react";
import "./dropdown.css";

function Dropdown(props){

const dropdown_name = useRef(null);

const dropdown_container = useRef(null);

const dropdown_icon = useRef(null);

const dropdown_links = useRef(null);

const links = useRef([]);

function dropdown_n(){
  
  
for(let i=0; i<links.current.length; i++){
     links.current[i].classList.toggle("dropdown_anchor");
    
}


 dropdown_container.current.classList.toggle("dropdown");
   
   
 setTimeout(()=>{
     
 dropdown_icon.current.classList.toggle("dropdown_display");    
    
dropdown_links.current.classList.toggle("dropdown_display");       
     
 }, 300); 
   

  
}  
  
  return(
    <>
    
<div className="dropdown_container" ref={dropdown_container}>

<div className="dropdown_name" onClick={dropdown_n} ref={dropdown_name}> 
<p>Buy</p> 
 
<span className="material-symbols-outlined down_arrow">
arrow_drop_down
</span> 
</div>


<div className="dropdown_icon" ref={dropdown_icon}>

<div className="circle">

<img src={props.image} />
    
</div>

<p>{props.name}</p>
    
</div>


       
<div className="dropdown_links" ref={dropdown_links}>

<a className="links" ref={el => links.current[0] = el}>PS4 Games</a>
  
<a className="links" ref={el => links.current[1] = el}>PS5 Games</a>

<a className="links" ref={el => links.current[2] = el}>Pre Order Games</a>

<a className="links" ref={el => links.current[3] = el}>Nintendo Games</a>

</div>
</div>

    </>

);

}

export default Dropdown;
  

