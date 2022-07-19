import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  top: 15em;
  background-color: #1a1c1d;
  padding: 5em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  gap: 1em;

  svg {
    color: white;
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  svg:hover {
    color: #04f79a;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  .socialContent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
  .copyrightContent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 5px;
  }
  .copyrightContent span {
    font-weight: bolder;
  }

  @media (max-width: 415px) {
    position: relative;
    top: 15em;
    background-color: #1a1c1d;
    padding: 5em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 1em;

    svg {
      color: white;
      width: 35px;
      height: 35px;
      cursor: pointer;
      transition: all 0.2s linear;
    }
    svg:hover {
      color: #04f79a;
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
    .socialContent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
    }
    .copyrightContent p {
      font-size: 12px;
    }
    .copyrightContent span {
      font-weight: bolder;
    }
  }

  @media (max-width: 335px) {
    position: relative;
    top: 15em;
    background-color: #1a1c1d;
    padding: 5em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 1em;

    svg {
      color: white;
      width: 35px;
      height: 35px;
      cursor: pointer;
      transition: all 0.2s linear;
    }
    svg:hover {
      color: #04f79a;
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
    .socialContent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
    }
    .copyrightContent p {
      font-size: 10px;
    }
    .copyrightContent span {
      font-weight: bolder;
    }
  }
`;
