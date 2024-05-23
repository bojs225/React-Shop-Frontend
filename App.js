import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory.jsx";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import Footer from "./components/Footer/Footer.jsx";
import men_banner from "./components/Assets/banner_mens1.webp";
import women_banner from "./components/Assets/banner_femalem1.webp";
import kids_banner from "./components/Assets/banner_teenm1.webp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
