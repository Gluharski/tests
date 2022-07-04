import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Navigation() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#">Sports Portal</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav.Link href="#deets">Forum</Nav.Link>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Sports" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">Soccer</NavDropdown.Item>
							<NavDropdown.Item href="#">Formula 1</NavDropdown.Item>
							{/* <NavDropdown.Item href="#">NBA</NavDropdown.Item> */}
							<NavDropdown.Divider />
							<NavDropdown.Item href="#">CS:GO</NavDropdown.Item>
							<NavDropdown.Item href="#">Valorant</NavDropdown.Item>
							<NavDropdown.Item href="#">LoL</NavDropdown.Item>
							<NavDropdown.Item href="#">WoW</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<Nav>
					<Nav.Link href="#deets">About</Nav.Link>
						<Button variant="primary" className='user-btn'>Sign Up/Log in</Button>
					{/* <Nav.Link eventKey={2} href="#memes"> */}
						{/* Sign in/ Log in */}
					{/* </Nav.Link> */}
				</Nav>
			</Container>
		</Navbar>
	)
};

export default Navigation;