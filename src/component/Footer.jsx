import react from "react"
import './Footer.css';

function Footer(){return(

<footer className="footer py-5 ">
<div className="container d-flex flex-wrap justify-content-between align-items-center">
  <div>
    <h5 className="logo">LOGO</h5>
    <p>+1 (7635) 547-12-97</p>
    <p>support@lift.agency</p>
  </div>
  <ul className="list-unstyled d-flex">
    <li className="ms-3"><a className="text-" href="#">Privacy Policy</a></li>
    <li className="ms-3"><a className="text-" href="#">Terms & Conditions</a></li>
    <li className="ms-3"><a className="text-" href="#">Contact Us</a></li>
  </ul>
  <div className="subscribe">
    <h6>Subscribe</h6>
    <div className="input-group">
      <input type="text"  placeholder="Get product updates" />
      <button className="btn btn-outline-secondary" type="button">&#8594;</button>
    </div>
  </div>
</div>
<div className="text-center mt-4">
  <p className="text">A product of LIFT</p>
  <p className="text">©  All rights reserved</p>
</div>
</footer>


)}
export default Footer;