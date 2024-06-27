import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GerenciarLogin } from "./GerenciarLogin";
import { Login } from "../pages/Login";

function MyNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">LOJA HARVE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/produto">PRODUTOS</Nav.Link>

          </Nav>
        <div className="colortext">
        <GerenciarLogin></GerenciarLogin>
          </div>
        </Container>
      </Navbar>

    </>
  );
}

export { MyNavBar };