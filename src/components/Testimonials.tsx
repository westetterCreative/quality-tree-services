import { ui } from '../data/content';

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials" data-fade>
      <div className="container">
        <h2 className="section-title">{ui.testimonialsHeading}</h2>
        <p className="section-subtitle">{ui.testimonialsSub}</p>
        <div className="testimonial-grid">
          {ui.testimonials.map((t, i) => (
            <figure key={i} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" aria-hidden>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <figcaption className="testimonial-meta">
                    {t.name} · {t.cityLine}
                  </figcaption>
                </div>
              </div>
              <div className="testimonial-quote-mark" aria-hidden>"</div>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <div className="testimonial-role">{t.role}</div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
