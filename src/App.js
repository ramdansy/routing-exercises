import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Category from "./pages/Category/Category";
import DetailCategory from "./pages/Category/DetailCategory";
import Product from "./pages/Products/Product";
import ProductDetails from "./pages/Products/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="categories" element={<Category />} />
          <Route path="categories/:idCategories" element={<DetailCategory />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:idProducts" element={<ProductDetails />} />
          <Route path="carts" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
