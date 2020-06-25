import React from 'react';
import "./About.css";
import availibleSwitch from './../Design/AvailibleSwitch.png';
import webDesignIcon from './../Design/WebDesignIcon.png';
import mobileDesignIcon from './../Design/MobiIeDesignIcon.png';
import embeddedSystems from './../Design/EmbeddedSystems.png';
import { intro } from "../Data/About";

const About = () => {



  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });





  return (
    <div id="about_area">
      <div>
        <h1 className="title">{ (() => {if (dimensions.width > 768) { return <span>&#x25A0;&thinsp;&thinsp;</span>;} else return ''; })() }Hi there, I’m Liam!</h1>
        <p>
          {intro}
        </p>
      </div>


      <div id="what_i_do_area">
        <ul id="whatIDo">
          <li>
            <img src={webDesignIcon} alt='' />
            <h1>Web Development</h1>
          </li>

          <li>
            <img src={mobileDesignIcon} alt='' />
            <h1>Mobile Development</h1>
          </li>

          <li>
            <img src={embeddedSystems} alt='' />
            <h1>Embedded Systems</h1>
          </li>
        </ul>
      </div>
      <div>
        <h3 id='currentAvailability'><img src={availibleSwitch} alt='' /> I’M CURRENTLY <span className="highlight">AVAILABLE</span> FOR HIRE</h3>
      </div>



    </div>
  );

};

export default About;