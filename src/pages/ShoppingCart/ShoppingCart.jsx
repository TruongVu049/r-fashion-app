import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Breadcrumb, ProductTable, CartTotal } from "../../components";
import axios from "axios";
import { useCartContext } from "../../context/CartContext";
const ShoppingCart = () => {
  const { refreshCart } = useCartContext();
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  function handleRemoveCart(id) {
    axios
      .post(`${process.env.REACT_APP_API_KEY}api/cart/remove`, id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.toKen,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setCart(
            cart.filter((item) => {
              return item.id !== id;
            })
          );
          refreshCart();
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddSelectedProduct(item) {
    setSelectedProduct([...selectedProduct, item]);
  }

  function handleRemoveSelectedProduct(id) {
    setSelectedProduct(
      selectedProduct.filter((item) => {
        return item.id !== id;
      })
    );
  }

  useEffect(() => {
    let ignore = false;
    axios
      .get(`${process.env.REACT_APP_API_KEY}api/cart/index?id=${user.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.toKen,
        },
      })
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (ignore = true);
  }, []);

  console.log(selectedProduct);

  return (
    <div>
      <Breadcrumb title={"Giỏ Hàng"} namePage={"Giỏ hàng"} />
      <div className="container mx-auto px-4">
        <div className="mt-20 mb-10 relative overflow-x-auto shadow-xl sm:rounded-lg">
          <ProductTable
            cart={cart}
            onchangeAddSelectedProduct={handleAddSelectedProduct}
            onchangeRemoveSelectedProduct={handleRemoveSelectedProduct}
            onchangeRemoveCart={handleRemoveCart}
          />
        </div>
        <CartTotal selectedProduct={selectedProduct} />
        <div className="clear-both mb-20"></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
