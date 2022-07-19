import { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "./styles";
import { Zoom } from "react-awesome-reveal";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setText("");

    emailjs

      .sendForm(
        import.meta.env.VITE_FORM_SERVICE_ID,
        import.meta.env.VITE_FORM_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_FORM_PUBLIC_KEY
      )
      .then(
        (result) => {
          navigate("/submit");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Zoom>
        <div className="formContent">
          <span>CONTATO</span>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="nameContent">
              <label>
                <input
                  type="text"
                  value={name}
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  value={lastName}
                  name="user_last_name"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Sobrenome"
                  required
                />
              </label>
            </div>

            <div className="contactContent">
              <label value>
                <input
                  type="email"
                  value={email}
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </label>

              <label>
                <input
                  type="tel"
                  value={number}
                  name="user_contact"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  placeholder="Tel"
                />
              </label>
            </div>
            <div className="textArea">
              <label>
                <textarea
                  value={text}
                  name="user_description"
                  onChange={(e) => setText(e.target.value)}
                  required
                  placeholder="Descreva sua tattoo..."
                />
              </label>
            </div>
            <div className="buttonContainer">
              <label>
                <input type="submit" value="Enviar" />
              </label>
            </div>
          </form>
        </div>
      </Zoom>
    </Container>
  );
};
