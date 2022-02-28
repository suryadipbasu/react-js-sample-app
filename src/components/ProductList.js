import React from "react";
import Product from './components/Product.js';

export default function ProductList(props) {
  return props.productList.map((product,i) => {
    return <Product product={product} key={i} incrementProductQuantity={props.incrementProductQuantity} decrementProductQuantity={props.decrementProductQuantity} removeProduct={props.removeProduct} index={i}/>;
  });
}
