// import { Container, Row, Col } from 'reactstrap';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Home() {
    return (
        <div class="home">
            <Navbar className="NavDropDown">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <Nav>
                        <NavDropdown class="dropdown" title="What would you like to see?">
                            <NavDropdown.Item className="dropdown-link" href="#">Cinematography</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-link" href="#">Sales</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-link" href="#">Web Design</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Home;