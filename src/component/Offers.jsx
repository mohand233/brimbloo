import React from "react";
import './Style.css';
import { Link } from 'react-router-dom';
import cameraImage from '../component/Photos/ptz.7b47ef2b.jpg';
function Offer() {
  return (
    <section className="offers py-5">
      <h3 className="text-center mb-4">Offers</h3>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <div className="card">
            <div className="card-header ">Sale</div>
            <div className="card-body text-center">
              <img src={cameraImage} alt="" className="img-fluid mb-3" />
              <h5>camera</h5>
              <p>$39.99</p>
              <Link
                to="/Place"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  fontSize: '16px',
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#007bff',
                  border: 'none',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Place order
              </Link>


            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <div className="card">
            <div className="card-header ">Sale</div>
            <div className="card-body text-center">
            <img src={cameraImage} alt="" className="img-fluid mb-3" />
              <h5>camera</h5>
              <p>$39.99</p>
              <Link
                to="/Place"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  fontSize: '16px',
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#007bff',
                  border: 'none',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Place order
              </Link>


            </div>
          </div>
        </div><div className="col-md-4 mb-4 d-flex justify-content-center">
          <div className="card">
            <div className="card-header ">Sale</div>
            <div className="card-body text-center">
            <img src={cameraImage} alt="" className="img-fluid mb-3" />
              <h5>camera</h5>
              <p>$39.99</p>
              <Link
                to="/Place"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  fontSize: '16px',
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#007bff',
                  border: 'none',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Place order
              </Link>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
