import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logo from "@/assets/vega-logo.png.asset.json";
import { brand, nav } from "@/lib/vega-content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled || open
          ? "border-b border-hairline-light bg-forest/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Link to="/" className="flex min-w-0 items-baseline gap-2" aria-label={brand.name}>
          <span className="font-display text-lg leading-none font-extrabold tracking-[-0.03em] text-bone uppercase md:text-xl">
            Vega
          </span>
          <span className="font-display text-lg leading-none font-medium tracking-[0.12em] text-leaf uppercase md:text-xl">
            Borewells
          </span>
        </Link>


        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow link-underline text-bone/75 transition-colors hover:text-bone"
              activeProps={{ className: "text-bone" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-base btn-solid !min-h-10 !px-5">
            Request a site survey
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-bone transition-transform duration-400 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-bone transition-transform duration-400 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-forest transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="shell flex flex-col gap-1 pt-4 pb-10">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="display-md border-b border-hairline-light py-4 text-bone/85"
              activeProps={{ className: "text-leaf" }}
              activeOptions={{ exact: item.to === "/" }}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-base btn-solid mt-6 w-full">
            Request a site survey
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="on-dark">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <img
            src={logo.url}
            alt={`${brand.name} logo`}
            width={440}
            height={293}
            loading="lazy"
            className="h-24 w-auto bg-bone p-3"
          />

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/65">
            Groundwater exploration and borewell engineering since {brand.established}.
          </p>
        </div>

        <div>
          <p className="eyebrow text-leaf">Navigate</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-underline text-sm text-bone/75 hover:text-bone"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-leaf">Contact</p>
          <p className="mt-5 text-sm leading-relaxed text-bone/65">
            Office address, phone, WhatsApp and email are awaiting confirmation from the
            company.
          </p>
          <Link to="/contact" className="btn-base btn-outline-dark mt-6">
            Request a site survey
          </Link>
        </div>
      </div>

      <div className="border-t border-hairline-light">
        <div className="shell flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-bone/50">
            {brand.name} — {brand.tagline}
          </p>
          <p className="eyebrow text-bone/40">
            © {new Date().getFullYear()} {brand.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-charcoal pt-32 pb-14 md:min-h-[72vh] md:pt-40 md:pb-20">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
      <div className="shell">
        <p className="eyebrow text-leaf">{eyebrow}</p>
        <h1 className="display-xl mt-5 max-w-5xl text-bone">{title}</h1>
        <p className="lede mt-6 text-bone/70">{lede}</p>
      </div>
    </section>
  );
}

export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow border-l-2 border-earth pl-4 text-muted-foreground">{children}</p>
  );
}
