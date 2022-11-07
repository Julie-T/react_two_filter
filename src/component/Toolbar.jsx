import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../css/main.css'

export class Toolbar extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = { onSelect: false }
  }

  handleButton(e, filter) {
    this.setState({ onSelect: !this.state.onSelect })
    this.props.onSelectFilter(filter)
  }
  render() {
    return (
      <div className="menu">
        <div className="buttons-filter">
          {this.props.filters.map((filter) => (
            <button
              className={filter.isActive ? "button-filter-active": "button-filter"}
              key={filter.value}
              onClick={(e) => this.handleButton(e, filter.value)}
            >
              {filter.value}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default Toolbar
