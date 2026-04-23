{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Bold;\f1\froman\fcharset0 Times-Roman;\f2\fnil\fcharset0 HelveticaNeue;
}
{\colortbl;\red255\green255\blue255;\red32\green36\blue45;\red167\green0\blue20;\red16\green19\blue24;
\red108\green0\blue181;\red0\green0\blue0;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c16863\c18824\c23137;\cssrgb\c72157\c3922\c9412;\cssrgb\c7843\c9412\c12157;
\cssrgb\c50588\c0\c76078;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c0\c84706;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 #\cf3 \strokec3  CLAUDE.md \'97 Solora Fresh Tradeshow Digital Kiosk
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ##\cf3 \strokec3  Project Overview
\f1\b0 \cf4 \strokec4 \
A fullscreen touchscreen kiosk web app for Solora Fresh to run at produce industry tradeshows. Built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployed to Vercel.\
\
\cf2 \strokec2 **\cf4 \strokec4 Target audience\cf2 \strokec2 **\cf4 \strokec4 : Produce marketing companies, pack-houses, and growers visiting the Solora Fresh booth.\
\
\cf2 \strokec2 **\cf4 \strokec4 Key behavior\cf2 \strokec2 **\cf4 \strokec4 :\
\cf2 \strokec2 -\cf4 \strokec4  After 60 seconds of inactivity, the app transitions into an auto-rotating fullscreen slideshow (attract mode / screensaver loop).\
\cf2 \strokec2 -\cf4 \strokec4  Any touch/click on the slideshow exits back to the interactive kiosk.\
\cf2 \strokec2 -\cf4 \strokec4  The kiosk is designed for large touchscreens (1080p\'964K), landscape orientation, no scrollbars.\
\
\cf2 \strokec2 ---\cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ##\cf3 \strokec3  Brand & Content
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Company Info
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Company\cf2 \strokec2 **\cf4 \strokec4 : Solora Fresh (formerly Orora Fresh, before that Landsberg Fresh)\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Founded\cf2 \strokec2 **\cf4 \strokec4 : 1952 as Karl H. Landsberg Co. in Vernon, CA\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 What they do\cf2 \strokec2 **\cf4 \strokec4 : Packaging and MRO supplier for the fresh produce industry\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Tagline options\cf2 \strokec2 **\cf4 \strokec4 : "Fresh Produce Packaging Solutions" / "From Greenhouse to Grocery"\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Logo\cf2 \strokec2 **\cf4 \strokec4 : Use the Solora Fresh logo from https://solorafresh.com (sun icon + "SOLORA fresh" wordmark). For now, use a text-based logo with an orange sun icon via SVG.\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Brand Colors
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Primary Green: \cf5 \strokec5 `#1a5b2e`\cf4 \strokec4  (deep forest green)\
\cf2 \strokec2 -\cf4 \strokec4  Secondary Green: \cf5 \strokec5 `#237a3b`\cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Accent Orange: \cf5 \strokec5 `#e8712b`\cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Light Orange: \cf5 \strokec5 `#f5a623`\cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  White: \cf5 \strokec5 `#ffffff`\cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Off-white/Cream: \cf5 \strokec5 `#f8f6f0`\cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Dark text: \cf5 \strokec5 `#1a1a1a`\cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Subtle gray: \cf5 \strokec5 `#6b7280`\cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Typography
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Display/Headings: Use a premium serif or elegant display font from Google Fonts (e.g., "Playfair Display", "DM Serif Display", or "Cormorant Garamond")\
\cf2 \strokec2 -\cf4 \strokec4  Body: Use a clean sans-serif (e.g., "DM Sans", "Plus Jakarta Sans", or "Outfit")\
\cf2 \strokec2 -\cf4 \strokec4  Do NOT use Inter, Roboto, Arial, or system fonts\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Product Lines (12 categories)
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 1.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Corrugated Products\cf2 \strokec2 **\cf4 \strokec4  \'97 Durable trays and boxes for transport, storage, and retail display\
\cf2 \strokec2 2.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Clamshells\cf2 \strokec2 **\cf4 \strokec4  \'97 Clear containers that showcase produce freshness with ventilation design\
\cf2 \strokec2 3.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Top Seal Films\cf2 \strokec2 **\cf4 \strokec4  \'97 Films that seal to trays for modified atmosphere packaging\
\cf2 \strokec2 4.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Tray Liners\cf2 \strokec2 **\cf4 \strokec4  \'97 Liners that protect produce and absorb moisture\
\cf2 \strokec2 5.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Labels\cf2 \strokec2 **\cf4 \strokec4  \'97 Custom produce labels for branding and compliance\
\cf2 \strokec2 6.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Flexible Pouches & Bags\cf2 \strokec2 **\cf4 \strokec4  \'97 Stand-up pouches and bags for various produce\
\cf2 \strokec2 7.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Corner Boards\cf2 \strokec2 **\cf4 \strokec4  \'97 Edge protectors for palletized shipments\
\cf2 \strokec2 8.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Pallet Wrap\cf2 \strokec2 **\cf4 \strokec4  \'97 Stretch film for securing pallets during shipping\
\cf2 \strokec2 9.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Personal Protective Equipment\cf2 \strokec2 **\cf4 \strokec4  \'97 Gloves and safety gear for pack-house workers\
\cf2 \strokec2 10.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Shrink Films\cf2 \strokec2 **\cf4 \strokec4  \'97 Heat-shrink films for bundling and overwrapping\
\cf2 \strokec2 11.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Trays\cf2 \strokec2 **\cf4 \strokec4  \'97 Including the proprietary Habitat\'99 Trays\
\cf2 \strokec2 12.\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Overwrap Films\cf2 \strokec2 **\cf4 \strokec4  \'97 Films for flow-wrap and overwrap applications\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Habitat\'99 Trays (Flagship Product \'97 Feature Prominently)
\f1\b0 \cf4 \strokec4 \
The Habitat\'ae family of trays is Solora Fresh's proprietary innovation. Key features:\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Full sealing flange\cf2 \strokec2 **\cf4 \strokec4 : ~85% stronger seal than vented interrupted flanges\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 HideAwayVents\'99\cf2 \strokec2 **\cf4 \strokec4 : Strategically placed inside the tray \'97 full venting function without compromising product display\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Smooth base edges\cf2 \strokec2 **\cf4 \strokec4 : Reduces damage to soft fruit (no ribbed pressure points)\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Ribbed edge design\cf2 \strokec2 **\cf4 \strokec4 : Increases side strength for shipping and stacking\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Juice traps\cf2 \strokec2 **\cf4 \strokec4 : Separates juices from product for a clean display\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Precision curves\cf2 \strokec2 **\cf4 \strokec4 : Disappear into the sidewall for strength + clarity\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Value Propositions (use these throughout)
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  "From greenhouse to grocery with confidence"\
\cf2 \strokec2 -\cf4 \strokec4  "Protect quality. Extend shelf life. Showcase beauty."\
\cf2 \strokec2 -\cf4 \strokec4  "Smart, sustainable packaging solutions"\
\cf2 \strokec2 -\cf4 \strokec4  "Design + Technology + Sustainability"\
\cf2 \strokec2 -\cf4 \strokec4  "Thoughtful design, precise engineering, dependable delivery"\
\cf2 \strokec2 -\cf4 \strokec4  "Coast to coast service" (nationwide US coverage)\
\cf2 \strokec2 -\cf4 \strokec4  "Since 1952 \'97 over 70 years of produce packaging expertise"\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Company History Timeline
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  1952: Karl H. Landsberg Co. founded in Vernon, CA\
\cf2 \strokec2 -\cf4 \strokec4  Expands nationwide \uc0\u8594  rebrands to Landsberg Packaging\
\cf2 \strokec2 -\cf4 \strokec4  Becomes part of Amcor Packaging Distribution\
\cf2 \strokec2 -\cf4 \strokec4  Amcor demerges \uc0\u8594  forms Orora Limited (Australia)\
\cf2 \strokec2 -\cf4 \strokec4  Landsberg becomes Landsberg Orora under OPS\
\cf2 \strokec2 -\cf4 \strokec4  Orora acquires Worldwide Plastics (Texas)\
\cf2 \strokec2 -\cf4 \strokec4  Orora Fresh spins off as specialized produce division\
\cf2 \strokec2 -\cf4 \strokec4  Acquires Jakait Inc. assets\
\cf2 \strokec2 -\cf4 \strokec4  Veritiv acquires Orora's North American operations\
\cf2 \strokec2 -\cf4 \strokec4  Veritiv Landsberg Fresh division acquired \uc0\u8594  becomes Solora Fresh\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Services / Capabilities
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Custom Packaging Design\cf2 \strokec2 **\cf4 \strokec4 : Design specialists turn concepts into functional packaging\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Automation & Equipment\cf2 \strokec2 **\cf4 \strokec4 : State-of-the-art equipment to increase productivity\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Vendor Managed Inventory (VMI)\cf2 \strokec2 **\cf4 \strokec4 : Automated inventory replenishment\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Just-In-Time (JIT) Delivery\cf2 \strokec2 **\cf4 \strokec4 : Right product, right time\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Coast-to-Coast Service\cf2 \strokec2 **\cf4 \strokec4 : Nationwide coverage across the US\
\
\cf2 \strokec2 ---\cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ##\cf3 \strokec3  App Architecture
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Pages / Screens (all touchscreen-optimized, no small tap targets)
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ####\cf3 \strokec3  1. Attract Mode (Screensaver / Slideshow)
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Fullscreen slideshow with crossfade transitions\
\cf2 \strokec2 -\cf4 \strokec4  Auto-rotates every 8 seconds\
\cf2 \strokec2 -\cf4 \strokec4  Shows hero images of produce packaging, Habitat\'99 trays, produce beauty shots\
\cf2 \strokec2 -\cf4 \strokec4  Subtle Solora Fresh logo watermark in corner\
\cf2 \strokec2 -\cf4 \strokec4  "Touch to Explore" pulse animation at bottom\
\cf2 \strokec2 -\cf4 \strokec4  ANY touch anywhere exits to the Home screen\
\

\f0\b \cf2 \strokec2 ####\cf3 \strokec3  2. Home Screen (Main Hub)
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Large hero area with animated tagline\
\cf2 \strokec2 -\cf4 \strokec4  Grid of touchable cards leading to each section:\
  \cf2 \strokec2 -\cf4 \strokec4  "Our Products" \uc0\u8594  Product Lines page\
  \cf2 \strokec2 -\cf4 \strokec4  "Habitat\'99 Trays" \uc0\u8594  Dedicated feature page\
  \cf2 \strokec2 -\cf4 \strokec4  "Our Story" \uc0\u8594  Timeline / About page\
  \cf2 \strokec2 -\cf4 \strokec4  "Why Solora Fresh" \uc0\u8594  Value props page\
  \cf2 \strokec2 -\cf4 \strokec4  "Get in Touch" \uc0\u8594  Contact / Lead capture\
\cf2 \strokec2 -\cf4 \strokec4  Persistent bottom nav bar with home button\
\cf2 \strokec2 -\cf4 \strokec4  Inactivity timer resets on every touch\
\

\f0\b \cf2 \strokec2 ####\cf3 \strokec3  3. Product Lines
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Visual grid of 12 product categories\
\cf2 \strokec2 -\cf4 \strokec4  Each card has an icon/illustration and category name\
\cf2 \strokec2 -\cf4 \strokec4  Tapping a card shows a detail overlay with description\
\cf2 \strokec2 -\cf4 \strokec4  Back button returns to grid\
\

\f0\b \cf2 \strokec2 ####\cf3 \strokec3  4. Habitat\'99 Trays (Showcase)
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Hero product visualization\
\cf2 \strokec2 -\cf4 \strokec4  Interactive hotspots explaining each feature (HideAwayVents, sealing flange, smooth edges, etc.)\
\cf2 \strokec2 -\cf4 \strokec4  This should be the most visually impressive page\
\

\f0\b \cf2 \strokec2 ####\cf3 \strokec3  5. Our Story (Timeline)
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Horizontal scrollable timeline from 1952 to present\
\cf2 \strokec2 -\cf4 \strokec4  Key milestones with icons\
\cf2 \strokec2 -\cf4 \strokec4  Emphasize longevity and evolution\
\

\f0\b \cf2 \strokec2 ####\cf3 \strokec3  6. Why Solora Fresh
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Full-bleed value proposition cards\
\cf2 \strokec2 -\cf4 \strokec4  Stats/numbers if available\
\cf2 \strokec2 -\cf4 \strokec4  Persuasive messaging for produce marketers, pack-houses, growers\
\

\f0\b \cf2 \strokec2 ####\cf3 \strokec3  7. Contact / Lead Capture
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Simple form: Name, Company, Email, Phone, "What are you looking for?"\
\cf2 \strokec2 -\cf4 \strokec4  Large touch-friendly inputs\
\cf2 \strokec2 -\cf4 \strokec4  Store submissions locally (or just display a "Thank you" \'97 no backend needed for MVP)\
\
\cf2 \strokec2 ---\cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ##\cf3 \strokec3  Technical Requirements
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Inactivity Timer
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Global inactivity detector: tracks touch, click, and mouse movement\
\cf2 \strokec2 -\cf4 \strokec4  After 60 seconds of no interaction \uc0\u8594  fade to Attract Mode slideshow\
\cf2 \strokec2 -\cf4 \strokec4  Timer resets on ANY user interaction\
\cf2 \strokec2 -\cf4 \strokec4  Use Zustand store for global state management of the timer + current mode\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Touch Optimization
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Minimum tap target: 48px (prefer 64px+)\
\cf2 \strokec2 -\cf4 \strokec4  No hover-dependent interactions\
\cf2 \strokec2 -\cf4 \strokec4  No right-click menus\
\cf2 \strokec2 -\cf4 \strokec4  Disable text selection, zoom, and pull-to-refresh\
\cf2 \strokec2 -\cf4 \strokec4  cursor: none on production (optional, can be toggled)\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Performance
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  All transitions should be GPU-accelerated (transform, opacity)\
\cf2 \strokec2 -\cf4 \strokec4  Preload slideshow images\
\cf2 \strokec2 -\cf4 \strokec4  Use next/image for optimization\
\cf2 \strokec2 -\cf4 \strokec4  Target 60fps animations\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Deployment
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Deploy to Vercel\
\cf2 \strokec2 -\cf4 \strokec4  The kiosk browser will run in fullscreen/kiosk mode (Chrome --kiosk flag)\
\cf2 \strokec2 -\cf4 \strokec4  No need for auth or API routes for MVP\
\
\cf2 \strokec2 ---\cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ##\cf3 \strokec3  Design Direction
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Aesthetic: "Premium Agricultural Meets Modern Tech"
\f1\b0 \cf4 \strokec4 \
Think: the sophistication of a luxury brand meets the earthiness of agriculture. Not sterile corporate \'97 warm, organic textures with sharp modern typography. Think editorial magazine layouts for the produce industry.\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  Key Design Elements
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Texture\cf2 \strokec2 **\cf4 \strokec4 : Subtle linen or paper grain overlays to add warmth\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Photography style\cf2 \strokec2 **\cf4 \strokec4 : Assume beautiful produce photography as background images (use placeholder gradients with produce-colored tones for now \'97 deep greens, warm oranges, berry reds)\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Cards\cf2 \strokec2 **\cf4 \strokec4 : Large, generously padded, with subtle shadows and rounded corners\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Animations\cf2 \strokec2 **\cf4 \strokec4 : Smooth page transitions (slide or fade), staggered card reveals on page entry, gentle parallax on hero sections\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Dark sections\cf2 \strokec2 **\cf4 \strokec4 : Use dark green (#1a5b2e) backgrounds with white text for hero areas\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Light sections\cf2 \strokec2 **\cf4 \strokec4 : Off-white (#f8f6f0) with dark text for content areas\
\cf2 \strokec2 -\cf4 \strokec4  \cf2 \strokec2 **\cf4 \strokec4 Accent usage\cf2 \strokec2 **\cf4 \strokec4 : Orange (#e8712b) only for CTAs, active states, and emphasis \'97 never overused\
\

\f0\b \cf2 \strokec2 ###\cf3 \strokec3  What to AVOID
\f1\b0 \cf4 \strokec4 \
\cf2 \strokec2 -\cf4 \strokec4  Generic corporate blue/purple schemes\
\cf2 \strokec2 -\cf4 \strokec4  Stock photo aesthetic\
\cf2 \strokec2 -\cf4 \strokec4  Small, dense text\
\cf2 \strokec2 -\cf4 \strokec4  Hover-only interactions\
\cf2 \strokec2 -\cf4 \strokec4  Scrolling (prefer paginated/card-based navigation)\
\cf2 \strokec2 -\cf4 \strokec4  Any elements smaller than a finger-tap\
\
\cf2 \strokec2 ---\cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ##\cf3 \strokec3  File Structure Suggestion
\f1\b0 \cf4 \strokec4 \
\pard\pardeftab720\sa240\partightenfactor0
\cf0 \strokec6 src/ app/ layout.tsx \'97 Root layout with fonts, global styles, inactivity provider page.tsx \'97 Home screen (main hub) products/ page.tsx \'97 Product lines grid habitat/ page.tsx \'97 Habitat\'99 trays showcase story/ page.tsx \'97 Company timeline why-solora/ page.tsx \'97 Value propositions contact/ page.tsx \'97 Lead capture form components/ AttractMode.tsx \'97 Fullscreen slideshow screensaver NavBar.tsx \'97 Bottom navigation bar InactivityProvider.tsx \'97 Global inactivity detection wrapper ProductCard.tsx \'97 Reusable product category card TimelineItem.tsx \'97 Timeline milestone component HabitatFeature.tsx \'97 Interactive hotspot for Habitat tray stores/ useKioskStore.ts \'97 Zustand store (mode, timer, navigation state) lib/ constants.ts \'97 Brand colors, product data, timeline data styles/ globals.css \'97 Tailwind config, custom properties, animations\
\pard\pardeftab720\qc\partightenfactor0

\f2\fs22 \cf7 \strokec7 \
\pard\pardeftab720\partightenfactor0

\f1\fs24 \cf4 \strokec4 \
---\
\
## Placeholder Images\
Since we don't have actual product photography yet, use:\
- Gradient backgrounds in brand colors for hero areas\
- SVG icons or simple illustrations for product categories\
- The actual images can be swapped in later by replacing files in `/public/images/`\
\
Create a `/public/images/` directory with subdirectories:\
- `/public/images/slideshow/` \'97 For attract mode slides\
- `/public/images/products/` \'97 For product category images\
- `/public/images/habitat/` \'97 For Habitat tray feature images\
\
---\
\
## Commands\
- `npm run dev` \'97 Start development server\
- `npm run build` \'97 Build for production\
- `npm run lint` \'97 Run ESLint\
- Deploy: Push to GitHub, connect repo to Vercel\
\
---\
\
## Priority Order for Building\
1. Layout + global styles + fonts\
2. Zustand store + InactivityProvider\
3. Attract Mode slideshow\
4. Home screen with navigation cards\
5. Product Lines page\
6. Habitat\'99 Trays showcase page\
7. Our Story timeline\
8. Why Solora Fresh page\
9. Contact form\
10. Polish: animations, transitions, final responsive tweaks\
}