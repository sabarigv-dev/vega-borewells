import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero-drilling.jpg";
import geologyImg from "@/assets/geology-section.jpg";
import dthImg from "@/assets/technology-dth.jpg";
import waterImg from "@/assets/water-strike.jpg";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { brand, credentials, process, services, stats } from "@/lib/vega-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vega Borewells — Where Every Drop Begins" },
      {
        name: "description",
        content:
          "Groundwater exploration and borewell engineering since 1985. Borewell, DTH, ODEX, hard-rock drilling and production wells.",
      },
      { property: "og:title", content: "Vega Borewells — Where Every Drop Begins" },
      {
        property: "og:description",
        content:
          "Groundwater exploration and borewell engineering backed by decades of field experience.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-charcoal pt-32 pb-16 md:pb-24">
        <img
          src={heroImg}
          alt="Vega Borewells drilling rig operating in the field at sunrise"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/35" />
        <div className="absolute inset-0 -z-10 bg-forest/12" />

        <div className="shell">
          <p className="eyebrow text-leaf">
            Established {brand.established} · {brand.concept}
          </p>
          <h1 className="display-xl mt-6 max-w-5xl text-bone">Where every drop begins.</h1>
          <p className="lede mt-7 text-bone/75">
            Groundwater exploration and borewell engineering backed by decades of field
            experience.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-base btn-solid">
              Request a site survey
            </Link>
            <Link to="/services" className="btn-base btn-outline-dark">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="on-dark">
        <div className="shell grid gap-px border-y border-hairline-light sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="py-12 md:py-16">
              <p className="display-lg text-leaf">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="eyebrow mt-4 text-bone/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow text-earth">About Vega</p>
            <h2 className="display-lg mt-5">Engineered by experience. Driven by water.</h2>
            <p className="lede mt-7 text-muted-foreground">
              Vega Borewells has worked in groundwater since {brand.established}, drilling
              across hard rock and unstable overburden alike. Every bore begins with reading
              the ground — then choosing the method the formation demands.
            </p>
            <Link to="/about" className="btn-base btn-outline-light mt-9">
              Discover Vega
            </Link>
          </Reveal>
          <Reveal delay={140} className="media-zoom">
            <img
              src={geologyImg}
              alt="Cross-section of soil, weathered rock and a deep aquifer layer"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-y on-dark">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">Services</p>
            <h2 className="display-lg mt-5 max-w-3xl">Groundwater, engineered.</h2>
          </Reveal>
          <ul className="mt-14 border-t border-hairline-light">
            {services.slice(0, 6).map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60}>
                <Link
                  to="/services"
                  className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 border-b border-hairline-light py-7 transition-colors hover:bg-bone/5 md:grid-cols-[6rem_minmax(0,1fr)_auto] md:gap-8"
                >
                  <span className="eyebrow text-bone/40">0{i + 1}</span>
                  <span className="display-md text-bone transition-transform duration-700 group-hover:translate-x-2">
                    {s.title}
                  </span>
                  <span className="col-span-2 max-w-md text-sm leading-relaxed text-bone/55 md:col-span-1 md:text-right">
                    {s.application}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-earth">Process</p>
            <h2 className="display-lg mt-5">From survey to water.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 70} className="bg-background p-8">
                <span className="eyebrow text-leaf">{p.step}</span>
                <h3 className="display-md mt-5">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-36">
        <img
          src={waterImg}
          alt="Water flowing from a newly commissioned borewell"
          width={1600}
          height={1104}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">Projects</p>
            <h2 className="display-lg mt-5 max-w-2xl text-bone">Proven in the field.</h2>
            <p className="lede mt-6 text-bone/70">
              Documented work across Tamil Nadu, Odisha, Uttarakhand and Arunachal Pradesh.
              Individual project records are published as the company documentation is
              confirmed.
            </p>
            <Link to="/projects" className="btn-base btn-outline-dark mt-9">
              View projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGY PREVIEW */}
      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-20">
          <Reveal className="media-zoom order-2 lg:order-1">
            <img
              src={dthImg}
              alt="DTH hammer bit and steel drill rods on rock"
              width={1408}
              height={1600}
              loading="lazy"
              className="aspect-3/4 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="eyebrow text-earth">Technology</p>
            <h2 className="display-lg mt-5">Precision below the surface.</h2>
            <p className="lede mt-7 text-muted-foreground">
              DTH, ODEX, rotary rigs, casing systems and production-well construction —
              selected for the formation, not for convenience.
            </p>
            <Link to="/technology" className="btn-base btn-outline-light mt-9">
              Explore technology
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section-y border-t border-border bg-secondary">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-earth">Credentials</p>
            <h2 className="display-lg mt-5">Trust, documented.</h2>
            <p className="lede mt-6 text-muted-foreground">
              Registrations and certificates are published only once the originals are
              supplied and verified.
            </p>
          </Reveal>
          <ul className="mt-12 flex flex-wrap gap-3">
            {credentials.slice(0, 5).map((c, i) => (
              <Reveal as="li" key={c} delay={i * 50}>
                <span className="eyebrow inline-block border border-border bg-background px-4 py-3 text-muted-foreground">
                  {c}
                </span>
              </Reveal>
            ))}
          </ul>
          <Link to="/about" className="btn-base btn-outline-light mt-10">
            View credentials
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="on-dark section-y">
        <div className="shell text-center">
          <Reveal>
            <h2 className="display-xl">Let&rsquo;s find your water.</h2>
            <p className="lede mx-auto mt-6 text-bone/70">
              Start your groundwater exploration with Vega Borewells.
            </p>
            <Link to="/contact" className="btn-base btn-solid mt-10">
              Request a site survey
            </Link>
            <p className="eyebrow mt-16 text-bone/45">
              {brand.name} — {brand.tagline}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
