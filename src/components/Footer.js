import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook,  FaInstagram, FaLinkedin } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                 <FaHome size={30} style={{color:"#fff", marginRight: "2rem"}} />   
                 <div>
                    <p>
                        Dhapagal-16 Lalitpur.
                    </p>
                    <p>
                        Nepal.
                    </p>
                 </div>
                </div>

              <div className="phone">
              <h4> <FaPhone size={25} style={{color:"#fff", marginRight: "2rem"}} />  +977-9861376668
                </h4>
                </div>

                <div className="email">
              <h4> <FaMailBulk size={25} style={{color:"#fff", marginRight: "2rem"}} />mhzrnmansoon20@gmail.com
                </h4>
                </div>

            </div>
            <div className="right">
                <h4>
                    About the company
                </h4>
                <p>
                    This is me Mansoon Maharjan. I enjoy discussing new projects and design challenges.
                </p>
                <div className="social">

                <FaFacebook
                 size={30} 
                 style={{color:"#fff", marginRight: "1rem"}} />

                   <FaInstagram
                 size={30} 
                 style={{color:"#fff", marginRight: "1rem"}} />
                 
                 <FaLinkedin
                 size={30} 
                 style={{color:"#fff", marginRight: "1rem"}} />
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer