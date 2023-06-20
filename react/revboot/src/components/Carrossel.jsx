import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5706277/pexels-photo-5706277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Clothes Store</h3>
          <p>A melhor Loja de Roupas online que você vai encontrar!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Clothes Store</h3>
          <p>A melhor Loja de Roupas online que você vai encontrar!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8580765/pexels-photo-8580765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Clothes Store</h3>
          <p>
          A melhor Loja de Roupas online que você vai encontrar!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Carrossel;