import React from 'react';
import "./About.css";
import availibleSwitch from './../Design/AvailibleSwitch.png';
import webDesignIcon from './../Design/WebDesignIcon.png';
import mobileDesignIcon from './../Design/MobiIeDesignIcon.png';
import embeddedSystems from './../Design/EmbeddedSystems.png';

const About = () => {
  return (
    <div id="about_area">
      <div>
        <h1 className="title">&#x25A0;&thinsp;&thinsp;Hi there, I’m Liam!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ipsum non nisi lobortis, a lacinia
          augue pellentesque. Nulla rutrum aliquet urna, vitae euismod lectus rutrum a. Aenean viverra enim non sodales
          dictum. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae metus enim. Etiam ultrices justo
          vel lacus egestas, quis accumsan erat vestibulum. Aenean ante ipsum, dictum ut gravida nec, vehicula sed elit.
          Vestibulum tincidunt porta
          ante, id luctus nisl finibus non.
        </p>
      </div>

      <div>
        <h3 id='currentAvailability'><img src={availibleSwitch} alt='' /> I’M CURRENTLY <span className="highlight">AVAILABLE</span> FOR HIRE</h3>
      </div>


      <div>
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


    </div>
  );

};

export default About;