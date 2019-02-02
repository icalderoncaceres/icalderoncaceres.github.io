/* import dependencies */
import React from 'react';
import ProductsContainer from '../products/Products.react';

/* class container */
class HomeContainer extends React.Component {

  /* render item */
  render() {
    return (
      <div id="_login_itm" className="container">
		<div className="login_content column is-4 is-offset-4">
			<ProductsContainer />
		 </div>      
      </div>
    );
  }
}

/* extends */
export default HomeContainer;
