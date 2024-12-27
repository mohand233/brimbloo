import React from 'react';
import './Form.css' ;


const Form = () => {
    return (
        <div className="container mt-5">
            <header className="text-center mb-4">
                <h1>Contact Us</h1>
            </header>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center">Contact Us</h2>
                    <p className="text-center">Please fill in the required fields</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea id="message" className="form-control" rows="4" placeholder="Enter your message"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Send</button>
                    </form>
                </div>
            </div>
            </div>
            )}
            export default Form;