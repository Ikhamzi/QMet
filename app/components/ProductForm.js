'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FIELDS = [
  { key: 'overview',              label: 'Overview',                required: true  },
  { key: 'requirements',         label: 'Requirements',            required: false },
  { key: 'implementationGuidance',label: 'Implementation Guidance',required: false },
  { key: 'consultingServices',   label: 'Consulting Services',     required: false },
  { key: 'trainingPrograms',     label: 'Training Programs',       required: false },
  { key: 'templates',            label: 'Templates (Resources)',   required: false },
  { key: 'checklists',           label: 'Checklists',              required: false },
  { key: 'faqs',                 label: 'FAQs',                    required: false },
  { key: 'articles',             label: 'Articles',                required: false },
  { key: 'caseStudies',          label: 'Case Studies',            required: false },
];

const EMPTY = {
  title: '', overview: '', requirements: '', implementationGuidance: '',
  consultingServices: '', trainingPrograms: '', templates: '',
  checklists: '', faqs: '', articles: '', caseStudies: '',
};

export default function ProductForm({ initialData = {}, onSave, mode = 'add' }) {
  const router = useRouter();
  const [form, setForm]     = useState({ ...EMPTY, ...initialData });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const errs = {};
    if (!form.title.trim())    errs.title    = 'Title is required.';
    if (!form.overview.trim()) errs.overview = 'Overview is required.';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSave(form);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit} noValidate>
      <div className={`form-group${errors.title ? ' form-group--error' : ''}`}>
        <label className="form-label" htmlFor="title">
          Title <span className="form-required">*</span>
        </label>
        <input
          id="title" name="title" type="text" className="form-input"
          value={form.title} onChange={handleChange} placeholder="e.g. ISO 27001"
        />
        {errors.title && <p className="form-error">{errors.title}</p>}
      </div>

      {FIELDS.map(({ key, label, required }) => (
        <div key={key} className={`form-group${errors[key] ? ' form-group--error' : ''}`}>
          <label className="form-label" htmlFor={key}>
            {label} {required && <span className="form-required">*</span>}
          </label>
          <textarea
            id={key} name={key} className="form-textarea" rows={4}
            value={form[key]} onChange={handleChange}
            placeholder={`Enter ${label.toLowerCase()}…`}
          />
          {errors[key] && <p className="form-error">{errors[key]}</p>}
        </div>
      ))}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {mode === 'edit' ? 'Save Changes' : 'Save Product'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => router.push('/products')}>
          Cancel
        </button>
      </div>
    </form>
  );
}
