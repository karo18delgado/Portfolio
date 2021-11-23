import logo from "../assets/img/logocaro.png";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Navb() {
  return (
    <div>
      <Navbar className="nav fixed-top" expand="lg">
        <Navbar.Brand href="#sobremi">
          <img
            alt=""
            src={logo}
            width="120"
            height="120"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link href="#conocimientos" >
              Conocimientos
            </Nav.Link>
            <Nav.Link  href="#proyectos">
              {" "}
              Proyectos{" "}
            </Nav.Link>
            <Nav.Link href="#contacto" >
              {" "}
              Contacto{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
