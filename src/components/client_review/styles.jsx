import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  padding: 20em 0;
  position: relative;
  top: 13em;
  gap: 8em;

  hr {
    width: 90%;
    height: 2px;
    background-color: #1a1c1d;
  }
  .reviewContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    padding: 1em;
    gap: 10px;
  }

  .cImage img {
    max-width: 150px;
    /* height: 150px; */
    background-color: #1a1c1d;
    border-radius: 50%;
    padding: 10px;
  }
  .clientReview {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1c1d;
    font-weight: 400;
  }
  .cReview {
    display: flex;
    justify-content: space-between;
    gap: 1.4em;
    max-width: 400px;
    background-color: #04f79a58;
    padding: 1em;
    border-radius: 5px;
  }
  .starsReview {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2px;
  }
  .starsReview img {
    width: 18px;
    height: 18px;
  }
  .cQuestion {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column wrap;
    gap: 1em;
  }

  @media (max-width: 400px) {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    padding: 20em 0;
    position: relative;
    top: 13em;
    gap: 8em;

    hr {
      width: 90%;
      height: 2px;
      background-color: #1a1c1d;
    }
    .reviewContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
      padding: 10px;
      gap: 5px;
    }

    .cImage {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .clientReview {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1a1c1d;
      font-weight: 400;
    }
    .cReview {
      display: flex;
      justify-content: center;
      flex-flow: column;
      gap: 1.4em;
      max-width: 400px;
      background-color: #04f79a58;
      padding: 1em;
      border-radius: 5px;
    }
    .starsReview {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }
    .starsReview img {
      width: 18px;
      height: 18px;
    }
    .cQuestion {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 1em;
    }
  }
`;
