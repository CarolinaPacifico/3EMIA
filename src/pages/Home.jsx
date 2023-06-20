import Carrossel from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>
          <Carrossel/>
          <br/>
          <h1>O que é feminicídio</h1>
          <li>O assassinato de mulheres em contextos discriminatórios recebeu uma designação própria: feminicídio. Nomear o problema é uma forma de visibilizar um cenário grave e permanente: milhares de mulheres são mortas todos os anos no Brasil.</li>
          <br/>
          <h1>Dados Informativos sobre os casos de feminicídio no Brasil</h1><br/>
          <h2>Dez municípios brasileiros com maior núemro de casos de feminicídio relatados</h2>
          <img
          className="d-block w-100"
          src="https://fiapcom-my.sharepoint.com/personal/rm13704_fiap_com_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frm13704%5Ffiap%5Fcom%5Fbr%2FDocuments%2FArquivos%20de%20Chat%20do%20Microsoft%20Teams%2FQTDE%5FMUNICIPIO%2EPNG&parent=%2Fpersonal%2Frm13704%5Ffiap%5Fcom%5Fbr%2FDocuments%2FArquivos%20de%20Chat%20do%20Microsoft%20Teams&ga=1"
          alt="First slide"
        />
          <br/>
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Home