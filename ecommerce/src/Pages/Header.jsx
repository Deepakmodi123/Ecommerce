import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg='primary'>
      <Container fluid>
        <Navbar.Brand href="#home" style={{color:"whitesmoke"}}>$Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{marginLeft:'65vw' ,color:'whitesmoke'}}>Home</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"whitesmoke"}}>Shop</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"whitesmoke"}}>Cart</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"whitesmoke"}}>Signin</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"whitesmoke"}}>Signup</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;