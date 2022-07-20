import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ParticleTextEffect from "particle-text-effect";
import { DiReact } from 'react-icons/di';
import { FaBook } from 'react-icons/fa';





function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UMA BREVE <span className="purple"> INTRODUÇÃO </span>
            </h1>
            <p className="home-about-body">
              Gosto muito de programação e já aprendi muita coisa mesmo sendo junior na área <FaBook />
              <br />
              <br />Sou bom com
              <i>
                <b className="purple"> Javascript, HTML, CSS e React (este site foi feito em React <DiReact />). </b>
                E estou disposto a aprender novas linguas!
              </i>
              <br />
              <br />
              Meus interesses estão em desenvolver&nbsp;
              <i>
                <b className="purple">Produtos e Tecnologias para a Web </b> também à áreas relacionadas a programação em geral <b className="purple">(C++, Python, Java)</b>, gosto de{" "}
                <b className="purple">
                  Frameworks e Aplicativos para Celular.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, eu crio projetos para melhorar minhas habilidades principalmente em <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Frameworks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><ParticleTextEffect text="ME SIGA NAS REDES" type="confetti" /></h1>
            <p>
              Fique livre para me <span className="purple">mandar uma mensagem</span>.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/davi38"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/DaviAlvesOli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:davi4alves@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
