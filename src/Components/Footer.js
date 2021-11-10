import React from 'react'
import classes from './Styles/footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerLinks}>
        <div className={classes.company}>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about-us" className={classes.footerLinks}>About Us</Link></li>
            <li><Link to="/careers" className={classes.footerLinks}>Careers</Link></li>
          </ul>
        </div>
        <div className={classes.customerCare}>
          <h3>Customer Care</h3>
          <ul>
            <li><Link to="/faqs" className={classes.footerLinks}>FAQs</Link></li>
            <li><Link to="/terms-and-conditions" className={classes.footerLinks}>Terms and Conditions</Link></li>
            <li><Link to="/delivery-areas" className={classes.footerLinks}>Delivery Areas</Link></li>
          </ul>
        </div>
        <div className={classes.follow}>
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <p>All rights reserved. 2021</p>
    </footer>
  )
}

export default Footer
