import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function Layout() {
  return (
    <>
      <Header />
      <main id="main"><Outlet /></main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:slug" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
