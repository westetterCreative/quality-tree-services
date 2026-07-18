import { content } from '../data/content';

export default function Services() {
  return (
    <section className="services section" id="services" data-fade>
      <div className="container">
        <h2 className="section-title">{content.servicesSectionTitle}</h2>
        <p className="section-subtitle">{content.servicesSectionSubtitle}</p>
        <div className="services-grid">
          {content.services.map((service, i) => (
            <article key={i} className="service-card">
              <div className="service-icon-wrap">
                <span className="service-icon" aria-hidden>
                  {service.icon}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                {content.servicesCardLinkText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
