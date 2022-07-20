import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="purple">Davi Alves de Oliveira </span>
            moro em <span className="purple"> São Paulo, Brasil.</span>
            <br />Sou Desenvolvedor junior com <span className="purple">tecnólogo </span> e estou sempre <span className="purple">estudando</span>
            , atualmente meu foco é em desenvolvimento <span className="purple">Fullstack</span> com conhecimento de
            <span className="purple"> Frontend</span> e <span className='purple'> Backend</span>.
            <br />Gosto muito do mundo da <span className="purple">tecnologia</span> ele é muito
            dinâmico quanto a novidades, sempre com algo  interessante.
            <br />
            <br />
            Minhas principais qualidades são:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sempre buscando aprender e melhorar
            </li>
            <li className="about-activity">
              <ImPointRight /> Proatividade
            </li>
            <li className="about-activity">
              <ImPointRight /> Resiliência, e de fácil adaptabilidade
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “We cannot solve our problems with the same thinking we used when we created them.”{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
