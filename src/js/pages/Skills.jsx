import React from 'react'
import mySkillsData from 'js/data/MySkillsData'
import '../../css/pages/Skills.css';

const mySkillsDescription = [
    {
      index: 1,
      info: '⚡ Building responsive website front end using ReactJS',
    },
    {
      index: 2,
      info: '⚡Developing mobile applications using React JS , Node JS and Styled Components ',
    },
    {
      index: 3,
      info: '⚡ Creating application backend in Node JS & Express JS',
    },
  ];

const MySkills = () => {

    return (
        <>
          <section id="my_skill">
        <div className="my_skills">
          <h2 style={{color: 'floralwhite', padding: '10px', boxShadow: 'rgba(0, 1, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', borderRadius: '10px'}}>
            My Skills <span>&</span> Abilities
          </h2>
        </div>
        <div className="section_container_skills_gif">
          <div className="skills_gif_container">
            {mySkillsDescription.map((data, index) => (
              <div className="cards" key={index}>
                {data.info}
              </div>
            ))}
          </div>
        </div>
        <div className="contain_div">
          <div className="container_s">
            {mySkillsData.map((e, index) => (
              <div
                className="skill_box"
                key={index}
                style={{ boxShadow: `0px 0px 12px ${e.bx_shadow}` }}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="content_img_container">
                  <img
                    src={e.img_link}
                    alt={e.img_content}
                    style={{ height: e.img_height, filter: e.img_styles }}
                    loading="lazy"
                  />
                </div>
                <h3>{e.skill_name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    );

};

export default MySkills;

