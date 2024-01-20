import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../../css/pages/components/FooterInfo.css';
import GitHubButton from './ButtonCitHub';
import aboutMeInfo from 'js/data/AboutMeData';
import myNavBarData from 'js/data/NavBarData';
import SocialMediaProfileLinks from './SocialMediaLinks';
import { FcRedo } from "react-icons/fc";
import { FcExport } from "react-icons/fc";


const FooterInfoDetails = () => {

    return (

      <>
      <div className="footer_nav_container">
        <div className="footer_nav_section" style={{display: 'flex', justifyContent: 'space-evenly', alignContent: 'center', padding: '20px 0px'}}>
          <div className="foot_nav_left">
            <div className="foot_left_header">
              <HashLink
                to="/admin/login"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <h3 style={{color: 'moccasin'}} >Vilhota Alina | <span style={{color: 'oldlace'}}>Portfolio</span></h3>
              </HashLink>
            </div>
            <div className="foot_middle_info" style={{width: '350px', marginRight: '20px', fontWeight: '600', color: 'darkorange'}}>
              <p className="basic_info">
              Require assistance with your projects? You can contact me using the information provided on the right, and I will make an effort to respond promptly.
              </p>
            </div>
            <div>
              <GitHubButton
                href="https://github.com/vilhota30?tab=repositories"
                shadow="#482e87 0px 0px 13px"
              />
            </div>
          </div>
          <div className="foot_nav_middle" style={{marginRight: '20px'}}>
            <div className="foot_middle_header">
              <h3 style={{color: 'whitesmoke'}}>Quick Links</h3>
            </div>
            <div className="foot_nav">
              {myNavBarData.map((data, index) => {
                return (
                  <>
                    <div style={{display: 'flex'}}>
                    <FcExport />
                    <HashLink key={index} to={data.nav_link} style={{display: 'flex', textDecoration: 'none', height: '30px', alignItems: 'center'}}>
                      {/* <i className="fa-solid fa-angles-right" style={{color: 'darkblue', }}></i> */}
                      <p style={{color: 'coral', fontWeight: '600', fontSize: '18px'}}> {data.navbar_name}</p>
                    </HashLink>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="foot_nav_right">
            <div className="foot_right_header">
              <h3 style={{color: 'whitesmoke'}}>Contact Info</h3>
            </div>
            <div className="foot_contact_info">
              {aboutMeInfo.map((data, index) => {
                return (
                  <div className="foot_cdiv" key={index}>
                    {data.section_two.map((e, i) => {
                      return (
                        <div className="contact_me_here" key={i} style={{display: 'flex', height: '30px', alignItems: 'center'}}>
                          {/* <i
                            className={e.icon_class}
                            style={{ color: e.ic_color }}
                          ></i> */}
                          <FcRedo />
                          <p style={{fontWeight: '600', fontSize: '18px', color: 'sandybrown'}}>{e.data_value}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <SocialMediaProfileLinks style={{ gap: '6px', display: 'flex', }} />
            </div>
          </div>
        </div>
      </div>
    </>
  
    );
};

export default FooterInfoDetails;
