import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../css/main.css'

export class Toolbar extends Component {
  static propTypes = {}
  constructor(props) {
    super(props);
    this.state = {onSelect: false}
    // Не вызывайте здесь this.setState()!
    console.log(props)
    
    // this.state= {onSelect: false}
  }

  handleButton(e, filter) {
    this.setState({onSelect: !this.state.onSelect})
    console.log(this.state.onSelect)
    this.props.onSelectFilter(filter)
    console.log(e.target.className)
  }
  render() {
    return (
        <div className='container'>
      <div className='buttons-filter'>
        {this.props.filters.map(filter => <button className='button-filter' 
        key={this.props.filters.indexOf(filter)} onClick={(e) => 
        this.handleButton(e, filter)}>{filter}</button>)}
      </div></div>
    )
  }
}

export default Toolbar