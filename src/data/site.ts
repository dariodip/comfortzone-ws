import type {
  NavItem,
  CTA,
  ContactInfo,
  SocialLinks,
  ValueProposition,
  Space,
  Service,
  AudienceProfile,
  GalleryImage,
  FAQ,
  SEO,
} from "../types";

// ─── Info generali ───────────────────────────────────────────
export const site = {
  name: "Comfortzone",
  city: "Battipaglia",
  logo: "/logos/1.svg",

  // ─── Contatti (da compilare con dati reali) ────────────────
  contact: {
    phone: "",
    email: "",
    whatsapp: "",
    address: "",
    city: "Battipaglia",
    province: "SA",
    cap: "",
    mapsUrl: "",
    mapsEmbed: "",
  } satisfies ContactInfo,

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  } satisfies SocialLinks,

  // ─── Navigazione ──────────────────────────────────────────
  nav: [
    { label: "Perché noi", href: "#perche" },
    { label: "Spazi", href: "#spazi" },
    { label: "Servizi", href: "#servizi" },
    { label: "Per chi", href: "#per-chi" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contatti", href: "#contatti" },
    { label: "Dove siamo", href: "#dove-siamo" },
  ] satisfies NavItem[],

  // ─── Hero ─────────────────────────────────────────────────
  hero: {
    title: "Il tuo spazio di lavoro nel centro di Battipaglia",
    subtitle:
      "Comfortzone è il coworking pensato per freelance, aziende, startup e professionisti che cercano uno spazio flessibile, accogliente e sempre pronto per lavorare al meglio.",
    ctaPrimary: {
      label: "Richiedi informazioni",
      href: "#contatti",
    } satisfies CTA,
    ctaSecondary: {
      label: "Scopri gli spazi",
      href: "#spazi",
    } satisfies CTA,
  },

  // ─── Perché Comfortzone ───────────────────────────────────
  why: {
    title: "Perché Comfortzone",
    subtitle:
      "Lo spazio di lavoro ideale per chi vuole concentrarsi su ciò che conta, in un ambiente curato e professionale nel cuore di Battipaglia.",
    items: [
      {
        icon: "location",
        title: "Posizione centrale",
        description:
          "Nel cuore di Battipaglia, facilmente raggiungibile e ben collegato. Il tuo ufficio a due passi da tutto.",
      },
      {
        icon: "professional",
        title: "Ambiente professionale",
        description:
          "Spazi curati, moderni e pensati per lavorare con serietà e comfort, senza rinunciare all'accoglienza.",
      },
      {
        icon: "flexibility",
        title: "Flessibilità totale",
        description:
          "Soluzioni adatte a ogni esigenza: dalla singola giornata alla postazione fissa, dall'area condivisa all'ufficio privato.",
      },
      {
        icon: "clock",
        title: "Accesso 24/7",
        description:
          "Lavora quando vuoi, senza vincoli: il tuo spazio è sempre disponibile, 24 ore su 24, 7 giorni su 7.",
      },
      {
        icon: "services",
        title: "Servizi inclusi",
        description:
          "Wi-Fi veloce, caffè, aree comuni e tutto il necessario per essere produttivi fin dal primo giorno.",
      },
      {
        icon: "team",
        title: "Per singoli e team",
        description:
          "Ideale sia per il lavoro individuale sia per piccoli team che cercano un ambiente collaborativo.",
      },
    ] satisfies ValueProposition[],
  },

  // ─── Spazi ────────────────────────────────────────────────
  spaces: {
    title: "I nostri spazi",
    subtitle:
      "Scegli la soluzione più adatta alle tue esigenze: postazioni flessibili per lavorare in libertà o uffici privati per il tuo team.",
    items: [
      {
        id: "flex-desk",
        type: "flex-desk",
        title: "Postazione flessibile",
        description:
          "Una scrivania in un ambiente condiviso e stimolante, ideale per chi cerca un luogo professionale senza vincoli di lungo periodo. Perfetta per freelance e smart worker.",
        features: [
          "Scrivania ergonomica",
          "Wi-Fi ad alta velocità",
          "Accesso alle aree comuni",
          "Caffè incluso",
          "Accesso 24/7",
        ],
        ctaLabel: "Richiedi informazioni",
        image: "/images/space/flex-desk.jpg",
      },
      {
        id: "private-office",
        type: "private-office",
        title: "Ufficio privato",
        description:
          "Uno spazio riservato e dedicato per il tuo team, con la privacy e la concentrazione di un ufficio tutto tuo. Ideale per aziende, startup e professionisti.",
        features: [
          "Spazio dedicato e riservato",
          "Arredamento professionale",
          "Wi-Fi dedicato",
          "Accesso autonomo 24/7",
          "Personalizzabile",
        ],
        ctaLabel: "Richiedi informazioni",
        image: "/images/space/private-office.jpg",
      },
    ] satisfies Space[],
  },

  // ─── Servizi ──────────────────────────────────────────────
  services: {
    title: "Servizi inclusi",
    subtitle:
      "Tutto quello che ti serve per lavorare al meglio, senza pensieri.",
    items: [
      {
        icon: "wifi",
        title: "Wi-Fi veloce",
        description:
          "Connessione internet ad alta velocità, stabile e sicura per lavorare senza interruzioni.",
      },
      {
        icon: "coffee",
        title: "Caffè",
        description:
          "Area caffè sempre disponibile, perché le migliori idee nascono anche davanti a una tazza.",
      },
      {
        icon: "clock",
        title: "Accesso 24/7",
        description:
          "Accesso autonomo al tuo spazio di lavoro in qualsiasi momento, giorno e notte.",
      },
      {
        icon: "briefcase",
        title: "Ambiente professionale",
        description:
          "Spazi curati e attrezzati per ricevere clienti e collaboratori in un contesto adeguato.",
      },
      {
        icon: "desk",
        title: "Postazioni flessibili",
        description:
          "Scrivanie ergonomiche in area condivisa, perfette per lavorare in compagnia.",
      },
      {
        icon: "office",
        title: "Uffici privati",
        description:
          "Stanze riservate per chi ha bisogno di privacy e concentrazione.",
      },
    ] satisfies Service[],
  },

  // ─── Target / Per chi è pensato ───────────────────────────
  audience: {
    title: "Per chi è pensato",
    subtitle:
      "Comfortzone è lo spazio di lavoro a Battipaglia adatto a chi cerca flessibilità, professionalità e un ambiente che ispira.",
    items: [
      {
        icon: "laptop",
        title: "Freelance",
        description:
          "Uno spazio professionale fuori casa, dove concentrarti e incontrare altri professionisti.",
      },
      {
        icon: "building",
        title: "Aziende",
        description:
          "Un punto d'appoggio flessibile in centro a Battipaglia, senza i costi di un ufficio tradizionale.",
      },
      {
        icon: "rocket",
        title: "Startup",
        description:
          "L'ambiente giusto per far crescere la tua idea, con spazi scalabili e una community stimolante.",
      },
      {
        icon: "home",
        title: "Smart worker",
        description:
          "Stanco del salotto? Trova il tuo spazio di lavoro dedicato, produttivo e confortevole.",
      },
      {
        icon: "briefcase",
        title: "Professionisti locali",
        description:
          "Un indirizzo professionale nel centro di Battipaglia per ricevere clienti e collaboratori.",
      },
      {
        icon: "globe",
        title: "Nomadi digitali",
        description:
          "Un punto d'appoggio accogliente e connesso per chi lavora da ovunque, anche da Battipaglia.",
      },
    ] satisfies AudienceProfile[],
  },

  // ─── Gallery ──────────────────────────────────────────────
  gallery: {
    title: "Il nostro spazio",
    subtitle: "Scopri gli ambienti di Comfortzone.",
    images: [
      {
        src: "/images/gallery/coworking-space-1.jpg",
        alt: "Area coworking open space di Comfortzone a Battipaglia",
      },
      {
        src: "/images/gallery/coworking-space-2.jpg",
        alt: "Postazioni di lavoro flessibili nel coworking Comfortzone",
      },
      {
        src: "/images/gallery/private-office.jpg",
        alt: "Ufficio privato nel coworking Comfortzone a Battipaglia",
      },
      {
        src: "/images/gallery/common-area.jpg",
        alt: "Area comune e relax nel coworking Comfortzone",
      },
      {
        src: "/images/gallery/meeting-area.jpg",
        alt: "Area meeting e collaborazione in Comfortzone",
      },
      {
        src: "/images/gallery/coffee-area.jpg",
        alt: "Area caffè nel coworking Comfortzone Battipaglia",
      },
    ] satisfies GalleryImage[],
  },

  // ─── Form contatti ────────────────────────────────────────
  contactForm: {
    title: "Contattaci",
    subtitle:
      "Hai bisogno di informazioni o vuoi visitare il nostro spazio? Compila il form e ti ricontatteremo al più presto.",
    requestTypes: [
      "Postazione flessibile",
      "Ufficio privato",
      "Visita dello spazio",
      "Informazioni generali",
    ],
    ctaLabel: "Invia richiesta",
    privacyText:
      'Ho letto e accetto la <a href="/privacy" class="link link-primary">Privacy Policy</a> e acconsento al trattamento dei miei dati personali ai sensi del GDPR.',
  },

  // ─── Dove siamo ───────────────────────────────────────────
  location: {
    title: "Dove siamo",
    subtitle:
      "Comfortzone si trova nel centro di Battipaglia, facilmente raggiungibile in auto e con i mezzi pubblici.",
  },

  // ─── FAQ ──────────────────────────────────────────────────
  faq: {
    title: "Domande frequenti",
    subtitle:
      "Le risposte alle domande più comuni su Comfortzone e i nostri servizi.",
    items: [
      {
        question: "Come posso prenotare una postazione o un ufficio?",
        answer:
          "Puoi compilare il form contatti in questa pagina, scriverci via email o chiamarci. Ti ricontatteremo per trovare la soluzione più adatta alle tue esigenze.",
      },
      {
        question: "Devo impegnarmi per un periodo minimo?",
        answer:
          "No, le nostre postazioni flessibili non richiedono impegni a lungo termine. Per gli uffici privati possiamo concordare soluzioni personalizzate in base alle tue necessità.",
      },
      {
        question: "Posso visitare lo spazio prima di decidere?",
        answer:
          'Certo! Puoi prenotare una visita gratuita compilando il form contatti e selezionando "Visita dello spazio". Saremo felici di mostrarti i nostri ambienti.',
      },
      {
        question: "È possibile accedere allo spazio di sera o nel weekend?",
        answer:
          "Sì, Comfortzone offre accesso 24/7 a tutti i membri. Puoi lavorare quando preferisci, senza vincoli di orario.",
      },
      {
        question: "Il Wi-Fi è incluso?",
        answer:
          "Sì, la connessione Wi-Fi ad alta velocità è inclusa in tutte le nostre soluzioni, sia per le postazioni flessibili che per gli uffici privati.",
      },
      {
        question: "Posso ricevere clienti nello spazio?",
        answer:
          "Assolutamente sì. I nostri spazi sono pensati per accogliere anche i tuoi clienti e collaboratori in un ambiente professionale e curato.",
      },
    ] satisfies FAQ[],
  },

  // ─── Footer ───────────────────────────────────────────────
  footer: {
    quickLinks: [
      { label: "Spazi", href: "#spazi" },
      { label: "Servizi", href: "#servizi" },
      { label: "Contatti", href: "#contatti" },
      { label: "Dove siamo", href: "#dove-siamo" },
      { label: "FAQ", href: "#faq" },
    ] satisfies NavItem[],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookie" },
    ] satisfies NavItem[],
  },

  // ─── SEO ──────────────────────────────────────────────────
  seo: {
    title: "Comfortzone | Coworking in centro a Battipaglia",
    description:
      "Comfortzone è il coworking in centro a Battipaglia per freelance, aziende, startup e professionisti. Postazioni flessibili, uffici privati, Wi-Fi, caffè e accesso 24/7.",
    canonical: "",
    ogImage: "/images/og-image.jpg",
    keywords: [
      "coworking Battipaglia",
      "coworking centro Battipaglia",
      "uffici privati Battipaglia",
      "postazioni flessibili Battipaglia",
      "spazio di lavoro Battipaglia",
    ],
  } satisfies SEO,
};