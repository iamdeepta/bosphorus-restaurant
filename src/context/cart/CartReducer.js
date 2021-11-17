import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  GET_TOTAL,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product_id !== action.payload
        ),
      };
    }

    case INCREMENT_ITEM: {
      const updatedCart = state.cartItems.map((item) => {
        if (item.product_id === action.payload) {
          return {
            ...item,
            product_quantity: parseInt(item.product_quantity) + 1,
          };
        }
        return item;
      });

      return { ...state, cartItems: updatedCart };
    }

    case DECREMENT_ITEM: {
      const updatedCart = state.cartItems
        .map((item) => {
          if (item.product_id === action.payload) {
            return { ...item, product_quantity: item.product_quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.product_quantity !== 0);
      return { ...state, cartItems: updatedCart };
    }

    case GET_TOTAL: {
      let { totalAmount } = state.cartItems.reduce(
        (accum, curVal) => {
          let { product_price, product_quantity } = curVal;

          let updatedTotalAmount = product_price * product_quantity;
          accum.totalAmount += updatedTotalAmount;

          accum.totalItem += product_quantity;
          return accum;
        },
        {
          totalAmount: 0,
        }
      );
      return { ...state, totalAmount };
    }

    default:
      return state;
  }
};

export default CartReducer;
