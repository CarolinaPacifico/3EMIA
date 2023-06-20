import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavProjeto() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Casos de Feminicídio</Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}

export default NavProjeto;