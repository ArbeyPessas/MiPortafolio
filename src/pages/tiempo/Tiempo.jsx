import "./Tiempo.css";

import tiempoImg from "../../assets/images/tiempo.jpg";       // Imagen principal
import cronogramaImg from "../../assets/images/cronograma.jpg"; // Imagen del cronograma

function Tiempo() {
  return (
    <section className="tiempo-page">

      {/* TEXTO + IMAGEN */}
      <div className="tiempo-container">

        <div className="tiempo-text">
          <h1>Gestión y Manejo del Tiempo</h1>
          <p>
            En esta sección se trabajó la importancia de organizar adecuadamente
            el tiempo para cumplir con las responsabilidades académicas y personales.
            Se abordaron estrategias como la planificación semanal, la priorización
            de actividades y el uso de herramientas para optimizar el rendimiento
            académico y reducir el estrés.
          </p>
          <p>
            La gestión efectiva del tiempo permite mantener un equilibrio entre
            estudio, descanso y vida personal, favoreciendo un mejor desempeño
            en el entorno universitario.
          </p>
        </div>

        <div className="tiempo-image">
          <img src={tiempoImg} alt="Gestión del tiempo" />
        </div>

      </div>

      {/* CRONOGRAMA */}
      <div className="tiempo-cronograma">
        <h2>Cronograma de actividades</h2>
        <img src={cronogramaImg} alt="Cronograma de actividades" />
      </div>

    </section>
  );
}

export default Tiempo;
