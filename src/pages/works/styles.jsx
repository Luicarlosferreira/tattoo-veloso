import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10em;
  gap: 2em;
  flex-flow: wrap;
  .descriptionContent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
  }
  .descriptionContent img {
    width: 35px;
    height: 35px;
    position: relative;
    top: -2px;
  }
  h2 {
    color: #1a1c1d;
    font-size: 2em;
    font-weight: bolder;
    letter-spacing: 2px;
    font-family: serif;
  }
  .workContent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 2em;
  }
  .workContainer {
    padding: 2px;
    background-color: #1a1c1d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }
  .workContainer img {
    width: 200px;
    height: 200px;
    transition: all 0.2s linear;
  }
  .workContainer img:hover {
    transform: scale(3);
    cursor: not-allowed;
    border: 1px solid #04f79a;
    z-index: 1000;
    filter: blur(0px);
  }
  .workContainer img:hover ~ .workContainer img {
    width: 100px;
  }

  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6em;
    gap: 2em;
    flex-flow: wrap;
    .descriptionContent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
      background-color: #f1f1f1;
      border-radius: 5px;
      padding: 10px;
    }
    .descriptionContent img {
      width: 35px;
      height: 35px;
      position: relative;
      top: -2px;
    }
    h2 {
      color: #1a1c1d;
      font-size: 1.5em;
      font-weight: bolder;
      letter-spacing: 2px;
      font-family: serif;
    }
    .workContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row wrap;
      gap: 2em;
    }
    .workContainer {
      padding: 2px;
      background-color: #1a1c1d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
    }
    .workContainer img {
      width: 200px;
      height: 200px;
      transition: all 0.2s linear;
    }
    .workContainer img:hover {
      transform: scale(2);
      cursor: not-allowed;
      border: 1px solid #04f79a;
      z-index: 1000;
      filter: blur(0px);
    }
    .workContainer img:hover ~ .workContainer img {
      width: 100px;
    }
  }

  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6em;
    gap: 2em;
    flex-flow: wrap;
    .descriptionContent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      background-color: #f1f1f1;
      border-radius: 5px;
      padding: 1px;
    }
    .descriptionContent img {
      width: 20px;
      height: 20px;
      position: relative;
      top: -2px;
    }
    h2 {
      color: #1a1c1d;
      font-size: 15px;
      font-weight: bolder;
      letter-spacing: 1px;
      font-family: serif;
    }
    .workContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row wrap;
      gap: 2em;
    }
    .workContainer {
      padding: 2px;
      background-color: #1a1c1d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
    }
    .workContainer img {
      width: 200px;
      height: 200px;
      transition: all 0.2s linear;
    }
    .workContainer img:hover {
      transform: scale(1.5);
      cursor: not-allowed;
      border: 1px solid #04f79a;
      z-index: 1000;
      filter: blur(0px);
    }
    .workContainer img:hover ~ .workContainer img {
      width: 100px;
    }
  }

  @media (max-width: 362px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6em;
    gap: 2em;
    flex-flow: wrap;
    .descriptionContent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      background-color: #f1f1f1;
      border-radius: 5px;
      padding: 1px;
    }
    .descriptionContent img {
      width: 20px;
      height: 20px;
      position: relative;
      top: -2px;
    }
    h2 {
      color: #1a1c1d;
      font-size: 13px;
      font-weight: bolder;
      letter-spacing: 1px;
      font-family: serif;
    }
    .workContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row wrap;
      gap: 2em;
    }
    .workContainer {
      padding: 2px;
      background-color: #1a1c1d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
    }
    .workContainer img {
      width: 200px;
      height: 200px;
      transition: all 0.2s linear;
    }
    .workContainer img:hover {
      transform: scale(1.5);
      cursor: not-allowed;
      border: 1px solid #04f79a;
      z-index: 1000;
      filter: blur(0px);
    }
    .workContainer img:hover ~ .workContainer img {
      width: 100px;
    }
  }
`;
