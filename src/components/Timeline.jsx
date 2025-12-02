import './Components.css';

export default function Timeline({items = []}) {
  // items: [{date, title, description}]
  return (
    <ul className="timeline">
      {items.map((it, idx) => (
        <li key={idx} className="timeline-item">
          <div className="timeline-date">{it.date}</div>
          <div className="timeline-content">
            <h4>{it.title}</h4>
            <p>{it.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
