/* Archive membership data built from the source WordPress/WooCommerce
   REST APIs and the source archive pages (final-pass coverage audit,
   2026-11-12). Post/product/item slugs reference posts.ts, products.ts
   and portfolio.ts. */

export type BlogArchive = { slug: string; name: string; posts: string[] };
export type ProductArchive = { slug: string; name: string; products: string[] };
export type PortfolioArchive = { slug: string; name: string; items: string[] };
export type PostMonth = { year: string; month: string; label: string; posts: string[] };

export const BLOG_CATEGORIES: BlogArchive[] = [
 {
  "slug": "chairs",
  "name": "Chairs",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style"
  ]
 },
 {
  "slug": "coffee-tables",
  "name": "Coffee Tables",
  "posts": [
   "home-office-ideas",
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "design-your-way",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "make-you-smile-style",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together"
  ]
 },
 {
  "slug": "design",
  "name": "Design",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style"
  ]
 },
 {
  "slug": "furniture",
  "name": "furniture",
  "posts": [
   "handmade-pieces-for-your-lovely-home",
   "new-ways-of-decorating-your-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "colorful-office-redesign",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "eskil-opens-on-south-korean-platform",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 },
 {
  "slug": "home-decor",
  "name": "Home Decor",
  "posts": []
 },
 {
  "slug": "inspiration",
  "name": "Inspiration",
  "posts": [
   "handmade-pieces-for-your-lovely-home",
   "new-ways-of-decorating-your-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "colorful-office-redesign",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "eskil-opens-on-south-korean-platform",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 },
 {
  "slug": "lamps",
  "name": "Lamps",
  "posts": []
 },
 {
  "slug": "sofas",
  "name": "Sofas",
  "posts": [
   "home-office-ideas",
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "design-your-way",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "make-you-smile-style",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together"
  ]
 }
];

export const BLOG_TAGS: BlogArchive[] = [
 {
  "slug": "art",
  "name": "Art",
  "posts": [
   "home-office-ideas",
   "design-your-way",
   "make-you-smile-style",
   "new-ways-of-decorating-your-home",
   "colorful-office-redesign",
   "eskil-opens-on-south-korean-platform"
  ]
 },
 {
  "slug": "chair",
  "name": "Chair",
  "posts": [
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together"
  ]
 },
 {
  "slug": "creative",
  "name": "Creative",
  "posts": [
   "home-office-ideas",
   "design-your-way",
   "make-you-smile-style",
   "new-ways-of-decorating-your-home",
   "colorful-office-redesign",
   "eskil-opens-on-south-korean-platform"
  ]
 },
 {
  "slug": "decor",
  "name": "Decor",
  "posts": [
   "home-office-ideas",
   "design-your-way",
   "make-you-smile-style",
   "new-ways-of-decorating-your-home",
   "colorful-office-redesign",
   "eskil-opens-on-south-korean-platform"
  ]
 },
 {
  "slug": "decoration",
  "name": "Decoration",
  "posts": [
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together"
  ]
 },
 {
  "slug": "design",
  "name": "Design",
  "posts": [
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together"
  ]
 },
 {
  "slug": "home-decor",
  "name": "Home Decor",
  "posts": [
   "handmade-pieces-for-your-lovely-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 },
 {
  "slug": "ideas",
  "name": "Ideas",
  "posts": [
   "handmade-pieces-for-your-lovely-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 },
 {
  "slug": "interior",
  "name": "Interior",
  "posts": [
   "home-office-ideas",
   "design-your-way",
   "make-you-smile-style",
   "new-ways-of-decorating-your-home",
   "colorful-office-redesign",
   "eskil-opens-on-south-korean-platform"
  ]
 },
 {
  "slug": "kaftans",
  "name": "Kaftans",
  "posts": [
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together"
  ]
 },
 {
  "slug": "light",
  "name": "Light",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style"
  ]
 },
 {
  "slug": "living-room",
  "name": "Living Room",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style"
  ]
 },
 {
  "slug": "modern",
  "name": "Modern",
  "posts": [
   "handmade-pieces-for-your-lovely-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 },
 {
  "slug": "news",
  "name": "News",
  "posts": [
   "handmade-pieces-for-your-lovely-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 },
 {
  "slug": "shades",
  "name": "Shades",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style"
  ]
 },
 {
  "slug": "small-spaces",
  "name": "Small Spaces",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style"
  ]
 },
 {
  "slug": "tables",
  "name": "Tables",
  "posts": [
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together"
  ]
 },
 {
  "slug": "wood",
  "name": "Wood",
  "posts": [
   "handmade-pieces-for-your-lovely-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 }
];

export const POST_FORMATS: BlogArchive[] = [
 {
  "slug": "audio",
  "name": "Audio",
  "posts": [
   "eskil-is-proud-to-stock-all-major-brends-at-one-site"
  ]
 },
 {
  "slug": "gallery",
  "name": "Gallery",
  "posts": [
   "handmade-pieces-for-your-lovely-home"
  ]
 },
 {
  "slug": "link",
  "name": "Link",
  "posts": [
   "colorful-office-redesign"
  ]
 },
 {
  "slug": "quote",
  "name": "Quote",
  "posts": [
   "home-office-ideas",
   "design-your-way",
   "make-you-smile-style",
   "new-ways-of-decorating-your-home",
   "eskil-opens-on-south-korean-platform"
  ]
 },
 {
  "slug": "video",
  "name": "Video",
  "posts": [
   "podcast-anne-lee-wood-crafting",
   "dining-art-design-how-to-arrange-lights-in-your-studio"
  ]
 }
];

export const POST_AUTHORS: BlogArchive[] = [
 {
  "slug": "hansjwegner",
  "name": "Hans J. Wegner",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style",
   "home-office-ideas",
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "design-your-way",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "make-you-smile-style",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together",
   "new-ways-of-decorating-your-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "colorful-office-redesign",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "eskil-opens-on-south-korean-platform",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 }
];

export const POST_MONTHS: PostMonth[] = [
 {
  "year": "2022",
  "month": "03",
  "label": "March 2022",
  "posts": [
   "select-your-fabric-and-colour-and-have-your-modern-furniture-customized",
   "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you",
   "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style",
   "home-office-ideas",
   "light-filtering-and-darkening-options-enhance-privacy",
   "there-are-many-options-for-these-woven-woods",
   "design-your-way",
   "5-reasons-why-natural-shades-might-be-the-choice-for-you",
   "there-are-more-than-5-reasons-to-love-natural-shades",
   "natural-shades-offer-one-of-a-kind-beauty",
   "make-you-smile-style",
   "handmade-pieces-that-took-time-to-make-retro-new-artistic-design",
   "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home",
   "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips",
   "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together",
   "new-ways-of-decorating-your-home",
   "podcast-anne-lee-wood-crafting",
   "eskil-is-proud-to-stock-all-major-brends-at-one-site",
   "your-office-should-have-only-natural-materials",
   "colorful-office-redesign",
   "recycled-and-sustainably-materials-take-centre",
   "dining-art-design-how-to-arrange-lights-in-your-studio",
   "eskil-opens-on-south-korean-platform",
   "get-ideas-about-effective-home-office-furniture",
   "handmade-pieces-that-took-time-to-make"
  ]
 },
 {
  "year": "2022",
  "month": "07",
  "label": "July 2022",
  "posts": [
   "handmade-pieces-for-your-lovely-home"
  ]
 }
];

export const PRODUCT_TAGS: ProductArchive[] = [
 {
  "slug": "trendy",
  "name": "Trendy",
  "products": [
   "steel-construction-fine-wood-retro-chair",
   "vicenterey-lounge-chair",
   "wooden-wall-clock",
   "hygger-soft-cushion-armchair-grey-cotton-plywood-legs",
   "steel-construction-fine-wood-retro-chair-black-lacquer",
   "silha-coffee-table-plywood-tabletop-matte-lacquer-33",
   "soft-leather-gunsmoke-brown-statement-chair-steel-legs",
   "loratus-floor-lamp-with-led-light-bulb-solid-ash-acrylic",
   "tvorhond-table-lamp-with-led-light-acrylic-painted-steel-gold",
   "vedio-chair-gunnared-green-solid-birch-frame-lacquer",
   "snaade-wall-clock-birch-wood-matte-lacquer-dry-finish-11",
   "hygge-leather-armchair",
   "billa-modern-grey-armchair",
   "mini-diamond-steel-pendant",
   "gold-vibes-minimal-pendant",
   "steel-gunmetal-statement-pendant",
   "honey-suckle-led-pendant-lamp",
   "minimalistic-plywood-coffee-table",
   "mcenroy-lounge-armchair",
   "serene-white-nightstand",
   "stockhold-oakwood-table",
   "art-deco-table-lamp",
   "wooden-chair-with-leather-cushion",
   "sisel-comfy-sofa-with-wood",
   "massive-full-oak-wood-table",
   "finn-loveseat-sofa",
   "puffed-ribbed-statement-chair",
   "leather-eclectic-chair",
   "stjarna-wooden-lamp",
   "koselig-armchair-hillared-emerald",
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "vibe",
  "name": "Vibe",
  "products": [
   "steel-construction-fine-wood-retro-chair",
   "vicenterey-lounge-chair",
   "wooden-wall-clock",
   "hygger-soft-cushion-armchair-grey-cotton-plywood-legs",
   "steel-construction-fine-wood-retro-chair-black-lacquer",
   "silha-coffee-table-plywood-tabletop-matte-lacquer-33",
   "soft-leather-gunsmoke-brown-statement-chair-steel-legs",
   "loratus-floor-lamp-with-led-light-bulb-solid-ash-acrylic",
   "tvorhond-table-lamp-with-led-light-acrylic-painted-steel-gold",
   "vedio-chair-gunnared-green-solid-birch-frame-lacquer",
   "snaade-wall-clock-birch-wood-matte-lacquer-dry-finish-11",
   "hygge-leather-armchair",
   "billa-modern-grey-armchair",
   "mini-diamond-steel-pendant",
   "gold-vibes-minimal-pendant",
   "steel-gunmetal-statement-pendant",
   "honey-suckle-led-pendant-lamp",
   "minimalistic-plywood-coffee-table",
   "mcenroy-lounge-armchair",
   "serene-white-nightstand",
   "stockhold-oakwood-table",
   "art-deco-table-lamp",
   "wooden-chair-with-leather-cushion",
   "sisel-comfy-sofa-with-wood",
   "massive-full-oak-wood-table",
   "finn-loveseat-sofa",
   "puffed-ribbed-statement-chair",
   "leather-eclectic-chair",
   "stjarna-wooden-lamp",
   "koselig-armchair-hillared-emerald",
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "modern",
  "name": "Modern",
  "products": [
   "leather-limited-edition-chair-steel-legs-waxed-leather",
   "andalusia-grey-minimal-statement-chair",
   "rosale-de-ville-rattan-collectors-chair",
   "bangkok-express-dark-rattan-handmade-armchair",
   "beige-gift-card",
   "golden-gift-card",
   "twin-gift-cards-set",
   "special-gift-card",
   "multiple-gifts-cards",
   "basic-gift-cards",
   "basic-gift-card",
   "selected-items-gift-card",
   "premium-gift-card-in-a-mini-black-envelope",
   "desol-modern-cut-chair-leather-cushion-solid-wood",
   "soft-grey-minimal-statement-chair-saten-cotton",
   "amber-exotique-fine-leather-chair",
   "almatraz-de-ville-rattan-collectors-chair",
   "sonde-matte-nightstand-with-drawer",
   "fine-dark-tinted-leather-collectors-piece-chair",
   "asian-fusion-noir-rattan-unique-armchair",
   "morgeby-coffee-table-with-concrete-top-plywood-birch",
   "tisbo-dark-ash-sturdy-chair-solid-birch-clear-acrylic",
   "insomnitus-floor-wooden-lamp-matte-tinted-lacquer",
   "duktig-minimal-chair-solid-birch-tinted-lacquer",
   "turuput-pendant-lamp-dark-epoxy-painted-chromatica",
   "tystnad-hinna-relaxing-wooden-stool",
   "orka-handamade-concrete-candle-holders",
   "plastic-wendy-chair-with-plywood-matte-lacquer",
   "gift-box-handmade-venus-candle-and-minimal-vase",
   "soft-taupe-minimal-chair",
   "ceramic-animorph-soft-grey-vase",
   "rattan-spider-work-armchair-matte-lacque-steel-legs",
   "singapore-dark-rattan-handmade-armchair",
   "statement-leather-retro-chair",
   "cult-70s-armchair-matte-lacquer-fabric",
   "exilot-solid-wood-nightstand-modern-bedside-table",
   "mid-century-modern-dsw-side-chair",
   "vonanda-mid-century-modern-sofa",
   "fibre-lounge-chair",
   "lanros-farmhouse-vintage-pendant-lighting",
   "modern-coffee-table",
   "vintage-pendant-lamp",
   "living-room-set-of-chair-table-pendant",
   "morgon-table-lamp-oak-wood-natural-matte-finish",
   "geometric-statement-piece-steel-chair-noir-powder-coating",
   "olive-green-fine-leather-chair-gunmetal-powder-coated-legs",
   "noir-butterfly-leather-chair-solid-oak-legs-matte-lacquer",
   "mangata-pendant-lamp-dark-grey-9-steel-powder-coating",
   "leende-chair-gunnared-light-green-solid-birch-acrylic-lacquer",
   "mysa-cozy-armchair-hillared-anthracite-solid-birch-tinted-lacquer",
   "grey-oval-bamboo-wood-coffee-table-20-matte-lacquer-steel-details",
   "lagom-matte-wall-led-lamp-aluminium-steel-powder-coating",
   "wall-clock-moneskine-birch-plywood-11-clear-acrylic-lacquer",
   "ultima-table-lamp-brass-structure-oval-base-with-leather-fragments",
   "ginger-leather-limited-edition-chair-steel-legs-waxed-leather",
   "normani-designers-piece-chair-dark-charcoal-satin-cotton-cushion",
   "concrete-top-wooden-coffee-table-fine-brushed-oak-28-1w",
   "stockholm-minimal-chair-oak-wood-with-fine-finish",
   "ella-chair-with-armrests-solid-birch-and-leather-cushion",
   "tilde-pine-nightstand-with-drawer-untreated-solid-wood",
   "oslo-svart-pendant-lamp-powder-coated-epoxy-painted-steel",
   "haydes-handmade-floor-wooden-lamp-matte-natural-finish",
   "sauder-boulevard-cafe-lounge-chair-camel-finish",
   "poliframe-tuffed-accnet-chair-29-1w-jet-black"
  ]
 },
 {
  "slug": "wood",
  "name": "Wood",
  "products": [
   "leather-limited-edition-chair-steel-legs-waxed-leather",
   "andalusia-grey-minimal-statement-chair",
   "rosale-de-ville-rattan-collectors-chair",
   "bangkok-express-dark-rattan-handmade-armchair",
   "beige-gift-card",
   "golden-gift-card",
   "twin-gift-cards-set",
   "special-gift-card",
   "multiple-gifts-cards",
   "basic-gift-cards",
   "basic-gift-card",
   "selected-items-gift-card",
   "premium-gift-card-in-a-mini-black-envelope",
   "desol-modern-cut-chair-leather-cushion-solid-wood",
   "soft-grey-minimal-statement-chair-saten-cotton",
   "amber-exotique-fine-leather-chair",
   "almatraz-de-ville-rattan-collectors-chair",
   "sonde-matte-nightstand-with-drawer",
   "fine-dark-tinted-leather-collectors-piece-chair",
   "asian-fusion-noir-rattan-unique-armchair",
   "morgeby-coffee-table-with-concrete-top-plywood-birch",
   "tisbo-dark-ash-sturdy-chair-solid-birch-clear-acrylic",
   "insomnitus-floor-wooden-lamp-matte-tinted-lacquer",
   "duktig-minimal-chair-solid-birch-tinted-lacquer",
   "turuput-pendant-lamp-dark-epoxy-painted-chromatica",
   "tystnad-hinna-relaxing-wooden-stool",
   "orka-handamade-concrete-candle-holders",
   "plastic-wendy-chair-with-plywood-matte-lacquer",
   "gift-box-handmade-venus-candle-and-minimal-vase",
   "soft-taupe-minimal-chair",
   "ceramic-animorph-soft-grey-vase",
   "rattan-spider-work-armchair-matte-lacque-steel-legs",
   "singapore-dark-rattan-handmade-armchair",
   "statement-leather-retro-chair",
   "cult-70s-armchair-matte-lacquer-fabric",
   "exilot-solid-wood-nightstand-modern-bedside-table",
   "modern-coffee-table",
   "vintage-pendant-lamp",
   "living-room-set-of-chair-table-pendant",
   "morgon-table-lamp-oak-wood-natural-matte-finish",
   "geometric-statement-piece-steel-chair-noir-powder-coating",
   "olive-green-fine-leather-chair-gunmetal-powder-coated-legs",
   "noir-butterfly-leather-chair-solid-oak-legs-matte-lacquer",
   "mangata-pendant-lamp-dark-grey-9-steel-powder-coating",
   "leende-chair-gunnared-light-green-solid-birch-acrylic-lacquer",
   "mysa-cozy-armchair-hillared-anthracite-solid-birch-tinted-lacquer",
   "grey-oval-bamboo-wood-coffee-table-20-matte-lacquer-steel-details",
   "lagom-matte-wall-led-lamp-aluminium-steel-powder-coating",
   "wall-clock-moneskine-birch-plywood-11-clear-acrylic-lacquer",
   "ginger-leather-limited-edition-chair-steel-legs-waxed-leather",
   "normani-designers-piece-chair-dark-charcoal-satin-cotton-cushion",
   "concrete-top-wooden-coffee-table-fine-brushed-oak-28-1w",
   "stockholm-minimal-chair-oak-wood-with-fine-finish",
   "ella-chair-with-armrests-solid-birch-and-leather-cushion",
   "tilde-pine-nightstand-with-drawer-untreated-solid-wood",
   "haydes-handmade-floor-wooden-lamp-matte-natural-finish",
   "sauder-boulevard-cafe-lounge-chair-camel-finish",
   "poliframe-tuffed-accnet-chair-29-1w-jet-black"
  ]
 },
 {
  "slug": "steel",
  "name": "Steel",
  "products": [
   "mid-century-modern-dsw-side-chair",
   "fibre-lounge-chair",
   "lanros-farmhouse-vintage-pendant-lighting",
   "ultima-table-lamp-brass-structure-oval-base-with-leather-fragments",
   "oslo-svart-pendant-lamp-powder-coated-epoxy-painted-steel"
  ]
 },
 {
  "slug": "leather",
  "name": "Leather",
  "products": [
   "vonanda-mid-century-modern-sofa"
  ]
 },
 {
  "slug": "aluminium",
  "name": "Aluminium",
  "products": []
 },
 {
  "slug": "by-products",
  "name": "By-products",
  "products": []
 },
 {
  "slug": "cotton",
  "name": "Cotton",
  "products": []
 },
 {
  "slug": "foam",
  "name": "Foam",
  "products": []
 },
 {
  "slug": "metal",
  "name": "Metal",
  "products": []
 },
 {
  "slug": "modular",
  "name": "Modular",
  "products": []
 }
];

export const PRODUCT_DESIGNERS: ProductArchive[] = [
 {
  "slug": "daniela-anderson",
  "name": "Daniela Anderson",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "henrik-fjeldberg",
  "name": "Henrik Fjeldberg",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "ingrid-brown",
  "name": "Ingrid Brown",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "ingrid-lauritzen",
  "name": "Ingrid Lauritzen",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "kasper-lene-nilssen",
  "name": "Kasper & Lene Nilssen",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "marcus-haug",
  "name": "Marcus Haug",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "mille-hansen",
  "name": "Mille Hansen",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "simon-lucas-hansen",
  "name": "Simon & Lucas Hansen",
  "products": [
   "butterfly-leather-chair",
   "swedish-lounge-armchair",
   "gray-cotton-fit-chair"
  ]
 },
 {
  "slug": "hans-j-wegner",
  "name": "Hans J. Wegner",
  "products": []
 },
 {
  "slug": "hugo-passos",
  "name": "Hugo Passos",
  "products": []
 }
];

export const PORTFOLIO_CATEGORIES: PortfolioArchive[] = [
 {
  "slug": "appartment-complex",
  "name": "Appartment complex",
  "items": [
   "appartment-plaza"
  ]
 },
 {
  "slug": "art",
  "name": "Art",
  "items": [
   "residence-interior-2",
   "modern-office",
   "appartment-plaza",
   "living-rooms",
   "bedroom-designs"
  ]
 },
 {
  "slug": "furniture",
  "name": "Furniture",
  "items": [
   "office-interior",
   "apartment-qi"
  ]
 },
 {
  "slug": "home-decor",
  "name": "Home decor",
  "items": [
   "shade-store",
   "handmade",
   "silver-pieces",
   "practical-items",
   "artistic-minds"
  ]
 },
 {
  "slug": "modern",
  "name": "Modern",
  "items": [
   "locus-amoenus-2",
   "style-storage",
   "office-interior",
   "living-rooms",
   "bedroom-designs",
   "apartment-qi"
  ]
 }
];

export const blogCategoryBySlug = (slug: string) => BLOG_CATEGORIES.find((a) => a.slug === slug);
export const blogTagBySlug = (slug: string) => BLOG_TAGS.find((a) => a.slug === slug);
export const postFormatBySlug = (slug: string) => POST_FORMATS.find((a) => a.slug === slug);
export const postAuthorBySlug = (slug: string) => POST_AUTHORS.find((a) => a.slug === slug);
export const postMonthBySlug = (year: string, month: string) => POST_MONTHS.find((m) => m.year === year && m.month === month);
export const productTagBySlug = (slug: string) => PRODUCT_TAGS.find((a) => a.slug === slug);
export const productDesignerBySlug = (slug: string) => PRODUCT_DESIGNERS.find((a) => a.slug === slug);
export const portfolioCategoryBySlug = (slug: string) => PORTFOLIO_CATEGORIES.find((a) => a.slug === slug);
