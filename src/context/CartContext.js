import {
  useState,
  useContext,
  useReducer,
  createContext,
  useEffect,
} from "react";
import cartReducer from "../reducer/cartReducer";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { json } from "react-router-dom";

const CartContext = createContext(null);

const initialCart = [];

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || "";
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/cart`, {
        headers: {
          "access-token": user.authToken,
        },
      })
      .then((res) => {
        const carts = res.data;
        dispatch({ type: "SET_API_DATA", payload: carts });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addCart = async (productId, options) => {
    console.log(productId, options);
    const user = await JSON.parse(localStorage.getItem("user"));
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/api/cart`,
        {
          product_id: productId,
          options: options,
        },
        {
          headers: {
            "access-token": user.authToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADD_CART", cart: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCart = async (cartId) => {
    const user = await JSON.parse(localStorage.getItem("user"));
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/api/cart/${cartId}`, {
        headers: {
          "access-token": user.authToken,
        },
      })
      .then((res) => {
        dispatch({ type: "DELETE_CART", cart_id: cartId });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCart = (cart) => {
    dispatch({ type: "UPDATE_CART", cart: cart });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        deleteCart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
