import React, { Component } from 'react';

export const Comment = ({comment}) => {
		return (
			  <div className="comment">
			    <a className="avatar">
			      <img src="https://media.giphy.com/media/RT3LopbJ7ckRG/giphy.gif"/>
			    </a>
			    <div className="content">
			      <a className="author">ILikeBeerAndCode</a>
			      <div className="metadata">
			        <span className="date">Today at 5:42PM</span>
			      </div>
			      <div className="text">
			        {comment}
			      </div>
			      <div className="actions">
			        <a className="reply">Reply</a>
			      </div>
			    </div>
			  </div>
		);
}

export default Comment