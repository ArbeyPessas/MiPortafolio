import './Components.css';

export default function Downloads({files = []}) {
  // files: [{label, url}]
  return (
    <div className="downloads">
      {files.map((f, i) => (
        <a key={i} className="download-item" href={f.url} download>
          <div className="download-meta">
            <strong>{f.label}</strong>
            <span>Descargar</span>
          </div>
        </a>
      ))}
    </div>
  );
}
