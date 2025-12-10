import './Components.css';

export default function VideoEmbed({src, title="Video"}) {
  // src can be a youtube embed url (https://www.youtube.com/embed/ID)
  return (
    <div className="video-container" aria-label={title}>
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
