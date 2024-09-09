
import react, {useRef, useEffect} from "react";
import "./slider.css";

function Slider(){
  
  
const automatic_slider = useRef(null);

const image_circle = useRef([]);
  
  
useEffect(()=>{

let counter = 0;  
  

function circle_color(target, num){
    
for(let i=0; i<target.current.length; i++){
    
if(num === i){
  
target.current[i].classList.add("image_circle_bg");
  
continue;  
} 

target.current[i].classList.remove("image_circle_bg");
}

counter = num;

}





image_circle.current[0].addEventListener("click", circle_color.bind("null", image_circle, 0));

image_circle.current[1].addEventListener("click", circle_color.bind("null", image_circle, 1));

image_circle.current[2].addEventListener("click", circle_color.bind("null", image_circle, 2));




  




  

  
setInterval(()=>{

if(counter === 3){
    counter = 0;
}

automatic_slider.current.style.transform = `translateX(-${counter * 100}%)`;


circle_color(image_circle, counter);

  
counter++;
     
}, 2000);




  


}, []);






  
return(

<>


<div className="automatic_slider_main">
    
<div className="image_circle">

<div ref={el=>image_circle.current[0] = el}></div> 

<div ref={el=>image_circle.current[1] = el}></div>

<div ref={el=>image_circle.current[2] = el}></div>
    
</div>    

    
<div className="automatic_slider" ref={automatic_slider}>
<img src="images/slider/banner1.jpg" alt="Landing Page Image" />
<img src="images/slider/banner2.jpg" alt="Landing Page Image" />
<img src="images/slider/banner3.jpg" alt="Landing Page Image" />
</div>


</div>

  


</>
  
)  
}


export default Slider;