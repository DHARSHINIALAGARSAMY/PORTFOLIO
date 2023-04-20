import "./portfolio.css";

import IMG1 from "../../assets/rest.jpg";
import IMG4 from "../../assets/coffee.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Restaurant using React.js",
      img: IMG1,
      description:
        "A restaurant is a business that prepares and serves food and drinks to customers.",
      technologies: "Html | CSS | Javascript | React Js",
      github: "https://github.com/DHARSHINIALAGARSAMY/PROJECT",
    },
    {
      id: 2,
      title: "Coffee shop",
      img: IMG4,
      description:
        "Make Them Coffee in Bed. There's something sacred about making someone a cup of coffee.",
      technologies: "Html | CSS | Javascript | React Js",
      github: "https://github.com/DHARSHINIALAGARSAMY/REACTDAY3",
    },
    
  ];

  return (
    <section id="portfolio">
      <br></br>
      <br></br>
      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                // href={pro.link}
                // target="_blank"
                // className="btn btn-primary"
                // rel="noreferrer"
              >
                {/* Live Demo */}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
