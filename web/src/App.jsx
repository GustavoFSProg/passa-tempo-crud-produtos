import { useEffect, useState } from "react";
import api from "./api";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Moeda from "./utilities/Moeda";
import { formatCurrency } from "./utilities/formatCurrency";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;

  width: 50vw;
  margin-left: -500px;
  margin-top: 80px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: -3px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 90%;
  background: #e6e6e6;
  height: auto;
  padding: 7px;
  margin-top: 20px;
  border-radius: 15px;

  /* margin-left: -660px; */
  /* margin-top: 80px; */

  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin-left: -3px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: "auto";
  justify-content: "center";
  align-items: center;

  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: -3px;
  }
`;

const Img = styled.img`
  display: flex;
  width: 300px;

  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-left: -3px;
  }
`;

function App() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const { data } = await api.get("/get-products");

      setProducts(data);

      // return alert("deu certo");
    } catch (error) {
      return alert("ERRO", error);
    }
  }

  async function onClick(id) {
    localStorage.setItem("PRODUTO_ID", id);

    navigate("/profile");
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Container>
            {products.map((items) => {
              return (
                <Card key={items.id}>
                  <Content onClick={() => onClick(items.id)}>
                    <p>{items.name}</p>
                    <Img src={items.image} alt="imagem" />
                    <p> {formatCurrency(items.price)}</p>
                    <br />
                    <br />
                  </Content>
                </Card>
              );
            })}
          </Container>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
