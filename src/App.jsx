import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CategoryList } from "./pages/category-list";
import { CategoryProduct } from "./pages/category-product";
import { CreateProduct } from "./pages/create-product";
import { CrateCategory } from "./pages/create-category";
import { EditCategory } from "./pages/category-edit";
import { EditProduct } from "./pages/edit-product";
import { ProductCard } from "./components/product-card";
function App() {
  return (
    <><div className="bg-[#EEEEF5]">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="category-product/:id" element={<CategoryProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="create-category" element={<CrateCategory/>} />
          <Route path="edit-category/:id" element={<EditCategory/>} />
          <Route path="edit-product/:id" element={<EditProduct/>} />
          <Route path="product-card" element={<ProductCard/>} />
        </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
