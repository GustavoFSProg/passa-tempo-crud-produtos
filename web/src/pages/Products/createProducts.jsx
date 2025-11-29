/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import api from "../../api";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../Components/Navbar";

const Input = styled.input`
  display: flex;
  width: 30%;
  height: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  display: flex;
  width: 32%;
  background: #0000e6;
  color: yellow;
  justify-content: center;
  border-radius: 15px;
  height: 40px;
  align-items: center;
  transition: all ease 1s;
  font-weight: bold;
  font-size: 15px;
  padding: 5px;

  &:hover {
    background: #9999ff;
    color: black;
  }
`;

function CreateProduct() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  async function handleCreateProduct(e) {
    e.preventDefault();
    try {
      const data = new FormData();

      data.append("image", image);
      data.append("name", name);
      data.append("price", price);

      const products = await api.post("/create-product", data);

      if (!products) {
        return alert("ERRO");
      }

      navigate("/");

      // return alert("deu certo!!");
    } catch (error) {
      return alert(error);
    }
  }

  return (
    <>
      <Navbar />
      <br />
      <br />

      <div
        style={{
          displat: "flex",
          width: "100vw",
          justifyContent: "center",
          height: "45vh",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            display: "flex",
            marginLeft: "480px",
            marginBottom: "-30px",
          }}
        >
          CADASTRO DE PRODUTOS
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          onSubmit={handleCreateProduct}
        >
          <input
            style={{ marginBottom: "15px" }}
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <Input
            placeholder="Nome"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Preço"
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Button type="submit">CADASTRAR</Button>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
