import { Section } from "./styles";
import data from "../../data/data.json";
import { Slide } from "react-awesome-reveal";

export const ClientReview = () => {
  return (
    <Section>
      <hr />
      <Slide>
        <div className="reviewContent">
          {data.data.map((item, index) => (
            <div className="clientReview" key={index}>
              <div className="cReview">
                <div className="cImage">
                  <img src={item.image} alt="" />
                </div>
                <div className="cAvaliation">
                  <div className="starsReview">
                    <img
                      src="/assets/images/star.png"
                      alt="Satisfação do cliente em estrelas"
                    />
                    <img
                      src="/assets/images/star.png"
                      alt="Satisfação do cliente em estrelas"
                    />
                    <img
                      src="/assets/images/star.png"
                      alt="Satisfação do cliente em estrelas"
                    />
                    <img
                      src="/assets/images/star.png"
                      alt="Satisfação do cliente em estrelas"
                    />
                    <img
                      src="/assets/images/star.png"
                      alt="Satisfação do cliente em estrelas"
                    />
                  </div>

                  <div className="cQuestion">
                    <h3>{item.review}</h3>
                    <p>{item.avaliation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </Section>
  );
};
