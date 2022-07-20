import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Atividade no <strong className="purple">GitHub</strong>
      </h1>
      <GitHubCalendar
        username="davi38"
        blockSize={15}
        blockMargin={5}
        color="#c76CF2C"
        fontSize={16}
      />
    </Row>
    <Row>
    <p></p>
    <p></p>
    <p></p>
    <p>Website baseado no modelo de: <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" rel="noreferrer">https://github.com/soumyajit4419/Portfolio</a></p>
    </Row>
    </>
  );
}

export default Github;
