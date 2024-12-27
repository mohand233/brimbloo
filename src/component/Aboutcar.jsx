import React from 'react';
import './Aboutcar.css';
import camera from '../component/Photos/OIP.jpg';

const ServiceCard = () => {
    return (

        <div className="service-card-wrapper container d-flex flex-wrap justify-content-center py-4">
            <h1>Company Mission and Vision</h1>
            <p>"Our mission is to provide high-quality services and products , focusing on meeting customer needs and achieving their satisfaction. We are committed to innovation, sustainability, and upholding the values of transparency, trust, and excellence in everything we deliver."</p>
            <div className="service-card horizontal-card mx-2 my-3">
                <div className="image-container">
                    <img src={camera} alt="" className="img-fluid mb-3" />  
                </div>
                <div className="text-container">
                    <h5 className="service-title">Service 2</h5>
                    <p className="service-description">"Affordable and efficient security services at your fingertips.".</p>
                </div>
            </div>
            <div className="service-card horizontal-card mx-2 my-3">
                <div className="image-container">
                    <img src={camera} alt="" className="img-fluid mb-3" />
                </div>
                <div className="text-container">
                    <h5 className="service-title">Service 3</h5>
                    <p className="service-description">"Secure your world with our professional services."
                    .</p>
                </div>
            </div>
            <br />
            <div className="service-card horizontal-card mx-2 my-3">
                <div className="image-container">
                    <img src={camera} alt="" className="img-fluid mb-3" />
                </div>
                <div className="text-container">
                    <h5 className="service-title">Service 2</h5>
                    <p className="service-description">"Secure your world with our professional services."
                    .</p>
                </div>


            </div>
            <div>
            <br />
            <h1>Testimonials</h1>
            <p>John D., CEO of Tech Innovators
"The services provided by  have exceeded our expectations. Their professionalism and attention to detail have been instrumental in helping us achieve our business goals. Highly recommended!"

Sarah K., Small Business Owner
"I am beyond impressed with the quality and efficiency of . They truly understand customer needs and deliver solutions that make a real difference."

Michael T., Security Consultant
"Partnering  has been a game-changer. Their innovative approach to security solutions is unmatched, and their team is always ready to assist with any challenges."
            </p>
            <h1>FAQ</h1>
            <p>1. What services does   provide?
We offer a wide range of services including , tailored to meet the needs of .

2. How can I contact your support team?
You can reach our support team via email at    by phone at , or through our live chat feature on our website.

3. What makes   different from competitors?
Our commitment to sets us apart. We ensure personalized solutions and prioritize building long-term relationships with our clients.

4. How secure are your services/products?
We prioritize security by implementing . Your data and transactions are always safe with us.s.</p>
            </div>
        </div>



    );
};

export default ServiceCard;
