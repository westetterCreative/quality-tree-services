import { business, content } from '../data/content';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get a quote', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = business.phone ? 'tel:' + business.phone.replace(/\D/g, '') : '';

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <div className="footer-logo">{business.name}</div>
          <p className="footer-tagline">
            Professional {business.category || 'local service'} with dependable results and honest pricing.
          </p>
          {business.phone ? (
            <a href={phoneHref} className="footer-phone">
              📞 {business.phone}
            </a>
          ) : null}
          {business.address ? (
            <p className="footer-address">📍 {business.address}</p>
          ) : null}
          <div className="footer-badges">
            <span className="footer-badge">Licensed &amp; Insured</span>
            <span className="footer-badge">Locally Owned</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-list">
            {content.services.slice(0, 6).map(s => (
              <li key={s.title}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">© {year} {business.name}. All rights reserved.</p>
          <p className="footer-copy">Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
