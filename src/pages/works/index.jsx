import data from "../../data/workImages.json";
import { Container } from "./styles";
import { Slide, Fade } from "react-awesome-reveal";

export const Works = () => {
  return (
    <Container>
      <div className="descriptionContent">
        <Fade>
          <h2>Trabalhos Realizados</h2>
          <img
            src="/assets/images/icon/tattooPen.png"
            alt="Logo Caneta para Tatuar."
          />
        </Fade>
      </div>
      <Slide>
        <div className="workContent">
          {data.data.map((item, index) => (
            <div className="workContainer" key={index}>
              <img
                src={item.image}
                alt="Imagens de trabalhos realizados pelo tatuador."
                onMouseEnter={() => {
                  document.body.style.background = "#1a1c1d";
                }}
                onMouseOut={() => {
                  document.body.style.background = "#f1f1f1";
                }}
              />
            </div>
          ))}
        </div>
      </Slide>
    </Container>
  );
};
