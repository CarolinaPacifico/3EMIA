import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.febrasgo.org.br/media/k2/items/cache/73d7edd1405081e5433c41d9ad2ee18c_XL.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Combate ao Feminicídio</h3>
          <p>Nos ajude a cabar com esse crime contra a mulher!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Carrossel;