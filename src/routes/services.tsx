import { createFileRoute, Link } from "@tanstack/react-router";

import dthImg from "@/assets/technology-dth.jpg";
import heroImg from "@/assets/hero-drilling.jpg";
import waterImg from "@/assets/water-strike.jpg";
import geologyImg from "@/assets/geology-section.jpg";
import { PageHero } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";
import { PLACEHOLDER, services } from "@/lib/vega-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Borewell, DTH, ODEX & Hard-Rock Drilling | Vega Borewells" },
      {
        name: "description",
        content:
          "Borewell drilling, DTH, ODEX, hard-rock drilling, tube-well construction, production wells and deep drilling by Vega Borewells.",
      },
      { property: "og:title", content: "Services — Vega Borewells" },
      {
        property: "og:description",
        content:
          "Borewell, DTH, ODEX, hard-rock, tube-well, production well and deep drilling services.",
      },
    ],
  }),
  component: Services,
});

const imagery = [heroImg, dthImg, geologyImg, waterImg];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Groundwater, engineered."
        lede="Each service is defined by the formation it is built for — and executed with the method that formation demands."
        image={heroImg}
        alt="Drilling rig at work in the field"
      />

      <div className="section-y">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={s.slug}
              className={`border-t border-border py-14 md:py-20 ${i === 0 ? "border-t-0" : ""}`}
            >
              <div className="shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <span className="eyebrow text-earth">
                    {String(i + 1).padStart(2, "0")} / Service
                  </span>
                  <h2 className="display-lg mt-5">{s.title}</h2>
                  <p className="lede mt-6 text-muted-foreground">{s.summary}</p>

                  <dl className="mt-9 grid gap-px border border-border bg-border sm:grid-cols-2">
                    <div className="bg-background p-6">
                      <dt className="eyebrow text-muted-foreground">Application</dt>
                      <dd className="mt-3 text-sm leading-relaxed">{s.application}</dd>
                    </div>
                    <div className="bg-background p-6">
                      <dt className="eyebrow text-muted-foreground">Method / equipment</dt>
                      <dd
                        className={`mt-3 text-sm leading-relaxed ${
                          s.method === PLACEHOLDER ? "text-muted-foreground italic" : ""
                        }`}
                      >
                        {s.method === PLACEHOLDER
                          ? "Equipment details pending company documentation"
                          : s.method}
                      </dd>
                    </div>
                  </dl>
                </Reveal>

                <Reveal
                  delay={120}
                  className={`media-zoom ${flip ? "lg:order-1" : ""}`}
                >
                  <img
                    src={imagery[i % imagery.length]}
                    alt={`${s.title} — field imagery`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover lg:aspect-3/4"
                  />
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <section className="on-dark section-y">
        <div className="shell text-center">
          <Reveal>
            <h2 className="display-lg">Not sure which method your site needs?</h2>
            <p className="lede mx-auto mt-6 text-bone/70">
              A site survey settles it before any drilling begins.
            </p>
            <Link to="/contact" className="btn-base btn-solid mt-10">
              Request a site survey
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
