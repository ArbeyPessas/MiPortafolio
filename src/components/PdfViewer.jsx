import './Components.css';

export default function PdfViewer({fileUrl, height = 600}) {
  // fileUrl can be /pdfs/archivo.pdf (public folder) or import
  return (
    <div className="pdf-viewer" style={{height}}>
      <object data={fileUrl} type="application/pdf" width="100%" height="100%">
        <p>Tu navegador no puede mostrar el PDF. <a href={fileUrl} target="_blank" rel="noreferrer">Descargar PDF</a></p>
      </object>
    </div>
  );
}
