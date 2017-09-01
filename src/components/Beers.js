import React, { Component } from 'react';
import Beer from './Beer';

export class Beers extends Component {
	render() {
		const beers = this.props.beers.map(beer => <Beer beer={beer} key={beer.id} />)
		return (
			<div className="ui cards">
				{beers}
			</div>
		);
	}
}

export default Beers