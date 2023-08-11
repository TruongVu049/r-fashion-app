import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  Contact,
  SanPham,
  Login,
  NoPage,
  Layout,
  ProductDetail,
  ShoppingCart,
  Checkout,
  Register,
  UserProfile,
} from "./pages";
import { AuthContext } from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import { useAuth } from "./hooks/useAuth";
export default function App() {
  const { user, login, isLogin, logout, setUser } = useAuth();
  // console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser, isLogin }}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="sanpham" element={<SanPham />} />
              <Route path="nam" element={<SanPham />} />
              <Route path="nu" element={<SanPham />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="shoppingCart" element={<ShoppingCart />} />
              <Route path="checkout" element={<Checkout />} />
              {!user.id ? (
                <Route path="login" element={<Login />} />
              ) : (
                <Route path="profile" element={<UserProfile />} />
              )}
              {!user.id ? (
                <Route path="register" element={<Register />} />
              ) : (
                <Route path="profile" element={<UserProfile />} />
              )}
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthContext.Provider>
  );
}
