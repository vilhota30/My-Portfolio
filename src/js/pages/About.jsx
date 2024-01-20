import React from "react";
import '../../css/pages/About.css';
import aboutMeInfo from "js/data/AboutMeData";
// import aboutMeImg from '../images/businesswoman.png';
import women from '../images/women.png';
import wood from '../images/wood.jpg';
// import { nanoid } from "nanoid";
function AboutMe () {
    return (
        <>
        <section className="about_me" id="about_myself" style={{ backgroundImage: `url(${wood})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", backgroundSize: "cover", backgroundPosition: "center",}} >
            <div className="about_me_container" > 
               <div className="my_img">
                 <img id="img" src={women} alt="profile_image" style={{backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "400px", width: "400px", borderRadius: "8px", border: "2px solid bisque", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: 'moccasin'}} />
               </div>
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'darksalmon', borderRadius: '8px'}}>      
        <div className="my_info">
          <h2 style={{display: 'flex', justifyContent: 'center', color: 'darkred'}}>
          📌 About <span style={{color: 'brown'}}>Me</span>
          </h2>
          <p style={{fontSize: '20px', fontWeight: '600', color: 'firebrick', padding: '10px'}}>
          👋"Hello! My name is Alina and I am a junior React developer with a deep interest in web technologies. My expertise includes working with technology stacks such as HTML, CSS, and JavaScript.
           I'm actively using React.js and Node.js in my projects and I'm looking to develop my skills by exploring new opportunities and practices in this direction.
           During my time as a React developer, I've already been involved in building web applications, focusing on the front end and user experience. My goal is to become an experienced IT specialist. I am always open to learning new technologies and collaborating with the team to achieve high standards in software development."
          </p>
        </div>
         <div className="personal_info" >
        {/* style={{display: 'flex',  justifyContent: 'center', width: '400px', backgroundColor: 'rosybrown', borderRadius: '8px' */}
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
