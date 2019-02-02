/* import dependencies */
import React from 'react';
import ProductImage from './ProductImage.react';
import ProductDetail from './ProductDetail.react';
import ProductSizes from './ProductSizes.react';
import SocialIcons from './SocialIcons.react';
import ProductFeatures from './ProductFeatures.react';

/* class container */
class Product extends React.Component {

	/* render item */
	render() {
		return (
			<div className="card">
				<ProductImage image={this.props.data.productimage}/>
				<div className="card-content">
					<ProductDetail brand={this.props.data.brand} seller={this.props.data.seller} productname={this.props.data.productname} />
					<hr />
					<ProductSizes sizes={this.props.data.sizes}/>
					<hr style={{height:6,borderRadius: 3,backgroundColor: "#8e8e8e"}}/> 

					<SocialIcons />
					<ProductFeatures description={this.props.data.description}/>
				</div>
			</div>    
		);
	}
}

/* extends */
export default Product;