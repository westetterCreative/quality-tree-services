import { ui } from '../data/content';

export default function TrustBar() {
  return (
    <section className="trust-bar" id="trust" aria-label="Trust highlights">
      <div className="container trust-bar-inner">
        <p className="trust-bar-title">{ui.trustBarTitle}</p>
        <ul className="trust-chips">
          {ui.trustChips.map(label => (
            <li className="trust-chip" key={label}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
