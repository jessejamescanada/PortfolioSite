import React, { Component } from 'react'
import resume from '../resume.JPG'

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("click", this.closeModal);
  }

  closeModal = e => {
    const modal = document.querySelector(".modal");
    const navbar = document.querySelector('.main-nav')
    if (e.target === modal) {
      modal.style.display = "none";
      navbar.style.display = 'flex'
    }
  };

  closeModalX = e => {
    const modalX = document.querySelector(".modalX");
    const modal = document.querySelector('.modal')
    if (e.target === modalX) {
      modal.style.display = "none";
    }
  };
  
  render() {
    return (
      <div className="modalCSS">
      <div className="modal">
        <div className="modal-content">
        <p className="modalX" onClick={this.closeModalX}>
              X
            </p>
          <img
            src={resume} className='resumeFull' alt='resume'
          />
        </div>
      </div>
    </div>
    )
  }
}
