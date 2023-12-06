import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  NoPage,
  Layout,
  ShoppingCart,
  UserProfile,
  Register,
} from "./pages";
import { AuthContext } from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import { useAuth } from "./hooks/useAuth";
import { RequireAuth, Anonymous, Wrapper, Loading } from "./components";
import { lazy, Suspense } from "react";

const PRODUCT = lazy(() => import("./pages/Product/Product.jsx"));
const PRODUCTDETAIL = lazy(() =>
  import("./pages/ProductDetail/ProductDetail.jsx")
);
const CONTACT = lazy(() => import("./pages/Contact/Contact.jsx"));
const BLOG = lazy(() => import("./pages/Blog/Blog.jsx"));
const CHECKOUT = lazy(() => import("./pages/Checkout/Checkout.jsx"));
const ORDER = lazy(() => import("./pages/Order/Order.jsx"));

export default function App() {
  const { user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user, logout }}>
      <CartProvider>
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route
                  path="product"
                  element={
                    <Suspense fallback={<Loading />}>
                      <PRODUCT />
                    </Suspense>
                  }
                />
                <Route
                  path="/product/:productId"
                  element={
                    <Suspense fallback={<Loading />}>
                      <PRODUCTDETAIL />
                    </Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Suspense fallback={<Loading />}>
                      <CONTACT />
                    </Suspense>
                  }
                />
                <Route
                  path="blog"
                  element={
                    <Suspense fallback={<Loading />}>
                      <BLOG />
                    </Suspense>
                  }
                />
                <Route element={<Anonymous />}>
                  <Route path="login" element={<Login />} />
                </Route>
                <Route element={<Anonymous />}>
                  <Route path="register" element={<Register />} />
                </Route>

                {/* private routes */}
                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route path="shoppingCart" element={<ShoppingCart />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route
                    path="order"
                    element={
                      <Suspense fallback={<Loading />}>
                        <ORDER />
                      </Suspense>
                    }
                  />
                </Route>
                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route path="profile" element={<UserProfile />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={"USER"} />}>
                  <Route
                    path="checkout"
                    element={
                      <Suspense fallback={<Loading />}>
                        <CHECKOUT />
                      </Suspense>
                    }
                  />
                </Route>
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </CartProvider>
    </AuthContext.Provider>
  );
}
