// ParentComponent.jsx
import React from 'react';
import Card from './Card';

function ParentComponent() {
  const addToCart = (product) => {
    // Your logic to add product to cart
    console.log("Adding product to cart:", product);
  };

  return (
    <div>
      {/* Pass addToCart function as a prop */}
      <Card addToCart={addToCart} />
    </div>
  );
}

export default ParentComponent;
