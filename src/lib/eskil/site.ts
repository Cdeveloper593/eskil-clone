import { PRODUCTS } from "./products";

export const SOURCE_BASE = "https://www.nordvikliving.com";

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; links: NavLink[] };
export type NavItem = { label: string; href: string; groups?: NavGroup[] };

export const NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
    groups: [
      {
        label: "Home",
        links: [
          { label: "Main Home", href: "/main-home" },
          { label: "Shop Metro", href: "/shop-metro" },
          { label: "Furniture Store", href: "/" },
          { label: "Shop Dark", href: "/shop-dark" },
          { label: "Shop Grid", href: "/shop-grid" },
          { label: "Designer Furniture", href: "/designer-furniture" },
          { label: "Product Showcase", href: "/product-showcase" },
          { label: "Left Menu Home", href: "/left-menu-home" },
          { label: "Vertical Slider", href: "/vertical-slider" },
          { label: "Landing", href: "/landing" },
        ],
      },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    groups: [
      {
        label: "Shop Types",
        links: [
          { label: "Left Sidebar", href: "/shop" },
          { label: "Right Sidebar", href: "/shop/right-sidebar" },
          { label: "No Sidebar", href: "/shop/no-sidebar" },
          { label: "Minimal List", href: "/shop/minimal-list" },
          { label: "Masonry List", href: "/shop/masonry-list" },
          { label: "Filter List", href: "/shop/filter-list" },
        ],
      },
      {
        label: "Shop Single",
        links: [
          { label: "Standard Product", href: "/product/stockholm-minimal-chair-oak-wood-with-fine-finish" },
          { label: "Big Images Product", href: "/product/exilot-solid-wood-nightstand-modern-bedside-table" },
          { label: "Grouped Product", href: "/product/living-room-set-of-chair-table-pendant" },
          { label: "Slider Product", href: "/product/vonanda-mid-century-modern-sofa" },
          { label: "Masonry Product", href: "/product/mid-century-modern-dsw-side-chair" },
          { label: "Full Width Product", href: "/product/statement-leather-retro-chair" },
          { label: "Variable Product", href: "/product/cult-70s-armchair-matte-lacquer-fabric" },
          { label: "Countdown Product", href: "/product/rosale-de-ville-rattan-collectors-chair" },
          { label: "Virtual Product", href: "/product/premium-gift-card-in-a-mini-black-envelope" },
          { label: "External Product", href: "/product/andalusia-grey-minimal-statement-chair" },
          { label: "New Product", href: "/product/poliframe-tuffed-accnet-chair-29-1w-jet-black" },
          { label: "Sale Product", href: "/product/lanros-farmhouse-vintage-pendant-lighting" },
          { label: "Sold Out Product", href: "/product/bangkok-express-dark-rattan-handmade-armchair" },
        ],
      },
      {
        label: "Shop Layouts",
        links: [
          { label: "Three Columns Grid", href: "/shop/three-columns-grid" },
          { label: "Three Columns Wide", href: "/shop/three-columns-wide" },
          { label: "Four Columns Grid", href: "/shop/four-columns-grid" },
          { label: "Four Columns Wide", href: "/shop/four-columns-wide" },
          { label: "Five Columns Wide", href: "/shop/five-columns-wide" },
          { label: "Six Columns Wide", href: "/shop/six-columns-wide" },
        ],
      },
      {
        label: "Shop Pages",
        links: [
          { label: "Cart", href: "/cart" },
          { label: "Checkout", href: "/checkout" },
          { label: "My Account", href: "/my-account" },
          { label: "Gift Cards", href: "/shop/gift-cards" },
          { label: "Order Tracking", href: "/order-tracking" },
          { label: "Wishlist", href: "/wishlist" },
        ],
      },
    ],
  },
  {
    label: "Pages",
    href: "/about-us",
    groups: [
      {
        label: "Pages",
        links: [
          { label: "About Us", href: "/about-us" },
          { label: "Meet The Designers", href: "/designer-profiles" },
          { label: "Careers", href: "/careers" },
          { label: "Contact Us", href: "/contact-us" },
          { label: "Coming Soon", href: "/coming-soon" },
          { label: "FAQ Page", href: "/faq-page" },
          { label: "Delivery Information", href: "/delivery-information" },
          { label: "Terms & Conditions", href: "/terms-conditions" },
          { label: "Order Tracking", href: "/order-tracking" },
          { label: "Returns & Refunds", href: "/returns-refunds" },
          { label: "404 Error", href: "/404-error-page" },
        ],
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog-list-no-sidebar",
    groups: [
      {
        label: "Blog Lists",
        links: [
          { label: "Masonry List", href: "/blog-list-masonry" },
          { label: "Right Sidebar", href: "/blog-list-right-sidebar" },
          { label: "Left Sidebar", href: "/blog-list-left-sidebar" },
          { label: "No Sidebar", href: "/blog-list-no-sidebar" },
        ],
      },
      {
        label: "Post Types",
        links: [
          { label: "Wide Post", href: "/get-ideas-about-effective-home-office-furniture" },
          { label: "Standard Post", href: "/handmade-pieces-that-took-time-to-make" },
          { label: "Quote Post", href: "/eskil-opens-on-south-korean-platform" },
          { label: "Gallery Post", href: "/handmade-pieces-for-your-lovely-home" },
          { label: "Link Post", href: "/colorful-office-redesign" },
          { label: "Video Post", href: "/podcast-anne-lee-wood-crafting" },
          { label: "Audio Post", href: "/eskil-is-proud-to-stock-all-major-brends-at-one-site" },
        ],
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    groups: [
      {
        label: "List Types",
        links: [
          { label: "Standard", href: "/portfolio" },
          { label: "Gallery", href: "/portfolio/gallery" },
          { label: "Gallery Joined", href: "/portfolio/gallery-joined" },
          { label: "Masonry", href: "/portfolio/masonry" },
          { label: "Masonry Joined", href: "/portfolio/masonry-joined" },
          { label: "Slider", href: "/portfolio/slider" },
        ],
      },
      {
        label: "Hover Types",
        links: [
          { label: "Info On Left", href: "/portfolio/info-on-left" },
          { label: "Info On Image", href: "/portfolio/info-on-image" },
          { label: "Info On Hover", href: "/portfolio/info-on-hover" },
          { label: "Info Follow", href: "/portfolio/info-follow" },
          { label: "Image On Hover", href: "/portfolio/image-on-hover" },
        ],
      },
      {
        label: "List Layouts",
        links: [
          { label: "Two Columns", href: "/portfolio/two-columns" },
          { label: "Two Columns Wide", href: "/portfolio/two-columns-wide" },
          { label: "Three Columns", href: "/portfolio/three-columns" },
          { label: "Three Columns Wide", href: "/portfolio/three-columns-wide" },
          { label: "Four Columns", href: "/portfolio/four-columns" },
          { label: "Four Columns Wide", href: "/portfolio/four-columns-wide" },
        ],
      },
      {
        label: "Single Types",
        links: [
          { label: "Images Small", href: "/portfolio-item/living-rooms" },
          { label: "Images Big", href: "/portfolio-item/bedroom-designs" },
          { label: "Gallery Small", href: "/portfolio-item/apartment-qi" },
          { label: "Gallery Big", href: "/portfolio-item/modern-office" },
          { label: "Masonry Small", href: "/portfolio-item/office-interior" },
          { label: "Masonry Big", href: "/portfolio-item/style-storage" },
          { label: "Slider Small", href: "/portfolio-item/appartment-plaza" },
          { label: "Slider Big", href: "/portfolio-item/residence-interior-2" },
        ],
      },
    ],
  },
];

export const CATEGORIES = [
  { slug: "furniture", name: "Furniture" },
  { slug: "chairs", name: "Chairs" },
  { slug: "chairs-stools", name: "Chairs & Stools" },
  { slug: "sofas", name: "Sofas" },
  { slug: "pendants", name: "Pendants" },
  { slug: "lamps", name: "Lamps" },
  { slug: "lamps-pendants", name: "Lamps & Pendants" },
  { slug: "lightning", name: "Lightning" },
  { slug: "coffee-tables", name: "Coffee Tables" },
  { slug: "home-decor", name: "Home decor" },
  { slug: "nightstand", name: "Nightstand" },
  { slug: "design", name: "Design" },
  { slug: "gifts", name: "Gifts" },
  { slug: "best-sellers", name: "Best sellers" },
  { slug: "antonio", name: "Antonio" },
  { slug: "gino", name: "Gino" },
  { slug: "greysom", name: "Greysom" },
  { slug: "johanna", name: "Johanna" },
  { slug: "vincent", name: "Vincent" },
  { slug: "flashlight", name: "Flashlight" },
  { slug: "grawunder", name: "Grawunder" },
];

export const categoryBySlug = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);

export const productsInCategory = (slug: string) =>
  PRODUCTS.filter((p) => p.categories.some((c) => c.slug === slug));

export type Collection = {
  title: string;
  designer: string;
  slugs: string[];
};

export const HOME_COLLECTIONS: Collection[] = [
  {
    title: "Featured Collection",
    designer: "By ANTONIO CITTERIO",
    slugs: [
      "koselig-armchair-hillared-emerald",
      "stjarna-wooden-lamp",
      "leather-eclectic-chair",
      "puffed-ribbed-statement-chair",
    ],
  },
  {
    title: "Living Room Collection",
    designer: "By JOHANNA GRAWUNDLER",
    slugs: [
      "sisel-comfy-sofa-with-wood",
      "wooden-chair-with-leather-cushion",
      "art-deco-table-lamp",
      "stockhold-oakwood-table",
      "serene-white-nightstand",
      "mcenroy-lounge-armchair",
      "minimalistic-plywood-coffee-table",
    ],
  },
  {
    title: "Chairs & Stools Collection",
    designer: "By PATRICIA URQUIOLA",
    slugs: [
      "butterfly-leather-chair",
      "swedish-lounge-armchair",
      "gray-cotton-fit-chair",
    ],
  },
  {
    title: "Sofas & Tables Collection",
    designer: "By BORGE MOGENSEN",
    slugs: ["finn-loveseat-sofa", "massive-full-oak-wood-table"],
  },
  {
    title: "The Pendants Collection",
    designer: "By GINO SARFATTI",
    slugs: [
      "honey-suckle-led-pendant-lamp",
      "steel-gunmetal-statement-pendant",
      "gold-vibes-minimal-pendant",
      "mini-diamond-steel-pendant",
    ],
  },
  {
    title: "The Lounge Chairs Collection",
    designer: "By VINCENT VAN DUYSEN",
    slugs: ["billa-modern-grey-armchair", "hygge-leather-armchair"],
  },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "What We Do", href: "/about-us" },
      { label: "Available Services", href: "/about-us" },
      { label: "Latest Posts", href: "/blog-list-no-sidebar" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faq-page" },
    ],
  },
  {
    title: "Customer service",
    links: [
      { label: "Help & Contact Us", href: "/contact-us" },
      { label: "Returns & Refunds", href: "/returns-refunds" },
      { label: "Delivery Information", href: "/delivery-information" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
  {
    title: "Social media",
    links: [
      { label: "Twitter", href: "https://twitter.com/NordvikInteractive" },
      { label: "Instagram", href: "https://www.instagram.com/nordvikliving" },
      { label: "Facebook", href: "https://www.facebook.com/NordvikInteractive" },
      { label: "Pinterest", href: "https://www.pinterest.com/nordvikliving" },
    ],
  },
  {
    title: "Profile",
    links: [
      { label: "My Account", href: "/my-account" },
      { label: "Checkout", href: "/checkout" },
      { label: "Order Tracking", href: "/order-tracking" },
      { label: "Help & Support", href: "/contact-us" },
    ],
  },
];

export const LOGO = "/sites/eskil/2022/03/main-logo.png";
export const LOGO_FOOTER = "/sites/eskil/2022/03/eskil-logo-footer.png";
export const LOGO_WHITE = "/sites/eskil/2022/04/logo-white.png";
export const FAVICON = "/sites/eskil/2022/04/cropped-eskil-favicon-32x32.png";
