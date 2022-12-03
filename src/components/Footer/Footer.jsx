import React from 'react';
import './Footer.scss';
import payment from './payment.png'
const Footer = () => {
  return (
    <div className="footer">
  <div className='top'>
    <div className="item">
     <h1>Categories</h1> 
     <span>Women</span>
     <span>Men</span>
     <span>Shoes</span> 
      <span>Accessories</span>
      <span>New Arrivals</span>
    </div>
    <div className="item">
      <h1>Links</h1>  
      <span>FAQ</span>
      <span>Pages</span>
      <span>Stores</span>
      <span>Compare</span>
      <span>Cookies</span>
    </div>
    <div className="item">
        <h1>About</h1> 
        <span>
            Lorem ipsum dolor sit amet, conse ctetur adipis elit, sed do
            eiusmod tempor incindidunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipiscing elit, seddo eiusmod tempor incindidunt
            ut labore etdolore.
        </span>
    </div>
    <div className="item">
       <h1>Contact</h1> 
        <span>
            Lorem ipsum dolor sit amet, conse ctetur adipis elit, sed do
            eiusmod tempor incindidunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipiscing elit, seddo eiusmod tempor incindidunt
            ut labore etdolore.
        </span>
    </div>
  </div>

  <div className="bottom">
    <div className="left">
        <span className="logo">E-shop</span>
        <span className="copyright">© Copyright 2023. All rights reserved</span>
        </div>
    <div className="right">
        <img src={payment} alt="Payment"></img>
        </div>    
  </div>
    </div>
  )
}

export default Footer