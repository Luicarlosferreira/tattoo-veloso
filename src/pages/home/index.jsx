import { Section, SecondSection } from "./styles";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { ClientReview } from "../../components/client_review";

export const Home = () => {
  return (
    <>
      <Section>
        <div className="infoContent">
          <Slide triggerOnce>
            <div>
              <h1>
                Se o corpo é um templo... porque não rabiscar as{" "}
                <span>Paredes</span> ?
              </h1>
            </div>
            <div className="imageContentInfo">
              <img
                src="\src\assets\images\machineLogo.svg"
                alt="Imagem de caneta para tattoo"
              />
            </div>
          </Slide>
        </div>

        <div className="infoImageContent">
          <Zoom>
            <img
              src="\src\assets\images\perfil.jpg"
              alt="Imagem de perfil para apresentação"
            />
            <img
              src="\src\assets\images\perfilOne.jpg"
              alt="Imagem de perfil para apresentação"
            />
            <img
              src="\src\assets\images\perfilTwo.jpg"
              alt="Imagem de perfil para apresentação"
            />
          </Zoom>
        </div>
      </Section>
      <SecondSection>
        <div className="aboutSection">
          <Slide>
            <div className="aboutMeContainer">
              <h1>Saiba quem é o seu Profissional ♥</h1>
              <p>
                Olá, me chamo Allan Veloso, tenho 26 anos e sou Tatuador atuando
                na Região Oceânica em Niteroi, Rio de Janeiro. Meus principais
                trabalhos são utilizados:
                <br />
                <br />
                <span className="spanSkills">
                  • BLACKWORK • FINELINE • FLORAL • REALISMO.
                </span>
                <br />
              </p>
              <p>
                Sempre busco evoluir para poder prestar o melhor atendimento aos
                meus Clientes. Falando de mim mesmo, sou o tipo de profissional
                que busca com insanidade aprender além dos meus limites, e a
                cada dia, trazer novas skills para meu portifólio e rotina.
              </p>
            </div>
          </Slide>
          <Fade delay={200}>
            <div className="aboutMeImage">
              <img
                src="\src\assets\job\aboutMe.jpg"
                alt="Imagem de perfil do profissional"
              />
            </div>
          </Fade>
        </div>
      </SecondSection>
      <ClientReview />
    </>
  );
};
