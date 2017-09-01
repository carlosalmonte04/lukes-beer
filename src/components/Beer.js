import React from 'react';

const Beer = ({beer}) =>{

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

		return (
			<div className="ui card" onClick={() => animate(beer.id)}>
				<div>
					<img src=""/>
				</div>
			  <div className="image">
			    <img id={beer.id} src={beer.labels ? beer.labels.medium : 'https://thumbs.dreamstime.com/x/pig-ballerina-6251702.jpg'} alt=""/>
			  </div>
			  <div className="content">
			    <a className="header">{beer.name}</a>
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
		)
}

export default Beer