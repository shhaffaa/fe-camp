import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";

function Layout() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post" element={<Post />} />     {/* => /post */}
        <Route path="*" element={<NotFound />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
