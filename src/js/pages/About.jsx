import React from "react";
import '../../css/pages/About.css';
import aboutMeInfo from "js/data/AboutMeData";
import aboutMeImg from '../images/businesswoman.png';
// import { nanoid } from "nanoid";
function AboutMe () {
    return (
        <>
        <section className="about_me" id="about_myself">
           <div className="about_me_container" style={{display: 'flex', backgroundColor: 'burlywood', marginBottom: '30px'}} >
               <div className="my_img">
                 <img id="img" src={aboutMeImg} alt="profile_image" style={{backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "400px", width: "400px", border: "1px solid black", borderRadius: "8px", backgroundSize: "cover", backgroundPosition: "center", marginRight: '50px', marginTop: '40px', marginLeft: '40px',}} />
               </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>      
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p style={{fontSize: '20px', fontWeight: '600', color: 'saddlebrown'}}>
          👋I am a junior React developer from Vynogradov, Ukraine🌎 . I have long been interested in the "magical" development process. I recently completed the Fullstack Developer course at the GoIT school. I fell in love with React.js during my studies.
           This framework is very powerful and diverse. Currently, I am deepening my skills with React.js and Redux.js by creating pet projects, while learning TypeScript. I have a thirst to learn new things every day, improve myself in the field of development and work for a result that is noticeable🎓. In my spare time, I like to read fiction, watch documentaries and relax in nature.
          </p>
        </div>
        <div className="personal_info" style={{display: 'flex', width: '500px'}}>
             {aboutMeInfo.map((data, index) => { 
               return ( 
                <>
                   <div className="abc" key={index} style={{marginRight: '20px', color: 'darkslateblue', fontSize: '18px'}}>
                    {data.section_one.map((e, index) => {
                      return (
                        <>
                        <h4 key={index}>
                        <e.data_icon /> <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                        </>
                      );
                    })}
                  </div> 
                   <div className="xyz" style={{color: 'darkslateblue', fontSize: '18px'}} >
                    {data.section_two.map((e, index) => {
                      return (
                        <>
                        <h4>
                        <e.data_icon /> <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                        </>
                      );
                    })}
                  </div> 
                 </>
               );
            })}
          </div> 
        </div> 
        </div>
        </section>
        </>
)
};
export default AboutMe;
