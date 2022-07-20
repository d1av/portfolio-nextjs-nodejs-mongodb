import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medida from "../../Assets/Projects/medida.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import calcMedia from "../../Assets/Projects/calc-media.png";

function Projetos() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Alguns projetos que venho trabalhando recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medida}
              isBlog={false}
              title="Conversor de Medidas"
              description="Conversor de medidas que transforma 3 medidas, Quilômetro, Metro e Anos-Luz o algoritmo é feito em Javascript e a página é feita em html com estilos em CSS."
              ghLink="https://github.com/davi38/Conversor-de-Medidas"
              demoLink="https://davi38.github.io/Conversor-de-Medidas/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calcMedia}
              isBlog={false}
              title="Calcular Média"
              description="Página web feita para calculo de média escolar bimestral, com média necessária para ser aprovado em 7 e mensagem especial para alunos com média acima de 9, algoritmo feito em Javascript."
              ghLink="https://github.com/davi38/Calcular-Media"
              demoLink="https://davi38.github.io/Calcular-Media/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Porfolio Site"
              description="Portfolio baseado em edição em react com adição de novos módulos, edição e mudanças no projeto de 'soumyajit4419'."
              ghLink="https://github.com/davi38/portfolio"
              demoLink="./"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projetos;
