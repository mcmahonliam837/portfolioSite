import React from "react";
import logo from "./Design/Logo.png";
import bg from "./Design/toronto-skyline.jpg";
import "./App.css";
import ParallaxArea from "./ParallaxArea/ParallaxArea";
import About from "./About/About";
import ProjectArea from "./ProjectArea/ProjectArea";
import EmailForm from "./Popups/EmailForm/EmailForm";
import linkedin from "./Design/linkedin.png";
import git from "./Design/git.png";

function App() {
  const [emailPopupVis, setEmailPopupVis] = React.useState({
    visable: false,
  });




  return (
    <div className="App">
      <ParallaxArea
        title="BUILDING THE FUTURE TODAY"
        subtitle="WITH EFFICIENT, POWERFUL, AND ELEGANT SOLUTIONS"
        logo={logo}
        bg={bg}
      />
      <div className="app_contents">
        <About />
        <ProjectArea />
      </div>

      <div id="contact_area">
          <div className="socialMedia">
            <ul>
              <li>
                <a
                  href="https://github.com/mcmahonliam837"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} className="socialMediaIcon" alt="" />

                  <h1 className="socialMediaTitle">mcmahonliam837</h1>
                </a>
              </li>

              <li>
                <a
                  href="https://ca.linkedin.com/in/lmmcmahon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} className="socialMediaIcon" alt="" />
                  <h1 className="socialMediaTitle">/lmmcmahon</h1>
                </a>
              </li>
            </ul>
          </div>

          <div className="email">
            <h1>
              Shoot me an email
              <span className="highlight">
                <a href="mailto:lm@liammcmahon.me" target="_blank" className="highlight"> here! </a>
              </span>
              Or take a look at my 
              <span className="highlight">
                <a href='Resume.pdf'  target="_blank" rel="noopener noreferrer"><span className='highlight'> resume!</span></a>
              </span>
            </h1>
          </div>

        <div>
          <div className="copyRightArea">
            <table>
              <colgroup>
                <col style={{ width: "33%" }} />
                <col style={{ width: "33%" }} />
                <col style={{ width: "33%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th></th>
                  <th>COPYRIGHT 2017</th>
                  <th>
                    CODED WITH <span className="highlight">&#9829;</span> BY
                    LIAM MCMAHON
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
