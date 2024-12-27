import React from 'react';
import './OrderForm.css';
import Placecar from '../component/Placecar';
import Nav from '../component/Navbar';
const Place = () => {
    return (

        <div className="container mt-5">
                        <Nav/>
            <h4 className="text-center">Order Form</h4>

            <UserDetails />
            <OrderDetails />
            <ProductSelection />
            <PaymentMethods />
            <OrderSummary />
        </div>
    );
};

const UserDetails = () => (
    <div className="mb-4">
        <h5>Your Details</h5>
        <div className="container mt-5">


            <div className="row justify-content-center">
                <div className="col-md-8">

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
                            <label htmlFor="message" className="form-label">Address</label>
                            <textarea id="message" className="form-control" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Optional notes</label>
                            <textarea id="message" className="form-control" rows="4" placeholder="Enter your message"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Send</button>
                    </form>
                </div>
            </div>
            </div>
    </div>
);

const OrderDetails = () => (
    <div className="mb-4">
        <Placecar/>

    </div>
);

const ProductSelection = () => (
    <div className="mb-4">
        <h4>Your Products</h4>
        <div className="border p-3">
            <p>Your trusted partner in safety and security services</p>
            <p>Your trusted partner in safety and security services</p>
        </div>
    </div>
);

const PaymentMethods = () => (
    <div className="mb-4">
        <h4>Payment Methods</h4>
        <div className="form-group">
            <label>Select your preferred payment option</label>
            <select className="form-control">
                <option>Credit Card</option>
                <option>Cash on Delivery</option>
            </select>
        </div>
    </div>
);

const OrderSummary = () => (
    <div className="mb-4">
        <h4>Order Summary</h4>
        <p>Please review your order before confirming.</p>
        <button className="btn btn-primary">Place Order</button>
    </div>
);

export default Place;