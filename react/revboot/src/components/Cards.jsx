import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function Cards() {
  const dados = [
    {
      titulo:'Moda Outono',
      texto:'Venha conhecer a nossa nova coleção de Outono!',
      img:'https://images.pexels.com/photos/5669635/pexels-photo-5669635.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      titulo:'Moda Verão',
      texto:'Venha conhecer a nossa nova coleção de Verão!',
      img:'https://images.pexels.com/photos/9769852/pexels-photo-9769852.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      titulo:'Moda Inverno',
      texto:'Venha conhecer a nossa nova coleção de Inverno!',
      img:'https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ]
  return (
    <CardGroup>
      {dados.map(({titulo, texto, img}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={img}/>
          <Card.Body>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Text>{texto}</Card.Text>
            <Button className='botao'>Visualizar</Button>
          </Card.Body>
        </Card>
    ))};
    </CardGroup>
    
    //return(
    // <CardGroup>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/5669635/pexels-photo-5669635.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Outono</Card.Title>
    //       <Card.Text>
    //       Venha conhecer a nossa nova coleção de Outono!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <br/>
    //   <br/>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/9769852/pexels-photo-9769852.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Verão</Card.Title>
    //       <Card.Text>
    //       Venha conhecer a nossa nova coleção de Verão!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <br/>
    //   <br/>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Inverno</Card.Title>
    //       <Card.Text>
    //         Venha conhecer a nossa nova coleção de Inverno!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </CardGroup>
    //);
  );
}

export default Cards;