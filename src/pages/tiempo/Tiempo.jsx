import "./Tiempo.css";

import tiempoImg from "../../assets/images/tiempo.jpg";
import cronogramaImg from "../../assets/images/cronograma.jpg";

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

        <img
          src={cronogramaImg}
          alt="Cronograma de actividades"
          className="cronograma-img"
        />

        {/* BOTÓN DESCARGA */}
        <div className="cronograma-download">
          <a
            href={cronogramaImg}
            download
            className="download-btn"
          >
            Descargar cronograma
          </a>
        </div>
      </div>

      {/* ✅ REFLEXIÓN FINAL */}
      <div className="tiempo-reflexion">
        <h2>Reflexión</h2>
        <p>
          Esta actividad fue una de mis favoritas debido a que, me permitió 
          tomar conciencia sobre la importancia de organizar mejor mi tiempo y establecer prioridades claras en mis
          responsabilidades académicas, personales y haci pude darme cuenta de los tiempo que no puede aver optimizado antes. Aprendí que una adecuada
          planificación no solo mejora el rendimiento académico, sino que también
          contribuye a reducir el estrés y a mantener un equilibrio saludable entre
          el estudio, el descanso y la vida personal.
        </p>
      </div>

    </section>
  );
}

export default Tiempo;
