import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigationbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md"  className="navbar navbar-expand-lg navbar-light bg-light">
        <Container fluid>
        <div className="navbar-brand">
        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
        </div>
          <Navbar.Brand ><b>Media Library</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      
    </>
  );
};

export default Navigationbar;
