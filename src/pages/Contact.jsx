// ContactUs.jsx
import React from 'react';

import './ContactUS.css';
import Nav from "../component/Navbar";
const ContactUs = () => {
  return (
    <div className="container mt-5 contact-us-container">
      <Nav/>
      <header className="text-center mb-4">
        <h1 className="text-light">Get in Touch</h1>
      </header>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center text-light">We Are Here to Help</h2>
          <p className="text-center text-light" >Fill out the form below for any inquiries about security systems, cameras, and monitoring solutions.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-light">Name</label>
              <input type="text" id="name" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-light">Phone Number</label>
              <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label text-light">Your Message</label>
              <textarea id="message" className="form-control " rows="4" placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="btn btn-warning w-100">Send Message</button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center my-5">
        <div className="col-md-8 text-center bg-light py-4">
          <p className="fw-bold text-dark">Our Location</p>
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093686!2d144.95592531590495!3d-37.817209979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f5e3a3247!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1670528945627!5m2!1sen!2sau"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
      </div>

      <footer className="bg-black text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-green">LOGO</h5>
              <p>+1 (7635) 547-12-97</p>
              <p>support@lift.agency</p>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Privacy Policy</a></li>
                <li><a href="#" className="text-light">Terms & Conditions</a></li>
                <li><a href="#" className="text-light">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Get product updates" />
                <button className="btn btn-primary mt-2 w-100">Subscribe</button>
              </div>
              <div className="d-flex justify-content-between">
                <a href="#" className="text-light">LinkedIn</a>
                <a href="#" className="text-light">Facebook</a>
                <a href="#" className="text-light">Twitter</a>
              </div>
            </div>
          </div>
          <p className="text-center mt-3">A product of Lift Media. &copy; 2020 Lift Media, All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
