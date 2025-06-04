import React from 'react';
import fb from '../assets/images/fb.png';
import ig from '../assets/images/in.png';
import x from '../assets/images/x.png';


const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-main">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>Welcome to The Golden Horizon Shop where we sell quality goods globally.</p>
          <p>Our platform helps people worldwide to buy and trade goods anytime, anywhere. Visit us at Kilimani Street or shop online 24/7.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <form className="contact-form">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              className="form-input"
              required
            />
            <textarea 
              name="comment" 
              placeholder="Leave us a message..." 
              className="form-textarea" 
              rows="3"
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="footer-social">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="" className="social-link">
              <img src={fb} alt="facebook" className="social-icon"/>
            </a>
            <a href="" className="social-link">
              <img src={ig} alt="instagram" className="social-icon"/>
            </a>
            <a href="" className="social-link">
              <img src={x} alt="twitter" className="social-icon"/>
            </a>
          </div>
          <p>Follow us on social media for updates and special offers!</p>
          <div className="newsletter">
            <input type="email" placeholder="Subscribe to newsletter" className="newsletter-input"/>
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="footer-bottom">
        <p>© {new Date().getFullYear()} Golden Horizon Shop. Developed by Joseph. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;