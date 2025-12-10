import "./Emociones.css";
import emocionesImg from "../../assets/images/emociones.jpg";
import reflexionImg from "../../assets/images/reflexion.jpg"; // 👈 nueva imagen
import PdfViewer from "../../components/PdfViewer";
import discoforumPdf from "../../assets/pdf/discoforum.pdf";

function Emociones() {
  return (
    <section className="emociones-page">

      {/* TEXTO + IMAGEN SUPERIOR */}
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

      {/* ✅ REFLEXIÓN ABAJO DEL TODO */}
      <div className="emociones-reflexion">

        <div className="reflexion-text">
          <h2>Reflexión</h2>
          <p>
            Esta experiencia me permitió comprender la importancia de reconocer
            mis emociones y aprender a gestionarlas de manera consciente.
            El discofórum fue una herramienta valiosa para expresar sentimientos,
            escuchar a otros y reflexionar sobre situaciones cotidianas que generan
            estrés en la vida académica,ademas mientra hacia esta pestaña me salieron
            mas errores de lo comun y fue algo muy estresante,pero toco ser muy pasiente
            y tratar de no frustarme
          </p>
        </div>

        <div className="reflexion-image">
          <img src={reflexionImg} alt="Reflexión emocional" />
        </div>

      </div>

    </section>
  );
}

export default Emociones;
