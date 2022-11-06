import PropTypes from "prop-types";
import React, { Component } from "react";
import Toolbar from "./Toolbar";
import cards from "../models/CardModel";
import ProjectList from "./ProjectList";
import '../css/main.css'

export class Portfolio extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = { cards: cards, selected: 'All', selectedCards: cards};
  }

  render() {

    const makeFilter = (filter) => {
      // console.log(this.state.cards)
      console.log(filter)
      this.setState({selected: filter})
      // this.setState((prevState) => ({selected: prevState.selected.append(filter)}))
      const selectedCard = this.state.cards.filter(card => card.category === filter)
      // console.log(selectedCard)
      this.setState({selectedCards: selectedCard})
      if (filter === 'All') {
        // console.log(cards)
        this.setState({selectedCards: this.state.cards})
      }
    }
    return (
      <div className='filters'>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.selected}
          onSelectFilter={makeFilter}
        />
        <ProjectList projects={this.state.selectedCards}/>
      </div>
    );
  }
}

export default Portfolio;
