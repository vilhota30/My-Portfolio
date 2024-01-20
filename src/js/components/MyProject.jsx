import React from "react";
import '../../css/pages/components/MyProject.css';
import myproject from '../images/project.png';
import GitHubButton from "./ButtonCitHub";

function AboutMyProject () {
   return (
    <>
      <div className="proj_container_section">
        <div className="proj_left" style={{marginRight: '50px', marginBottom: '20px'}}>
          <h3>Projects & Experiences</h3>
          <p style={{display: 'flex', width: '500px', fontSize: '20px', fontWeight: '600', color: 'black'}}>
          You can find all of my projects on my GitHub profile, where you can review my activities, contributions, and code of these projects. Some of them are completed, while others are still in progress. Feel free to leave comments on the profile and initiate discussions. I am always open to new projects and ideas. You can also reach out to me through any of the social media channels mentioned below.
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

