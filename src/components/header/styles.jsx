import styled from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  color: #1a1c1d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
  gap: 22em;

  svg {
    color: #04f79a;
    width: 23px;
    height: 23px;
    position: relative;
    top: -3px;
  }

  .logo_Content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .logo_Content span {
    font-weight: bolder;
    font-family: gabriola;
    font-size: 2em;
    cursor: pointer;
    padding: 5px;
    text-decoration: none;
    color: #1a1c1d;
  }

  .listContent {
    display: flex;
    gap: 5em;
    align-items: center;
  }
  .listNav ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3em;
    color: #1a1c1d;
  }
  Link {
    text-decoration: none;
  }
  .listNav ul li {
    border-bottom: solid 2px transparent;
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s linear;
    font-weight: 600;
    letter-spacing: 2px;
    color: #1a1c1d;
    text-decoration: none;
  }

  .listNav ul li:hover {
    border-bottom: solid 2px #04f79a;
  }
  .separator {
    width: 1px;
    height: 25px;
    background-color: #1a1c1d;
  }
  .buttonContent button {
    padding: 10px;
    outline: none;
    border: solid 1px #04f79a;
    color: #04f79a;
    background-color: #fff;
    font-weight: bolder;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .buttonContent button:hover {
    border: solid 1px #1a1c1d;
    color: #1a1c1d;
  }

  .mobileMenu {
    display: none;
  }

  @media (max-width: 1100px) {
    gap: 15em;

    .logo_Content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .listContent {
      display: flex;
      gap: 3em;
      align-items: center;
    }
    .listNav ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2em;
      color: #1a1c1d;
    }

    .listNav ul li:hover {
      border-bottom: solid 2px #04f79a;
    }
    .separator {
      width: 1px;
      height: 25px;
      background-color: #1a1c1d;
    }
    .buttonContent button {
      padding: 10px;
      outline: none;
      border: solid 1px #04f79a;
      color: #04f79a;
      background-color: #fff;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s linear;
    }
    .buttonContent button:hover {
      border: solid 1px #1a1c1d;
      color: #1a1c1d;
    }
  }

  @media (max-width: 880px) {
    gap: 10em;

    .logo_Content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .listContent {
      display: flex;
      gap: 2em;
      align-items: center;
    }
    .listNav ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5em;
      color: #1a1c1d;
    }

    .buttonContent button {
      padding: 10px;
      outline: none;
      border: solid 1px #04f79a;
      color: #04f79a;
      background-color: #fff;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s linear;
    }
    .buttonContent button:hover {
      border: solid 1px #1a1c1d;
      color: #1a1c1d;
    }
  }

  @media (max-width: 750px) {
    gap: 4em;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1a1c1ded;
    z-index: 1000;

    .logo_Content span {
      font-weight: bolder;
      font-family: gabriola;
      font-size: 2em;
      cursor: pointer;
      padding: 5px;
      text-decoration: none;
      color: white;
    }

    .logo_Content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .listContent {
      display: flex;
      gap: 1.5em;
      align-items: center;
    }
    .listNav ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
      color: #1a1c1d;
    }
    .listNav ul li {
      border-bottom: solid 2px transparent;
      padding: 10px;
      cursor: pointer;
      transition: all 0.2s linear;
      font-weight: 600;
      letter-spacing: 2px;
      color: white;
      text-decoration: none;
    }

    .buttonContent button {
      padding: 8px;
      outline: none;
      border: solid 1px transparent;
      color: #04f79a;
      background-color: #fff;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: 620px) {
    gap: 3em;

    .logo_Content span {
      font-weight: bolder;
      font-family: gabriola;
      font-size: 2em;
      cursor: pointer;
      padding: 5px;
      text-decoration: none;
      color: white;
    }

    .logo_Content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    .listContent {
      display: flex;
      gap: 1em;
      align-items: center;
    }
    .listNav ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
      color: #1a1c1d;
    }
    .listNav ul li {
      border-bottom: solid 2px transparent;
      padding: 10px;
      cursor: pointer;
      transition: all 0.2s linear;
      font-weight: 600;
      letter-spacing: 2px;
      color: white;
      text-decoration: none;
      font-size: 13px;
    }

    .buttonContent button {
      padding: 8px;
      outline: none;
      border: solid 1px transparent;
      color: #04f79a;
      background-color: #fff;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s linear;
      font-size: 13px;
    }
  }

  @media (max-width: 560px) {
    .listNav {
      display: none;
    }

    .buttonContent button {
      padding: 8px;
      outline: none;
      border: solid 1px transparent;
      color: #04f79a;
      background-color: #ffffff;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s linear;
      font-size: 13px;
      letter-spacing: 1px;
    }
    .listNavActive {
      display: flex;
      color: white;
    }
    .listNavMobileActive {
      width: 100%;
      height: 100vh;
      background-color: #131414f6;
      position: absolute;
      right: 0;
      top: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
      font-size: 2em;
      transition: all 0.2s linear;
    }
    .listNavMobileActive li {
      color: white;
      border-bottom: 1px solid transparent;
      transition: all 0.2s linear;
    }
    .listNavMobileActive li:hover {
      border-bottom: 1px solid white;
    }
    Link {
      color: white;
      text-decoration: none;
    }

    .mobileCloseMenu {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    .separator {
      display: none;
    }

    .listNav ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3em;
      color: #1a1c1d;
    }

    .listNav ul li {
      border-bottom: solid 2px transparent;
      padding: 10px;
      cursor: pointer;
      transition: all 0.2s linear;
      font-weight: 600;
      letter-spacing: 2px;
      color: #1a1c1d;
      text-decoration: none;
    }

    .mobileMenu {
      display: block;
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 425px) {
    gap: 1.5em;

    .listNavMobileActive {
      width: 100%;
      height: 100vh;
      background-color: #131414f6;
      position: absolute;
      right: 0;
      top: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
      font-size: 2em;
      transition: all 0.2s linear;
    }
    svg {
      color: #04f79a;
      width: 20px;
      height: 20px;
      position: relative;
      top: -3px;
    }

    .logo_Content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .logo_Content span {
      font-weight: bolder;
      font-family: gabriola;
      font-size: 1.5em;
      cursor: pointer;
      padding: 4px;
      text-decoration: none;
      color: white;
    }

    .buttonContent button {
      padding: 8px;
      outline: none;
      border: solid 1px transparent;
      color: #04f79a;
      background-color: #ffffff;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s linear;
      font-size: 10px;
      letter-spacing: 1px;
    }

    .mobileCloseMenu {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 350px) {
    gap: 1.5em;

    .listNavMobileActive {
      width: 100%;
      height: 100vh;
      background-color: #131414f6;
      position: absolute;
      right: 0;
      top: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
      font-size: 2em;
      transition: all 0.2s linear;
    }
    svg {
      color: #04f79a;
      width: 20px;
      height: 20px;
      position: relative;
      top: -3px;
    }

    .logo_Content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .logo_Content span {
      font-weight: bolder;
      font-family: gabriola;
      font-size: 1.2em;
      cursor: pointer;
      padding: 4px;
      text-decoration: none;
      color: white;
    }

    .buttonContent button {
      padding: 6px;
      outline: none;
      border: solid 1px transparent;
      color: #04f79a;
      background-color: #ffffff;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s linear;
      font-size: 6px;
      letter-spacing: 1px;
    }

    .mobileCloseMenu {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }
`;
