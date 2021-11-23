import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  GET_TOTAL,
} from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    totalAmount: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    let header_product_count = document.querySelector(".header_product_count");

    if (header_product_count !== null) {
      header_product_count.classList.add("header_product_count_zoom");
    }

    dispatch({ type: ADD_TO_CART, payload: item });

    setTimeout(() => {
      if (header_product_count !== null) {
        header_product_count.classList.remove("header_product_count_zoom");
      }
    }, 300);
  };

  const removeItem = (id) => {
    let header_product_count = document.querySelector(".header_product_count");

    if (header_product_count !== null) {
      header_product_count.classList.add("header_product_count_zoom");
    }

    dispatch({ type: REMOVE_ITEM, payload: id });

    setTimeout(() => {
      if (header_product_count !== null) {
        header_product_count.classList.remove("header_product_count_zoom");
      }
    }, 300);
  };

  const incrementItem = (id) => {
    dispatch({ type: INCREMENT_ITEM, payload: id });
  };

  const decrementItem = (id) => {
    dispatch({ type: DECREMENT_ITEM, payload: id });
  };

  const getTotal = () => {
    dispatch({ type: GET_TOTAL });
  };

  useEffect(() => {
    getTotal();
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        incrementItem,
        decrementItem,
        totalAmount: state.totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
