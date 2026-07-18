import { content, ui } from '../data/content';

export default function ServiceArea() {
  return (
    <section className="service-area section" id="service-area" data-fade>
      <div className="container">
        <div className="service-area-card">
          <h2>{ui.serviceAreaHeading}</h2>
          <p>{ui.serviceAreaBody}</p>
          <div className="service-area-highlight">{ui.serviceAreaHighlight}</div>
          <div className="service-area-cta">
            <a href="#contact" className="btn btn-primary">
              {content.serviceAreaCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
