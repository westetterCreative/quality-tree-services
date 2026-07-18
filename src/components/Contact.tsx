import { business, content } from '../data/content';
import QuoteForm from './QuoteForm';

export default function Contact() {
  const phoneHref = business.phone ? 'tel:' + business.phone.replace(/\D/g, '') : '';

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">{content.contactSectionTitle}</h2>
        <p className="section-subtitle">{content.contactSectionSubtitle}</p>
        <div className="contact-inner">
          <QuoteForm />

          <aside className="contact-info">
            <h3>Contact</h3>

            {business.phone ? (
              <div className="contact-item">
                <span className="contact-item-icon" aria-hidden>
                  📞
                </span>
                <div>
                  <a href={phoneHref}>{business.phone}</a>
                </div>
              </div>
            ) : null}

            {business.address ? (
              <div className="contact-item">
                <span className="contact-item-icon" aria-hidden>
                  📍
                </span>
                <div>{business.address}</div>
              </div>
            ) : null}

            <div className="contact-hours">
              <h4>Typical hours</h4>
              <p>
                Mon–Fri: 8:00–6:00
                <br />
                Sat: 8:00–2:00
                <br />
                Sun: Closed
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
