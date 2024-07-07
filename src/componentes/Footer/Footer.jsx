import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ab omnis ipsam explicabo ipsum ducimus similique alias libero quia ut! </p>
                <div className="footer-social-icon">
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>

                </ul>
            </div>
            <div className='footer-right'>
                <h2>Het in touch</h2>
                <ul>
                    <li>+9503169644</li>
                    <li>atishchavan066@gmail.com</li>
                </ul>
            </div>
        </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @ Me - All rights reserved.
                </p>
    </div>
  )
}

export default Footer