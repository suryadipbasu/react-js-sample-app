import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from './components/Footer.js';
import AddProduct from "./components/AddProduct.js";

function App() {
  const sampleProductList = [
    {
      price: 2000,
      name: "iPhone 13 Pro",
      quantity: 0,
    },
    {
      price: 1000,
      name: "iPhone 13",
      quantity: 0,
    },
  ];

  let [productList, setProducts] = useState(sampleProductList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementProductQuantity = (index) => {
    let newProducts = [...productList];
    let newTotalAmount = totalAmount;

    newProducts[index].quantity += 1;
    newTotalAmount += newProducts[index].price;
    
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const decrementProductQuantity = (index) => {
    let newProducts = [...productList];
    let newTotalAmount = totalAmount;

    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity -= 1;
      newTotalAmount -= newProducts[index].price;
    }

    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const resetProductQuantity = () => {
    let newProducts = [...productList];
    let newTotalAmount = 0;

    newProducts.forEach(element =>{
      element.quantity = 0;
    })
    
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const removeProduct = (index) => {
    let newProducts = [...productList];
    let newTotalAmount = totalAmount;

    if(newProducts.length > 1) {
      newTotalAmount -= (newProducts[index].price * newProducts[index].quantity);
      newProducts.splice(index,1);
    }

    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const addProduct = (name,price) => {
    let newProducts = [...productList];

    newProducts.push({
      price: price,
      name: name,
      quantity: 0,
    });

    setProducts(newProducts);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddProduct addProduct={addProduct}/>
        <ProductList
          productList={productList}
          incrementProductQuantity={incrementProductQuantity}
          decrementProductQuantity={decrementProductQuantity}
          removeProduct={removeProduct}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetProductQuantity}/>
    </>
  );
}

export default App;
