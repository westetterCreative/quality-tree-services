import { useState } from 'react';
import { ui } from '../data/content';

type FaqItem = { question: string; answer: string };

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: FaqItem[] = Array.isArray(ui.faqItems) ? ui.faqItems : [];
  if (items.length === 0) return null;

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section className="faq section" id="faq" data-fade>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Answers to the questions we hear most often.
        </p>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={'faq-item' + (openIndex === i ? ' faq-item--open' : '')}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer" role="region">
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
