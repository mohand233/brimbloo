import React from "react";
import Nav from "../component/Navbar";
import Footerx from "../component/Footer";
import Hero from "../component/Hero";
import Offer from "../component/Offers";
import Footer from "../component/Footer";
import ServiceCard from '../component/Sercard'

import Sercom from "../component/Sercom";

function Service(){ return(<>
  <Nav/>
    
  <ServiceCard/>
 
  <h3 className="text-center mb-4">small business</h3>
  <Sercom/>
  <h3 className="text-center mb-4">Home servicies</h3>
  <Sercom/>
  <h3 className="text-center mb-4">large areas</h3>
  <Sercom/>
  <Footer/>

  </>
)




}

export default Service;
