import React from "react";
import "./security.css";
import Payment from "../Payment/Payment.jsx";
import Delivery_Partner from "../Delivery_Partner/Delivery_Partner.jsx";

function Security(){

    return(

        <div className="Main_Security">

        <Payment/>

        <Delivery_Partner/>

        </div>
    )
    
}

export default Security;