import React, { useState } from "react";

export default function CartTheme() {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState("light");

  const items = [
    { id: "item1", name: "Coffee", price: 2.5 },
    { id: "item2", name: "Tea", price: 2.0 },
    { id: "item3", name: "Croissant", price: 3.0 },
    { id: "item4", name: "Muffin", price: 4.5 },
  ];

  const [qty, setQty] = useState(1);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [total, setTotal] = useState(items[0].price);
  const [cartTotal, setCartTotal] = useState(0);

  const handleSelectionChange = (id) => {
    const item = items.find((item) => item.id === id);
    setSelectedItem(item);
    setTotal(item.price * qty);
  };

  const handleQtyChange = (e) => {
    const value = Number(e.target.value);
    setQty(value);
    setTotal(selectedItem.price * value);
  };

  const addToCart = () => {
    const newItem = {
      ...selectedItem,
      qty,
      cart_id: Date.now(),
    };

    setCartItems([...cartItems, newItem]);
    setCartTotal(cartTotal + selectedItem.price * qty);
  };

  const removeItem = (cart_id) => {
    const itemToRemove = cartItems.find(
      (item) => item.cart_id === cart_id
    );

    setCartTotal(
      cartTotal - itemToRemove.price * itemToRemove.qty
    );

    setCartItems(
      cartItems.filter((item) => item.cart_id !== cart_id)
    );
  };

  return (
    <>
      <label>Select Item:</label>
      <select onChange={(e) => handleSelectionChange(e.target.value)}>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - ₹{item.price}
          </option>
        ))}
      </select>

      <br /><br />

      <label>Decide Quantity:</label>
      <input
        type="number"
        min="1"
        value={qty}
        onChange={handleQtyChange}
      />

      <br /><br />

      <strong>Item Total: ₹{total}</strong>

      <br /><br />

      <button onClick={addToCart}>Add to Cart</button>

      <br /><br />

      <strong>Cart Total: ₹{cartTotal}</strong>

      <ul>
        {cartItems.map((item) => (
          <li key={item.cart_id}>
            {item.name} - ₹{item.price} × {item.qty} = ₹
            {item.price * item.qty}
            <button onClick={() => removeItem(item.cart_id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
