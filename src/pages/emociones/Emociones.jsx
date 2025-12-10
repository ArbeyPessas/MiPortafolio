import "./Emociones.css";
import emocionesImg from "../../assets/images/emociones.jpg";
import PdfViewer from "../../components/PdfViewer";
import discoforumPdf from "../../assets/pdf/discoforum.pdf";

function Emociones() {
  return (
    <section className="emociones-page">

      {/* TEXTO + IMAGEN */}
      <div className="emociones-container">

        <div className="emociones-text">
          <h1>Manejo de Emociones y Estrés</h1>
          <p>
            En esta sección se trabajó el reconocimiento y manejo de las emociones
            a través del discofórum, utilizando canciones que permitieron reflexionar
            sobre el estrés, la ansiedad y la importancia del equilibrio emocional
            en la vida universitaria.
          </p>
          <p>
            Esta actividad fortaleció la empatía, el autocontrol y la capacidad de
            expresar sentimientos de manera adecuada, contribuyendo al bienestar
            personal y académico.
          </p>
        </div>

        <div className="emociones-image">
          <img src={emocionesImg} alt="Manejo de emociones" />
        </div>

      </div>

      {/* PDF DISCOFÓRUM */}
      <div className="emociones-pdf">
        <h2>Discofórum – Evidencia en PDF</h2>

        <PdfViewer fileUrl={discoforumPdf} height={500} />

        {/* BOTÓN DESCARGA */}
        <div className="pdf-download">
          <a
            href={discoforumPdf}
            download
            className="download-btn"
          >
            Descargar PDF del Discofórum
          </a>
        </div>
      </div>

    </section>
  );
}

export default Emociones;
