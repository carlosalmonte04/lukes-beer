import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Comments from './Comments';
import $ from 'jquery'; 




export const ShowBeer = (props) => {
	const beer = props.beers.find(beer => beer.id === props.match.params.id)

	if (beer === undefined){
		return <Redirect to="/" />
	}
	else
		return (
			<div className="ui dimmer modals page transition visible active" style={{display: "block !important"}}>
				<div className="ui standard test modal transition visible active" style={{marginTop: "", display: "block !important", position: "fixed", top: "2px"}}>
    			<div className="header">
    				{beer.name}
    				<div style={{float: "right", color: "gray"}}>
    					{beer.style.name}
    				</div>
    			</div>
    		<div className="image content">
      		<div className="ui massive image">
        		<img src={beer.labels ? beer.labels.large : 'https://thumbs.dreamstime.com/x/pig-ballerina-6251702.jpg'} />
      		</div>
	      	<div className="description">
	        	<div className="ui header">
	        		{beer.available ? beer.available.description : ''}
	        	</div>
	        	<p>
	        		{beer.description}
	        	</p>
	        	<p>
	        		Alcohol %: {beer.style.abvMin} - {beer.style.abvMax} 
	        	</p>
	        	<p>
	        	bitterness: {beer.style.ibuMin} - {beer.style.ibuMax} 
	        	</p>
	        		<h4>Style Description: </h4>
	        	<p>
	        	 	{beer.style.description}
	        	</p>
	      	</div>
    		</div>
    		<div className="actions">
					<Link to={`/`}>
  	    		<div className="ui gray deny button">
    	    		Exit
      			</div>
      		</Link>
     <Button
     	onClick={(e) => props.mehBeer(beer)}
      color='black'
      content='meh'
      label={{ basic: true, color: 'black', pointing: 'left', content: `${beer.meh}` }}
      icon='thumbs outline down'
    />
    <Button
     	onClick={(e) => props.likeBeer(beer)}
      color='red'
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, color: 'red', pointing: 'left', content: `${beer.likes}` }}
    />
				</div>
				<Comments beer={beer} addComment={props.addComment} />
</div>
  </div>
		);
}

export default ShowBeer