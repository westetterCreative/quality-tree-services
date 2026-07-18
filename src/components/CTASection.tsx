import { business, content } from '../data/content';

export default function CTASection() {
  const phoneHref = business.phone ? 'tel:' + business.phone.replace(/\D/g, '') : '';

  return (
    <section className="cta-section" data-fade>
      <div className="container">
        <div className="cta-inner">
          <p className="cta-eyebrow">{content.ctaEyebrow}</p>
          <h2 className="cta-heading">{content.tagline}</h2>
          <p className="cta-body">
            {content.subtagline} {content.ctaSupportingSuffix}
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-white btn-lg">
              {content.heroButtonText}
            </a>
            {business.phone && (
              <a href={phoneHref} className="btn btn-outline-white btn-lg">
                📞 {business.phone}
              </a>
            )}
          </div>
          <div className="cta-trust-row">
            {(content.ctaTrustBadges ?? []).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
