import React from "react";
import '../../css/pages/Footer.css';
import FooterInfoDetails from "js/components/FooterInfo";

function Footer() {
    return (
      <div>
        <div className="footer_section" style={{padding: '15px 10px', backgroundColor: '#1c447e'}}>
          <FooterInfoDetails />
          <div className="line"></div>
          <h2 style={{display: 'flex', justifyContent: 'center', fontSize: '18px'}}>Made with ❤️ by Vilhota Alina</h2>
        </div>
      </div>
    );
  }
  
  export default Footer;
  