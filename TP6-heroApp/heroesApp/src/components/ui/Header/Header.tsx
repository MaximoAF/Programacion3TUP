import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../../redux/slices/auth";

export const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogOut());
  };

  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Hero App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/search"}>
              Buscar Heroes
            </Nav.Link>
            <Nav.Link as={Link} to={"/marvelHeroes"}>
              Marvel Heroes
            </Nav.Link>
            <Nav.Link as={Link} to={"/dcHeroes"}>
              DC Heroes
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <div
              className="d-flex align-items-center gap-2"
              style={{ color: "gray", cursor: "pointer" }}
              onClick={handleLogout}
            >
              <Navbar.Text>Cerrar sesion</Navbar.Text>
              <Nav.Item>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Nav.Item>
            </div>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
