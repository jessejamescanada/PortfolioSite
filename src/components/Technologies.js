import React, { Component } from 'react'
import reactLogo from "../reactLogo.png";
import jsLogo from "../jsLogo.png";
import resume from '../resume.JPG'
import Modal from '../components/Modal'

export default class Technologies extends Component {

showModal = () => {
  const modal = document.querySelector('.modal')
  const navbar = document.querySelector('.main-nav')
  modal.style.display = 'block'
  navbar.style.display = 'none'
}

  render() {
    return (
      <div className="techContainer">
      <h1>Technologies</h1>
      <div className="resumeTechContainer">
      <div className="resume" id='resume'>
      <h4>Resume</h4>
        <img src={resume} alt="" className='resume' onClick={this.showModal}/>
      </div>
      <Modal />
      <div className="techContainerIMG">
        <img src={jsLogo} alt="" className="jsLogo" />
        <img src={reactLogo} alt="" className="reactLogo" />
        </div>
      </div>
      {/* <div className="resume" id='resume'>
      <h1>Resume</h1>
        <img src={resume} alt="" className='resume' onClick={this.showModal}/>
      </div> */}
    </div>
    )
  }
}


