import { convertBufferToString, uploader } from "../config/uploader";
import { PrismaClient } from "../generated/prisma/client";
import { Request, Response } from "express";

const prismaDB = new PrismaClient();

var cloudinary = require("cloudinary");

async function createProdutc(req: Request, res: Response) {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const file = convertBufferToString(req);
    if (file === undefined)
      return res
        .status(400)
        .json({ error: "Error converting buffer to string" });

    const { secure_url } = await uploader.upload(file);

    const data = await prismaDB.produtos.create({
      data: {
        name: req.body.name,
        image: secure_url,
        price: req.body.price,
      },
    });

    return res.status(201).send({ msg: "Success!", data });
  } catch (error) {
    return res.status(400).send({ msg: "Error!", error });
  }
}

async function UpdateProdutc(req: Request, res: Response) {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const file = convertBufferToString(req);
    if (file === undefined)
      return res
        .status(400)
        .json({ error: "Error converting buffer to string" });

    const { secure_url } = await uploader.upload(file);

    const data = await prismaDB.produtos.update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        image: secure_url,
        price: req.body.price,
      },
    });

    return res.status(201).send({ msg: "Success!", data });
  } catch (error) {
    return res.status(400).send({ msg: "Error!", error });
  }
}

async function getProducts(req: Request, res: Response) {
  try {
    const data = await prismaDB.produtos.findMany();

    return res.status(201).send(data);
  } catch (error) {
    return res.status(400).send({ msg: "Error!", error });
  }
}

async function getOneProduct(req: Request, res: Response) {
  try {
    const data = await prismaDB.produtos.findFirst({
      where: { id: req.params.id },
    });

    return res.status(201).send(data);
  } catch (error) {
    return res.status(400).send({ msg: "Error!", error });
  }
}

async function deletarProduct(req: Request, res: Response) {
  try {
    const data = await prismaDB.produtos.delete({
      where: { id: req.params.id },
    });

    return res.status(201).send(data);
  } catch (error) {
    return res.status(400).send({ msg: "Error!", error });
  }
}

export default {
  getProducts,
  getOneProduct,
  UpdateProdutc,
  deletarProduct,
  createProdutc,
};
