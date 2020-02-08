import React from 'react';



function Product(props) {

  const { name, price, imgURL, id } = props.product;

//Working on my delete button
  return (

    <div>
      <p>Image URL: {imgURL}</p>
      <br/>
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
      <br/>
      <button onClick={() => props.deleteProduct()}>Delete</button>
    </div>
  );
}

export default Product;
