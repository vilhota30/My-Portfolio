import React from "react";
import '../../css/pages/Footer.css';
import FooterInfoDetails from "js/components/FooterInfo";

function Footer() {
    return (
      <div>
        <div className="footer_section">
          <FooterInfoDetails />
          <div className="line"></div>
          <h2>Made with ❤️ by Vilhota Alina</h2>
        </div>
      </div>
    );
  }
  
  export default Footer;
  