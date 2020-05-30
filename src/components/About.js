import React, { Component } from 'react'
import reactLogo from "../reactLogo.png";
import jsLogo from "../jsLogo.png";


export default class About extends Component {
  showModal = () => {
    const modal = document.querySelector('.modal')
    const navbar = document.querySelector('.main-nav')
    modal.style.display = 'block'
    navbar.style.display = 'none'
  }
  
  render(){
  return (
    <section id="about">
    <div className='aboutContainer'>
      <div className="aboutWrapper">
        <div className="aboutIMGparaContainer">
          <div className="aboutTextContainer">
          <h3>About me</h3>
          <p className="aboutPara"> My name is <strong>Jesse</strong>, and I am a <strong>Web Developer</strong> living in Niagara Falls, Ontario. I have been self teaching myself various front end web technologies from <strong>HTML, CSS, JavaScript(ES6), Google Firebase and React</strong> for the past 2 years. I attended <strong>Juno College</strong> in Toronto at the start of 2019 to get my feet wet with JavaScript and have taken countless JavaScript and React courses to further my knowledge since. I love the creativity and various challenges that web development presents every day. From the start I have been designing my websites with <strong>FlexBox and CSS Grid</strong>. I've also been using <strong>GitHub</strong> and version control with <strong>git</strong> from the start. Please check out my projects section to see some examples of my work. Some have been made with just vanilla JavaScript, HTML and CSS while others include React and getting data from <strong>API's</strong> or using different React libraries.<br></br>
          Previously I was a professional photographer for 12 years. I have shot over 400 weddings and countless family, engagement and corporate events. Redesigning my website is what lead me on the path of a career change. When I re-created my website for my business I began researching <strong>SEO</strong> best practices and have tried to use them for everything since. Besides that, I am a huge animal lover, netflix connoisseur and outdoor adventurer.<br></br>
          </p>
          <h3>Technologies</h3>
          <div className="techContainerIMG">
        <img src={jsLogo} alt="" className="jsLogo" />
        <img src={reactLogo} alt="" className="reactLogo" />
        </div>
          </div>
        </div>
      </div>  
    </div>
    </section>
  )
  }
}
