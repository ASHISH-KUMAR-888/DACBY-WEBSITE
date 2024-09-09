import React from "react";

import Download from "../download/Download.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Product_container from "../product_container/Product_container.jsx";
import Pre_Order from "../product_json/Pre_Order.jsx";
import PS4 from "../product_json/PS4.jsx";
import Controller from "../product_json/Controller.jsx";
import PS5 from "../product_json/PS5.jsx";
import Console from "../product_json/Console.jsx";
import Slider from "../slider/Slider.jsx";
import Banner from "../Banners/Banner.jsx";
import Category_Container from "../Category/Category_Container.jsx";
import Blog from "../Blog/Blog.jsx";
import Delivery from "../Delivery/Delivery.jsx";
import Feedback_Container from "../Feedback/Feedback_Container.jsx";
import Detail from "../Details/Detail/Detail.jsx";
import Security from "../Secure/Security/Security.jsx";
import Last_Footer from "../Last_Footer/Last_Footer.jsx";



function Home(){


const width = innerWidth;

let image1, image2, text;

if(width < 500){
image1 = "images/Banner/warrior.jpg"
}

if(width > 500){
  image1 = "images/Banner/blur.jpg"

}


if(width < 500){
  image2 = "images/Banner/magic.jpg"
  }
  
  if(width > 500){
    image2 = "images/Banner/blade.jpg"
    text = "EXPLORE YOUR FAVOURITE GAMES BY GENRES, AND ALL TITLES";
  
  }
  

    return(

        <>
        

  <Download/>
    <Navbar/>


    <Slider/>


    <Product_container 
    title="Pre Orders"
    DATA={Pre_Order}
    />


    <Product_container 
    title="PS4"
    DATA={PS4}
    />


    <Banner
    image="images/Banner/consoles.jpg"
    />



<Product_container 
    title="Controllers"
    DATA={Controller}
    /> 
    

 <Product_container 
    title="PS5"
    DATA={PS5}
    /> 


 <Product_container 
    title="Consoles"
    DATA={Console}
    /> 


<Banner
image="images/Banner/dacby.jpg"
/>

<Category_Container/>

<Banner
image={image2}
title={text}
/>

<Blog/>

<Delivery/>

<Banner
image={image1}
/>

<Feedback_Container/>

<Banner
    image="images/Banner/glow.jpg"
/>


<Detail/>

<Security/>

<Last_Footer/>


        </>
    )
    
}

export default Home;