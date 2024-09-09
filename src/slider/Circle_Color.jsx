
function Circle_Color(target, num){
    
    for(let i=0; i<target.length; i++){
        
    if(num === i){
      
    target[i].classList.add("image_circle_bg");
      
    continue;  
    } 
    
    target[i].classList.remove("image_circle_bg");
    }
    
    counter = num;
    
    }

    export default Circle_Color;