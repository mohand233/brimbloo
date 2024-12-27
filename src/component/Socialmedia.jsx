import react from "react"
import './Sercard';
function Social(){ return(
    <section className="social-media py-5 bg-black">
    <h3 className="text-center mb-4">Social Media Highlights</h3>
    <div className="text-center">
      <p>Follow us for updates</p>
      <div className="social-post bg-white shadow-sm mx-auto p-3" style={{maxWidth: '500px'}}>
        <h5></h5>
        <img src="/path-to-social-post-image.jpg" alt="Social Post" className="img-fluid mb-3" />
        <p>Exciting news coming soon!</p>
        <small className="text-muted">#Fashion #Events</small>
      </div>
    </div>
  </section>)}

export default Social;