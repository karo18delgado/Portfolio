import CV from "../source/Cv-DelgadoAnaCarolina.pdf";
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */

export default function Footer() {
  return (
    <footer id="contacto" className="container-fluid text-center footer w-100">
        <h2   className="pt-3">Contacto</h2>
        <p>Contáctame a través de mis redes sociales. Estaré encantada de poder conversar.</p>
      <div className="row p-2 justify-content-center">
        <div className="mt-3 pb-3 text-center ">
          <a
            href="https://www.linkedin.com/in/ana-carolina-delgado-b1330893"
            target="_blank"
            style={{ color: "#F29089" }}
          >
            <i class="fab fa-2x fa-linkedin p-2 "></i>
          </a>
          <a
            href="https://github.com/karo18delgado"
            target="_blank"
            style={{ color: "#F29089" }}
          >
            <i className="fab fa-2x fa-github p-2"></i>
          </a>
          <a
            href="mailto:karo18delgado@gmail.com"
            target="_blank"
            style={{ color: "#F29089" }}
          >
            <i class="far fa-2x fa-envelope p-2"></i>
          </a>
          <a href={CV} download style={{ color: "#F29089" }}>
            <i class="far fa-2x fa-file-alt p-2"></i>
          </a>
        </div>
      
      </div>
    </footer>
  );
}
