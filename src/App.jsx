import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  NoPage,
  Layout,
  ShoppingCart,
  UserProfile,
  Register,
  SanPham,
  ProductDetail,
  Contact,
  Blog,
  Checkout,
  Order,
} from "./pages";
import { AuthContext } from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import { useAuth } from "./hooks/useAuth";
import { RequireAuth, Anonymous, Wrapper, Loading } from "./components";
import { Suspense } from "react";

export default function App() {
  const { user, logout } = useAuth();
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
                      <SanPham />
                    </Suspense>
                  }
                />
                <Route
                  path="/product/:productId"
                  element={
                    <Suspense fallback={<Loading />}>
                      <ProductDetail />
                    </Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Contact />
                    </Suspense>
                  }
                />
                <Route
                  path="blog"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Blog />
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
                        <Order />
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
                        <Checkout />
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
