import { Container, Row, Col, Image } from "react-bootstrap";
import proyecto1 from "../assets/img/newsApi.png";
import proyecto2 from "../assets/img/AppleRollStore.png";
import proyecto3 from "../assets/img/Construrama.png";

export default function Proyectos() {
  return (
    <div id="proyectos" >
       
      <Container>
        <h2 className="text-center subtitle  pb-5 ">Mis últimos Proyectos</h2>
        <Row>
          <Col style={{ padding: "20px" }}>
            <Image src={proyecto1} style={{ maxHeight: "250px" }} />
          </Col>
          <Col style={{ padding: "20px" }}>
            <h4>News Api</h4>
            <p>
              Aplicación web con react, que consume api https://newsapi.org/.
              Permite busqueda por categoria y por paises. Contiene Login con
              formulario.
            </p>
            <p>Herramientas utilizadas: React, Bootstrap.</p>
          </Col>
        </Row>

        <Row>
          <Col style={{ padding: "20px" }}>
            <Image
              src={proyecto2}
              style={{ maxHeight: "220px", marginTop: "20px" }}
            />
          </Col>
          <Col style={{ padding: "20px" }}>
            <h4>AppleRollStore</h4>
            <p>
              Página de venta de productos específicos. El Scope(alcance) del
              proyecto es la maquetación de páginas en react con
              bootstrap/React-Bootstrap. Navegación con react-router-dom.
              División de tareas, planning, daily-meeting y uso de tablero en
              trello. Backend API rest con express. Se administra base de datos
              con mongo con ORM mongoose y servicio atlas cloud.
            </p>
            <p>
              Librerias utilizadas: Axios, Bootstrap, React-bootstrap,
              React-router-dom, SweetAlert, React-Credits-cards, Mongoose,
              Jsonwebtoken. Frameworks: Express.{" "}
            </p>
          </Col>
        </Row>

        <Row style={{paddingBottom:"80px"}}>
          <Col style={{ padding: "20px" }}>
            <Image src={proyecto3} style={{ maxHeight: "220px" }} />
          </Col>
          <Col style={{ padding: "20px" }}>
            <h4>Construrama</h4>
            <p>
              Pag web de venta de productos para la construcción. Maquetación de
              páginas responsive con bootstrap, css3 y html. Incluidos font
              awesome y google fonts. División de tareas, planning y uso de
              tablero en trello. Control de versiones y trabajo colaborativo con
              git + github. ABM con localstorage y uso del DOM.
            </p>
            <p>
              Herramientas utilizadas: JavaScript, DOM HTML, CSS y Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
