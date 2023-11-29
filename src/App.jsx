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
  UserProfile,
  Order,
  Register,
} from "./pages";
import { AuthContext } from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import { useAuth } from "./hooks/useAuth";
import { RequireAuth, Anonymous, Wrapper } from "./components";

export default function App() {
  const { user, login, logout } = useAuth();
  console.log("app", user);
  return (
    <AuthContext.Provider value={{ user, logout }}>
      <CartProvider>
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route path="product" element={<SanPham />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<Blog />} />
                {/* <Route path="sanpham" element={<SanPham />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} /> */}

                <Route element={<Anonymous />}>
                  <Route path="login" element={<Login />} />
                </Route>
                <Route element={<Anonymous />}>
                  <Route path="register" element={<Register />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route path="shoppingCart" element={<ShoppingCart />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route path="order" element={<Order />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route path="profile" element={<UserProfile />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route path="checkout" element={<Checkout />} />
                </Route>

                {/* <Route path="checkout" element={<Checkout />} />
            <Route path="order" element={<Order />} />
            {!user.id ? (
              <Route path="login" element={<Login />} />
            ) : (
              <Route path="profile" element={<UserProfile />} />
            )}
            {!user.id ? (
              <Route path="register" element={<Register />} />
            ) : (
              <Route path="profile" element={<UserProfile />} />
            )} */}

                {/* catch all */}
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </CartProvider>
    </AuthContext.Provider>
  );
}
