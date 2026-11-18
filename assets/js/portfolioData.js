/**
 * Wasam Ali - Portfolio Data Store
 * Senior Brand & Systems Designer
 * International Typographic Style (Swiss Grid Architecture)
 */

const portfolioData = {
  profile: {
    name: "Wasam Ali",
    monogram: "wa.",
    title: "Senior Brand & Systems Designer",
    heroHeadline1: "Wasam Ali.",
    heroHeadline2: "Architecting Visual Systems for Aviation, Enterprise & Institutional Leaders.",
    availability: "Available for Select Leadership & Brand Systems Roles",
    yearsActive: "2020–2026",
    narrative: [
      "Over the past four years, I have shaped the visual and digital footprint of major players in aviation recruitment and training. At Spitfire Elite, I designed targeted conference footprints (booths, large-format backdrops, print collateral, and flyers) for key industry pipeline events—including NGPA, WAI, TPNx, PAPA, OBAP, LPA, and RTAG—while managing their online course curriculum, Kajabi web presence, webinars, and subscriber newsletters.",
      "As an active design lead for OBAP, I spearheaded the end-to-end visual identity and experiential footprint for their landmark 50th Anniversary conference, established the brand architecture and custom merchandise for OBAP Black Label, and continue to design their national conference systems, youth initiative collateral, and outreach campaigns.",
      "With 7+ years in design and a foundation in engineering, I infuse structural precision and logical workflows into every brand system I build."
    ],
    fluentStack: [
      "Adobe Creative Cloud (Illustrator, InDesign, Photoshop)",
      "Figma & Design Systems",
      "Kajabi LMS & Web Architecture",
      "Web UI Systems & Modern Frontend",
      "Generative AI Visual Workflows",
      "Large-Format Print Production & Exhibition Wayfinding"
    ],
    clientRoster: [
      "Spitfire Elite",
      "OBAP (Org. of Black Aerospace Professionals)",
      "Fresh Fruit Media",
      "Holland America Line",
      "Sacoor Brothers",
      "COTRA AG",
      "Stockton Rush Bartol Foundation",
      "College Advising Corps"
    ],
    email: "wasamali775@gmail.com",
    linkedin: "https://www.linkedin.com/in/wasamali",
    github: "https://github.com/wasamali",
    resumePdf: "./assets/Wasam-Ali-Resume.pdf"
  },

  // 4 Master Flagship Chapters
  chapters: [
    {
      id: "chapter-01",
      number: "01",
      client: "Spitfire Elite",
      timeline: "2022–2026",
      categoryMetadata: "Aviation Training Ecosystem & Multi-Conference Presence",
      gateTitle: "Spitfire Elite, From Expos to Platform.",
      summary: "Directed the comprehensive visual footprint across seven national aviation recruitment conferences alongside their digital learning platform and curriculum ecosystem.",
      confidentialityFootnote: "*Selected technical materials shown via cover art only; internal frameworks, curriculum data, and proprietary workflows have been redacted or blurred to respect client confidentiality.",
      deliverables: [
        "exhibition & booth graphics",
        "multi-conference print systems",
        "kajabi lms & web architecture",
        "proprietary courseware layouts",
        "digital retention & newsletters"
      ],
      subSections: [
        {
          id: "spitfire-exhibitions",
          title: "Flagship Exhibition & Multi-Conference Systems",
          description: "High-impact booth environments, 10ft & 20ft tension-fabric backdrops, podium wraps, and recruitment print collateral deployed across RTAG, WAI, NGPA, PAPA, LPA, OBAP, and TPNx.",
          aspectRatio: "16:9",
          label: "16:9 Exhibition Backdrop Mockup",
          tag: "Spatial & Print",
          specs: "Scalable Vector Architecture / CMYK Large-Format Dye Sublimation"
        },
        {
          id: "spitfire-courseware",
          title: "Proprietary Courseware & Technical Schematics",
          description: "Modular curriculum publication covers, syllabus books, interview preparation guidebooks, and pilot career roadmap schematics engineered for clarity and cognitive retention.",
          aspectRatio: "4:3",
          label: "4:3 Publication & Curriculum Cover Architecture",
          tag: "Editorial & Systems",
          specs: "Grid Hierarchy / Multi-Volume Standardization",
          isConfidential: true
        },
        {
          id: "spitfire-lms",
          title: "Digital Retention & Kajabi LMS Ecosystem",
          description: "End-to-end digital learning interface, video webinar presentation kits, checkout funnel graphics, and automated subscriber retention newsletters reaching thousands of prospective airline pilots.",
          aspectRatio: "16:9",
          label: "16:9 Kajabi LMS Portal & Web Architecture",
          tag: "Digital & UI",
          specs: "Custom UI Components / Automated Pipeline Design"
        }
      ]
    },
    {
      id: "chapter-02",
      number: "02",
      client: "OBAP",
      clientFull: "Organization of Black Aerospace Professionals",
      timeline: "2024–2026",
      categoryMetadata: "Milestone Identity, Environmental Systems & Ongoing Collateral",
      gateTitle: "OBAP.",
      summary: "Spearheaded the milestone 50th Anniversary visual identity, national aerospace conventions, custom merchandise line, and nationwide outreach campaigns.",
      subCases: [
        {
          id: "obap-50",
          index: "2.1",
          title: "OBAP 50, A Half-Century in Aerospace.",
          copy: "Thousands of Black aviation professionals gathered in Chicago for OBAP's 50th Anniversary celebration. Directed the milestone identity and full experiential venue system.",
          bullets: [
            "anniversary identity",
            "stage & environmental graphics",
            "gala program & print",
            "credentials & badging",
            "outreach campaigns"
          ],
          aspectRatio: "16:9",
          label: "16:9 Milestone Identity & Stage Graphic Architecture"
        },
        {
          id: "obap-black-label",
          index: "2.2",
          title: "OBAP, Black Label.",
          copy: "Developed the visual identity system and exclusive branded merchandise, from custom apparel to commemorative challenge coins.",
          bullets: [
            "brand identity system",
            "commemorative coins",
            "apparel & merch design",
            "promotional collateral",
            "campaign graphics"
          ],
          aspectRatio: "1:1",
          label: "1:1 Commemorative Challenge Coin & Apparel System"
        },
        {
          id: "obap-2025",
          index: "2.3",
          title: "OBAP 2025, Annual Aerospace Conference.",
          copy: "Visual identity adaptation, environmental wayfinding, and print collateral designed for the annual national aerospace convention.",
          bullets: [
            "event brand system",
            "environmental signage",
            "conference program book",
            "credentials & lanyards",
            "stage & digital displays"
          ],
          aspectRatio: "4:3",
          label: "4:3 National Convention Environmental Wayfinding & Print"
        },
        {
          id: "obap-initiatives",
          index: "2.4",
          title: "OBAP, Brand Collateral & Initiatives.",
          copy: "Ongoing visual collateral, youth program materials, and digital campaign assets developed to support OBAP's nationwide aerospace initiatives.",
          bullets: [
            "youth program collateral",
            "community outreach flyers",
            "editorial & print layouts",
            "digital campaign assets",
            "marketing one-pagers"
          ],
          aspectRatio: "16:9",
          label: "16:9 Nationwide Outreach & Educational Campaign Systems"
        }
      ]
    },
    {
      id: "chapter-03",
      number: "03",
      client: "Brand Systems & Communications",
      timeline: "2022–2026",
      categoryMetadata: "Identity Redesigns, Digital Platforms & Strategic Marketing Collateral",
      gateTitle: "Brand Systems & Strategic Communications.",
      summary: "Transforming regional foundations and national higher-education initiatives into compelling visual institutions through unified identity and digital experience.",
      subCases: [
        {
          id: "bartol-foundation",
          index: "3.1",
          title: "Bartol Foundation, Rebrand & Digital Experience.",
          copy: "Complete visual identity overhaul and responsive website redesign engineered to modernize the foundation's cultural grant-making footprint.",
          bullets: [
            "visual identity redesign",
            "responsive web ui",
            "brand guidelines",
            "digital asset system",
            "social & newsletter kits"
          ],
          aspectRatio: "16:9",
          label: "16:9 Institutional Rebrand & Responsive Web Interface"
        },
        {
          id: "college-advising-corps",
          index: "3.2",
          title: "College Advising Corps, Strategic Communications.",
          copy: "Strategic communications, donor one-pagers, and executive presentation materials engineered to articulate higher-education access and nationwide student impact.",
          bullets: [
            "strategic communications",
            "executive presentations",
            "donor one-pagers",
            "promotional print",
            "campaign graphics"
          ],
          aspectRatio: "4:3",
          label: "4:3 Executive Presentation Deck & Impact Reporting Architecture"
        }
      ]
    },
    {
      id: "chapter-04",
      number: "04",
      client: "Corporate Works",
      timeline: "2020–2026",
      categoryMetadata: "Corporate Communications, Editorial Systems & Brand Collateral",
      gateTitle: "Corporate Works.",
      summary: "Delivering architectural brand collateral, maritime communications, and editorial layouts for international hospitality, luxury retail, and logistics enterprises.",
      enterpriseAccounts: [
        {
          name: "Holland America Line",
          focus: "Maritime Executive Communications",
          description: "Maritime executive communications, onboard passenger collateral, internal executive briefings, and standardized corporate templates.",
          deliverables: ["maritime collateral", "internal executive decks", "brand compliance", "fleet communication templates"],
          aspectRatio: "4:3",
          label: "4:3 Holland America Maritime System"
        },
        {
          name: "Sacoor Brothers",
          focus: "Luxury Retail & Editorial Typography",
          description: "International luxury retail aesthetics, high-density corporate reports, promotional campaign guidelines, and precision editorial typography.",
          deliverables: ["luxury editorial layouts", "seasonal lookbooks", "retail guidelines", "brand typography systems"],
          aspectRatio: "4:3",
          label: "4:3 Sacoor Brothers Editorial Typography"
        },
        {
          name: "COTRA AG & Selected Initiatives",
          focus: "Transportation Logistics & Technical Marketing",
          description: "Transportation logistics identity, technical marketing collateral, vehicle branding schematics, and independent brand launch campaigns.",
          deliverables: ["logistics branding", "fleet schematics", "technical one-pagers", "marketing collateral"],
          aspectRatio: "4:3",
          label: "4:3 COTRA AG Technical Schematics"
        }
      ]
    }
  ],

  // Full Interactive Archive / Catalogue
  archive: [
    {
      index: "01",
      client: "Spitfire Elite",
      project: "Multi-Conference Exhibition Systems (7 National Expos)",
      category: "Environmental & Print",
      categoryKey: "environmental-print",
      deliverables: "10/20ft Backdrops, Booth Graphics, Flyers",
      year: "2024",
      aspectRatio: "16:9"
    },
    {
      index: "02",
      client: "Spitfire Elite",
      project: "Proprietary Aviation Training Curriculum",
      category: "Brand Identity",
      categoryKey: "brand-identity",
      deliverables: "Curriculum Covers, Study Guides, Pilot Schematics",
      year: "2023",
      aspectRatio: "4:3"
    },
    {
      index: "03",
      client: "Spitfire Elite",
      project: "Kajabi LMS Platform & Automated Newsletters",
      category: "Digital & Web",
      categoryKey: "digital-web",
      deliverables: "Web UI, Webinar Assets, Email Templates",
      year: "2024",
      aspectRatio: "16:9"
    },
    {
      index: "04",
      client: "OBAP",
      project: "50th Anniversary Landmark Conference & Gala",
      category: "Aviation & Aerospace",
      categoryKey: "aviation-aerospace",
      deliverables: "Identity, Stage Backdrop, Gala Book, Badging",
      year: "2026",
      aspectRatio: "16:9"
    },
    {
      index: "05",
      client: "OBAP Black Label",
      project: "Luxury Sub-Brand & Commemorative Merch",
      category: "Brand Identity",
      categoryKey: "brand-identity",
      deliverables: "Challenge Coins, Apparel, Packaging, Lookbook",
      year: "2025",
      aspectRatio: "1:1"
    },
    {
      index: "06",
      client: "OBAP",
      project: "2025 Annual Aerospace Convention Wayfinding",
      category: "Environmental & Print",
      categoryKey: "environmental-print",
      deliverables: "Wayfinding Totems, Program Book, Lanyards",
      year: "2025",
      aspectRatio: "4:3"
    },
    {
      index: "07",
      client: "OBAP",
      project: "Nationwide Aerospace Youth Outreach Campaigns",
      category: "Aviation & Aerospace",
      categoryKey: "aviation-aerospace",
      deliverables: "Campaign Graphics, Brochures, Social Assets",
      year: "2024",
      aspectRatio: "16:9"
    },
    {
      index: "08",
      client: "Bartol Foundation",
      project: "Comprehensive Rebrand & Responsive Web Experience",
      category: "Digital & Web",
      categoryKey: "digital-web",
      deliverables: "Brand Guidelines, Web UI System, Grant Collateral",
      year: "2023",
      aspectRatio: "16:9"
    },
    {
      index: "09",
      client: "College Advising Corps",
      project: "Strategic Communications & Executive Impact Decks",
      category: "Executive Comms",
      categoryKey: "executive-comms",
      deliverables: "Executive Presentation, Donor One-Pagers, Reports",
      year: "2024",
      aspectRatio: "4:3"
    },
    {
      index: "10",
      client: "Holland America Line",
      project: "Maritime Executive Communications & Onboard Collateral",
      category: "Executive Comms",
      categoryKey: "executive-comms",
      deliverables: "Briefing Decks, Passenger Collateral, Templates",
      year: "2022",
      aspectRatio: "4:3"
    },
    {
      index: "11",
      client: "Sacoor Brothers",
      project: "Luxury Retail Editorial & Corporate Brand Systems",
      category: "Brand Identity",
      categoryKey: "brand-identity",
      deliverables: "Editorial Typography, Lookbooks, Brand Book",
      year: "2021",
      aspectRatio: "4:3"
    },
    {
      index: "12",
      client: "COTRA AG",
      project: "Logistics Vehicle Branding & Technical Marketing Collateral",
      category: "Environmental & Print",
      categoryKey: "environmental-print",
      deliverables: "Fleet Graphics, Technical Schematics, One-Pagers",
      year: "2022",
      aspectRatio: "4:3"
    }
  ],

  // Value-Add Methodology Pillars
  methodology: [
    {
      number: "01",
      title: "Structural Systems Thinking",
      description: "An engineering foundation applied to brand architecture—building scalable design grids, templates, and guidelines that never break under pressure."
    },
    {
      number: "02",
      title: "Physical-to-Digital Continuity",
      description: "Seamless execution from 20-foot convention center stage backdrops and challenge coins down to responsive web UI and Kajabi LMS ecosystems."
    },
    {
      number: "03",
      title: "High-Volume Pipeline Velocity",
      description: "Proven track record managing end-to-end creative deliverables across 7+ annual aviation conferences and multi-brand corporate rosters simultaneously."
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: "Wasam transformed our presence across every major national aviation expo while keeping our digital curriculum and Kajabi platform cohesive, sharp, and conversion-focused.",
      attribution: "Executive Leadership, Aviation Training & Recruitment",
      context: "Aviation Training Leadership — Spitfire Elite Context"
    },
    {
      quote: "From architecting the historic OBAP 50th Anniversary visual identity to launching the Black Label sub-brand, Wasam delivers complex environmental and print systems with unmatched precision and reliability.",
      attribution: "Creative & Communications Leadership, Aerospace Sector",
      context: "Creative Direction / Aerospace Non-Profit Context"
    },
    {
      quote: "A rare designer who thinks like an engineer—able to translate dense institutional messaging into striking visual identities, responsive web interfaces, and executive decks.",
      attribution: "Institutional Partner, Non-Profit & Corporate Communications",
      context: "Enterprise & Institutional Clients"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
