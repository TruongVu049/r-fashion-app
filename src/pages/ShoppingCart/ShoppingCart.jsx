import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Breadcrumb, ProductTable, CartTotal } from "../../components";
import axios from "axios";
import { useCartContext } from "../../context/CartContext";
import { Helmet } from "react-helmet";
const ShoppingCart = () => {
  const { refreshCart } = useCartContext();
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState({
    init: false,
    remove: false,
  });

  function handleRemoveCart(id) {
    setIsLoading({
      ...isLoading,
      remove: true,
    });
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
      })
      .then(() => {
        setIsLoading({
          ...isLoading,
          remove: false,
        });
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
    setIsLoading({
      ...isLoading,
      init: true,
    });
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
      })
      .finally(() => {
        setIsLoading({
          ...isLoading,
          init: false,
        });
      });
    return () => (ignore = true);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Giỏ hàng</title>
        <meta name="description" content="FAF - Thời trang nam nữ" />
      </Helmet>
      <Breadcrumb title={"Giỏ Hàng"} namePage={"Giỏ hàng"} />
      <div className="container mx-auto px-4">
        <div className="mt-20 mb-10 relative overflow-x-auto shadow-xl sm:rounded-lg">
          <ProductTable
            cart={cart}
            onchangeAddSelectedProduct={handleAddSelectedProduct}
            onchangeRemoveSelectedProduct={handleRemoveSelectedProduct}
            onchangeRemoveCart={handleRemoveCart}
            isLoading={isLoading}
          />
        </div>
        <CartTotal selectedProduct={selectedProduct} />
        <div className="clear-both mb-20"></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
