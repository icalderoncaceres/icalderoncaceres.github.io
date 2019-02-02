/* import dependencies */
import React from 'react';
import Product from '../../components/products/Product.react';
var myJson = require('../../../../detalle.json');
/* class container */
class ProductsContainer extends React.Component {

  constructor(){
  	super();
  	this.state = myJson;
  }

  render() {
 	
  	let products = this.state.products.map((data,index) => {
  		return (
  			<Product key={"product-" + index} data={data}/>
  		);
  	});
  	
    return (
      <div >
      		{products}
      </div>
    );
  }
}

/* extends */
export default ProductsContainer;