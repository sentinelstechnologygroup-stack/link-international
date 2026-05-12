import { useState } from 'react';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  productInterest: '',
  originCountry: '',
  destinationCountry: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          Contact
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Request sourcing or trade facilitation support.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Tell us what product, buyer, seller, or shipping coordination support you need. LITC helps buyers and sellers connect across international markets and coordinate with qualified third-party providers where needed.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="productInterest" placeholder="Product or service interest" value={form.productInterest} onChange={handleChange} />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="originCountry" placeholder="Origin country" value={form.originCountry} onChange={handleChange} />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="destinationCountry" placeholder="Destination country" value={form.destinationCountry} onChange={handleChange} />
          <textarea className="min-h-36 rounded-xl border border-slate-300 px-4 py-3 md:col-span-2" name="message" placeholder="Message" value={form.message} onChange={handleChange} required />

          <button className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 md:w-fit" type="submit">
            Submit Inquiry
          </button>

          {submitted && (
            <p className="text-sm font-medium text-emerald-700 md:col-span-2">
              Thank you. Your inquiry has been received. Our team will review the details and follow up regarding sourcing, trade support, or logistics coordination needs.
            </p>
          )}
        </form>

        <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-500">
          Link International Trading Company provides sourcing support, buyer-seller connection support, trade coordination, and commercial facilitation services. LITC is not the buyer, seller, manufacturer, shipper, carrier, freight forwarder, customs broker, importer of record, or exporter of record unless expressly agreed in writing. Shipping, customs, insurance, legal, tax, and regulatory services may require qualified third-party providers.
        </p>
      </section>
    </main>
  );
}
