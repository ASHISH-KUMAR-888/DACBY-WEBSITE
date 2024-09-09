import React, {useEffect} from "react";



function Slider(target, previous, next, num){

    useEffect(()=>{


previous.current.addEventListener("click", ()=>{
    target.current.scrollBy({top: 0, left: -num, behavior: "smooth"});
});

next.current.addEventListener("click", ()=>{
    target.current.scrollBy({top: 0, left: num, behavior: "smooth"});
});

}, []);


}


export default Slider;