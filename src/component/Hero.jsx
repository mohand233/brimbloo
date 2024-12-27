import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
function Hero(){return(
<section className="hero d-flex align-items-center justify-content-center text-center text-white bg-primary py-5" style={{backgroundImage: 'url(/path-to-hero-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh'}}>
        <div>
          <h2 className="display-4">Discover Security</h2>
          <p className="lead">Secure your digital life with our trusted services</p>
          <div className="btn-group mt-3">
          <Link to="/Service" className="btn " style={{ backgroundColor: '#FF5722', }}>Shop Now</Link>
          <Link to="/About" className="btn btn-light" >
  Learn More
</Link>


          </div>
        </div>
      </section>
)}
export default Hero;