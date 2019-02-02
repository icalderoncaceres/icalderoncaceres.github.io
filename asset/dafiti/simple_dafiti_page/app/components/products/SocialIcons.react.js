import React from 'react';

/* class container */
class SocialIcons extends React.Component {
	constructor(){
		super();
	}
	/* render item */
	render() {
		return(
			<div className="has-text-centered SocialIcons">
				<i className="fab fa-facebook opacity"></i>
				<i className="fab fa-twitter opacity"></i>
				<i className="fab fa-whatsapp opacity"></i>
			</div>
		);
	}
}

export default SocialIcons;
