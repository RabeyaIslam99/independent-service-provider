import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
             <div className="container">
        <div className="row">


          <div className="col-md-3">
            <div className="widget">
              <h5 className="widgetheading">Quick Links</h5>
              <ul className="link-list">
                <li><a href="#."><i className="fa fa-chevron-right icred"></i> About us</a></li>
                <li><a href="#."><i className="fa fa-chevron-right icred"></i> Privacy</a></li>
                <li><a href="#."><i className="fa fa-chevron-right icred"></i> Term And Condition</a></li>
                <li><a href="#."><i className="fa fa-chevron-right icred"></i> Career</a></li>
                <li><a href="#."><i className="fa fa-chevron-right icred"></i> Faq</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="widget">
              <h5 className="widgetheading">Our Cources</h5>
              <ul className="link-list">
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Contact Us</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Site Map</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> My Acount</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Our Blog</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Listing</a></li>

              </ul>
            </div>
          </div>

           <div className="col-md-2">
            <div className="widget">
              <h5 className="widgetheading">Other Services</h5>
              <ul className="link-list">
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Contact Us</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Site Map</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> My Acount</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Our Blog</a></li>
               <li><a href="#"><i className="fa fa-chevron-right icred"></i> Listing</a></li>

              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="widget">
              <h5 className="widgetheading">Social</h5>
                <ul className="link-list">
                 <li><a href="#"><i className="fa fa-chevron-right icred"></i> Facebook</a></li>
			     <li><a href="#"><i className="fa fa-chevron-right icred"></i> Twitter</a></li>
			     <li><a href="#"><i className="fa fa-chevron-right icred"></i> Google Plus</a></li>
			     <li><a href="#"><i className="fa fa-chevron-right icred"></i> Linkedin</a></li>
                 <li><a href="#"><i className="fa fa-chevron-right icred"></i> Youtube</a></li>
             </ul>
              <div className="clear">
              </div>
            </div>
          </div>

          
        </div>
      </div>



      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="copyright">
                <p>
                  <span className='text-center'>© 2021 rabeya - All right reserved.</span>
                </p>
                
              </div>
            </div>
            <div className="col-md-3">
               <div className="credits">
                  Designed by Rabeya Islam
                </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;