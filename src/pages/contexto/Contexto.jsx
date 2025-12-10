import VideoPlayer from '../../components/VideoPlayer';
import InfoCard from '../../components/InfoCard';
import Gallery from '../../components/Gallery';
import "./Contexto.css";

import img1 from '../../assets/images/CampusUniversitarioYumbo1.JPG';
import img2 from '../../assets/images/CampusUniversitarioYumbo2.jpg';
import img3 from '../../assets/images/CampusUniversitarioYumbo3.jpg';
import img4 from '../../assets/images/CampusUniversitarioYumbo4.jpg';
import recorridoVid from '../../assets/videos/videoCampus.mp4';

function Contexto() {
  const images = [
    { src: img1, alt: 'Campus universitario' },
    { src: img2, alt: 'Campus universitario' },
    { src: img3, alt: 'Campus universitario' },
    { src: img4, alt: 'Campus universitario' }
  ];

  const video = recorridoVid;

  return (
    <section className="contexto-page">

      <header className="contexto-header">
        <h1>Contexto Institucional de la Universidad</h1>
      </header>

      <section className="contexto-section">
        <h2>Campus Universitario</h2>
        <Gallery images={images} />
      </section>

      {/* ✅ INFOCARD CORRECTAMENTE DENTRO DE ZONA SEGURA */}
      <section className="contexto-section">
        <InfoCard 
          title="Contexto de la sección" 
          subtitle="Recorriendo el Campus"
        >
          <p>
            De qué trató la sección: Identificar los escenarios, normativas, valores y procesos
            del contexto institucional de la Universidad del Valle para tomar decisiones sobre los
            procesos académicos y actuar acorde al debido proceso.
          </p>
          <p>
            Actividad: Los estudiantes recorren la universidad identificando dos sitios: uno favorito
            y otro que les gusta menos. Cada grupo elabora un vídeo o producto multimedia explicando
            por qué les gusta o no.
          </p>
          <p>
            El producto multimedia se entrega en el campus como
            “Entregue Producto audiovisual: Recorriendo la Univalle”.
          </p>
        </InfoCard>
      </section>

      <section className="contexto-section">
        <h2>Video del recorrido</h2>
        <VideoPlayer videoSrc={video} />
      </section>

      <section className="contexto-section wide-text">
        <h2>Mi Reflexión</h2>
        <p>
          Durante el recorrido por la Universidad pude identificar la riqueza del campus como espacio
          de aprendizaje y convivencia. Mi lugar favorito fue la sala de sistema como zona de estudio,
          donde se percibe un ambiente propicio para la concentración y el trabajo.
          Por el contrario, noté que algunas áreas de descanso requieren mejor mantenimiento, lo
          que afecta la percepción de seguridad y comodidad. Esta actividad me permitió valorar la
          importancia de los espacios físicos en el desempeño académico y la necesidad de
          involucrarnos en su cuidado como comunidad universitaria.
        </p>
      </section>

    </section>
  );
}

export default Contexto;
