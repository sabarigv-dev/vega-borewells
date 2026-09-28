import { createFileRoute, Link } from "@tanstack/react-router";

import waterImg from "@/assets/water-strike.jpg";
import heroImg from "@/assets/hero-drilling.jpg";
import { PageHero, PlaceholderNote } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";
import { projectRegions } from "@/lib/vega-content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Documented borewell work | Vega Borewells" },
      {
        name: "description",
        content:
          "Documented Vega Borewells project work across Tamil Nadu, Odisha, Uttarakhand and Arunachal Pradesh.",
      },
      { property: "og:title", content: "Projects — Vega Borewells" },
      {
        property: "og:description",
        content: "Documented borewell work across four states.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proven in the field."
        lede="Documented work across four states. Every record below is published only from verified company documentation."
        image={waterImg}
        alt="Water flowing from a commissioned borewell"
      />

      <section className="section-y">
        <div className="shell">
          <Reveal>
            <PlaceholderNote>
              Project records are awaiting the company documents. Location, type, scope,
              quantity, depth, technology and completion details will be filled in per
              project — no figures are shown until they are verified.
            </PlaceholderNote>
          </Reveal>

          <div className="mt-16 space-y-20">
            {projectRegions.map((region, ri) => (
              <div key={region.region}>
                <Reveal>
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-5">
                    <h2 className="display-lg">{region.region}</h2>
                    <span className="eyebrow text-muted-foreground">
                      Region {String(ri + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start lg:gap-16">
                  <Reveal delay={80} className="media-zoom">
                    <img
                      src={ri % 2 === 0 ? heroImg : waterImg}
                      alt={`Field work in ${region.region}`}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover"
                    />
                  </Reveal>

                  <Reveal delay={150}>
                    {region.projects.map((p) => (
                      <dl
                        key={p.name + p.location}
                        className="grid gap-px bg-border sm:grid-cols-2"
                      >
                        {[
                          ["Location", p.location],
                          ["Project type", p.type],
                          ["Scope", p.scope],
                          ["Quantity", p.quantity],
                          ["Depth", p.depth],
                          ["Technology", p.technology],
                          ["Completion", p.completion],
                        ].map(([k, v]) => (
                          <div key={k} className="bg-background p-6">
                            <dt className="eyebrow text-muted-foreground">{k}</dt>
                            <dd className="mt-3 text-sm">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    ))}
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark section-y">
        <div className="shell text-center">
          <Reveal>
            <h2 className="display-lg">Let&rsquo;s find your water.</h2>
            <Link to="/contact" className="btn-base btn-solid mt-9">
              Request a site survey
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
