import React, {useRef} from "react";
import "./feedback_container.css";
import Customer from "./Customer.jsx";
import Feedback from "./Feedback.jsx";
import Slider from "../Modules/Slider.jsx";


function Feedback_Container() {

const feedback_target = useRef(null);

const feedback_previous = useRef(null);

const feedback_next = useRef(null);


Slider(feedback_target, feedback_previous, feedback_next, 500);


    return(
        <>
        
        <div className="feedback_container">

<div className="feedback_title">
<h3>OUR CUSTOMERS SAY</h3>   
</div>


<div className="customer_review">

<div className="previous" ref={feedback_previous}><span className="material-symbols-outlined slide_btn">
arrow_back_ios
</span></div>  

<div className="next" ref={feedback_next}><span className="material-symbols-outlined slide_btn">
arrow_forward_ios
</span></div>  
    



<div className="customer_reviews" ref={feedback_target}>


{Customer.map((value)=>{

return(
    
    <Feedback
    key={value.id}
    image={value.image}
    title={value.title}
    para={value.para}
    name={value.name}
    
    />

)


})}

</div>
</div>

</div>

        
        </>
    )
    
}

export default Feedback_Container;