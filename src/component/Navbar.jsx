import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="container">
      <header className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link id='nav' className="navbar-brand " to="/">Brimblo</Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Service">Services</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
