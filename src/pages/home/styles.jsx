import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 5em;
  position: relative;
  top: 9em;

  .infoContent {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 1em;
  }
  .infoContent div h1 {
    font-size: 4em;
    font-family: serif;
    letter-spacing: 1px;
    color: #1a1c1d;
    font-weight: bolder;
  }

  .infoContent div h1 span {
    background-color: #04f79a;
    border-radius: 5px;
  }

  .imageContentInfo img {
    width: 200px;
    height: 200px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    border-bottom: 1px solid #04f79a;
    border-top: 1px solid #04f79a;
    border-radius: 50%;
  }
  .infoImageContent {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: wrap;
  }
  .infoImageContent img {
    max-width: 300px;
    height: 300px;
    border-radius: 5px;
    filter: grayscale();
  }

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 4em;
    position: relative;
    top: 9em;

    .infoContent {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      gap: 1em;
    }
    .infoContent div h1 {
      font-size: 4em;
      font-family: serif;
      letter-spacing: 1px;
      color: #1a1c1d;
      font-weight: bolder;
    }

    .infoContent div h1 span {
      background-color: #04f79a;
      border-radius: 5px;
    }

    .imageContentInfo img {
      max-width: 200px;
      max-height: 200px;
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      border-bottom: 1px solid #04f79a;
      border-top: 1px solid #04f79a;
      border-radius: 50%;
    }
    .infoImageContent {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-flow: wrap;
    }
    .infoImageContent img {
      max-width: 300px;
      height: 300px;
      border-radius: 5px;
      filter: grayscale();
    }
  }

  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 4em;
    position: relative;
    top: 9em;

    .infoContent {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      gap: 1em;
    }
    .infoContent div h1 {
      font-size: 3em;
      font-family: serif;
      letter-spacing: 1px;
      color: #1a1c1d;
      font-weight: bolder;
    }

    .infoContent div h1 span {
      background-color: #04f79a;
      border-radius: 5px;
    }

    .imageContentInfo img {
      max-width: 150px;
      max-height: 150px;
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      border-bottom: 1px solid #04f79a;
      border-top: 1px solid #04f79a;
      border-radius: 50%;
    }
  }

  @media (max-width: 605px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 4em;
    position: relative;
    top: 9em;

    .infoContent {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      gap: 1em;
    }
    .infoContent div h1 {
      font-size: 2em;
      font-family: serif;
      letter-spacing: 1px;
      color: #1a1c1d;
      font-weight: bolder;
    }

    .infoContent div h1 span {
      background-color: #04f79a;
      border-radius: 5px;
    }

    .imageContentInfo img {
      max-width: 110px;
      max-height: 110px;
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      border-bottom: 1px solid #04f79a;
      border-top: 1px solid #04f79a;
      border-radius: 50%;
    }
  }

  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 4em;
    position: relative;
    top: 9em;

    .infoContent {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-flow: column wrap;
      padding: 5px;
      gap: 1em;
    }
    .infoContent div h1 {
      font-size: 2em;
      font-family: serif;
      letter-spacing: 1px;
      color: #1a1c1d;
      font-weight: bolder;
    }

    .infoContent div h1 span {
      background-color: #04f79a;
      border-radius: 5px;
    }

    .imageContentInfo img {
      max-width: 110px;
      max-height: 110px;
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      border-bottom: 1px solid #04f79a;
      border-top: 1px solid #04f79a;
      border-radius: 50%;
    }
  }
  @media (max-width: 300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 4em;
    position: relative;
    top: 9em;

    .infoContent {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      gap: 1em;
    }
    .infoContent div h1 {
      font-size: 2em;
      font-family: serif;
      letter-spacing: 1px;
      color: #1a1c1d;
      font-weight: bolder;
    }

    .infoContent div h1 span {
      background-color: #04f79a;
      border-radius: 5px;
    }

    .imageContentInfo img {
      width: 110px;
      height: 110px;
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      border-bottom: 1px solid #04f79a;
      border-top: 1px solid #04f79a;
      border-radius: 50%;
    }
  }
`;

export const SecondSection = styled.section`
  display: flex;
  align-items: center;
  padding: 10em;
  position: relative;
  top: 13em;
  background-color: #1a1c1d;

  .aboutSection {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: center;
    gap: 10em;
  }
  .aboutMeContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 1em;
  }
  .aboutMeContainer h1 {
    font-size: 4em;
    letter-spacing: 2px;
    font-family: serif;
  }
  .aboutMeContainer p {
    letter-spacing: 1px;
    font-family: serif;
    font-size: 20px;
  }
  .spanSkills {
    background-color: #04f79a;
    color: #1a1c1d;
    display: flex;
    font-weight: bolder;
    letter-spacing: 2px;
    padding: 1em 10px;
    text-align: center;
    font-family: serif;
  }
  .aboutMeImage img {
    max-width: 700px;
    max-height: 600px;
    filter: grayscale();
    border-radius: 50px;
  }

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    padding: 5em;
    position: relative;
    top: 13em;
    background-color: #1a1c1d;

    .aboutSection {
      display: flex;
      align-items: center;
      justify-content: center;
      justify-content: center;
      gap: 10em;
    }
    .aboutMeContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 1em;
    }
    .aboutMeContainer h1 {
      font-size: 2em;
      letter-spacing: 2px;
      font-family: serif;
    }
    .aboutMeContainer p {
      letter-spacing: 1px;
      font-family: serif;
      font-size: 15px;
    }
    .spanSkills {
      background-color: #04f79a;
      color: #1a1c1d;
      display: flex;
      font-weight: bolder;
      letter-spacing: 2px;
      padding: 1em 10px;
      text-align: center;
      font-family: serif;
    }
    .aboutMeImage img {
      max-width: 100%;
      max-height: 100%;
      filter: grayscale();
      border-radius: 10px;
    }
  }

  @media (max-width: 780px) {
    display: flex;
    align-items: center;
    padding: 5em;
    position: relative;
    top: 13em;
    background-color: #1a1c1d;

    .aboutSection {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10em;
    }
    .aboutMeContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 1em;
      text-align: left;
    }
    .aboutMeContainer h1 {
      font-size: 2em;
      letter-spacing: 2px;
      font-family: serif;
    }
    .aboutMeContainer p {
      letter-spacing: 1px;
      font-family: serif;
      font-size: 15px;
    }
    .spanSkills {
      background-color: #04f79a;
      color: #1a1c1d;
      display: flex;
      font-weight: bolder;
      letter-spacing: 2px;
      padding: 1em 10px;
      text-align: center;
      font-family: serif;
    }
    .aboutMeImage img {
      max-width: 100%;
      max-height: 100%;
      filter: grayscale();
      border-radius: 10px;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    padding: 2em;
    position: relative;
    top: 15em;
    background-color: #1a1c1d;

    .aboutSection {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
    }
    .aboutMeContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 1em;
      text-align: left;
    }
    .aboutMeContainer h1 {
      font-size: 2em;
      letter-spacing: 2px;
      font-family: serif;
    }
    .aboutMeContainer p {
      letter-spacing: 1px;
      font-family: serif;
      font-size: 15px;
    }
    .spanSkills {
      background-color: #04f79a;
      color: #1a1c1d;
      display: flex;
      font-weight: bolder;
      letter-spacing: 2px;
      padding: 2em 10px;
      text-align: center;
      font-family: serif;
    }
    .aboutMeImage img {
      max-width: 100%;
      max-height: 100%;
      filter: grayscale();
      border-radius: 10px;
    }
  }
`;
