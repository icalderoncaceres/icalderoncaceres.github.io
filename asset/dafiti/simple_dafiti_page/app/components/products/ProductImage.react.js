import React from 'react';

class productImage extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="card-image">
				<img src={this.props.image + ".jpg"} />
			</div>
		);
	}
}

export default productImage;