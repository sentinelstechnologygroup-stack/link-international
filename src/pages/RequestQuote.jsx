import React, { useState } from "react";
import PageHero from "../components/shared/PageHero";
import { CheckCircle, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product_description: "",
  estimated_quantity: "",
  destination: "",
  timeline: "",
  notes: "",
  file_name: "",
};

export default function RequestQuote() {
  const [form, setForm] = useState(initialForm);
  const [submitting] = useState(false);
  const [submitted] = useState(false);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    update("file_name", file.name);
    toast.info("File selected. Production upload endpoint still needs to be connected.");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.product_description) {
      toast.error("Please fill in your name, email, and product description.");
      return;
    }

    toast.error("Online submissions are not connected yet. Your information has not been sent. Please try again after the website owner connects a contact destination.");
  };

  return (
    <>
      <PageHero
        headline="Request a Sourcing Quote"
        subheadline="Tell us what product you need, where it is going, and what support you are looking for."
        compact
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>

              <h2 className="mb-3 text-3xl font-bold text-foreground">
                Quote Request Received
              </h2>

              <p className="mx-auto max-w-2xl text-muted-foreground">
                This static version saved the request locally in your browser.
                Before production launch, connect this form to Formspree,
                Firebase, Supabase, or another approved backend endpoint.
              </p>

              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setSubmitted(false);
                }}
                className="mt-8 inline-flex rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Name *
                  </span>
                  <input
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Company
                  </span>
                  <input
                    value={form.company}
                    onChange={(event) => update("company", event.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Email *
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Phone
                  </span>
                  <input
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Estimated Quantity
                  </span>
                  <input
                    value={form.estimated_quantity}
                    onChange={(event) =>
                      update("estimated_quantity", event.target.value)
                    }
                    placeholder="Example: 500 units, 2 pallets, 1 container"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Destination
                  </span>
                  <input
                    value={form.destination}
                    onChange={(event) =>
                      update("destination", event.target.value)
                    }
                    placeholder="Example: Colombo, Sri Lanka"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-medium text-foreground">
                    Timeline
                  </span>
                  <input
                    value={form.timeline}
                    onChange={(event) => update("timeline", event.target.value)}
                    placeholder="Example: ASAP, 30 days, next quarter"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-medium text-foreground">
                    Product Description *
                  </span>
                  <textarea
                    value={form.product_description}
                    onChange={(event) =>
                      update("product_description", event.target.value)
                    }
                    placeholder="Describe the product, brand/specs, quantity, packaging, and any known requirements."
                    className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-medium text-foreground">
                    Additional Notes
                  </span>
                  <textarea
                    value={form.notes}
                    onChange={(event) => update("notes", event.target.value)}
                    className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-foreground">
                    Optional File
                  </span>

                  <div className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-border bg-background px-6 py-8 text-center hover:bg-muted/40">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <div>
                      <Upload className="mx-auto mb-3 h-6 w-6 text-muted-foreground" />
                      <p className="text-sm font-medium text-foreground">
                        {form.file_name || "Click to select a file"}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Static build only records the file name.
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 flex h-12 w-full items-center justify-center rounded-md bg-accent font-semibold text-accent-foreground transition hover:bg-accent/90 disabled:opacity-70"
              >
                {submitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Submit Quote Request"
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}