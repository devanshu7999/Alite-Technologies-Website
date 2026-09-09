/**
 * Portfolio Data — Alite Technologies
 * ====================================
 * Edit this file to add, remove, or update portfolio projects.
 * Each project object supports the fields below.
 *
 * Fields:
 *   id            {string}   Unique slug (used for URLs & DOM ids)
 *   name          {string}   Project display name
 *   category      {string}   Filter key: "websites" | "reels" | "social" | "branding" | "growth"
 *   categoryLabel {string}   Human-readable category
 *   service       {string}   Specific sub-service
 *   client        {string}   Client / brand name (optional — leave "" if N/A)
 *   featured      {boolean}  Show in the Featured section
 *   thumbnail     {string}   Path or URL to thumbnail image (leave "" for placeholder)
 *   gallery       {string[]} Array of image paths for the case study
 *   videoUrl      {string}   Path/URL for video (optional)
 *   description   {string}   Short description for the card
 *   caseStudy     {object}   Detailed case-study content (see below)
 *
 * caseStudy fields:
 *   overview      {string}
 *   objective     {string}
 *   solution      {string}
 *   services      {string[]}
 *   results       {string}
 *   technologies  {string[]}
 *   projectUrl    {string}   Live project link (optional)
 */

const portfolioData = [

  /* ═══════════════════════════════════════
     WEBSITE DEVELOPMENT
     ═══════════════════════════════════════ */
  {
    id: "swastiq-corporation-website",
    name: "Swastiq Corporation",
    category: "websites",
    categoryLabel: "Website Development",
    service: "Business websites",
    client: "Swastiq Corporation",
    featured: false,
    thumbnail: "works/Websites_samples/Swastiq/1-swastiq.png",
    gallery: [
      "works/Websites_samples/Swastiq/1-swastiq.png",
      "works/Websites_samples/Swastiq/2-swastiq.png",
      "works/Websites_samples/Swastiq/3-swastiq.png",
      "works/Websites_samples/Swastiq/4-swastiq.png",
      "works/Websites_samples/Swastiq/5-swastiq.png",
      "works/Websites_samples/Swastiq/6-swastiq.png",
      "works/Websites_samples/Swastiq/7-swastiq.png",
      "works/Websites_samples/Swastiq/8-swastiq.png"
    ],
    videoUrl: "",
    description: "A modern, responsive business website for a leading chemical manufacturing corporation with product catalogues, about section, and brochure downloads.",
    caseStudy: {
      overview: "Swastiq Corporation is a trusted name in the chemical industry, engaged in manufacturing, importing, and exporting high-quality chemicals across Pan India and international markets. They needed a professional web presence that reflects their industry leadership.",
      objective: "Build a modern, clean business website that showcases their product range, communicates trust, and makes it easy for clients to download brochures and get in touch.",
      solution: "We designed a polished, gradient-driven hero section with strong typography, a clean About page that tells their story, a detailed Products section, and integrated brochure download functionality. The site was built fully responsive and SEO-optimized.",
      services: ["Web Design", "Responsive Development", "SEO Optimization", "Brochure Integration"],
      results: "Professional online presence established with a clean, modern identity that matches their industry credibility.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
      projectUrl: ""
    }
  },
  {
    id: "travelveda-website",
    name: "Travel Veda",
    category: "websites",
    categoryLabel: "Website Development",
    service: "Business websites",
    client: "Travel Veda",
    featured: false,
    thumbnail: "works/Websites_samples/Travelveda/1-Travelveda.png",
    gallery: [
      "works/Websites_samples/Travelveda/1-Travelveda.png",
      "works/Websites_samples/Travelveda/2-Travelveda.png",
      "works/Websites_samples/Travelveda/3-Travelveda.png"
    ],
    videoUrl: "",
    description: "A hospitality services website for Travel Veda featuring curated hotel, resort, and villa arrangements across India's top travel destinations.",
    caseStudy: {
      overview: "Travel Veda provides seamless hotel, resort, and villa arrangements tailored to travellers' needs. They needed a website that showcased their offerings and featured destinations across India.",
      objective: "Create a visually rich website that communicates trust, highlights their hospitality services, and showcases handpicked travel destinations.",
      solution: "We built a clean, service-oriented website with a teal-themed design featuring a hero section, dedicated service cards for Hotels, Resorts, and Villas, a destinations grid showcasing popular Indian locations, and a contact section for enquiries.",
      services: ["Web Design", "Responsive Development", "UI/UX Design"],
      results: "A professional online presence that positions Travel Veda as a reliable hospitality partner for travellers.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
      projectUrl: ""
    }
  },

  /* ═══════════════════════════════════════
     REELS & VIDEO EDITING
     ═══════════════════════════════════════ */
  {
    id: "indino-product-reels",
    name: "Indino Product Reels",
    category: "reels",
    categoryLabel: "Reels & Video Editing",
    service: "Instagram Reels",
    client: "Indino",
    featured: false,
    thumbnail: "works/Social-Media_samples/indino-reel-ss.png",
    gallery: [
      "works/Social-Media_samples/indino-page1.jpeg",
      "works/Social-Media_samples/indino-square.jpeg"
    ],
    videoUrl: "works/Social-Media_samples/indino-tee.mp4",
    description: "Scroll-stopping product showcase Reels for Indino's premium everyday essentials — featuring smooth transitions, close-up details, and on-brand captions.",
    caseStudy: {
      overview: "Indino, a modern clothing brand focused on everyday essentials, needed dynamic Reels that highlighted their product quality — from packaging to fabric detail.",
      objective: "Create engaging, fast-paced Reels that showcase Indino's premium T-shirts and essentials, driving views and profile visits on Instagram.",
      solution: "We produced clean, product-focused Reels with close-up fabric shots, unboxing sequences, smooth transitions, and minimal on-brand captions. Each Reel was optimized for Instagram's algorithm with trending audio and quick cuts.",
      services: ["Reel Editing", "Product Videography Direction", "Audio Sync", "Caption Design"],
      results: "Reels reached 10.3K+ views and significantly boosted profile engagement and product interest.",
      technologies: ["Adobe Premiere Pro", "After Effects", "CapCut"],
      projectUrl: "https://www.instagram.com/indino.co/"
    }
  },
  {
    id: "brand-showcase-videos",
    name: "Blue Oven Promotional Video",
    category: "reels",
    categoryLabel: "Reels & Video Editing",
    service: "Promotional videos",
    client: "The Blue Oven",
    featured: false,
    thumbnail: "works/Reels-Videos_samples/bo-reel-ss.png",
    gallery: [],
    videoUrl: "works/Reels-Videos_samples/Blue_oven_work.mp4",
    description: "High-energy promotional videos and product showcases edited with dynamic cuts, beat-synced transitions, and bold typography overlays.",
    caseStudy: {
      overview: "Multiple clients needed short-form promotional videos to showcase their products and services across social media platforms.",
      objective: "Produce punchy, visually engaging promotional videos that capture attention within the first few seconds and drive action.",
      solution: "We created dynamic, beat-synced videos with motivational sequences, bold text overlays, smooth transitions, and strong call-to-action endings. Each video was tailored to the client's brand voice.",
      services: ["Video Editing", "Motion Graphics", "Sound Design", "Color Grading"],
      results: "Videos used across Instagram, YouTube Shorts, and WhatsApp marketing — contributing to increased brand visibility.",
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      projectUrl: ""
    }
  },

  /* ═══════════════════════════════════════
     SOCIAL MEDIA CONTENT
     ═══════════════════════════════════════ */
  {
    id: "indino-social-media",
    name: "Indino Social Media",
    category: "social",
    categoryLabel: "Social Media Content",
    service: "Social media campaigns",
    client: "Indino",
    featured: true,
    thumbnail: "works/Social-Media_samples/indino-thumbnail.jpeg",
    gallery: [
      "works/Social-Media_samples/indino-page1.jpeg",
      "works/Social-Media_samples/indino-square.jpeg"
    ],
    videoUrl: "works/Social-Media_samples/indino-video.mp4",
    description: "Complete social media content creation for Indino — a premium everyday clothing brand — including Instagram posts, Reels, product carousels, and a cohesive visual identity.",
    caseStudy: {
      overview: "Indino makes everyday essentials with great colours, quality fabrics, and lasting comfort. They needed a cohesive social media presence that matched their premium product quality and communicated their 'Made For Today' brand message.",
      objective: "Build a professional, engaging Instagram presence from scratch — with consistent visuals, product showcases, and content that drives follows and engagement.",
      solution: "We developed a complete content strategy with a unified visual system — including clean product photography direction, carousel designs, Reel editing, story templates, and a consistent black-and-white minimalist aesthetic that lets the products speak. We created posts, product showcase Reels (10.3K+ views), carousel content, and brand messaging.",
      services: ["Content Strategy", "Post Design", "Reel Editing", "Carousel Design", "Brand Positioning"],
      results: "Built an engaged Instagram presence with 232+ followers organically, Reels reaching 10.3K views, and a professional brand image from day one.",
      technologies: ["Figma", "Adobe Premiere Pro", "Photoshop", "CapCut"],
      projectUrl: "https://www.indino.co"
    }
  },

  /* ═══════════════════════════════════════
     BRANDING & VISUAL DESIGN
     ═══════════════════════════════════════ */
  {
    id: "swastiq-brand-identity",
    name: "Swastiq Corporation Brand Identity",
    category: "branding",
    categoryLabel: "Branding & Visual Design",
    service: "Brand identity",
    client: "Swastiq Corporation",
    featured: false,
    thumbnail: "works/Branding_samples/Logo/swastiq-logo-thumbnail.png",
    gallery: [
      "works/Branding_samples/Logo/SWASTIQ-logo.png",
      "works/Websites_samples/Swastiq/1-swastiq.png",
      "works/Websites_samples/Swastiq/4-swastiq.png"
    ],
    videoUrl: "",
    description: "Complete brand identity for Swastiq Corporation — a chemical industry leader — featuring a distinctive interlinked cross logomark in gradient blue, reflecting trust and connectivity.",
    caseStudy: {
      overview: "Swastiq Corporation needed a distinctive visual identity that communicated trust, innovation, and their position in the chemical manufacturing industry. The brand needed to work across digital, print, and corporate materials.",
      objective: "Design a memorable logo and brand identity system that conveys reliability, modern industry leadership, and a strong professional image.",
      solution: "We created a unique interlinked cross logomark using gradient blue tones, symbolising connectivity and trust. The identity was carried across their website, brochures, and corporate collateral with a consistent colour palette and clean typography.",
      services: ["Logo Design", "Brand Identity", "Colour System", "Typography", "Website Branding"],
      results: "A cohesive brand identity adopted across all client touchpoints — website, brochures, and business communications.",
      technologies: ["Adobe Illustrator", "Figma"],
      projectUrl: "https://swastiqcorporation.com"
    }
  },
  {
    id: "flexforce-logo",
    name: "FlexForce Logo Design",
    category: "branding",
    categoryLabel: "Branding & Visual Design",
    service: "Logo design",
    client: "FlexForce",
    featured: false,
    thumbnail: "works/Branding_samples/Logo/flexforce-thumbnail.png",
    gallery: [
      "works/Branding_samples/Logo/FlexForce-logo.png"
    ],
    videoUrl: "",
    description: "A bold, modern wordmark logo for FlexForce — a sales outsourcing company — using a striking black and blue colour combination that conveys strength and professionalism.",
    caseStudy: {
      overview: "FlexForce, a sales outsourcing firm, needed a new logo that projected power, reliability, and modern professionalism.",
      objective: "Design a clean, impactful logo that works across digital platforms, print materials, brochures, and business cards.",
      solution: "We crafted a bold wordmark using a strong sans-serif typeface with 'Flex' in black and 'Force' in bright blue — creating a dynamic visual contrast that's instantly recognisable. The logo works seamlessly in both colour and monochrome.",
      services: ["Logo Design", "Brand Collateral", "Brochure Design"],
      results: "Logo adopted across all brand materials including a custom sales brochure and digital presence.",
      technologies: ["Adobe Illustrator", "Photoshop"],
      projectUrl: ""
    }
  },
  {
    id: "dynamic-polyblends-branding",
    name: "Dynamic Polyblends Identity",
    category: "branding",
    categoryLabel: "Branding & Visual Design",
    service: "Brand identity",
    client: "Dynamic Polyblends",
    featured: false,
    thumbnail: "works/Branding_samples/Cards/Dynamic card- Ankur/1.png",
    gallery: [
      "works/Branding_samples/Cards/Dynamic card- Ankur/1.png",
      "works/Branding_samples/Cards/Dynamic card- Ankur/2.png"
    ],
    videoUrl: "",
    description: "Vibrant brand identity for Dynamic Polyblends — including a flowing gradient logo with wave motifs, and a professional corporate business card design.",
    caseStudy: {
      overview: "Dynamic Polyblends, a polymer additives manufacturer, importer, and exporter based in Ahmedabad, needed a fresh brand identity that stood out in the industrial sector.",
      objective: "Create a vibrant, memorable logo and business card design that differentiates them in the industrial chemicals market while maintaining corporate professionalism.",
      solution: "We designed a bold, gradient wordmark using warm orange-to-red tones with flowing wave motifs that convey dynamism and innovation. The business card features a subtle world map background, reflecting their global reach, with clean layout and the Dynamic Corporation branding.",
      services: ["Logo Design", "Business Card Design", "Brand Collateral"],
      results: "A distinctive brand identity that sets Dynamic Polyblends apart from competitors in the industrial sector.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      projectUrl: ""
    }
  },
  {
    id: "akash-anant-logos",
    name: "Healthcare & Wellness Logos",
    category: "branding",
    categoryLabel: "Branding & Visual Design",
    service: "Logo design",
    client: "Akash Health Care & Anant Yoga Studio",
    featured: false,
    thumbnail: "works/Branding_samples/Logo/logo-design-02.png",
    gallery: [
      "works/Branding_samples/Logo/logo-design-02.png"
    ],
    videoUrl: "",
    description: "Thoughtful logo designs for healthcare and wellness brands — Akash Health Care with a medical-inspired motif, and Anant Yoga Studio with organic leaf and body forms.",
    caseStudy: {
      overview: "Two distinct brands in the healthcare and wellness space needed logo designs that communicated their unique identities — Akash Health Care for medical services and Anant Yoga Studio for holistic wellness.",
      objective: "Design versatile logos that work in both colour and monochrome, reflect each brand's industry, and create an immediate sense of trust and professionalism.",
      solution: "For Akash Health Care, we designed a drop-shaped 'A' motif with a medical cross accent in blue tones, conveying care and reliability. For Anant Yoga Studio, we created an organic leaf-and-body form in natural green tones with a warm yellow centre, symbolising growth and balance. Both logos include full colour specs and monochrome variants.",
      services: ["Logo Design", "Colour System", "Brand Variants"],
      results: "Both logos delivered with full colour specifications and monochrome adaptations ready for print and digital use.",
      technologies: ["Adobe Illustrator"],
      projectUrl: ""
    }
  },
  {
    id: "strides-inc-logo",
    name: "Strides Inc Logo",
    category: "branding",
    categoryLabel: "Branding & Visual Design",
    service: "Logo design",
    client: "Strides Inc",
    featured: false,
    thumbnail: "works/Branding_samples/Logo/strides-thumbnail.png",
    gallery: [
      "works/Branding_samples/Logo/strides-logo.png"
    ],
    videoUrl: "",
    description: "A bold, modern wordmark logo for Strides Inc with a subtle globe icon — conveying global reach and forward momentum.",
    caseStudy: {
      overview: "Strides Inc needed a logo that was clean, professional, and communicated their global business presence.",
      objective: "Design a simple yet memorable logo that conveys international reach and business momentum.",
      solution: "We created a bold sans-serif wordmark 'strides' in lowercase with a subtle globe icon integrated at the top-right, suggesting worldwide operations. The 'inc' is positioned as a subscript, maintaining hierarchy. The minimal design ensures versatility across all media.",
      services: ["Logo Design", "Brand Mark"],
      results: "A clean, versatile logo that works at any scale — from business cards to signage.",
      technologies: ["Adobe Illustrator"],
      projectUrl: ""
    }
  },
  {
    id: "ktc-business-card",
    name: "KTC Business Card",
    category: "branding",
    categoryLabel: "Branding & Visual Design",
    service: "Marketing creatives",
    client: "KTC",
    featured: false,
    thumbnail: "works/Branding_samples/Cards/Black and White Chief Executive Office Business Card (2)/1.png",
    gallery: [
      "works/Branding_samples/Cards/Black and White Chief Executive Office Business Card (2)/1.png",
      "works/Branding_samples/Cards/Black and White Chief Executive Office Business Card (2)/2.png"
    ],
    videoUrl: "",
    description: "A clean, professional black-and-white business card design for KTC — a jute and gunny bags manufacturer — with a bold, executive aesthetic.",
    caseStudy: {
      overview: "KTC, an old and new jute & gunny bags manufacturer based in Mahuva, Gujarat, needed a professional business card for their Managing Director that reflected a strong, executive image.",
      objective: "Design a clean, professional business card that communicates authority and reliability in the manufacturing industry.",
      solution: "We designed a minimalist black-and-white card with bold typography for the name and title, a custom 'K' monogram logo in a circular frame, and a clean layout for contact details including phone, email, and address. The vertical divider adds visual structure.",
      services: ["Business Card Design", "Logo Mark"],
      results: "A professional, print-ready business card that makes a strong first impression.",
      technologies: ["Adobe Illustrator", "Photoshop"],
      projectUrl: ""
    }
  },

  /* ═══════════════════════════════════════
     ONLINE PRESENCE GROWTH
     ═══════════════════════════════════════ */
  {
    id: "indino-online-growth",
    name: "Indino Digital Growth",
    category: "growth",
    categoryLabel: "Online Presence Growth",
    service: "Digital presence campaigns",
    client: "Indino",
    featured: false,
    thumbnail: "works/Social-Media_samples/indino-logo-thumbnail.png",
    gallery: [
      "works/Social-Media_samples/indino-page1.jpeg",
      "works/Social-Media_samples/indino-square.jpeg"
    ],
    videoUrl: "",
    description: "End-to-end digital presence strategy for Indino — building their brand from zero to a growing online community with a website, social content, and Reels.",
    caseStudy: {
      overview: "Indino launched as a new clothing brand with no digital footprint. They needed a complete digital presence strategy that included branding direction, an Instagram content engine, and a website — all working together to build awareness.",
      objective: "Establish Indino's digital presence from scratch, growing their audience and creating a professional brand image across all online touchpoints.",
      solution: "We developed a multi-channel strategy: a clean e-commerce-ready website at indino.co, a cohesive Instagram content strategy with product posts, Reels (reaching 10K+ views), and carousels, plus consistent brand messaging around their 'Made For Today' tagline.",
      services: ["Digital Strategy", "Social Media Growth", "Content Planning", "Brand Positioning"],
      results: "Built a complete digital ecosystem — website, Instagram (232+ followers), Reels with 10.3K+ views — all from zero.",
      technologies: ["Instagram", "Content Calendar", "Analytics Tools", "Social Platforms"],
      projectUrl: "https://www.instagram.com/indino.co/"
    }
  }
];
