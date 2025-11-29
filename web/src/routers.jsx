import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CreateProduct from "./pages/Products/createProducts";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
