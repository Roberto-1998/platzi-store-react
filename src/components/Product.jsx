/* eslint-disable react/function-component-definition */
import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span> </span>
          <span>${product.price}</span>
        </h2>

        <p>{product.description}</p>
      </div>

      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
