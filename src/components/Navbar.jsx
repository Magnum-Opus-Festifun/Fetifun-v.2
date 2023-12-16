import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './main.scss';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{ boxShadow: '0 4px 2px -4px #3F475A' }} >
      <Container fluid>
        <Navbar.Brand to='' style={{ marginLeft: '10px' }}>
          <img
            src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
            height="30"
            className="d-inline-block align-top"
            alt="Navbar Logo"
          />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between align-items-center">
          <Nav style={{ fontFamily: 'Poppins', fontWeight: 500 }}/>
          <div className="d-flex ">
            <NavLink to='/' className='NavText' >Beranda</NavLink>
            <NavLink to='/event' className='NavText' >Event</NavLink>
            <NavLink to='/tiketku' className='NavText' >Tiketku</NavLink>
            <NavLink to='/buatevent' className='NavText' >Buat Event</NavLink>
            
            </div>
          <div className='buttonNavbar'>
            <Button className='btn-login'> <NavLink to='/login' className='btn-text'>Masuk</NavLink> </Button>
            <Button className='btn-register'><NavLink to='/register' className='btn-text'>Daftar</NavLink></Button>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
