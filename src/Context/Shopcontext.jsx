import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;      
  }
  return cart;
}

const getDefaultAvailability = () => {
  let availability = {};
  for (let product of all_product) {
    availability[product.id] = product.available;
  }
  return availability;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [productAvailability, setProductAvailability] = useState(getDefaultAvailability());

  const addToCart = (itemId) => {
    if (productAvailability[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      setProductAvailability((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      alert("This product is out of stock.");
    }
  }

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      setProductAvailability((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    productAvailability,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
