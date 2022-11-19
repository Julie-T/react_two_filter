import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../css/main.css'

export class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({img: PropTypes.string, category: PropTypes.string, id: PropTypes.number})).isRequired,
  }

  render() {
    return (
      <div className='container'>
      <div className='menu'>
       {
        this.props.projects.map(card => {
          return <div className="figure" key={card.id}>
            <img className='image' src={card.img} alt="#"/>
            </div>
        })
      }</div></div>
    )
  }
}

export default ProjectList