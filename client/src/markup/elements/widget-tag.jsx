import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class widgetTag extends Component{
	render(){
		return(
			<>
				<div className="widget widget_tag_cloud">
					<h4 className="widget-title">Tags</h4>
					<div className="tagcloud"> 
						<Link to="#">Improvement</Link> 
						<Link to="#">Health</Link> 
						<Link to="#">Life</Link> 
						<Link to="#">Covid</Link> 
						<Link to="#">Healthy</Link> 
						<Link to="#">Growth</Link>
						<Link to="#">Education</Link> 
						<Link to="#">Manage</Link> 
						<Link to="#">General</Link>
					</div>
				</div>
				
			</>
		);
	}
}

export default widgetTag;