import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Beers from './Beers';
import $ from 'jquery'; 




export const UserProfile = (props) => {

	const allUserBeers = []

	const nonUniqueUserBeers = [...props.userBeers.liked, ...props.userBeers.mehed, ...props.userBeers.commented]

	nonUniqueUserBeers.forEach(beer => {
		const foundBeer = allUserBeers.find(finalArrayBeer => finalArrayBeer.id === beer.id)
			if (!foundBeer) {
				allUserBeers.push(beer)
			}
	})


		return (
			<div className="ui dimmer modals page transition visible active" style={{display: "block !important"}}>
				<Beers beers={allUserBeers} />
  		</div>
		);
}

export default UserProfile