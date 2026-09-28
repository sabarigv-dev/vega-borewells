import { createFileRoute, Link } from "@tanstack/react-router";

import geologyImg from "@/assets/geology-section.jpg";
import { PageHero, PlaceholderNote } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";
import { brand, credentials } from "@/lib/vega-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vega Borewells — Groundwater engineering since 1985" },
      {
        name: "description",
        content:
          "Vega Borewells: company story, field experience, approach and credentials in groundwater exploration and borewell drilling since 1985.",
      },
      { property: "og:title", content: "About Vega Borewells" },
      {
        property: "og:description",
        content: "Company story, field experience, approach and credentials since 1985.",
      },
    ],
  }),
  component: About,
});

const principles = [
  {
    title: "Precision",
    body: "The method follows the formation. Bit, air and feed are matched to what the ground actually is, not to what is quickest.",
  },
  {
    title: "Reliability",
    body: "A well is judged years after handover. Casing, sealing and development are executed for that horizon.",
  },
  {
    title: "Field Experience",
    body: "Decades of drilling across varied terrain inform how each site is read before work begins.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Vega"
        title="Engineered by experience."
        lede="A groundwater and borewell drilling company working in the field since 1985."
        image={geologyImg}
        alt="Geological strata from topsoil down to the aquifer"
      />

      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-earth">Company story</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              Vega Borewells was established in {brand.established} and has worked in
              groundwater exploration and borewell drilling since. The company&rsquo;s work
              spans hard-rock terrain, unstable overburden and deep-aquifer conditions, using
              the drilling method each formation demands.
            </p>
            <div className="mt-8">
              <PlaceholderNote>
                Full company history, ownership and evolution to be added from the company
                documents.
              </PlaceholderNote>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y on-dark">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">Experience</p>
            <h2 className="display-lg mt-5">A timeline built on record.</h2>
          </Reveal>
          <ol className="mt-14 border-t border-hairline-light">
            <Reveal as="li">
              <div className="grid gap-4 border-b border-hairline-light py-8 md:grid-cols-[10rem_minmax(0,1fr)]">
                <span className="display-md text-leaf">1985</span>
                <p className="text-bone/70">Vega Borewells established.</p>
              </div>
            </Reveal>
            <Reveal as="li" delay={80}>
              <div className="grid gap-4 border-b border-hairline-light py-8 md:grid-cols-[10rem_minmax(0,1fr)]">
                <span className="eyebrow pt-2 text-bone/40">Milestones</span>
                <p className="text-bone/55">
                  Further milestones are published only when supported by the company
                  documents.
                </p>
              </div>
            </Reveal>
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-earth">Our approach</p>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="bg-background p-8 md:p-10">
                <h3 className="display-md">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border bg-secondary">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-earth">Certifications &amp; credentials</p>
            <h2 className="display-lg mt-5">Trust, documented.</h2>
            <p className="lede mt-6 text-muted-foreground">
              The categories below reflect the credential types held. Each certificate is
              published here once the original document is supplied and verified — nothing is
              shown before then.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 40} className="bg-background p-8">
                <p className="display-md text-[1.05rem] leading-snug">{c}</p>
                <p className="eyebrow mt-4 text-muted-foreground">Document pending</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-earth">Quality &amp; safety</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede text-muted-foreground">
              Drilling is executed with site discipline: controlled rig setup, managed spoil
              and dust, protected casing and sealing, and verification of yield before
              handover. Site-specific safety procedures and quality records are maintained per
              project.
            </p>
            <div className="mt-8">
              <PlaceholderNote>
                Formal quality and safety policy text to be supplied by the company.
              </PlaceholderNote>
            </div>
            <Link to="/contact" className="btn-base btn-outline-light mt-10">
              Request a site survey
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
