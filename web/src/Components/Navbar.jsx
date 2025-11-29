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
  }
`;

function Navbar() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}

export default Navbar;
