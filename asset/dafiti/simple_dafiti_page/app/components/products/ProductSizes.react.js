import React from 'react';

class ProductSizes extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		let sizes = this.props.sizes.map((data,index)=>{
			return(
               <div className="column" key={index}>
               		<div className=" container-sizes">
						{data.size}
					</div>
                </div>
			);
		});

		return(<div>
			<h2 className="opacity bold">TALLE</h2>
				<div className="columns">
					{sizes}
				</div>
			</div>
		);
	}
}

export default ProductSizes;