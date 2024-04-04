import React, { Component } from 'react';

class commentRespond extends Component{
	render(){
		return(
			<>
				<div className="comment-respond" id="respond">
					<h4 className="widget-title">Leave a Reply</h4>
					<form className="comment-form" id="commentform">
						<p className="comment-form-author">
							<label for="author">Name <span className="required">*</span></label>
							<input type="text" value="" name="Author"  placeholder="Author" id="author"/>
						</p>
						<p className="comment-form-email">
							<label for="email">Email <span className="required">*</span></label>
							<input type="text" value="" placeholder="Email" name="email" id="email"/>
						</p>
						<p className="comment-form-comment">
							<label for="comment">Comment</label>
							<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
						</p>
						<p className="form-submit">
							<input type="submit" value="Submit Comment" className="submit" id="submit" name="submit"/>
						</p>
					</form>
				</div>
				
			</>
		);
	}
}

export default commentRespond;