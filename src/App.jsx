import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, Contact, SanPham, Login, NoPage, Layout } from "./pages";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sanpham" element={<SanPham />} />
          <Route path="sanpham" element={<SanPham />} />
          <Route path="sanpham" element={<SanPham />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
