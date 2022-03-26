/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import foto from "../assets/img/imagecv.png";
import CV from "../source/Cv-DelgadoAnaCarolina.pdf";
import "../App.css";

export default function Sobremi() {
  return (
    <Container id="sobremi" fluid="sm" style={{ padding: "250px 70px 140px 70px" }}>
      <Row>
        <Image src={foto} roundedCircle />
        <Col style={{margin:"0px 20px 0px 20px"}}> 
          <h1 className="texto">Hola, soy Ana Carolina Delgado.</h1>
          <h2 className="texto">QA | Full Stack Developer.</h2>
          <p className="texto">
            Me apasiona mejorar la calidad de los sistemas y ayudar a las personas a través del
            desarrollo de paginas web, creo en el trabajo en equipo como clave
            para lograr un trabajo de calidad y el auto-aprendizaje como proceso
            fundamental para lograr el éxito. Me puedes contactar a través de:
          </p>
          <a
            href="https://www.linkedin.com/in/ana-carolina-delgado-b1330893"
            target="_blank"
            style={{ color: "black" }}
          >
            <i class="fab fa-2x fa-linkedin p-2 "></i>
          </a>
          <a
            href="https://github.com/karo18delgado"
            target="_blank"
            style={{ color: "black" }}
          >
            <i className="fab fa-2x fa-github p-2"></i>
          </a>
          <a
            href="mailto:karo18delgado@gmail.com"
            target="_blank"
            style={{ color: "black" }}
          >
            <i class="far fa-2x fa-envelope p-2"></i>
          </a>
          <a href={CV} download style={{ color: "black" }}>
            <i class="far fa-2x fa-file-alt p-2"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
