import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render(){
  return (
    <div>
      <h2 className="title">{this.props.project.title}</h2>
      <a target='_blank' href={this.props.project.mainLink}>
      <div className="imgHoverWrapper">
        <img src={this.props.project.image} alt="" className='projectLandIMG'/>
      </div>
      </a>
      <div className="anchorContainer">
        <a href={this.props.project.webLink}>{this.props.project.link1}</a>
        <a href={this.props.project.github}>{this.props.project.link2}</a>
      </div>
    </div>
  )
  }
}
