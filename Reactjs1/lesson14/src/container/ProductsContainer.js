import React, { Component } from 'react'
import {connect} from 'react-redux'
import Products from './../components/Products';
import products from '../reducers/products';
import ProductItem from './../components/ProductItem'
class ProductsContainer extends Component {
  render() {
    var {products}=this.props;
    return(
        <Products>
            {this.showProduct(products)}
        </Products>
    )
  }
  showProduct=(products)=>{
    products=products.map((product,index)=>{
      return <ProductItem key={index} product={product}></ProductItem>
    })
    return products
  }
}

const mapStateToProps=(state)=>{
  return{
    products:state.products
  }
}
export default connect(mapStateToProps,null)(ProductsContainer);
