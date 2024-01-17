import React from "react";
import '../../css/pages/Hero.css';
import SocialMediaProfileLinks from "js/components/SocialMediaLinks";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import photo from '../images/Photo.jpg';
import mountains from '../images/mountains.jpg';

function HeroPage () {

   const [text] = useTypewriter({
     words: ['Frontend Development', 'Backend Development'],
     loop: {},
     timeSpeed: 120,
     deleteSpeed: 50,
  });

 return (
   
    <>
       <div className="profile-container" id="home_page" style={{ backgroundImage: `url(${mountains})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", backgroundSize: "cover", backgroundPosition: "bottom", }}>
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text"> Vilhota Alina</span>
              </p>
            </div>
            <div className="profile-details-role">
            {/* <span className="primary-text"> */}
            <h1 style={{ display: 'flex', width: '600px', gap: '6px', color: 'darkblue', }}>
              I am into
            <span style={{ color: 'black' }}>{text}</span>
           <span style={{color: 'red',}}>
              <Cursor />
           </span>
            
            </h1>
            <span className="profile-role-tagline" >
            {/* style={{color: '#441f86d9', fontWeight: '800', fontSize: '18px', display: 'block', width: '600px',}} */}
                  I make websites that are easy to use, meet the client's needs,
                  and work well even as they grow. I pay close attention to
                  every little thing to make sure they work fast and are
                  reliable.
            </span>
            {/* </span> */}
            <div className="colz" style={{marginTop: '15px', marginBottom: '15px',}}>
                <SocialMediaProfileLinks />
            </div>
            </div>
            <div className="profile-options">
              <a href="#contact_page">
                <button className="btn-profile primary-btn-profile">Hire Me</button>
              </a>
              <a href="CV_VilhotaAlina.pdf" download="CV_VilhotaAlina.pdf" >
                <button className="btn-profile highlighted-btn-profile">Get Resume</button>
              </a>
            </div>
          </div>
          <div style={{backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "400px", width: "400px", border: "1px solid darkblue", borderRadius: "50%", backgroundSize: "cover", backgroundPosition: "center", marginLeft: '20px', marginRight: '50px', marginTop: '20px', marginBottom: '20px', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}></div>
        </div>
       </div> 
    </>
 );

};

export default HeroPage;