import { useEffect, useState } from 'react';
import { business, content, ui } from '../data/content';

const FALLBACK_BADGES = [
  'Licensed & Insured',
  'Locally Owned & Operated',
  'Free Estimates',
  '5★ Rated',
];

export default function Hero() {
  const phoneHref = business.phone ? 'tel:' + business.phone.replace(/\D/g, '') : '';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const trustBadges: string[] =
    Array.isArray(ui.trustChips) && ui.trustChips.length > 0
      ? ui.trustChips.slice(0, 4)
      : FALLBACK_BADGES;

  const heroClass = [
    ui.heroClass,
    ui.heroPhotoId ? 'hero--photo' : '',
    ui.heroLayout === 'left' ? 'hero--left' : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={heroClass} id="home">
      <div className={'hero-inner container' + (visible ? ' hero-visible' : '')}>
        <h1>{content.tagline}</h1>
        <p className="hero-lead">{content.subtagline}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary btn-hero">
            {content.heroButtonText}
          </a>
          {business.phone ? (
            <a href={phoneHref} className="btn btn-outline">
              📞 {business.phone}
            </a>
          ) : null}
        </div>
        {business.rating != null && (
          <div className="hero-rating">
            <span className="hero-rating-stars" aria-label={`${business.rating} out of 5 stars`}>
              {'★'.repeat(Math.round(business.rating))}{'☆'.repeat(5 - Math.round(business.rating))}
            </span>
            <span className="hero-rating-text">
              {business.rating.toFixed(1)} · {business.reviewCount}+ reviews
            </span>
          </div>
        )}
        <div className="hero-trust-row">
          {trustBadges.map(label => (
            <span key={label} className="hero-trust-badge">
              <span className="hero-trust-check" aria-hidden>✓</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
