import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1c1d;
  position: relative;
  top: 5em;

  .formContent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
  }
  .formContent span {
    font-size: 1em;
    font-weight: bolder;
    font-family: serif;
    padding: 1em 3em;
    border-radius: 5px;
    background-color: #04f79a;
    z-index: 10;
    position: relative;
    top: 25px;
    box-shadow: 2px 0 10px #04f79a;
    letter-spacing: 2px;
  }
  .formContent form {
    padding: 10em 1.5em;
    background-color: #1a1c1d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 20px;
    border-radius: 10px;
    box-shadow: 2px 0 10px #1a1c1d;
  }

  .formContent form input {
    outline: none;
  }

  .contactContent {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
  }
  .nameContent {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .nameContent input,
  .contactContent input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    border: 2px solid transparent;
  }

  .textArea {
    width: 100%;
  }
  .textArea textarea {
    width: 100%;
    padding: 4px;
    height: 100px;
    outline: none;
    border: 2px solid transparent;
  }
  .textArea textarea:focus,
  .nameContent input:focus,
  .contactContent input:focus {
    border: 2px solid #04f79a;
  }
  .buttonContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttonContainer input {
    width: 100%;
    padding: 1em 3em;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    font-weight: bolder;
    letter-spacing: 2px;
    transition: all 0.2s linear;
  }
  .buttonContainer input:hover {
    background-color: #04f79a;
    color: white;
  }

  @media (max-width: 490px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1c1d;
    position: relative;
    top: 9em;

    .formContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
    }
    .formContent span {
      font-size: 1em;
      font-weight: bolder;
      font-family: serif;
      padding: 1em 3em;
      border-radius: 5px;
      background-color: #04f79a;
      z-index: 10;
      position: relative;
      top: 25px;
      box-shadow: 2px 0 10px #04f79a;
      letter-spacing: 2px;
    }
    .formContent form {
      padding: 8em 10px;
      background-color: #1a1c1d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
      gap: 20px;
      border-radius: 10px;
      box-shadow: 2px 0 10px #1a1c1d;
    }

    .formContent form input {
      outline: none;
    }

    .contactContent {
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      width: 100%;
      gap: 10px;
    }
    .nameContent {
      width: 100%;
      display: flex;
      gap: 10px;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .nameContent input,
    .contactContent input {
      padding: 5px;
      border-radius: 5px;
      border: none;
      border: 2px solid transparent;
    }

    .textArea {
      width: 100%;
    }
    .textArea textarea {
      width: 100%;
      padding: 4px;
      height: 100px;
      outline: none;
      border: 2px solid transparent;
    }
    .textArea textarea:focus,
    .nameContent input:focus,
    .contactContent input:focus {
      border: 2px solid #04f79a;
    }
    .buttonContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .buttonContainer input {
      width: 100%;
      padding: 1em 3em;
      cursor: pointer;
      font-size: 1em;
      border-radius: 5px;
      border: none;
      font-weight: bolder;
      letter-spacing: 2px;
      transition: all 0.2s linear;
    }
    .buttonContainer input:hover {
      background-color: #04f79a;
      color: white;
    }
  }

  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1c1d;
    position: relative;
    top: 9em;

    .formContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
    }
    .formContent span {
      font-size: 1em;
      font-weight: bolder;
      font-family: serif;
      padding: 1em 3em;
      border-radius: 5px;
      background-color: #04f79a;
      z-index: 10;
      position: relative;
      top: 25px;
      box-shadow: 2px 0 10px #04f79a;
      letter-spacing: 2px;
    }
    .formContent form {
      width: 320px;
      padding: 8em 2em;
      background-color: #1a1c1d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
      gap: 20px;
      border-radius: 10px;
      box-shadow: 2px 0 10px #1a1c1d;
    }

    .formContent form input {
      outline: none;
    }

    .contactContent {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 4px;
    }
    .nameContent {
      width: 100%;
      display: flex;
      gap: 4px;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
    .nameContent input,
    .contactContent input {
      padding: 5px;
      border-radius: 5px;
      border: none;
      border: 2px solid transparent;
    }

    .textArea {
      width: 100%;
    }
    .textArea textarea {
      width: 100%;
      padding: 4px;
      height: 100px;
      outline: none;
      border: 2px solid transparent;
    }
    .textArea textarea:focus,
    .nameContent input:focus,
    .contactContent input:focus {
      border: 2px solid #04f79a;
    }
    .buttonContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .buttonContainer input {
      width: 100%;
      padding: 1em 3em;
      cursor: pointer;
      font-size: 1em;
      border-radius: 5px;
      border: none;
      font-weight: bolder;
      letter-spacing: 2px;
      transition: all 0.2s linear;
    }
    .buttonContainer input:hover {
      background-color: #04f79a;
      color: white;
    }
  }

  @media (max-width: 331px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1c1d;
    position: relative;
    top: 9em;

    .formContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
    }
    .formContent span {
      font-size: 1em;
      font-weight: bolder;
      font-family: serif;
      padding: 1em 3em;
      border-radius: 5px;
      background-color: #04f79a;
      z-index: 10;
      position: relative;
      top: 25px;
      box-shadow: 2px 0 10px #04f79a;
      letter-spacing: 2px;
    }
    .formContent form {
      width: 300px;
      padding: 8em 2em;
      background-color: #1a1c1d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
      gap: 20px;
      border-radius: 10px;
      box-shadow: 2px 0 10px #1a1c1d;
    }

    .formContent form input {
      outline: none;
    }

    .contactContent {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 4px;
    }
    .nameContent {
      width: 100%;
      display: flex;
      gap: 4px;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
    .nameContent input,
    .contactContent input {
      padding: 5px;
      border-radius: 5px;
      border: none;
      border: 2px solid transparent;
    }

    .textArea {
      width: 100%;
    }
    .textArea textarea {
      width: 100%;
      padding: 4px;
      height: 100px;
      outline: none;
      border: 2px solid transparent;
    }
    .textArea textarea:focus,
    .nameContent input:focus,
    .contactContent input:focus {
      border: 2px solid #04f79a;
    }
    .buttonContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .buttonContainer input {
      width: 100%;
      padding: 1em 3em;
      cursor: pointer;
      font-size: 1em;
      border-radius: 5px;
      border: none;
      font-weight: bolder;
      letter-spacing: 2px;
      transition: all 0.2s linear;
    }
    .buttonContainer input:hover {
      background-color: #04f79a;
      color: white;
    }
  }
`;
