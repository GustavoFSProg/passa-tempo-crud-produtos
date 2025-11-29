import { useState } from "react";
import { Link, Links } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 50px;
  background: #ccccff;

  @media screen and (max-width: 800px) {
    height: 100px;
  }
`;

const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: "#ccccff"; */
  margin-left: 150px;

  width: 50vw;
  height: 50px;

  @media screen and (max-width: 800px) {
    /* flex-direction: column;
    height: 50px;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 18px;
    margin-left: 100px; */
    display: none;
  }
`;

const Menu = styled.div`
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: green;
  margin-right: 200px;

  width: 150px;
  height: 280px; */
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
    background: green;
    margin-left: 88px;
    margin-top: 300px;

    width: 150px;
    height: 250px;
    position: absolute;
  }
`;

const OpenContainer = styled.div`
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: green;
  margin-right: 200px;

  width: 150px;
  height: 280px; */
  display: none;

  @media screen and (max-width: 800px) {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    background: lightblue;
    color: black;
    width: 50px;
    align-items: center;
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <OpenContainer style={{}} onClick={() => setOpen(true)}>
          <span>-----</span>
          <span>-----</span>
          <span>-----</span>
        </OpenContainer>
        {open === false ? (
          <ContainerLinks>
            <Link style={{ textDecoration: "none", color: "darkblue" }} to="/">
              HOME
            </Link>
            <Link
              style={{ textDecoration: "none", color: "darkblue" }}
              to="/create-product"
            >
              CADASTRO
            </Link>
            <Link style={{ textDecoration: "none", color: "darkblue" }}>
              LOGIN
            </Link>
            <Link style={{ textDecoration: "none", color: "darkblue" }}>
              LOGOUT
            </Link>
          </ContainerLinks>
        ) : (
          <Menu>
            <div
              style={{
                display: "flex",
                width: "100px",
                height: "20px",
                color: "yellow",
                padding: "20px",
                flexDirection: "column",
              }}
              onClick={() => setOpen(false)}
            >
              <p>X</p>

              <Link
                style={{
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "yellow",
                }}
                to="/"
              >
                HOME
              </Link>

              <Link
                style={{
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "yellow",
                }}
                to="/create-product"
              >
                CADASTRO
              </Link>
              <Link
                style={{
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "yellow",
                }}
              >
                LOGIN
              </Link>
              <Link
                style={{
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "yellow",
                }}
              >
                LOGOUT
              </Link>
            </div>
          </Menu>
        )}
      </Container>
    </>
  );
}

export default Navbar;
