/**
 * Single source of truth for Vega Borewells site content.
 *
 * PLACEHOLDER POLICY: nothing here may be invented. Any value that has not
 * been supplied by the company is marked with `PLACEHOLDER` so it is obvious
 * on screen and easy to replace.
 */

export const PLACEHOLDER = "To be confirmed" as const;

export const brand = {
  name: "Vega Borewells",
  tagline: "Where Every Drop Begins.",
  concept: "Engineered Nature",
  established: 1985,
};

export const stats = [
  { value: 1985, suffix: "", label: "Established", verified: true },
  { value: 670, suffix: "+", label: "Documented borewell works", verified: true },
  { value: 4, suffix: "", label: "States with documented work", verified: true },
];

export const services = [
  {
    slug: "borewell-drilling",
    title: "Borewell Drilling",
    summary:
      "End-to-end borewell execution from site assessment through drilling, casing and commissioning.",
    application: "Agricultural, domestic, institutional and industrial water supply.",
    method: PLACEHOLDER,
  },
  {
    slug: "dth-drilling",
    title: "DTH Drilling",
    summary:
      "Down-the-hole hammer drilling, where percussive energy is delivered directly at the bit face for consistent penetration.",
    application: "Consolidated formations and rock strata.",
    method: PLACEHOLDER,
  },
  {
    slug: "odex-drilling",
    title: "ODEX Drilling",
    summary:
      "Simultaneous drilling and casing advancement for unstable overburden, keeping the bore open as it is formed.",
    application: "Loose soil, sand and collapsing overburden zones.",
    method: PLACEHOLDER,
  },
  {
    slug: "hard-rock-drilling",
    title: "Hard-Rock Drilling",
    summary:
      "Drilling through granite and other hard crystalline formations with controlled rate of penetration.",
    application: "Hard-rock terrain typical of peninsular India.",
    method: PLACEHOLDER,
  },
  {
    slug: "tube-well-construction",
    title: "Tube-Well Construction",
    summary:
      "Construction of cased tube wells with screen and gravel pack arrangement suited to the formation encountered.",
    application: "Alluvial and sedimentary formations.",
    method: PLACEHOLDER,
  },
  {
    slug: "production-wells",
    title: "Production Wells",
    summary:
      "High-yield wells engineered for sustained extraction and long-term operational reliability.",
    application: "Water supply schemes, industry and large-scale irrigation.",
    method: PLACEHOLDER,
  },
  {
    slug: "deep-drilling",
    title: "Deep / Extra-Deep Drilling",
    summary:
      "Deep-bore execution where shallow aquifers are exhausted or absent, carried out with depth-rated equipment.",
    application: "Water-scarce and deep-aquifer regions.",
    method: PLACEHOLDER,
  },
];

export const process = [
  { step: "01", title: "Survey", note: "Site assessment and groundwater prospect study." },
  { step: "02", title: "Analysis", note: "Formation interpretation and drilling method selection." },
  { step: "03", title: "Drilling", note: "Execution with the method suited to the strata." },
  { step: "04", title: "Casing", note: "Casing and sealing to protect the bore and the aquifer." },
  { step: "05", title: "Testing", note: "Yield observation and verification before handover." },
  { step: "06", title: "Water", note: "Commissioned well, documented and handed over." },
];

export const technologies = [
  {
    title: "DTH Drilling",
    body: "Down-the-hole hammer systems deliver percussive energy at the bit, maintaining penetration rate in consolidated rock.",
    detail: PLACEHOLDER,
  },
  {
    title: "ODEX Drilling",
    body: "An eccentric reamer advances casing with the bit, stabilising unstable overburden during drilling.",
    detail: PLACEHOLDER,
  },
  {
    title: "Rig Drilling",
    body: "Truck-mounted rotary rigs configured for field mobility across varied terrain.",
    detail: PLACEHOLDER,
  },
  {
    title: "Hard-Rock Drilling",
    body: "Bit selection, air pressure and feed control tuned to hard crystalline formations.",
    detail: PLACEHOLDER,
  },
  {
    title: "Casing Systems",
    body: "Casing installed to isolate unstable zones and protect water quality over the life of the well.",
    detail: PLACEHOLDER,
  },
  {
    title: "Tube-Well & Production Well Systems",
    body: "Screen, gravel pack and development practice matched to the formation for sustained yield.",
    detail: PLACEHOLDER,
  },
];

export type Project = {
  name: string;
  location: string;
  type: string;
  scope: string;
  quantity: string;
  depth: string;
  technology: string;
  completion: string;
};

/**
 * Regions are documented. Individual project records are awaiting the company
 * documents — every field below is an explicit placeholder.
 */
export const projectRegions: { region: string; projects: Project[] }[] = [
  {
    region: "Tamil Nadu",
    projects: [
      {
        name: "Project record pending",
        location: "Tamil Nadu",
        type: PLACEHOLDER,
        scope: PLACEHOLDER,
        quantity: PLACEHOLDER,
        depth: PLACEHOLDER,
        technology: PLACEHOLDER,
        completion: PLACEHOLDER,
      },
    ],
  },
  {
    region: "Odisha",
    projects: [
      {
        name: "Project record pending",
        location: "Odisha",
        type: PLACEHOLDER,
        scope: PLACEHOLDER,
        quantity: PLACEHOLDER,
        depth: PLACEHOLDER,
        technology: PLACEHOLDER,
        completion: PLACEHOLDER,
      },
    ],
  },
  {
    region: "Uttarakhand",
    projects: [
      {
        name: "Project record pending",
        location: "Uttarakhand",
        type: PLACEHOLDER,
        scope: PLACEHOLDER,
        quantity: PLACEHOLDER,
        depth: PLACEHOLDER,
        technology: PLACEHOLDER,
        completion: PLACEHOLDER,
      },
    ],
  },
  {
    region: "Arunachal Pradesh",
    projects: [
      {
        name: "Project record pending",
        location: "Arunachal Pradesh",
        type: PLACEHOLDER,
        scope: PLACEHOLDER,
        quantity: PLACEHOLDER,
        depth: PLACEHOLDER,
        technology: PLACEHOLDER,
        completion: PLACEHOLDER,
      },
    ],
  },
];

/** Credential categories only. No certificate is shown until supplied. */
export const credentials = [
  "Firm registration",
  "Small Scale Industrial Unit registration",
  "TWAD-related credentials",
  "Contractor registrations",
  "Government enlistments",
  "Performance certificates",
  "Work completion certificates",
];

export const contact = {
  office: PLACEHOLDER,
  phone: PLACEHOLDER,
  whatsapp: PLACEHOLDER,
  email: PLACEHOLDER,
  hours: PLACEHOLDER,
  maps: PLACEHOLDER,
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/technology", label: "Technology" },
  { to: "/contact", label: "Contact" },
] as const;
