import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../img/LOGO.svg'

function NavBar() {
    return (
      <>
      <div className='header'>
          <Container>
            <Navbar.Brand href="/home" className="logo-img">
          <img
          width={90}
          height={125}
          src={img}
          alt="First slide"/>
          </Navbar.Brand>

        <div className="links">
                <Nav.Link href="/">Sobre Nós</Nav.Link>
                <Nav.Link href="#features">Nossos Serviços</Nav.Link>
                <Nav.Link href="#pricing">Contato</Nav.Link>
        </div>
                
        <div className="loginbtn">
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Cadastro">Cadastre-se</Nav.Link> 
        </div>
              
            
          </Container>
        </div>
      </>
    );
  }
  export default NavBar;