import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Beer = ({beer, displayBeer}) =>{

	const animate = (beerId) => {
		const beerImg = document.getElementById(beerId)

		const homer = 'https://media.giphy.com/media/l2Je8PVEAcayWOlyw/giphy.gif'

		if (beerImg.getAttribute('src') !== homer) {
			beerImg.setAttribute('alt', beerImg.getAttribute('src'))
			beerImg.setAttribute('src', homer)
		}
		else {
			beerImg.setAttribute('src', beerImg.getAttribute('alt'))
			beerImg.setAttribute('alt', homer)

		}
	}
	const handleClick = (beer) => {
		displayBeer(beer)
	}

		return (
			<Link to={`/beers/${beer.id}`} onClick={(e) => {animate(beer.id); handleClick(beer)} }>
			<div className="ui card beer-container" >
				<div>
					<img src=""/>
				</div>
			  <div className="image">
			    <img id={beer.id} src={beer.labels ? beer.labels.medium : 'https://thumbs.dreamstime.com/x/pig-ballerina-6251702.jpg'} alt=""/>
			  </div>
			  <div className="content">
			    <span className="header">{beer.name}</span>
			    <div className="meta">
			      <span className="date">Joined in 2013</span>
			    </div>
			    <div className="description">
			      {beer.description}.
			    </div>
			  </div>
			  <div className="extra content">
			    	{beer.style ? beer.style.category.name : "Piggy"}
			  </div>
			</div>
			</Link>
		)
}

export default Beer