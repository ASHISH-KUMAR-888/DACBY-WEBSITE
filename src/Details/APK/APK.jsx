import React from "react";
import "./apk.css";

function APK() {

    return(
        <>
        
        <div className="app_download">

<div className="app_download_title">
<h3><i className="fa-solid fa-mobile-screen-button"></i>GET THE APP</h3>    
</div>


<div className="app_download_links">

<div className="app_download_link">
<a href="https://apps.apple.com/in/app/dacby/id1562532635?itsct=apps_box_badge&amp;itscg=30200">
<img src="images/APK/app_store.jpg" alt="IOS Download Image" /> 
</a>
</div>

<div className="app_download_link">
<a href="https://play.google.com/store/apps/details?id=com.dacby.customer">
<img src="images/APK/google_play.jpg" alt="ANDROID Download Image" /> 
</a> 
</div> 
   
</div>


    
</div>    
        
        </>
    )
    
}

export default APK;