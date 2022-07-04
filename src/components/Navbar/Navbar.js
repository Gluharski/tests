import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Navigation() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Sports Portal</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Sports" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Football</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Formula 1</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">NBA</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">CS:GO</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">LoL</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<Nav>
					<Nav.Link href="#deets">About</Nav.Link>
						<Button variant="primary">Sign Up/Log in</Button>
					{/* <Nav.Link eventKey={2} href="#memes"> */}
						{/* Sign in/ Log in */}
					{/* </Nav.Link> */}
				</Nav>
			</Container>
		</Navbar>
	)
};

export default Navigation;