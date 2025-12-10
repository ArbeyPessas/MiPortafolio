import './Components.css';

export default function Gallery({images = []}){
  // images: [{src, alt}]
  return (
    <div className="gallery">
      {images.map((img, i) => (
        <figure key={i} className="gallery-item">
          <img src={img.src} alt={img.alt || `imagen-${i}`} />
        </figure>
      ))}
    </div>
  );
}
