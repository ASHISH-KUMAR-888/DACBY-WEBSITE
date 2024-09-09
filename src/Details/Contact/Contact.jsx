import React from "react";
import "./contact.css";

function Contact() {

    return(
        <>
        
        <div className="contact_container">
 
<div className="contact_title">
<img src="images/Contact/dacby.svg" alt="LOGO PICTURE" />
</div> 


<div className="contact">

<div className="contact_number">

<a href="tel:7303394334">  
<i className="fa-solid fa-phone"></i>
</a>

<a href="tel:7303394334">
<p>7303394334</p> 
</a> 
  
</div>

<div className="contact_number">
<a href="https://api.whatsapp.com/send/?phone=%2B917303305653&amp;text&amp;type=phone_number&amp;app_absent=0">   
<i className="fa-brands fa-whatsapp"></i>
</a>

<a href="https://api.whatsapp.com/send/?phone=%2B917303305653&amp;text&amp;type=phone_number&amp;app_absent=0">
<p>7303394334</p>  
</a>
  
</div>

<div className="contact_number">
    
<a href="mailto:care@dacby.com">   
<i className="fa-solid fa-envelope"></i>
</a>

<a href="mailto:care@dacby.com">
<p>care@dacby.com</p>
</a> 
   
</div>    
</div>

</div>

        
        </>
    )
    
}

export default Contact;