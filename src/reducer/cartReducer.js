const cartReducer = (cart, action) => {
  switch (action.type) {
    case "SET_API_DATA": {
      return action.payload;
    }
    case "ADD_CART": {
      const newCarts = cart.find((t) => t.cart_id === action.cart.cart_id);
      console.log("newcart", newCarts);

      if (newCarts) {
        return cart.map((item) => {
          if (item.cart_id === action.cart.cart_id) return action.cart;
          else return item;
        });
      } else {
        return [...cart, action.cart];
      }
    }
    case "DELETE_CART": {
      const newCarts = cart.filter((t) => t.cart_id !== action.cart_id);
      return newCarts;
    }
    case "UPDATE_CART": {
      const newCarts = cart.map((item) => {
        if (item.cart_id === action.cart.cart_id) return action.cart;
        else return item;
      });
      return newCarts;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default cartReducer;
// const initialCart = {
//     carts: [],
//     totalItem: 0,
//     totalPrice: 0,
//   };
