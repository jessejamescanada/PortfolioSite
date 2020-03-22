import React, { Component } from 'react'
import resume from '../resume.JPG'
import Modal from '../components/Modal'
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
    <div className='aboutContainer'>
      <div className="aboutWrapper">
        <div className="aboutIMGparaContainer">
        <div className="resume" id='resume'>
      <h4>Resume</h4>
        <img src={resume} alt="" className='aboutIMG' onClick={this.showModal}/>
      </div>
      <Modal />
          <div className="aboutTextContainer">
          <h3>About me</h3>
          <p className="aboutPara"> My name is <strong>Jesse Giammattolo</strong>, and I am a <strong>Web Developer</strong> living in Niagara Falls, Ontario. I have been self teaching myself various front end web technologies from <strong>HTML, CSS, JavaScript(ES6) and React</strong> for the past 1.5 years. I love the creativity and various challenges that web development presents every day.<br></br>
          Outside of Web Development, I ran my own professional photography business for 13 years. Also, I am a gigantic dog lover who enjoys the outdoors.</p>
          <h3>Technologies</h3>
          <div className="techContainerIMG">
        <img src={jsLogo} alt="" className="jsLogo" />
        <img src={reactLogo} alt="" className="reactLogo" />
        </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
  }
}
