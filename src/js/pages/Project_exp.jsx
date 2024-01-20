import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import AboutMyProject from 'js/components/MyProject';
import myProjectsData from 'js/data/ProjectsData';
import pencils from '../images/pencils.jpg';

const MyProjects = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const visibleCards = myProjectsData.slice(0, 6);
  return (
    // <div>
      <>
      <div className="work_page" id="my-work" style={{backgroundColor: 'chocolate', padding: '20px 40px'}} >
        <div className="proj_component">
          <AboutMyProject />
        </div>
        <div className="project_group" style={{backgroundImage: `url(${pencils})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} >
        {/* style={{backgroundColor: 'burlywood', paddingTop: '20px', backgroundImage: `url(${pencils})`, backgroundRepeat: "no-repeat", justifyContent: "center", backgroundSize: "cover", backgroundPosition: "center",}} */}
        <h2 style={{ display: 'flex', justifyContent: 'center', color: 'moccasin', fontSize: '30px', fontWeight: '700', marginBottom: '20px'}}>My projects</h2>
        <div className="project_work_page" style={{display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', marginTop: '14px',}}>
          {visibleCards.map((e, index) => (
            <div
              className="section"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{border: '1px solid firebrick', borderRadius: '5px', backgroundColor: 'brown', padding: '8px', boxShadow: 'rgba( 1, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}
            >
              <div className="pcontainer">
                <img src={e.project_image} alt="project Images" style={{display: 'flex', width: '250px', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center',}}/>
                <div className="proj_header">
                  <h3 style={{color: 'orange'}}>{e.project_name}</h3>
                  <h4 style={{color: 'cornsilk'}}>{e.proj_creation_date}</h4>
                </div>
                <div className="proj_descriptions">
                  <p>{e.proj_description}</p>
                </div>
                <div className="proj_btns" style={{display: 'flex'}}>
                  <a
                    href={e.proj_code_like}
                    target={e.proj_code_like !== '#' ? '_blank' : ''}
                    rel="noreferrer"
                  >
                    <button style={{backgroundColor: 'lightcoral', color: 'darkred', border: '2px solid coral', borderRadius: '6px', fontSize: '18px', fontWeight: '700', marginRight: '8px'}} className="proj_code">Project Code</button>
                  </a>
                  <a
                    href={e.proj_live_link}
                    target={e.proj_live_link !== '#' ? '_blank' : ''}
                    rel="noreferrer"
                  >
                    <button style={{ border: '2px solid coral', borderRadius: '6px', fontSize: '18px', fontWeight: '700'}} className="proj_live">Live Project</button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {showAllCards && (
            <>
              {myProjectsData.slice(6).map((e, index) => (
                <div
                  className="section"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="pcontainer">
                    <img src={e.project_image} alt="project Images" />
                    <div className="proj_header">
                      <h3>{e.project_name}</h3>
                      <h4>{e.proj_creation_date}</h4>
                    </div>
                    <div className="proj_descriptions">
                      <p>{e.proj_description}</p>
                    </div>
                    <div className="proj_btns">
                      <a href={e.proj_code_like}>
                        <button className="proj_code">Project Code</button>
                      </a>
                      <a href={e.proj_live_link}>
                        <button className="proj_live">Live Project</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  width: '350px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <HashLink
                  onClick={() => setShowAllCards(false)}
                  to={'/#my-work'}
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="view__btn"
                >
                  Okey,I got it
                </HashLink>
              </div>
            </>
          )}

          {!showAllCards && (
            <div
              style={{
                width: '350px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* <button
                onClick={() => setShowAllCards(true)}
                data-aos="fade-down"
                data-aos-duration="2000"
                className="view__btn"
              >
                View All
              </button> */}
            </div>
          )}
        </div>
        </div>
      </div>
    {/* </div> */}
    </>
  );
};

export default MyProjects;
