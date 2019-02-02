import React from 'react';

class ProductFeatures extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let features = this.props.description.split('\n\u2022').map((data,index)=>{
			if(data != '&nbsp;')
				return(				
					<li key={index} className="bold">{data}</li>
				);
		});

		return(<div>
				<span className="bold opacity">DESCRIPCIÓN </span><span style={{float:"right"}}><i className="fa fa-chevron-up has-text-right" aria-hidden="true"></i></span>
				<br/><br/>
				<ul>
					{features}
				</ul>
				<br/>
				<span className="bold opacity">DETALLE DEL PRODUCTO</span><span style={{float:"right"}}><i className="fa fa-chevron-down has-text-right" aria-hidden="true"></i></span>
			</div>
		);
	}
}

export default ProductFeatures;