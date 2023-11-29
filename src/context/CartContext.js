import { useState, useContext, createContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  console.log("render cart", cart);

  useEffect(() => {
    let ignore = false;
    if (user.id) {
      axios
        .get(`${process.env.REACT_APP_API_KEY}api/cart/${user.id}/${5}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.toKen,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setCart(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => (ignore = true);
  }, [user.id]);
  console.log("cart", cart);

  const refreshCart = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}api/cart/${user.id}/${5}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.toKen,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCart(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        refreshCart,
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
