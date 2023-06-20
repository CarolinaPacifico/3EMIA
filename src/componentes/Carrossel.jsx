import Carousel from 'react-bootstrap/Carousel';
import idosos from '../img/Idosos.svg'

function Carrossel() {
  return ( 

    <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src={idosos}
          alt="imagem-idosos"
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src="https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/D3-Exclusive-Configurator-DT-800x600.jpg?$product-details-jpg$"
          alt="Third slide"
        />
      </Carousel.Item>

  );
}

export default Carrossel;