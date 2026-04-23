/* ── Brand Colors ────────────────────────────────────── */

export const colors = {
  primaryGreen: "#1a5b2e",
  secondaryGreen: "#237a3b",
  accentOrange: "#e8712b",
  lightOrange: "#f5a623",
  white: "#ffffff",
  cream: "#f8f6f0",
  darkText: "#1a1a1a",
  subtleGray: "#6b7280",
} as const;

/* ── Navigation items ───────────────────────────────── */

export const navItems = [
  { label: "Our Products", href: "/products", icon: "package" },
  { label: "Habitat™ Trays", href: "/habitat", icon: "tray" },
  { label: "Our Story", href: "/story", icon: "clock" },
  { label: "Why Solora Fresh", href: "/why-solora", icon: "star" },
  { label: "Get in Touch", href: "/contact", icon: "mail" },
] as const;

/* ── Product lines (12 categories) ──────────────────── */

export const productLines = [
  {
    id: "corrugated",
    name: "Corrugated Products",
    description:
      "Durable trays and boxes for transport, storage, and retail display.",
  },
  {
    id: "clamshells",
    name: "Clamshells",
    description:
      "Clear containers that showcase produce freshness with ventilation design.",
  },
  {
    id: "top-seal-films",
    name: "Top Seal Films",
    description:
      "Films that seal to trays for modified atmosphere packaging.",
  },
  {
    id: "tray-liners",
    name: "Tray Liners",
    description: "Liners that protect produce and absorb moisture.",
  },
  {
    id: "labels",
    name: "Labels",
    description: "Custom produce labels for branding and compliance.",
  },
  {
    id: "pouches-bags",
    name: "Flexible Pouches & Bags",
    description: "Stand-up pouches and bags for various produce.",
  },
  {
    id: "corner-boards",
    name: "Corner Boards",
    description: "Edge protectors for palletized shipments.",
  },
  {
    id: "pallet-wrap",
    name: "Pallet Wrap",
    description: "Stretch film for securing pallets during shipping.",
  },
  {
    id: "ppe",
    name: "Personal Protective Equipment",
    description: "Gloves and safety gear for pack-house workers.",
  },
  {
    id: "shrink-films",
    name: "Shrink Films",
    description: "Heat-shrink films for bundling and overwrapping.",
  },
  {
    id: "trays",
    name: "Trays",
    description:
      "Including the proprietary Habitat™ Trays for superior produce protection.",
  },
  {
    id: "overwrap-films",
    name: "Overwrap Films",
    description: "Films for flow-wrap and overwrap applications.",
  },
] as const;

/* ── Habitat™ tray features ─────────────────────────── */

export const habitatFeatures = [
  {
    id: "sealing-flange",
    title: "Full Sealing Flange",
    description:
      "~85% stronger seal than vented interrupted flanges for superior product protection.",
  },
  {
    id: "hideaway-vents",
    title: "HideAwayVents™",
    description:
      "Strategically placed inside the tray — full venting function without compromising product display.",
  },
  {
    id: "smooth-base",
    title: "Smooth Base Edges",
    description:
      "Reduces damage to soft fruit by eliminating ribbed pressure points.",
  },
  {
    id: "ribbed-edge",
    title: "Ribbed Edge Design",
    description:
      "Increases side strength for reliable shipping and stacking.",
  },
  {
    id: "juice-traps",
    title: "Juice Traps",
    description:
      "Separates juices from product for a clean, appetizing display.",
  },
  {
    id: "precision-curves",
    title: "Precision Curves",
    description:
      "Disappear into the sidewall for added strength plus optical clarity.",
  },
] as const;

/* ── Company timeline milestones ────────────────────── */

