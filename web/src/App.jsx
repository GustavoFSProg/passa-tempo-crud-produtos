import { useEffect, useState } from "react";
import api from "./api";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Components/Navbar";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;

  width: 50vw;
  margin-left: -500px;
  margin-top: 80px;

  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: -3px;
  }
`;

function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const { data } = await api.get("/get-products");

      setProducts(data);

      // return alert("deu certo");
    } catch (error) {
      return alert("ERRO", error);
    }
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30vw",
                    height: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={items.id}
                >
                  <p>{items.name}</p>
                  <img src={items.image} width="300" alt="imagem" />
                  <p>Preço: R$ {items.price}</p>
                  <br />
                  <br />
                </div>
              );
            })}
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
