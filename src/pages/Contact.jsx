import React, { useState } from "react";
import PageHero from "../components/shared/PageHero";
import { Search, Handshake, ShoppingBag, HelpCircle, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const contactTypes = [
  { icon: Search, title: "Sourcing Requests", desc: "Looking to source U.S. products for your business.", value: "sourcing" },
  { icon: Handshake, title: "Supplier Partnerships", desc: "U.S. suppliers interested in working with us.", value: "supplier_partnership" },
  { icon: ShoppingBag, title: "Wholesale Opportunities", desc: "Wholesale buyers interested in Sri Lankan products.", value: "wholesale" },
  { icon: HelpCircle, title: "General Inquiries", desc: "Questions about our services or process.", value: "general" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry_type: "general",
    message: "",
  });

  const [submitting] = useState(false);
  const [submitted] = useState(false);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.error("Online submissions are not connected yet. Your information has not been sent. Please try again after the website owner connects a contact destination.");
  };

  return (
    <>
      <PageHero
        headline="Contact Our Trade Coordination Team"
        subheadline="Whether you're a buyer, supplier, or partner — we'd like to hear from you."
        compact
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactTypes.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => update("inquiry_type", item.value)}
                className={`rounded-xl border bg-card p-5 text-left transition-all ${
                  form.inquiry_type === item.value
                    ? "border-accent shadow-md"
                    : "border-border hover:border-accent/30"
                }`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </button>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">Message Received</h3>
                  <p className="text-muted-foreground">
                    This static version saved the message locally. Connect Formspree, Firebase, or another endpoint before production launch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Name *</span>
                      <input className="w-full rounded-md border border-input bg-background px-3 py-2" value={form.name} onChange={(e) => update("name", e.target.value)} />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium">Company</span>
                      <input className="w-full rounded-md border border-input bg-background px-3 py-2" value={form.company} onChange={(e) => update("company", e.target.value)} />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium">Email *</span>
                      <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2" value={form.email} onChange={(e) => update("email", e.target.value)} />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium">Phone</span>
                      <input className="w-full rounded-md border border-input bg-background px-3 py-2" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                    </label>
                  </div>

                  <label className="space-y-2 block">
                    <span className="text-sm font-medium">Inquiry Type</span>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2" value={form.inquiry_type} onChange={(e) => update("inquiry_type", e.target.value)}>
                      <option value="sourcing">Sourcing Request</option>
                      <option value="supplier_partnership">Supplier Partnership</option>
                      <option value="wholesale">Wholesale Opportunity</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </label>

                  <label className="space-y-2 block">
                    <span className="text-sm font-medium">Message *</span>
                    <textarea className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2" value={form.message} onChange={(e) => update("message", e.target.value)} />
                  </label>

                  <button type="submit" disabled={submitting} className="flex h-12 w-full items-center justify-center rounded-md bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                    {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
                <h3 className="mb-4 text-xl font-bold">Location</h3>
                <div className="mb-6 flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">Houston, Texas</p>
                    <p className="mt-1 text-sm text-primary-foreground/60">
                      Serving U.S. ↔ Sri Lanka trade relationships
                    </p>
                  </div>
                </div>
                <p className="border-t border-white/10 pt-6 text-sm leading-relaxed text-primary-foreground/60">
                  Our Houston-based team coordinates sourcing, supplier communication, and export logistics support for the U.S.–Sri Lanka trade lane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}