import React from "react";
import '../../css/pages/components/MyProject.css';
import myproject from '../images/project.png';
import GitHubButton from "./ButtonCitHub";

function AboutMyProject () {
   return (
    <>
      <div className="proj_container_section">
        <div className="proj_left" style={{marginRight: '50px'}}>
          <h3>Projects & Experiences</h3>
          <p style={{display: 'flex', width: '500px', fontSize: '20px', fontWeight: '600', color: 'black'}}>
            You can find all of my projects on my profile on Github. You can
            view my activities, contributions and code on these projects. Some
            of these are completed and some are in progress. You can also leave
            comments on the profile and start a discussion. I am always looking
            for new projects and Ideas. You can also reach out to me on any of
            the social media channels mentioned below.
          </p>
           <GitHubButton
            backgroundColor="#512da8"
            shadow="#482e87 0px 0px 9px"
            href="https://github.com/vilhota30?tab=repositories"
          />
        </div>
        <div className="proj_right">
          <img src={myproject} alt="Project Img"  style={{backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "400px", width: "100%", border: "1px solid black", borderRadius: "8px", backgroundSize: "cover", backgroundPosition: "center"}} />
        </div>
      </div>
    </>
 )

};

export default AboutMyProject;

