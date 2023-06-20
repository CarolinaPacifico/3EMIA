import NavBar from '../componentes/NavBar'
import CardSobre from '../componentes/Cards-Sobre';
import Footer from '../componentes/Footer';
import CardCriadores from '../componentes/Cards-Criadores';
import foto from '../img/Union.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSobre2 from '../componentes/Cards-Sobre2';

function Home() {
    return (
      <>
      <div>

          <NavBar/>
          <h1>Sobre Nós</h1>
          <p1>Tudo sobre a nossa empresa</p1>
          <CardSobre/>
          <CardSobre2/>

        
          <h2>O que oferecemos?</h2>
          <p2>Nossa empresa promete uma gama de cuidados a seus familiares e amados</p2>
          
          <div className='oferece'>
            <ul>
              <li>Fácil contratação de cuidadores</li>
              <li>Segurança garantida</li>
              <li>Serviços de ajuda de enfermagem</li>
              <li>Serviços de cuidados à saúde</li>
              <li>Bem-estar físico e mental garantido</li>
            </ul>
            
            <img
            className="d-block w-100"
            width={245}
            height={290}
            src={foto}></img>
            </div>
            <CardCriadores/>
            <Footer/>
            
       </div>
      </>
    )
  }
  
  export default Home;