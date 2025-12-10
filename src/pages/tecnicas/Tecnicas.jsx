import "./Tecnicas.css";

import tecnicasImg from "../../assets/images/tecnicas-estudio.jpg"; 
import pensamientoImg from "../../assets/images/pensamiento.jpg"; // ✅ nueva imagen
import PdfViewer from "../../components/PdfViewer";
import tecnicasPdf from "../../assets/pdf/tecnicas-estudio.pdf";

function Tecnicas() {
  return (
    <section className="tecnicas-page">

      {/* TEXTO + IMAGEN SUPERIOR */}
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

      {/* ✅ REFLEXIÓN ABAJO DEL TODO */}
      <div className="tecnicas-reflexion">

        <div className="reflexion-text">
          <h2>Reflexión</h2>
          <p>
            El aprendizaje de estas técnicas me permitió reconocer la importancia
            de estudiar de forma organizada y consciente. Aplicar estrategias como
            esquemas y mapas conceptuales facilitó la comprensión de los contenidos
            y mejoró mi capacidad de análisis.
          </p>
          <p>
            Considero que el pensamiento crítico es fundamental en la vida
            universitaria, ya que permite cuestionar, reflexionar y tomar decisiones
            responsables frente al conocimiento y a las situaciones académicas.
          </p>
        </div>

        <div className="reflexion-image">
          <img src={pensamientoImg} alt="Pensamiento crítico" />
        </div>

      </div>

    </section>
  );
}

export default Tecnicas;
