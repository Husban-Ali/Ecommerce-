

import React, { useState } from 'react';

function Cart() {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {/* Display each item in the cart */}
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
