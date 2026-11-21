export interface Project {
  slug: string;
  name: string;
  category: string;
  status: "Active" | "Growing" | "In development";
  accent: string;
  logo?: string;
  markText?: string;
  description: string;
  opportunity: string;
  built: string;
  website?: string;
}

export const projects: Project[] = [
  {
    slug: "metricly",
    name: "Metricly",
    category: "GEO Agency",
    status: "Active",
    accent: "#06d99a",
    logo: "/sites/hamol/media/logos/ranketize.png",
    description:
      "A generative engine optimization agency helping companies become visible in AI-generated answers.",
    opportunity:
      "SEO is fragmenting into AI answers where classic ranking tactics no longer apply.",
    built: "A repeatable AI-SEO playbook, tracking dashboard, and content operations team.",
    website: "https://example.com/metricly",
  },
  {
    slug: "scoutly-ai",
    name: "Scoutly AI",
    category: "GEO SaaS",
    status: "Active",
    accent: "#729dff",
    logo: "/sites/hamol/media/logos/crawlly-ai.png",
    description:
      "A generative engine optimization platform for auditing website readiness for AI discovery.",
    opportunity: "There's no clear way to measure how AI models see and represent a brand.",
    built: "A crawler + LLM evaluation pipeline surfacing entity-level visibility scores.",
    website: "https://example.com/scoutly-ai",
  },
  {
    slug: "loanpath",
    name: "Loanpath",
    category: "Broker Comparison",
    status: "Active",
    accent: "#a790fb",
    logo: "/sites/hamol/media/logos/mojbroker.png",
    description:
      "A comparison site that helps people in Slovakia and the Czech Republic find the right broker.",
    opportunity:
      "Choosing a broker is confusing, with hidden fees and marketing claims that are hard to compare.",
    built: "A transparent comparison site with clear broker profiles, fee breakdowns, and regional filters.",
    website: "https://example.com/loanpath",
  },
  {
    slug: "mindmere-ai",
    name: "Mindmere AI",
    category: "AI Automation",
    status: "Growing",
    accent: "#55dae8",
    logo: "/sites/hamol/media/logos/cleminds-ai.png",
    description:
      "An AI studio building autonomous agents that handle complex knowledge work end to end.",
    opportunity: "Teams spend too much time on repetitive research, analysis, and decision support.",
    built: "A platform of specialized AI agents with memory, planning, and tool use.",
    website: "https://example.com/mindmere-ai",
  },
  {
    slug: "priceloop",
    name: "Priceloop",
    category: "AI Visibility Directory",
    status: "Active",
    accent: "#edbd6d",
    logo: "/sites/hamol/media/logos/comparenow.png",
    description: "A comparison site for AI visibility tools, agencies, and consultants.",
    opportunity:
      "Finding the right AI visibility partner is hard with scattered, biased, and incomplete information.",
    built: "A focused comparison platform for AI visibility services with transparent scoring and clear profiles.",
    website: "https://example.com/priceloop",
  },
  {
    slug: "payorbit",
    name: "Payorbit",
    category: "Payment Comparison",
    status: "In development",
    accent: "#e39cbf",
    markText: "PO",
    description:
      "Work in progress: a payment comparison site for Slovakia and the Czech Republic. Not yet launched.",
    opportunity:
      "Finding the right payment provider is hard with unclear fees, hidden terms, and local requirements.",
    built: "In development: a comparison site with provider profiles, fee breakdowns, and regional filters.",
  },
  {
    slug: "qr-forge",
    name: "QR Forge",
    category: "QR Design Tool",
    status: "Active",
    accent: "#4ddcea",
    logo: "/sites/hamol/media/logos/generateqrcode.png",
    description: "A visual QR code builder for creating customized codes for print and digital use.",
    opportunity:
      "Businesses need QR codes that fit their visual identity and work across both printed materials and digital touchpoints.",
    built: "A browser-based QR design tool with live previews, multiple content types, styling controls, and PNG and SVG export.",
    website: "https://example.com/qr-forge",
  },
  {
    slug: "brandling",
    name: "Brandling",
    category: "AI Naming Tool",
    status: "Active",
    accent: "#8b5cf6",
    logo: "/sites/hamol/media/logos/namespark.png",
    description:
      "An AI-powered naming tool that helps founders explore app and startup names with domain availability checks.",
    opportunity:
      "Finding a name that fits an idea often means switching between brainstorming and checking which domains are available.",
    built: "A browser-based naming tool that brings AI-generated suggestions, domain availability checks, and links to domain registrars into one workflow.",
    website: "https://example.com/brandling",
  },
  {
    slug: "glacier",
    name: "Glacier",
    category: "Premium Frozen Pastry",
    status: "Active",
    accent: "#a8dcf1",
    logo: "/sites/hamol/media/logos/frost.png",
    description: "A premium frozen pastry provider supplying high-quality desserts to professionals.",
    opportunity:
      "Professional kitchens need consistent, high-quality pastry without the cost and complexity of making everything from scratch.",
    built: "A premium frozen pastry supply operation focused on quality, reliability, and service for hospitality businesses.",
    website: "https://example.com/glacier",
  },
];

export const sourceProjectUrl = (slug: string) => `https://arcline.studio/work/${slug}/`;

export const CONTACT_EMAIL = "hello@arcline.studio";
