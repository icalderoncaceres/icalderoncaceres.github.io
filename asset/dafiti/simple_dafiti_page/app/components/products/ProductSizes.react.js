import React from 'react';

class ProductSizes extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		let sizes = this.props.sizes.map((data,index)=>{
			return(
                <li className="steps-segment" key={"steps-" + index}>
                    <span className="steps-marker">
						{data.size}
                    </span>
                </li>
			);
		});

		return(<div>
			<h2 className="opacity bold">TALLE</h2>
				<ul className="steps is-none">
					{sizes}
				</ul>
			</div>
		);
	}
}

export default ProductSizes;