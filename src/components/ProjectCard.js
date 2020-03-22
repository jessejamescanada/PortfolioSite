import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render(){
  return (
    <div>
      <h2 className="title">{this.props.project.title}</h2>
      <a target='_blank' rel='noopener noreferrer' href={this.props.project.mainLink}>
      <div className="imgHoverWrapper">
        <img src={this.props.project.image} alt="" className='projectLandIMG'/>
      </div>
      </a>
      <p className='projectParagraph'>{this.props.project.paragraph}</p>
      <div className="anchorContainer">
        <a target='_blank' rel='noopener noreferrer' href={this.props.project.webLink}>{this.props.project.link1}</a>
        <a target='_blank' rel='noopener noreferrer' href={this.props.project.github}>{this.props.project.link2}</a>
      </div>
    </div>
  )
  }
}
