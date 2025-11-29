import express, { Request, Response, Router } from "express";
import { multerConfig } from "./config/uploader";
import productController from "./controllers/productController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ msg: "Api Rodando!!" });
});

// products
routes.get("/get-products", productController.getProducts);
routes.post("/create-product", multerConfig, productController.createProdutc);

export default routes;
