import React from "react";
import "./detail.css";
import Contact from "../Contact/Contact.jsx";
import Link from "../Link/Link.jsx";
import APK from "../APK/APK.jsx";
import Social_Media from "../Social_Media/Social_Media.jsx";

function Detail() {

    return(
        
        <div className="Main_Detail">
        
        <Contact/>

        <Link/>

        <APK/>

        <Social_Media/>

        </div>
        
    )
    
}

export default Detail;