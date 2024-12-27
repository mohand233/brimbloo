import react from "react"
import o  from '../component/Photos/OI2.jpg';
import oi  from '../component/Photos/OI.jpg';
import oii  from '../component/Photos/download (1).jpg';
import { Route , Link} from "react-router-dom";
function Sercom(){ return(
    <section className="offers py-5">

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <div className="card">
            <div className="card-header text-bg-danger">Sale</div>
            <div className="card-body text-center">
              <img src={o} alt="" className="img-fluid mb-3" />
              <h5>LExpert security solutions to protect your digital assets.</h5>
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
            <div className="card-body text-center">
            <img src={oi} alt="" className="img-fluid mb-3" />
              <h5>Your trusted partner in safety and security services</h5>
              <p>$49.99</p>
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
            <div className="card-body text-center">
              <img src={oii} alt="" className="img-fluid mb-3" />
              <h5>Secure your world with our professional services</h5>
              <p>$59.99</p>
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
    </section>)}
export default Sercom;