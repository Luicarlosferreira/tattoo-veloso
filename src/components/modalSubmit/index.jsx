import { Container } from "./styles";
import { Slide } from "react-awesome-reveal";
export const ModalSubmit = () => {
  return (
    <Container>
      <Slide>
        <div>
          <h2>Dados enviados com sucesso!</h2>
          <p>
            Em breve receberá um contato para marcarmos sem compromisso uma
            visita.
          </p>
        </div>
      </Slide>
    </Container>
  );
};
