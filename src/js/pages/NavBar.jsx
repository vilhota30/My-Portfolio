import React, { useState } from 'react';
// import { BsBrightnessHighFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { HashLink } from 'react-router-hash-link';
import myNavBarData from 'js/data/NavBarData';
// import css from '../components/pages/NavBar';
import '../../css/pages/NavBar.css';


const NavBar = () => {

  const [active, setActive] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [btnClick, setBtnClick] = useState(0);

  const handleClick = () => {
     setActive(!active);
     setBtnActive(!btnActive);
  };

    return (
      <>
      <div className="nav-container" style={{ display: 'flex', position: 'sticky', zIndex: '100', top: '0'}}>
        {/* <div className="logo">
          <HashLink to="/#home_page" className="nav__logo">
            <BsBrightnessHighFill />
          </HashLink>
        </div> */}
        <div className={active ? 'active_links  ' : 'links'}>
        <div className="MenuItems ">
            {myNavBarData.map((data, index) => {
              return (
                <HashLink
                  className={btnClick === index ? 'active_navbtn' : 'navbtn'}
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
                    if (data.another_page === true)
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                    setActive(false);
                    setBtnActive(false);
                    setBtnClick(index);
                  }}
                >
                  <span
                    style={{
                      height: '39px',
                      alignItems: 'center',
                      paddingBottom: '1px',
                    }}
                  >
                    <data.nav__icon />
                  </span>
                  {data.navbar_name}
                </HashLink>
              );
            })}
          </div>
        </div>
          <div className="toggle_menu_icons" onClick={handleClick}>
           {/* <CiBoxList /> */}
           { active ? <CiCircleRemove /> : <CiBoxList /> }
          <div
            className={active ? 'fas fa-times' : 'fas fa-bars-staggered'}
            style={{
              display: 'flex',
              marginLeft: 'auto',
              fontSize: '21px',
              fontWeight: '600',
              color: '#fff',
            }}
          >
            {/* <CiCircleRemove /> */}
          </div>
        </div>

       </div>
      </>
    ) 

    
};

export default NavBar;