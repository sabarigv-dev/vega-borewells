import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import waterImg from "@/assets/water-strike.jpg";
import { PageHero, PlaceholderNote } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request a site survey | Vega Borewells" },
      {
        name: "description",
        content:
          "Request a borewell site survey from Vega Borewells. Share your location and requirement and the team will respond.",
      },
      { property: "og:title", content: "Contact — Vega Borewells" },
      {
        property: "og:description",
        content: "Request a site survey for groundwater exploration and borewell drilling.",
      },
    ],
  }),
  component: Contact,
});

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company / organisation", type: "text", required: false },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "location", label: "Location", type: "text", required: true },
  { name: "requirement", label: "Requirement", type: "text", required: true },
];

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find your water."
        lede="Start your groundwater exploration with Vega Borewells."
        image={waterImg}
        alt="Water flowing from a borewell"
      />

      <section className="section-y">
        <div className="shell grid gap-16 lg:grid-cols-[1.1fr_0.75fr] lg:gap-24">
          <Reveal>
            <h2 className="display-md">Request a site survey</h2>

            {sent ? (
              <div className="mt-10 border border-border bg-secondary p-8">
                <p className="display-md text-[1.15rem]">Enquiry ready to send.</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  This form is not yet connected to an inbox — once the company email address
                  is confirmed, submissions will be delivered there automatically.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-10 grid gap-px bg-border sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.name} className="bg-background p-5">
                    <label
                      htmlFor={f.name}
                      className="eyebrow block text-muted-foreground"
                    >
                      {f.label}
                      {f.required ? " *" : ""}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      className="mt-3 w-full border-b border-input bg-transparent pb-2 text-base outline-none transition-colors focus:border-leaf"
                    />
                  </div>
                ))}
                <div className="bg-background p-5 sm:col-span-2">
                  <label htmlFor="message" className="eyebrow block text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-3 w-full resize-y border-b border-input bg-transparent pb-2 text-base outline-none transition-colors focus:border-leaf"
                  />
                </div>
                <div className="bg-background p-5 sm:col-span-2">
                  <button type="submit" className="btn-base btn-outline-light w-full sm:w-auto">
                    Submit enquiry
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <h2 className="display-md">Reach us</h2>
            <dl className="mt-8 border-t border-border">
              {[
                "Office location",
                "Phone",
                "WhatsApp",
                "Email",
                "Google Maps",
                "Working hours",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-5"
                >
                  <dt className="eyebrow text-muted-foreground">{label}</dt>
                  <dd className="text-sm text-muted-foreground italic">To be confirmed</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <PlaceholderNote>
                Send us the office address, phone, WhatsApp number, email and working hours
                and they will be published here.
              </PlaceholderNote>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
