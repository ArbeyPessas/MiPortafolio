import "./Tecnicas.css";

import tecnicasImg from "../../assets/images/tecnicas-estudio.jpg"; // imagen principal
import PdfViewer from "../../components/PdfViewer";
import tecnicasPdf from "../../assets/pdf/tecnicas-estudio.pdf"; // PDF

function Tecnicas() {
  return (
    <section className="tecnicas-page">

      {/* TEXTO + IMAGEN */}
      <div className="tecnicas-container">

        <div className="tecnicas-text">
          <h1>Técnicas de Estudio y Pensamiento Crítico</h1>
          <p>
            En esta sección se desarrollaron diferentes técnicas de estudio
            orientadas a mejorar la comprensión, el análisis y la organización
            de la información académica. Se abordaron estrategias como mapas
            conceptuales, resúmenes, esquemas y la planificación de la semana ideal.
          </p>
          <p>
            Estas herramientas fortalecen el pensamiento crítico y creativo,
            permitiendo al estudiante reflexionar, argumentar y tomar decisiones
            de forma consciente frente a su proceso de aprendizaje.
          </p>
        </div>

        <div className="tecnicas-image">
          <img src={tecnicasImg} alt="Técnicas de estudio" />
        </div>

      </div>

      {/* PDF */}
      <div className="tecnicas-pdf">
        <h2>Informe – Técnicas de Estudio (APA)</h2>

        <PdfViewer fileUrl={tecnicasPdf} height={500} />

        {/* BOTÓN DESCARGA */}
        <div className="pdf-download">
          <a
            href={tecnicasPdf}
            download
            className="download-btn"
          >
            Descargar PDF del Informe
          </a>
        </div>
      </div>

    </section>
  );
}

export default Tecnicas;
