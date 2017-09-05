import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Beer from './Beer';
import { CSSTransitionGroup } from 'react-transition-group'
import {TweenMax, Power2, TimelineLite} from "gsap";


export class Beers extends Component {

	render() {
		const beers = this.props.beers.map(beer => <Beer className="ui card beer-container" beer={beer} key={beer.id} displayBeer={this.props.displayBeer} style={{opacity: 0}}/>)
		return (
			<div className="ui cards beers-container">
				{beers}
		  </div>
		);
	}
}

export default Beers
