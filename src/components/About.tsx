import { business, content } from '../data/content';

export default function About() {
  const highlights = Array.isArray(content.aboutHighlights) ? content.aboutHighlights : [];

  return (
    <section className="about section" id="about" data-fade>
      <div className="container about-inner">
        <div className="about-text">
          <h2>{content.aboutHeading}</h2>
          <p>{content.aboutText}</p>
          {business.address ? <p className="about-location">{business.address}</p> : null}
          <a href="#contact" className="btn btn-primary">
            {content.ctaText}
          </a>
        </div>

        <div className="about-creds">
          {highlights.map((c, i) => (
            <div key={i} className="about-cred">
              <span className="about-cred-num" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <strong className="about-cred-title">{c.title}</strong>
                <p className="about-cred-sub">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
