import { ui } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why-us" data-fade>
      <div className="container">
        <div className="why-layout">
          <div className="why-headline-col">
            <p className="why-eyebrow">Why choose us</p>
            <h2 className="why-main-heading">{ui.whyHeading}</h2>
            <p className="why-main-body">{ui.whySub}</p>
          </div>
          <ul className="why-features">
            {ui.whyPoints.map((item, i) => (
              <li key={i} className="why-feature">
                <span className="why-feature-num" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="why-feature-title">{item.title}</h3>
                  <p className="why-feature-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
