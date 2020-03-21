import React from "react";
import weatherAPI from "../weatherAPI.JPG";
import pixabay from "../pixabay.JPG";
import quit from "../quit.JPG";
import photography from "../photography.JPG";
import covoid from "../covoid.JPG";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="projectsContainer" id="project">
      <h1>Projects</h1>
      <div className="projectsWrapper">
        <div className="projects">
          <div className="projectCardLand">
            <ProjectCard
              project={{
                title: "Weather API",
                mainLink: "https://suspicious-poincare-470590.netlify.com",
                image: weatherAPI,
                webLink: "https://suspicious-poincare-470590.netlify.com",
                link1: "Click Me",
                github: 'https://github.com/jessejamescanada/REACTweatherAPI',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand">
          <ProjectCard
              project={{
                title: "Pixaby Search",
                mainLink: "https://reverent-ardinghelli-aea4f2.netlify.com/",
                image: pixabay,
                webLink: "https://reverent-ardinghelli-aea4f2.netlify.com/",
                link1: "Click Me",
                github: 'https://github.com/jessejamescanada/PixabyReact2',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand">
          <ProjectCard
              project={{
                title: "COVOID-19 Tracker",
                mainLink: "https://condescending-hodgkin-26b8d3.netlify.com/",
                image: covoid,
                webLink: "https://condescending-hodgkin-26b8d3.netlify.com/",
                link1: "Click Me",
                github: 'https://github.com/jessejamescanada/REACTcoronaVirus',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand">
          <ProjectCard
              project={{
                title: "Photography",
                mainLink: "https://jessejamesphotography.ca/",
                image: photography,
                webLink: "https://jessejamesphotography.ca/",
                link1: "Click Me",
                github: 'https://github.com/jessejamescanada/REACTcoronaVirus',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand">
          <ProjectCard
              project={{
                title: "Quit Smoking",
                mainLink: "https://pedantic-lamarr-d3bd23.netlify.com/",
                image: quit,
                webLink: "https://pedantic-lamarr-d3bd23.netlify.com/",
                link1: "Click Me",
                github: 'https://github.com/jessejamescanada/REACTquitSmokingCalc',
                link2: "Github"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
