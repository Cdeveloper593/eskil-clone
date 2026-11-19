# Eskil — Furniture Store — page brief

Source: https://eskil.qodeinteractive.com/furniture-store/ (Qode WordPress/WooCommerce theme "Eskil", Elementor-built, Slider Revolution present in markup)
Clone: ~/workspace/eskil-clone — Next.js 16 / React 19 / Tailwind v4 — port 3700
Status: built 2026-11-12 (site #5 of the five-site schedule). `npm run check` must pass; production server on port 3700.

## Source facts (verified 2026-11-12)
- Homepage HTML: HTTP 200, ~411 KB. WP REST live at https://eskil.qodeinteractive.com/wp-json/ (the /furniture-store/wp-json/ subpath 404s — root only).
- WooCommerce Store API live: /wp-json/wc/store/v1/products (97 products, 1 page), /products/categories (20 categories). Prices in the API are minor units (cents): 37066 = $370.66.
- 66 WP pages, 26 posts (27 listed, 26 returned with content), 8 portfolio items (/portfolio-item/<slug>/).
- Fonts: **Marcellus** (display/headings) + **Jost** (body), loaded from Google Fonts on the source; self-hosted via next/font/google in the clone.
- Palette: near-black text #000/#111, warm light grey #f7f6f4 sections, muted meta #8a8a8a, hairline borders #e8e8e8. Buttons: black filled, uppercase, letter-spaced, hover inverts.
- No Cloudflare block on plain curl (unlike Amaali); a few page fetches returned transient 521s — retry with a delay.

## Homepage (`/` = Furniture Store demo)
- Top bar: "10% discount for registered users" + FB / IG / TW + language selector (English/French/Greek/Italian).
- Header: logo (main-logo.png), mega-menu nav (Home / Shop / Pages / Blog / Portfolio), icons Search / Account / Wishlist / Cart; sticky with shadow on scroll; cart opens a right side drawer ("Shopping Cart — No products in the cart. Continue Shopping").
- Hero: single full-width room image (h3-img-01-scaled.jpg) with 3 shoppable hotspot pins (pulsing dot, popup card on hover/click):
  - Wooden Table $799 → /product/stockhold-oakwood-table (top 51%, left 32%, thumb h3-item-02.jpg)
  - Ceramic Vase $299 → /product/gift-box-handmade-venus-candle-and-minimal-vase (center, thumb h3-item-01.jpg)
  - Satin Armchair $599 → /product/swedish-lounge-armchair (top 68%, right 25%, thumb h3-item-03.jpg)
- Six designer collection sections (alternating white / #f7f6f4), each: Marcellus title + "By DESIGNER" eyebrow + ProductCard grid:
  1. Featured Collection — By ANTONIO CITTERIO (4: Koselig, Stjarna, Leather Eclectic, Puffed Ribbed)
  2. Living Room Collection — By JOHANNA GRAWUNDLER (7: Sisel, Wooden Chair, Art Deco Lamp, Stockhold, Serene, McEnroy, Minimalistic Plywood)
  3. Chairs & Stools Collection — By PATRICIA URQUIOLA (3: Butterfly, Swedish, Gray Cotton)
  4. Sofas & Tables Collection — By BORGE MOGENSEN (2: Finn, Massive Oak)
  5. The Pendants Collection — By GINO SARFATTI (4: Honey Suckle, Steel Gunmetal, Gold Vibes, Mini Diamond)
  6. The Lounge Chairs Collection — By VINCENT VAN DUYSEN (2: Billa, Hygge)
- BM62 Armchair feature: "1975-1985" eyebrow, images h3-img-3.jpg + h3-img-6.jpg (overlapping portrait), "Live in comfort and luxury, get our quality design furniture & custom-made décor, we guarantee you won't regret it!" + View more → /about-us.
- Satisfaction band: "Customer satisfaction has always been our top priority. We guarantee full refunds, returns and product exchange." + View more → /returns-refunds; icons h3-icon-01/02.png.
- Newsletter: "Subscribe to our newsletter and receive the latest product news, stories, invitations to exclusive design events and much, much more." + email input + Subscribe (local success) + "By subscribing, you accept our Privacy policy".
- Footer: logo (eskil-logo-footer.png), 4 columns — Company (What We Do, Available Services, Latest Posts, Careers, FAQs), Customer service (Help & Contact Us, Returns & Refunds, Delivery Information, Terms & Conditions), Social media (Twitter, Instagram, Facebook, Pinterest → Qode Interactive profiles), Profile (My Account, Checkout, Order Tracking, Help & Support); bottom bar "© 2022 Qode Interactive" + "Top" back-to-top.

## Navigation map (from source mega menu)
- Home: Main Home /main-home, Shop Metro /shop-metro, Furniture Store /, Shop Dark /shop-dark, Shop Grid /shop-grid, Designer Furniture /designer-furniture, Product Showcase /product-showcase, Left Menu Home /left-menu-home, Vertical Slider /vertical-slider, Landing /landing.
- Shop types: Left Sidebar /shop, Right Sidebar /shop/right-sidebar, No Sidebar /shop/no-sidebar, Minimal List /shop/minimal-list, Masonry List /shop/masonry-list, Filter List /shop/filter-list.
- Shop single (product-type demos): Standard → stockholm-minimal-chair-oak-wood-with-fine-finish, Big Images → exilot-solid-wood-nightstand-modern-bedside-table, Grouped → living-room-set-of-chair-table-pendant, Slider → vonanda-mid-century-modern-sofa, Masonry → mid-century-modern-dsw-side-chair, Full Width → statement-leather-retro-chair, Variable → cult-70s-armchair-matte-lacquer-fabric, Countdown → rosale-de-ville-rattan-collectors-chair, Virtual → premium-gift-card-in-a-mini-black-envelope, External → andalusia-grey-minimal-statement-chair, New → poliframe-tuffed-accnet-chair-29-1w-jet-black, Sale → lanros-farmhouse-vintage-pendant-lighting, Sold Out → bangkok-express-dark-rattan-handmade-armchair.
- Shop layouts: /shop/three-columns-grid, /shop/three-columns-wide, /shop/four-columns-grid, /shop/four-columns-wide, /shop/five-columns-wide, /shop/six-columns-wide.
- Shop pages: /cart, /checkout, /my-account, /shop/gift-cards, /order-tracking, /wishlist.
- Pages: /about-us, /designer-profiles (Meet The Designers), /careers, /contact-us, /coming-soon, /faq-page, /delivery-information, /terms-conditions, /returns-refunds, /404-error-page.
- Blog: /blog-list-masonry, /blog-list-right-sidebar, /blog-list-left-sidebar, /blog-list-no-sidebar; post types map to posts: Wide → get-ideas-about-effective-home-office-furniture, Standard → handmade-pieces-that-took-time-to-make, Quote → eskil-opens-on-south-korean-platform, Gallery → handmade-pieces-for-your-lovely-home, Link → colorful-office-redesign, Video → podcast-anne-lee-wood-crafting, Audio → eskil-is-proud-to-stock-all-major-brends-at-one-site.
- Portfolio lists: /portfolio (+ /gallery, /gallery-joined, /masonry, /masonry-joined, /slider, /info-on-left, /info-on-image, /info-on-hover, /info-follow, /image-on-hover, /two-columns, /two-columns-wide, /three-columns, /three-columns-wide, /four-columns, /four-columns-wide); single types map to /portfolio-item/<slug> (Images Small → living-rooms, Images Big → bedroom-designs, Gallery Small → apartment-qi, Gallery Big → modern-office, Masonry Small → office-interior, Masonry Big → style-storage, Slider Small → appartment-plaza, Slider Big → residence-interior-2).

## Products
- 97 products via WC Store API. Types: 87 simple, 8 variable, 1 external (andalusia-grey…), 1 grouped (living-room-set-of-chair-table-pendant). 4 on sale, 11 with ratings (4.33–4.5), 1 out of stock (bangkok-express-dark-rattan-handmade-armchair). Each has up to 6 images; attributes include STYLE / WARRANTY / SET / WEIGHT / DELIVERY / VARIANT / MATERIAL. Descriptions are short generic WooCommerce demo text.
- Categories (20): furniture (60), chairs (32), chairs-stools (8), sofas (2), pendants (9), lamps (8), lamps-pendants (2), lightning (6), coffee-tables (1), home-decor (3), nightstand (2), design (2), gifts (9), best-sellers (7), antonio (4), gino (4), greysom (9), johanna (7), vincent (6), flashlight (1).
- Product pages: /product/<slug> with gallery, qty, add to cart, wishlist, attributes table, tabs (Description / Additional Information / Reviews), related products.

## Assets
- 496 original files in public/sites/eskil/ (47 MB): all product images (full originals), homepage art (h3-img-*, h3-item-*, h3-icon-*, h3-logo), logos (main-logo.png, eskil-logo-footer.png, logo-white.png, logo-big.png), blog images, portfolio images. Manifest: /tmp/eskil-asset-manifest.json. Local path rule: /sites/eskil/<path after /wp-content/uploads/>.
- Data modules: src/lib/eskil/products.ts, posts.ts (26 posts, full HTML, image URLs rewritten local), portfolio.ts (8 items), pages.ts (58 pages, raw Elementor HTML, image URLs rewritten local), site.ts (NAV, CATEGORIES, HOME_COLLECTIONS, FOOTER_COLUMNS).

## Components
- src/components/sites/eskil/chrome.tsx — SiteHeader (top bar, mega menus, search overlay with live results, cart drawer, mobile drawer), SiteFooter, NoticeToast.
- src/components/sites/eskil/cart.tsx — ShopProvider (cart + wishlist in localStorage, cart/search/quick-view state).
- src/components/sites/eskil/ProductCard.tsx — ProductCard (hover image swap + action bar: add to cart / wishlist / quick view) + QuickViewModal.
- src/components/sites/eskil/Reveal.tsx — IntersectionObserver scroll reveal.
- src/components/sites/eskil/HeroHotspots.tsx, NewsletterForm.tsx — homepage pieces.
- src/components/sites/eskil/eskil.css — Marcellus/Jost, reveal/pin/marquee keyframes, card hover, .eskil-content WP styles.

## Animations kept
- Scroll reveals (IntersectionObserver, staggered delays), hero hotspot pulse + popup, product card image swap + zoom + action bar slide-up, sticky header shadow, mega-menu fade/slide, cart/search drawers with overlay transitions, back-to-top, newsletter/accordion transitions, vertical-slider scroll-snap, portfolio slider auto-advance.

## Gaps (honest)
- Cart/checkout/my-account/wishlist/order-tracking are local demos (localStorage, no backend, no payments).
- No live visual side-by-side check yet (final pass).
- Sale prices in the Store API equal regular prices for the 4 on-sale products, so no struck-through discount is shown (badge only).
- Post "formats" (Wide/Quote/Gallery/Link/Video/Audio) are rendered with the same single-post template; the source's format-specific treatments are not distinguished.
- The source's Slider Revolution assets are not reused; the hero is the static hotspots image as the furniture-store demo renders it.
- "Countdown Product" has no live end date in the API, so no countdown timer is shown (badge only).
- Left Menu Home keeps the global top header (source uses a left vertical header); the variant renders its content with a left sidebar menu instead.
