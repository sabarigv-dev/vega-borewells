import { createFileRoute, Link } from "@tanstack/react-router";

import dthImg from "@/assets/technology-dth.jpg";
import geologyImg from "@/assets/geology-section.jpg";
import { PageHero, PlaceholderNote } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";
import { technologies } from "@/lib/vega-content";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — DTH, ODEX & rig drilling systems | Vega Borewells" },
      {
        name: "description",
        content:
          "Drilling technology at Vega Borewells: DTH, ODEX, rig drilling, hard-rock systems, casing and production-well construction.",
      },
      { property: "og:title", content: "Technology — Vega Borewells" },
      {
        property: "og:description",
        content: "DTH, ODEX, rig drilling, casing and production-well systems.",
      },
    ],
  }),
  component: Technology,
});

const strata = [
  { label: "Topsoil", depth: "Surface" },
  { label: "Clay / overburden", depth: "Unstable zone" },
  { label: "Weathered rock", depth: "Transition" },
  { label: "Hard rock", depth: "Load-bearing" },
  { label: "Aquifer", depth: "Water-bearing" },
];

function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Precision below the surface."
        lede="Drilling systems chosen for what the ground is, executed with control from the first metre to the last."
        image={dthImg}
        alt="DTH hammer bit and drill rods"
      />

      <section className="section-y">
        <div className="shell grid gap-px bg-border md:grid-cols-2">
          {technologies.map((t, i) => (
            <Reveal key={t.title} delay={i * 70} className="bg-background p-8 md:p-12">
              <span className="eyebrow text-earth">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="display-md mt-5">{t.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              <p className="eyebrow mt-8 text-muted-foreground">
                Specifications pending documentation
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-32">
        <img
          src={geologyImg}
          alt="Geological strata cross-section"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/75 to-transparent" />
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">Formation</p>
            <h2 className="display-lg mt-5 max-w-2xl text-bone">
              Reading the ground before drilling it.
            </h2>
          </Reveal>
          <ul className="mt-12 max-w-2xl border-t border-hairline-light">
            {strata.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 80}>
                <div className="flex items-baseline justify-between gap-6 border-b border-hairline-light py-5">
                  <span className="display-md text-[1.1rem] text-bone">{s.label}</span>
                  <span className="eyebrow text-bone/45">{s.depth}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <Reveal>
            <PlaceholderNote>
              Machinery models, rig capacities and depth ratings will be published once the
              company equipment documentation is supplied.
            </PlaceholderNote>
          </Reveal>
          <Reveal delay={90}>
            <Link to="/contact" className="btn-base btn-outline-light mt-10">
              Request a site survey
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
