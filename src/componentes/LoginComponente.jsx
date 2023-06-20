import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginComponente() {
  return (
<div className='login'>
    <Form>
      <h1>Bem vindo ao Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" width={30}>
      <Form.Label className='lala'>Preencha os dados do login para acessar</Form.Label><br/>
        <Form.Label className='lala'>Endereço de E-mail</Form.Label>
        <Form.Control className='box' type="email" placeholder="Coloque o E-mail" />
        <Form.Text className="text-muted lala" width={30}>
          Não iremos compartilhar seu e-mail!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='lala'>Escreva sua mensagem</Form.Label>
        <Form.Control className='box2' type="password" placeholder="Envie sua mensagem" width={400} height={300}/><br/>
        <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Cliente"
      />
       <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Prestador de Serviços"
      />
      </Form.Group><br/>
      <Button className="loginBTN" type="submit" href="/buscaprestador">
        Enviar
      </Button>
    </Form>
    </div>
  );
}

export default LoginComponente;