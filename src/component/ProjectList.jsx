import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../css/main.css'

export class ProjectList extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='container'>{
        this.props.projects.map(card => {
          return <div className='block' key={card.id}><img className='image' src={card.img} alt="#"/></div>
        })
      }</div>
    )
  }
}

export default ProjectList