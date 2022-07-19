import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1c1d;
  padding: 10em;
  div {
    padding: 10px;
    font-size: 2em;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
  }
  div p {
    font-size: 20px;
  }

  @media (max-width: 1600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1c1d;
    padding: 10em 0;
    div {
      padding: 10px;
      font-size: 2em;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
    }
    h2 {
      font-size: 1em;
    }
    div p {
      font-size: 20px;
    }
  }

  @media (max-width: 900px) {
    div {
      padding: 10px;
      font-size: 2em;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
    }
    h2 {
      font-size: 0.8em;
    }
    div p {
      font-size: 20px;
    }
  }

  @media (max-width: 750px) {
    div {
      padding: 10px;
      font-size: 2em;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
    }
    h2 {
      font-size: 0.4em;
    }
    div p {
      font-size: 17px;
    }
  }

  @media (max-width: 630px) {
    div {
      padding: 10px;
      font-size: 2em;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
    }
    h2 {
      font-size: 0.4em;
    }
    div p {
      font-size: 13px;
    }
  }

  @media (max-width: 510px) {
    div {
      padding: 10px;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      background-color: #1a1c1d14;
      text-align: center;
    }
    h2 {
      font-size: 0.4em;
    }
    div p {
      font-size: 14px;
    }
  }

  @media (max-width: 450px) {
    div {
      padding: 10px;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      background-color: #1a1c1d14;
    }
    h2 {
      font-size: 0.3em;
    }
    div p {
      font-size: 12px;
    }
  }
`;
