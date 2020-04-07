import React from "react";
import weatherAPI from "../weatherAPI.JPG";
import pixabay from "../pixabay.JPG";
import quit from "../quit.JPG";
import photography from "../photography.JPG";
import covoid from "../covoid.JPG";
import aspire from '../Aspire.JPG'
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="projectsContainer" id="project">
      <h1>Projects</h1>
      <div className="projectsWrapper">
        <div className="projects">
          <div className="projectCardLand projCard1">
            <ProjectCard
              project={{
                title: "Weather API",
                mainLink: "https://suspicious-poincare-470590.netlify.com",
                image: weatherAPI,
                paragraph: 'I built this weather app using the openWeather API and React. It gathers current conditions and a 3 day future forecast. I used local storage to save the users city and implemented a modal.',
                webLink: "https://suspicious-poincare-470590.netlify.com",
                link1: "Live Site",
                github: 'https://github.com/jessejamescanada/REACTweatherAPI',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand projCard2">
          <ProjectCard
              project={{
                title: "Aspire Finance",
                mainLink: "https://gallant-goldstine-e17e08.netlify.com/",
                image: aspire,
                paragraph: 'My first client! I built a website for a local financial advisor using vanilla JavaScript, HTML and CSS. I tried to make it interactive with different modals, toggling classes to show/hide information, added a button to scroll to the top and responsive for both desktop and mobile.',
                webLink: "https://gallant-goldstine-e17e08.netlify.com/",
                link1: "Live Site",
                github: 'https://github.com/jessejamescanada/AspireFinance',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand projCard3">
          <ProjectCard
              project={{
                title: "Pixabay Search",
                mainLink: "https://reverent-ardinghelli-aea4f2.netlify.com/",
                image: pixabay,
                paragraph: 'I built an image search site with React that connects to the Pixabay API. I utilized local storage to save the search results. The display uses the CSS grid system.',
                webLink: "https://reverent-ardinghelli-aea4f2.netlify.com/",
                link1: "Live Site",
                github: 'https://github.com/jessejamescanada/PixabyReact2',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand projCard4">
          <ProjectCard
              project={{
                title: "COVOID-19 Tracker",
                mainLink: "https://condescending-hodgkin-26b8d3.netlify.com/",
                image: covoid,
                paragraph: `I wanted to make something to help family & friends track the CoronaVirus pandemic. Built with React and connects to John Hopkins University API and NewsAPI. Data is displayed with ChartJS library and news uses CSS grid.`,
                webLink: "https://condescending-hodgkin-26b8d3.netlify.com/",
                link1: "Live Site",
                github: 'https://github.com/jessejamescanada/REACTcoronaVirus',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand projCard5">
          <ProjectCard
              project={{
                title: "Photography",
                mainLink: "https://jessejamesphotography.ca/",
                image: photography,
                paragraph:'What first started my path to web development. Redesigning my website with HTML, CSS and a small amount of JavaScript and making it responsive.',
                webLink: "https://jessejamesphotography.ca/",
                link1: "Live Site",
                github: 'https://github.com/jessejamescanada/REACTcoronaVirus',
                link2: "Github"
              }}
            />
          </div>
          <div className="projectCardLand projCard6">
          <ProjectCard
              project={{
                title: "Quit Smoking",
                mainLink: "https://pedantic-lamarr-d3bd23.netlify.com/",
                image: quit,
                paragraph: 'My first app using React hooks. I wanted to build something meaningful to me. A calculator where the user enters costs, amounts and a date and it updates the results and can be reset. Built with React, HTML, CSS, JavaScript',
                webLink: "https://pedantic-lamarr-d3bd23.netlify.com/",
                link1: "Live Site",
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

