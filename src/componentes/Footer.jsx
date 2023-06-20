import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../img/LOGO.svg';
import insta from '../img/instagram.svg';
import wpp from '../img/wpp.svg'
import faceb from '../img/facebook.svg'


function Footer() {
  return (
    
    <Navbar className='Footer' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={img}
              width={90}
              height={135}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">

          <div className="me-auto">

            <div className="sobre">
                <Navbar.Text>Sobre</Navbar.Text>
                    <Nav.Link href="#ajuda">Ajuda</Nav.Link>
                    <Nav.Link href="#contratacao">Contratação</Nav.Link>
                    <Nav.Link href="/">Sobre Nós</Nav.Link>
            </div>
            
            <div className="info">
                <Navbar.Text>Info</Navbar.Text>
                    <Nav.Link href="#faleconosco">Fale Conosco</Nav.Link>
                    <Nav.Link href="#politicadeprivacidade">Política de Privacidade</Nav.Link>
                    <Nav.Link href="#termos">Termos e Condições</Nav.Link>
            </div>
          

            
            <div className="redes">
           
            <Navbar.Text>Siga-nos</Navbar.Text>
       
                <div className="midias">
                    <Nav.Link href="/Login">
                    <img
                    src={wpp}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    </Nav.Link>

                    <Nav.Link href="/Login">
                    <img
                    src={insta}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    </Nav.Link>

                    <Nav.Link href="/Login">
                    <img
                    src={faceb}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    </Nav.Link>
                    </div>
            </div>
            
            <div className="pag">
                <Navbar.Text>Páginas</Navbar.Text>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Cadastro">Criar Conta</Nav.Link>
                    <Nav.Link href="/">Sobre Nós</Nav.Link>
            </div>
          
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;