import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class NavBar extends Component {
	render() {
		return (
			<div className="navbar">
			<ul>
				<li className="logo-on-navbar">
					<Link to={`/`}>
						LUKES BEER
					</Link>
					<i className="fa fa-beer fa-xl animated pulse"></i>
				</li>
				<li className="profile-link" onClick={this.props.toggleVisibility}>
					<Link to={`#`}>
					<i className="fa fa-user fa-xl animated pulse"></i>
						Profile
					</Link>
				</li>
			</ul>
			</div>
		);
	}
}

export default NavBar