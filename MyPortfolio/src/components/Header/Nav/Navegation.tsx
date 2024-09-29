
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Navegation = () => {
  return (
    <>
    <Navbar className="custom-navbar" >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as= {Link} to='/Contacto'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/SobreMi'>Sobre Mi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegation