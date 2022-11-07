import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Toolbar from './Toolbar'
import cards from '../models/CardModel'
import ProjectList from './ProjectList'
import '../css/main.css'

export class Portfolio extends Component {
  static propTypes = {}
  filters = [
    { value: 'All', isActive: true },
    { value: 'Websites', isActive: false },
    { value: 'Flayers', isActive: false },
    { value: 'Business Cards', isActive: false },
  ]
  constructor() {
    super()
    this.state = {
      cards: cards,
      selected: 'All',
      selectedCards: cards,
      filters: this.filters,
    }
  }

  render() {
    const makeFilter = (filter) => {
      console.log(filter)
      this.setState({ selected: filter })
      const selectedCard = this.state.cards.filter(
        (card) => card.category === filter
      )
      this.setState({ selectedCards: selectedCard })
      if (filter === 'All') {
        this.setState({ selectedCards: this.state.cards })
      }

      /* Создаем копию массива? т.к. напрямую нельзя изменять state */
      const newFilters = [...this.state.filters]

      /* Берем созданную копию, проходим по ней с помощью map и меняем атрибут isActive */
      newFilters.map((object) => {
        if (object.value === filter) {
          object.isActive = true
        } else {
          object.isActive = false
        }
      })

      /* Записываем в состояние новый массив с измененным жлементом isActive */
      this.setState({ filters: newFilters })
    }
    return (
      <div className="filters">
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={makeFilter}
        />
        <ProjectList projects={this.state.selectedCards} />
      </div>
    )
  }
}

export default Portfolio
