import React from "react";
import "./styles.css";

export default function App() {
  const product = [
    { name: "photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "AdobeXD ", price: "$49.99" }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox test</h1>
      <Product product={product[0]}></Product>
      <Product product={product[1]}></Product>
      <Product product={product[2]}></Product>
    </div>
  );
}
function Product(pops) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    height: "200px",
    width: "200px",
    backgroundColor: "lightgray"
  };
  const { name, price } = pops.product;
  console.log(name, price);
  return (
    // <div style={productStyle}>
    //   <h2 >{pops.product.name}</h2>
    //   <h1> {pops.product.price}</h1>
    //   <button>Buy now</button>
    // </div>
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1> {price}</h1>
      <button>Buy now</button>
    </div>
  );
}
