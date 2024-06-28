import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    // <Navbar className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand>
    //       <img
    //         src="/src/assets/logo.webp"
    //         width="50"
    //         height="50"
    //         className="d-inline-block align-top"
    //         alt="Expenses Logo"
    //       />{" "}
    //       Expense Tracker
    //     </Navbar.Brand>
    //   </Container>
    // </Navbar>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/src/assets/logo.webp"
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
