import React, { Component } from "react";
import me from "../header2.jpg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <nav className="main-nav">
            <h2>Jesse G</h2>
            <ul className="navbarList">
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="headerContainer">
            <img className="headerIMG" src={me} alt="me" />
            <div className="headerContent">
              <h1>
                Jesse <em className="italics">G</em> - Web Developer
              </h1>
              <div className="headerPara">
                <p>
                  Front end developer working with{" "}
                  <span className="textEmphasis">JavaScript(ES6)</span> and{" "}
                  <span className="textEmphasis">React</span>
                </p>
                <div className="iconContainer">
                  <a target="_blank" href="https://github.com/jessejamescanada?tab=repositories">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jesse-giammattolo-468233184/"
                  >
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/JesseJamesphoto">
                    <i class="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
                <a href="#project" className="headerLink">
                  View my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
