import './Components.css';
// videoSrc: import like import vid from '../assets/videos/recorrido.mp4'
export default function VideoPlayer({ videoSrc, poster }) {
  if (!videoSrc) return <p>No hay video cargado.</p>;
  return (
    <div className="video-wrapper">
      <video controls width="100%" poster={poster}>
        <source src={videoSrc} />
        Tu navegador no soporta video HTML5.
      </video>
    </div>
  );
}
