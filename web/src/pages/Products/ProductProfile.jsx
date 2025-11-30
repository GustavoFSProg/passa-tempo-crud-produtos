import { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Moeda from "../../utilities/Moeda";
import { formatCurrency } from "../../utilities/formatCurrency";
import { FaTrashAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;

  width: 30vw;
  /* margin-left: -165px; */
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: -18px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 90%;
  background: #e6e6e6;
  height: auto;
  padding: 15px;
  margin-top: 20px;
  border-radius: 15px;

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
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 80vw;
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

function ProductProfile() {
  const [products, setProducts] = useState({});
  const [open, setOpen] = useState(false);

  async function getProducts() {
    try {
      const id = localStorage.getItem("PRODUTO_ID");
      const { data } = await api.get(`/get-one/${id}`);

      setProducts(data);
    } catch (error) {
      return alert("ERRO", error);
    }
  }

  function Box() {
    return (
      <>
        <div
          style={{
            display: "flex",
            width: "200px",
            heigh: "50",
            background: "white",
            color: "black",
          }}
        >
          <button onClick={() => deleteProduct(products.id)}>DELETAR</button>
        </div>
      </>
    );
  }

  async function deleteProduct(id) {
    const del = await api.delete(`/delete-product/${id}`);

    if (!del) {
      alert("Error");
    } else {
      alert("Deletado!");
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
        {/* {products} */}
        <div>
          <Container>
            <Card>
              <Content>
                <p style={{ width: "200px" }}>{products.name}</p>
                <Img src={products.image} alt="imagem" />
                <p> {formatCurrency(products.price)}</p>
                <FaTrashAlt
                  style={{
                    fontSize: "26px",
                    marginLeft: "250px",
                    cursor: "pointer",
                    color: "darkred",
                  }}
                  onClick={() => setOpen(true)}
                />

                <br />
                <br />
              </Content>
            </Card>
            {open === true ? (
              <div
                style={{
                  display: "flex",
                  width: "250px",
                  height: "150px",
                  background: "yellow",
                  color: "black",
                  flexDirection: "column",
                  position: "absolute",
                  padding: "20px",
                  paddingBottom: "60px",
                  borderRadius: "15px",
                }}
              >
                <button
                  style={{
                    marginLeft: "-200px",
                    background: "none",
                    border: "none",
                    color: "black",
                  }}
                  onClick={() => setOpen(false)}
                >
                  X
                </button>

                <h4>DESEJA DELETAR OU FECHAR?</h4>
                <button
                  style={{
                    background: "lightgreen",
                    width: "150px",
                    height: "auto",
                    padding: "7px",
                    marginLeft: "50px",
                  }}
                  onClick={() => deleteProduct(products.id)}
                >
                  DELETAR
                </button>
                <br />
                <button
                  style={{
                    background: "green",
                    width: "150px",
                    height: "auto",
                    padding: "8px",
                    color: "white",
                    marginLeft: "50px",
                  }}
                  onClick={() => setOpen(false)}
                >
                  FECHAR
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "200px",
                  heigh: "auto",
                  background: "white",
                  color: "black",
                }}
              >
                {/* <button onClick={() => setOpen(false)}>FECHAR</button> */}
              </div>
            )}
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProductProfile;
