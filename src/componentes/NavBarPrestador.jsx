import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../img/LOGO.svg'
import busca from '../img/Busca.svg'
import chat from '../img/Chat.svg'
import sino from '../img/Sino.svg'
import perfil from '../img/perfil.svg'

function NavBarPrestador() {
    return (

      <div className='header'>
          <Container>
            <Navbar.Brand href="/home" className="logo-img">
          <img
          width={90}
          height={125}
          src={img}
          alt="First slide"/>
          </Navbar.Brand>

          <div className="midias">
                    <Nav.Link href="/chatprestador">
                    <img
                    src={chat}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    </Nav.Link>

                    <Nav.Link href="/buscaprestador">
                    <img
                    src={busca}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    </Nav.Link>

                    <Nav.Link href="/notificacaoprestador">
                    <img
                    src={sino}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    </Nav.Link>

                    <Nav.Link href="/perfilprestador">
                    <img
                    src={perfil}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    </Nav.Link>
                    </div>
                  </Container>
          </div>
    );
  }
  export default NavBarPrestador;