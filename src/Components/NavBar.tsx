import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="brand logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Expense Tracker{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
