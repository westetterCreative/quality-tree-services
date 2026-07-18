import { useState } from 'react';
import { content } from '../data/content';

type FieldErrors = Record<string, string>;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (form: HTMLFormElement): boolean => {
    const next: FieldErrors = {};
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const details = (form.elements.namedItem('details') as HTMLTextAreaElement).value.trim();

    if (name.length < 2) next.name = 'Please enter your name.';
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) next.phone = 'Enter a valid phone number (at least 10 digits).';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
    if (!service) next.service = content.quoteFormServiceRequiredError;
    if (details.length > 0 && details.length < 8) next.details = 'Add a bit more detail (or leave blank).';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const bot = (form.elements.namedItem('bot-field') as HTMLInputElement)?.value;
    if (bot) return;

    if (!validate(form)) {
      form.querySelector('.invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const data = new URLSearchParams();
    new FormData(form).forEach((v, k) => data.append(k, v as string));

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (!res.ok) throw new Error('Network error');
      setSubmitted(true);
      form.reset();
    } catch {
      alert('Something went wrong submitting the form. Please call us directly.');
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Message received</h3>
        <p>Thanks for reaching out—we will follow up within one business day.</p>
      </div>
    );
  }

  return (
    <form
      className="quote-form"
      name="quote-request"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="quote-request" />

      <p className="honeypot" aria-hidden="true">
        <label>
          Do not fill: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="qf-name">Full name *</label>
          <input
            type="text"
            id="qf-name"
            name="name"
            required
            minLength={2}
            autoComplete="name"
            className={errors.name ? 'invalid' : ''}
            placeholder="Your name"
          />
          {errors.name ? <span className="field-error">{errors.name}</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="qf-phone">Phone *</label>
          <input
            type="tel"
            id="qf-phone"
            name="phone"
            required
            autoComplete="tel"
            className={errors.phone ? 'invalid' : ''}
            placeholder="(555) 555-5555"
          />
          {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="qf-email">Email</label>
        <input
          type="email"
          id="qf-email"
          name="email"
          autoComplete="email"
          className={errors.email ? 'invalid' : ''}
          placeholder="you@email.com"
        />
        {errors.email ? <span className="field-error">{errors.email}</span> : null}
      </div>

      <div className="form-group">
        <label htmlFor="qf-service">{content.quoteFormSelectLabel} *</label>
        <select
          id="qf-service"
          name="service"
          required
          defaultValue=""
          className={errors.service ? 'invalid' : ''}
        >
          <option value="" disabled>
            {content.quoteFormSelectPlaceholder}
          </option>
          {content.quoteFormServices.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service ? <span className="field-error">{errors.service}</span> : null}
      </div>

      <div className="form-group">
        <label htmlFor="qf-details">{content.quoteFormDetailsLabel}</label>
        <textarea
          id="qf-details"
          name="details"
          rows={4}
          className={errors.details ? 'invalid' : ''}
          placeholder={content.quoteFormDetailsPlaceholder}
        />
        {errors.details ? <span className="field-error">{errors.details}</span> : null}
      </div>

      <div className="form-group">
        <span id="contact-method-label">Preferred contact method *</span>
        <div className="radio-group" role="radiogroup" aria-labelledby="contact-method-label">
          {['Phone', 'Text', 'Email'].map(method => (
            <label key={method} className="radio-label">
              <input type="radio" name="contact_method" value={method} defaultChecked={method === 'Phone'} required />
              {method}
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-full">
        {content.quoteFormSubmitLabel}
      </button>
    </form>
  );
}
