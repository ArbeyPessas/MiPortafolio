import "./Normatividad.css";
import InfoCard from '../../components/InfoCard';
import PdfViewer from '../../components/PdfViewer';
import Downloads from '../../components/Downloads';
import reglamento09 from '../../assets/pdf/Acuerdo009.pdf';
import reglamento06 from '../../assets/pdf/Acuerdo006.pdf';
import taller from '../../assets/pdf/CasoResolver.pdf'

function Normatividad() {
const files  = [{ label: 'Acuerdo 009 - Reglamento Estudiantil', url: reglamento09 },
     { label: 'Acuerdo 006 - 2023', url: reglamento06 },{ label: 'Caso a Resuelto', url:taller }
    ] 


  return (
     <section className="page">
      <h1>Normatividad en el contexto universitario</h1>

      <InfoCard title="Contexto de la sección" subtitle="RA2 - Identificar normativas">
        <p>
          Objetivo: Profundizar en el conocimiento del Acuerdo 009, analizando capítulos del reglamento
          frente a escenarios o casos específicos. Los estudiantes discuten el reglamento y aplican
          artículos relevantes para proponer soluciones.
        </p>
      </InfoCard>

      <h2>Caso hipotético: Fraude en un examen</h2>
      <p>
        Contexto del caso: Antonio fue sorprendido dando copia a Carlos. El grupo debe analizar
        el caso y citar artículos aplicables del Acuerdo 009 para proponer un plan de acción.
      </p>
      <h3>Material de apoyo acuerdos descargar</h3>
      <Downloads files={files} />

      <h3>Taller Resuelto (PDF)</h3>
      { <PdfViewer fileUrl={taller} />}
     



      <h2>Reflexión</h2>
      <p>
        Analizar el reglamento frente a un caso concreto me mostró la importancia de conocer
        no solo las sanciones sino los procedimientos que garantizan un debido proceso. El caso
        de fraude evidencia cómo las acciones individuales afectan al colectivo y la necesidad
        de aplicar medidas educativas y sancionatorias de forma justa y proporcional. Comprendí
        que conocer los artículos del Acuerdo 009 facilita decisiones responsables y el respeto
        por la integridad académica.
      </p>
    </section>
  );
}

export default Normatividad