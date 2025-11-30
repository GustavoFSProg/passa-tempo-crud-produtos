import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CreateProduct from "./pages/Products/createProducts";
import ProductProfile from "./pages/Products/ProductProfile";
import UpdateComponent from "./pages/Products/UpdateComponent";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/profile" element={<ProductProfile />} />
        <Route path="/update" element={<UpdateComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
