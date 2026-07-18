import { useState, useEffect } from 'react';
import { business } from '../data/content';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Quote', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneHref = business.phone ? 'tel:' + business.phone.replace(/\D/g, '') : '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'header' + (scrolled ? ' header--scrolled' : '')}>
      <div className="container header-inner">
        <a href="#home" className="header-logo" onClick={() => setOpen(false)}>
          {business.name}
        </a>

        <nav aria-label="Primary">
          <ul className={'header-nav' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
            {NAV.map(item => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {business.phone ? (
          <a href={phoneHref} className="header-cta">
            Call now
          </a>
        ) : null}

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
