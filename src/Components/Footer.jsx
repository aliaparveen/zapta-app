import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-cs">
       
      <footer className="mainfooter fixed-bottom bg-light" role="contentinfo">
    
      <div className="footer-middle">
        <div className="container">
            <div className="row">
              
            <div className="col-md-3 col-sm-6">
              {/*Column1*/}
              <div className="footer-pad">
                <ul className="list-unstyled link-secondary">
                  
                  <li>
                    <a href="#" className="link-secondary">Payment Center</a>
                  </li>
                  <li>
                    <a href="#" className="link-secondary">Contact Directory</a>
                  </li>
                  <li>
                    <a href="#" className="link-secondary">Forms</a>
                  </li>
                
                </ul>
                </div>
                
            </div>
            <div className="col-md-3 col-sm-6">
              {/*Column1*/}
              <div className="footer-pad">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="link-secondary">Services</a>
                  </li>
                  <li>
                    <a href="#" className="link-secondary">pricing</a>
                  </li>
                  <li>
                    <a href="#" className="link-secondary">Contact</a>
                  </li>
                 
    
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/*Column1*/}
              <div className="footer-pad">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="link-secondary">Terms of Services</a>
                  </li>
                  <li>
                    <a href="#"className="link-secondary">Terms of Sales</a>
                  </li>
                  <li>
                    <a href="#" className="link-secondary">Privacy Policy</a>
                  </li>
                
                  
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <ul className="social-network social-circle">
                <li>
                  <a href="#" className="icoFacebook" title="Facebook">
                  <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoLinkedin" title="Linkedin">
                  <i class="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoLinkedin" title="Linkedin">
                  <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoLinkedin" title="Linkedin">
                  <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <p className="text-dark mt-3">
              Subscribe our Newsletters to keep updated yourself with Current Revolution in Fitness Sector.
                </p>
                
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center text-dark">
                ©2022 ZAPTA Technologies. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
   
  );
};

export default Footer;
