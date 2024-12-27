import React from 'react'
import './Placecar.css';
import cameraImage from '../component/Photos/ptz.7b47ef2b.jpg';
import oo from '../component/Photos/download (1).jpg';
function Placecar() {
    return (
        <section className="offers py-5">
            <h3 className="text-center mb-4">Your Products</h3>
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header text-bg-danger">Sale</div>
                        <div className="card-body text-center">
                            <img src={cameraImage} alt="camera" className="img-fluid mb-3" />
                            <h5>Your trusted partner in safety and security services</h5>
                            <p>$39.99</p>



                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header text-bg-danger">Sale</div>
                        <div className="card-body text-center">
                            <img src={ oo } alt="camera" className="img-fluid mb-3" />
                            <h5>Your trusted partner in safety and security services</h5>
                            <p>$39.99</p>



                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Placecar;