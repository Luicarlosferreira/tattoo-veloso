import { Container } from "./styles";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <Container>
      <Fade delay={100}>
        <div className="socialContent">
          <a href="https://www.facebook.com/AllanVelosoTattoo">
            <FaFacebookSquare />
          </a>
          <a href="https://www.whatsapp.com/catalog/5521971046332/">
            <FaWhatsappSquare />
          </a>
          <a href="https://www.instagram.com/allanvelosotattoo/">
            <FaInstagramSquare />
          </a>
        </div>
        <div className="copyrightContent">
          <p>
            Copyright ©2022 - <span>Veloso Tattoo Studio</span>
          </p>
          <p>Av. Central Ewerton Xavier, 2737 - 2• Andar - Niterói - RJ</p>
        </div>
      </Fade>
    </Container>
  );
};
