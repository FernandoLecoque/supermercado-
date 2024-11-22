// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// Importando o hook useState para monitorar a mudança das variáveis
import { useState } from "react";

//Importação do navigate useState para monitorar a mudança das variáveis
import { useNavigate} from "react-router-dom";

const Login = () => {
  //Variáveis pra guardar as informações digitadas pelo usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //Variáveis para o alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Lista de usuario
  const usuarios = [
    { id: 1, name: "Fulano", email: "fulano@hotmail.com", senha: "123" },
    { id: 2, name: "Ciclano", email: "ciclano@gmail.com", senha: "456" },
  ];

   // Criando o navigate
  const navigate = useNavigate()

     // função para guardar na memoria do navegador as informações do usuario
  const gravarLocalStorage = (usuario) => {
    localStorage.setItem("usuario", usuario.nome);
    localStorage.setItem("email", usuario.email);
  }

  // Função para tratar os dados de login
  const handleLogin = async (e) => {
    //Previne a página de ser recarregada :)
    e.preventDefault();

    // Verifica se há aquele usuário digitados na lista
    const userTofind = usuarios.find(
      (user) => user.email == email
    )

    if (email != "") {
      if (senha != "") {
        if (userTofind != undefined & userTofind.senha == senha) {
          gravarLocalStorage(userTofind)
          setAlertClass("mb-3 mt-2")
          setAlertMensagem("Login realizado com sucesso!")
          setAlertVariant("success")
          navigate("/home") 
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("Preencha o campo de e-mail");
        setAlertVariant("danger");
      }
    }
  }
  return (
    <div>
      <Container
        style={{ background: "gray", height: "100vh" }}
        className="justify-content-center align-content-center"
      >
        {/* Icone de login */}
        <span
          style={{ fontSize: "200px", color: "white" }}
          className="material-symbols-outlined"
        >
          login
        </span>

        <form style={{ width: "75%", margin: "auto" }} onSubmit={handleLogin} >
          {/* Caixinha de email */}
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* Caixinha de senha */}
          <FloatingLabel controlId="floatingPassword" label="Senha">
            <Form.Control
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* Alerta caso haja erro */}
          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          {/* Botao pra enviar o formulário */}
          <Button variant="light" type="submite" className="mt-4" size="lg">
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