export const timelineMilestones = [
  {
    year: "1952",
    title: "Founded",
    description: "Karl H. Landsberg Co. founded in Vernon, CA.",
  },
  {
    year: "1960s",
    title: "Nationwide Expansion",
    description: "Expands nationwide and rebrands to Landsberg Packaging.",
  },
  {
    year: "1980s",
    title: "Amcor Partnership",
    description: "Becomes part of Amcor Packaging Distribution.",
  },
  {
    year: "2013",
    title: "Orora Limited",
    description: "Amcor demerges — forms Orora Limited (Australia).",
  },
  {
    year: "2015",
    title: "Landsberg Orora",
    description: "Landsberg becomes Landsberg Orora under OPS.",
  },
  {
    year: "2017",
    title: "Worldwide Plastics",
    description: "Orora acquires Worldwide Plastics (Texas).",
  },
  {
    year: "2018",
    title: "Orora Fresh",
    description:
      "Orora Fresh spins off as specialized produce division.",
  },
  {
    year: "2019",
    title: "Jakait Acquisition",
    description: "Acquires Jakait Inc. assets.",
  },
  {
    year: "2022",
    title: "Veritiv Acquisition",
    description: "Veritiv acquires Orora's North American operations.",
  },
  {
    year: "2024",
    title: "Solora Fresh",
    description:
      "Veritiv Landsberg Fresh division acquired — becomes Solora Fresh.",
  },
] as const;

/* ── Value propositions ─────────────────────────────── */

export const valuePropositions = [
  {
    headline: "From Greenhouse to Grocery",
    body: "End-to-end packaging solutions that protect your produce from harvest to shelf.",
  },
  {
    headline: "Protect Quality. Extend Shelf Life. Showcase Beauty.",
    body: "Engineered packaging that keeps produce fresher longer while looking its best at retail.",
  },
  {
    headline: "Design + Technology + Sustainability",
    body: "Smart, sustainable packaging solutions built on decades of innovation.",
  },
  {
    headline: "Coast to Coast Service",
    body: "Nationwide coverage with local responsiveness. Right product, right time, every time.",
  },
  {
    headline: "Over 70 Years of Expertise",
    body: "Since 1952, we've been the trusted partner for produce packaging across America.",
  },
] as const;

/* ── Services / Capabilities ────────────────────────── */

export const services = [
  {
    title: "Custom Packaging Design",
    description:
      "Design specialists turn concepts into functional packaging.",
  },
  {
    title: "Automation & Equipment",
    description:
      "State-of-the-art equipment to increase productivity.",
  },
  {
    title: "Vendor Managed Inventory",
    description: "Automated inventory replenishment — never run short.",
  },
  {
    title: "Just-In-Time Delivery",
    description: "Right product, right time, every time.",
  },
  {
    title: "Coast-to-Coast Service",
    description: "Nationwide coverage across the US.",
  },
] as const;

/* ── Slideshow slides (placeholders) ────────────────── */

export const slideshowSlides = [
  {
    id: 1,
    gradient: "from-[#1a5b2e] to-[#237a3b]",
    headline: "Fresh Produce Packaging Solutions",
    subline: "From greenhouse to grocery with confidence",
  },
  {
    id: 2,
    gradient: "from-[#e8712b] to-[#f5a623]",
    headline: "Habitat™ Trays",
    subline: "Protect quality. Extend shelf life. Showcase beauty.",
  },
  {
    id: 3,
    gradient: "from-[#237a3b] to-[#f8f6f0]",
    headline: "Design + Technology + Sustainability",
    subline: "Smart packaging built on 70+ years of expertise",
  },
  {
    id: 4,
    gradient: "from-[#1a5b2e] to-[#e8712b]",
    headline: "Coast to Coast Service",
    subline: "Thoughtful design, precise engineering, dependable delivery",
  },
  {
    id: 5,
    gradient: "from-[#6b2142] to-[#e8712b]",
    headline: "Since 1952",
    subline: "Over 70 years of produce packaging expertise",
  },
] as const;

/* ── Inactivity timeout (ms) ────────────────────────── */

export const INACTIVITY_TIMEOUT_MS = 60_000;
export const SLIDESHOW_INTERVAL_MS = 8_000;
