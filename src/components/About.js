import React, { Component } from 'react'
import me from '../pixabay.JPG'
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
          <p className="aboutPara"> My name is <strong>Jesse Giammattolo</strong>, and I am a <strong>Web Developer</strong> living in Niagara Falls, Ontario. I have been self teaching myself various web technologies from <strong>HTML, CSS, JavaScript(ES6) and React</strong>. I love learning about new technologies and that this career always involves learning new concepts.<br></br>
          Outside of Web Development, I am a gigantic dog lover who enjoys the outdoors and going on different adventures.</p>
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
