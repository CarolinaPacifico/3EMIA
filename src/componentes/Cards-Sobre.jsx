import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardSobre() {
  return (
    <CardGroup className="cardSobre">
      <Card>
        <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p1/10226272-servicos-de-assistencia-a-idosos-desenho-desenhado-a-mao-desenho-plano-com-cuidador-enfermagem-casa-viver-e-apoio-design-vetor.jpg" />
        <Card.Body>
          <Card.Text>
          Empresa prestadora de serviços para idosos que visa oferecer mais qualidade de vida, conforto e segurança para os clientes
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p3/10226268-servicos-de-assistencia-a-idosos-desenho-desenhado-a-mao-desenho-plano-com-cuidador-enfermagem-casa-viver-e-apoio-design-vetor.jpg" />
        <Card.Body>
          <Card.Text>
          Dispomos de uma variedade de serviços personalizados de acordo com as necessidades de cada idoso. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p1/10226270-servicos-de-assistencia-a-idosos-desenho-desenhado-a-mao-desenho-plano-com-cuidador-enfermagem-casa-viver-e-apoio-design-vetor.jpg" />
        <Card.Body>
          <Card.Text>
          Necessidades como cuidados domiciliares, acompanhamento médico, atividades recreativas, transporte e muito mais.
          </Card.Text>
        </Card.Body>
      </Card>


      </CardGroup>

  );
}

export default CardSobre;