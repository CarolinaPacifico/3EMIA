import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardSobre2() {
  return (
    <CardGroup className="cardSobre2">

      <Card>
        <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p1/10226274-servicos-de-assistencia-a-idosos-desenho-desenho-desenhado-a-mao-ilustracao-plana-com-cuidador-enfermagem-casa-viver-e-apoio-design-vetor.jpg" />
        <Card.Body>
          <Card.Text>
          Temos uma equipe de profissionais capacitados e experientes que tratam os idosos com respeito, carinho e dedicação
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p1/12001537-servicos-de-cuidados-a-idosos-ilustracao-plana-desenhada-a-mao-com-cuidador-lar-de-idosos-vida-assistida-e-design-de-suporte-vetor.jpg" />
        <Card.Body>
          <Card.Text>
          Nossa missão é ser referência no mercado de serviços para idosos, garantindo a satisfação e o bem-estar dos clientes e familiares 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p1/10226266-servicos-de-assistencia-a-idosos-desenho-desenho-desenhado-a-mao-ilustracao-plana-com-cuidador-enfermagem-casa-viver-e-apoio-design-vetor.jpg" />
        <Card.Body>
          <Card.Text>
          Nossos valores são a ética, a transparência, a responsabilidade e a humanização. Trazendo para vocês, conforto, facilidade e segurança.
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>

  );
}

export default CardSobre2;