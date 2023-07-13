import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Categories from "./pages/categories/categories";
import Products from "./pages/products/products";
import NoMatch from "./pages/no-match/no-match";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Products />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
