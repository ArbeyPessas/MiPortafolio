
import './Components.css';

export default function InfoCard({title, subtitle, children, footer}) {
  return (
    <article className="info-card">
      <div className="info-card-body">
        <h3>{title}</h3>
        {subtitle && <p className="muted">{subtitle}</p>}
        <div className="info-content">{children}</div>
      </div>
      {footer && <div className="info-card-footer">{footer}</div>}
    </article>
  );
}
