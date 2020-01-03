import React from 'react';
import "./ParallaxArea.css"




const navBtnClick = (location) => {
    window.scrollTo({
      left: 0,
      top: document.getElementById(location + '_area').offsetTop,
      behavior: 'smooth'
    });
};



const ParallaxArea = (props) => {
  return (
    <div className="parallax_area" style={{ backgroundImage: props.bg }}>
      <div className="parallax_area_overlay">
        <img src={props.logo} alt="" id="logo" />
        <button id="contactButtonTop" onClick={() => navBtnClick('contact')}>Contact</button>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>

        <div id="navContainer">
          <ul id="nav">
            <li>
              <button id="aboutButton" onClick={() => navBtnClick('about')}>About</button>
              <p>&#9632;</p>
            </li>
            <li>
              <button id="projectsButton" onClick={() => navBtnClick('project')}>Projects</button>
              <p>&#9632;</p>
            </li>
            <li>
              <button id="contentButton" onClick={() => navBtnClick('contact')}>Contact</button>
              <p>&#9632;</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};



export default ParallaxArea;