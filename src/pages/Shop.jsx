import React from 'react'
import Offer from '../component/Offers'
import Footer from '../component/Footer'
import Nav from '../component/Navbar'
import './Shop.css';

function Shop() {
  return (
    <div>
        <Nav/>
      <h1>Featured Products</h1>
      <Offer/>
      <h1>All Products</h1>
      <Offer/>
      <Footer/>


    </div>
  )
}
export default Shop;