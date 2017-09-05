import React, { Component } from 'react';
import Comment from './Comment';
import $ from 'jquery'; 



export const Comments = ({beer, addComment}) => {

	const handleSubmit = (e) => {
		e.preventDefault()
		const comment = $('#comment-input').val()
		addComment(beer, comment)
	}

		return (
			<div className="ui comments">
			  <h3 className="ui dividing header">Comments</h3>
			  {beer.comments.map((comment) => <Comment comment={comment} />)}
			  <form className="ui reply form" onSubmit={(e) => handleSubmit(e)}>
			    <div className="field">
			      <textarea id="comment-input"></textarea>
			    </div>
			    <input type="submit" value="add reply" className="ui blue labeled submit icon button" />
			  </form>
			</div>
		);
}

export default Comments