import "./Referencias.css";

function Referencias() {
  return (
    <section className="referencias-page">

      <header className="referencias-header">
        <h1>Referencias y Fuentes</h1>
        <p>
          A continuación se presentan los enlaces y recursos utilizados para el
          desarrollo de las actividades y contenidos de este portafolio académico.
        </p>
      </header>

      {/* FUENTES ACADÉMICAS */}
      <section className="referencias-section">
        <h2>Fuentes académicas</h2>

        <ul className="referencias-list">
          <li>
            <a href="https://www.univalle.edu.co" target="_blank" rel="noreferrer">
              Universidad del Valle – Sitio oficial
            </a>
          </li>

          <li>
            <a href="https://scholar.google.com" target="_blank" rel="noreferrer">
              Google Académico
            </a>
          </li>

          <li>
            <a href="https://www.redalyc.org" target="_blank" rel="noreferrer">
              Redalyc – Red de Revistas Científicas
            </a>
          </li>
        </ul>
      </section>

      {/* RECURSOS MULTIMEDIA */}
      <section className="referencias-section">
        <h2>Recursos multimedia</h2>

        <ul className="referencias-list">
          <li>Imágenes propias tomadas en el campus universitario</li>
          <li>Videos elaborados por los estudiantes</li>
          <li>Material PDF suministrado por el docente</li>
        </ul>
      </section>

      {/* ✅ PINTEREST */}
      <section className="referencias-section">
        <h2>Inspiración visual</h2>

        <ul className="referencias-list">
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest – Referencias visuales e inspiración educativa
            </a>
          </li>
        </ul>
      </section>

    </section>
  );
}

export default Referencias;
