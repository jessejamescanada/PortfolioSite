import React, { Component } from 'react'
import reactLogo from "../reactLogo.png";
import jsLogo from "../jsLogo.png";


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
      
      <div className="techContainerIMG">
        <img src={jsLogo} alt="" className="jsLogo" />
        <img src={reactLogo} alt="" className="reactLogo" />

        </div>
      </div>
    </div>
    )
  }
}


