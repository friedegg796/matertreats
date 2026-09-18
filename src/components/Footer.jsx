import React, { useState, useEffect } from 'react';
//import './Footer.css'

const Footer = () => {

  return (
     <>
        <div className="footer-container">
        <div className="footer-section brand">
          <div className="brand-logo">
            <span className="brand-name">Hasnain Alahi</span>
          </div>
          <p className="copyright">&copy; 2026 | ALL RIGHTS RESERVED</p>
        </div>
        <div className="footer-section metadata">
          <div className="meta-item social-icons">
            <a href="https://github.com/friedegg796" target="_blank" rel="noopener noreferrer"><img src="./github.svg"  width='100px'/></a>
            <a href="https://www.linkedin.com/in/hasnain-a-6481a0342" target="_blank" rel="noopener noreferrer"><img src="./linkedin.png" width='100px' /></a>
            <a href="mailto:hasnainalahiwork@gmail.com"><img src="./gmail.svg" width='100px'/></a>
            <a href="https://discord.gg/RNP5cqhhRB"><img src="./discord.svg" width='125px' alt="Discord"/></a>
            <a href="https://www.instagram.com/awanderingmuslim/"><img src="./discord.svg" width='125px' alt="Instagram"/></a>
            <a href="https://www.instagram.com/awanderingmuslim/"><img src="./discord.svg" width='125px' alt="Instagram"/></a>
          </div>
        </div>

      </div>
      <div className="footer-divider"></div>

     </>
  );
};


export default Footer;
