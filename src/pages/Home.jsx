import React from "react";
import Nav from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Offer from "../component/Offers";
import Social from "../component/Socialmedia";
import './About.css';
function Home() {
    return (<>
      <Nav />
      <Hero/>
      <Offer/>
      <Social/>
      
      <Footer/>
      
      


      </>
    );
  }
  export default Home;