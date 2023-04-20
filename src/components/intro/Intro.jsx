import "./intro.css";
import React from "react";
const Intro = () => {
  return (
    <section id="about">
      <br></br>
      <br></br>
     <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
          <div className="about__me-image">
        </div>
         <div className="about__content">
         
          <p>
          I'm Dharshini Alagarsamy pursuing my bachelor of engineering in electronics and Communication.
        I'm an enthusiastic front end developer with a strong knowledge about react. Proficient in translating designs and
            wireframes into high-quality code, and writing application interface
            code via JavaScript and React JS workflows. Adept at monitoring and
            maintaining frontend performance and troubleshooting and debugging
            the same to bolster overall performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
