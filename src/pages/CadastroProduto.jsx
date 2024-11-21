// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// Importação de componentes
import NavBarra from "../components/NavBarra";

const CadastroProduto = () => {
  //Lista com categorias
  const cats = [
    { id: 1, nome: "Eletrônicos" },
    { id: 2, nome: "Moda e Vestuário" },
    { id: 3, nome: "Alimentos e Bebidas" },
    { id: 4, nome: "Saúde e Beleza" },
    { id: 5, nome: "Esportes e lazer" },
    { id: 6, nome: "Brinquedos e jogos" },
    { id: 7, nome: "Livros e papelaria" },
  ];

  const linkImagem = "data:image/png;base64,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"

  return (
    <div>
      <NavBarra />
      <Container>
        <h1>Cadastrar Produtos</h1>
        <form className="mt-3">
          <Row>
            <Col xs={6}>
              {/* Caixinha de nome */}
              <FloatingLabel
                controlId="floatingInputNome"
                label="Nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do produto"
                />
              </FloatingLabel>

              {/* Caixinha de descrição */}
              <FloatingLabel
                controlId="floatingInputDescricao"
                label="Descrição"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite a descrição do produto"
                />
              </FloatingLabel>

              {/* Select de categorias */}
              <Form.Group controlId="formGridTipo" className="mb-3" >
                <Form.Label>Tipo de produto</Form.Label>
                <Form.Select>

                {cats.map((cat)=> (
                    <option key={cat.id} value={cat.nome}>
                        {cat.nome}   
                    </option>
                ))}

                </Form.Select>
              </Form.Group>

              {/* Caixinha de preço */}
              <FloatingLabel
                controlId="floatingInputPreco"
                label="Preço"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.1"
                  placeholder="Digite o preco"
                />
              </FloatingLabel>
            </Col>
            <Col xs={6}>
             
            <Form.Group controlId="formFileLg" className="mb-3" >
             {/* Caixinha de imagem */}
             <FloatingLabel
                controlId="floatingInputImagem"
                label="Envie o link da Imagem do Produto"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Envie o link da Imagem do Produto"
                />
              </FloatingLabel>
                
                <image src={linkImagem} rounded width={300} height={300} />
                </Form.Group>
            </Col>
          </Row>

          {/* alerta caso haja erro */}
          <Alert key="danger" variant="danger">
            Error Detected
          </Alert>

          {/* botão de envio */}
          <Button variant="primary" type="submit">
            Enviar
          </Button>

        </form>
      </Container>
    </div>
  );
};

export default CadastroProduto;