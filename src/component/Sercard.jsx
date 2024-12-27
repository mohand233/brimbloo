import React from 'react';
import './Sercard.css';
import Image from '../component/Photos/download (1).jpg';
const ServiceCard = () => {
  return (
    <div className="service-card-wrapper container d-flex flex-wrap justify-content-center py-4">
      <div className="service-card horizontal-card mx-2 my-3">
        <div className="image-container">
          <img src={Image} alt="" className="img-fluid mb-3" />
        </div>
        <div className="text-container">
          <h5 className="service-title">Service 2</h5>
          <p className="service-description">LExpert security solutions to protect your digital assets.</p>
        </div>
      </div>
      <div className="service-card horizontal-card mx-2 my-3">
        <div className="image-container">
          <img src={Image} alt="" className="img-fluid mb-3" />
        </div>
        <div className="text-container">
          <h5 className="service-title">Service 3</h5>
          <p className="service-description">Your trusted partner in safety and security services.</p>
        </div>
      </div>
      <br />
      <div className="service-card horizontal-card mx-2 my-3">
        <div className="image-container">
          <img src={Image} alt="" className="img-fluid mb-3" />
        </div>
        <div className="text-container">
          <h5 className="service-title">Service 2</h5>
          <p className="service-description">Secure your world with our professional services.</p>
        </div>
      </div>
    </div>



  );
};

export default ServiceCard;
