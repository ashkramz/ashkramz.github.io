/* =============================================================================
   ★ THE ONE FILE YOU EDIT ★
   Everything guests read on the website comes from this file.

   HOW TO EDIT SAFELY (see CONTENT-GUIDE.md for the friendly version):
   • Only change the words INSIDE the "quotes".
   • Never delete the quotes, the commas at the end of lines, or the [ ] { }.
   • To add a schedule event / hotel / FAQ, copy one full { ... } block,
     paste it right below, and edit the text. Keep the comma between blocks.
   • Anything marked [TBD] is a placeholder — replace it when you have details.
   ========================================================================== */

/* ---- Types (these give you gentle guardrails; you don't need to read them) -- */
export interface NavLink {
  label: string;
  href: string;
}
export interface ScheduleEvent {
  title: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  note: string;
  attire: string;
}
export interface TravelSection {
  heading: string;
  body: string[];
}
export interface Hotel {
  name: string;
  neighborhood: string;
  priceTier: string; // e.g. "$$", "$$$"
  distance: string;
  description: string;
  bookingUrl: string;
  bookingLabel: string;
  image: string; // file in /public/images
  imageAlt: string;
}
export interface RegistryLink {
  label: string;
  url: string;
}
export interface FaqItem {
  q: string;
  a: string;
}
export interface GalleryPhoto {
  src: string; // file in /public/images/gallery
  alt: string; // short description (for screen readers + search engines)
}

/* ============================================================================
   1. THE BASICS  — names, date, location, browser/SEO details
   ========================================================================== */
export const site = {
  /* The names. partnerA shows first throughout the site. */
  couple: {
    partnerA: "Ashley Kramer",
    partnerB: "Michael Sakazaki",
    firstNames: "Ashley & Michael",
    monogram: "A · M", // small mark used in the header/footer
  },

  /* The wedding date.
     - dateISO MUST stay in YYYY-MM-DDTHH:MM format — the countdown reads it.
     - dateDisplay / dayOfWeek are just the words guests see. */
  wedding: {
    dateISO: "2027-02-13T16:00:00", // 4:00 PM on Feb 13, 2027 (adjust the time when set)
    dateDisplay: "February 13, 2027",
    dayOfWeek: "Saturday",
    location: "Oʻahu, Hawaiʻi",
    locationLong: "The Island of Oʻahu, Hawaiʻi",
  },

  /* Browser tab title + search/social description. */
  meta: {
    title: "Ashley & Michael — February 13, 2027",
    description:
      "Ashley Kramer & Michael Sakazaki are getting married on Oʻahu, Hawaiʻi, on Saturday, February 13, 2027. Find the schedule, travel details, where to stay, and RSVP here.",
    /* Social-share image (shown when the link is texted or posted). 1200x630. */
    ogImage: "/og-share.jpg",
  },

  /* The menu, in order. Remove a line to hide a page from the menu. */
  nav: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Schedule", href: "/schedule" },
    { label: "Travel", href: "/travel" },
    { label: "Where to Stay", href: "/where-to-stay" },
    { label: "RSVP", href: "/rsvp" },
    { label: "Registry", href: "/registry" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],

  /* ==========================================================================
     2. HOME PAGE
     ======================================================================== */
  home: {
    heroEyebrow: "We're getting married",
    heroImage: "/images/hero-home.webp", // see public/images/IMAGE-GUIDE.md
    heroImageAlt: "Ashley and Michael on the coast of Oʻahu at golden hour",
    ctaLabel: "RSVP",
    ctaHref: "/rsvp",
    welcomeHeading: "Aloha, and welcome",
    welcomeBody: [
      "We are so grateful you're here. After years of building a life together, we can't wait to celebrate our marriage with the people we love most — on the island that has always felt like home to us.",
      "Below you'll find everything you need to plan your trip: our schedule, travel and hotel guidance, and where to RSVP. We can't wait to share these days with you.",
    ],
    quickLinks: [
      { label: "Schedule", href: "/schedule" },
      { label: "Travel", href: "/travel" },
      { label: "RSVP", href: "/rsvp" },
    ] as NavLink[],
  },

  /* ==========================================================================
     3. OUR STORY
     ======================================================================== */
  story: {
    eyebrow: "Our Story",
    title: "How we got here",
    image: "/images/our-story-1.webp",
    imageAlt: "Ashley and Michael together",
    /* Each item in this list becomes a paragraph. Edit freely. [TBD] */
    paragraphs: [
      "[TBD — How you met.] Tell the story of where your paths first crossed: the city, the season, the moment one of you knew this was something different.",
      "[TBD — Your life together.] A few lines about the years between then and now — the trips, the apartment, the inside jokes, the way Oʻahu became your shared place.",
      "[TBD — The proposal.] Where it happened, who cried first, and how you both said yes to forever.",
    ],
    quote:
      "Of all the places in the world, we chose the one that brought us together.",
  },

  /* ==========================================================================
     3b. PHOTO GALLERY  — shows at the bottom of the Our Story page.
     To add a photo: drop the file into  public/images/gallery/  (see that
     folder's instructions in public/images/IMAGE-GUIDE.md), then copy one
     { ... } line below, paste it, and update the filename + description.
     Portrait and landscape photos both look great here.
     ======================================================================== */
  gallery: {
    eyebrow: "Moments",
    title: "A Few of Our Favorites",
    intro: "Some of the moments that brought us here. More to come after the big day.",
    photos: [
      { src: "/images/gallery/gallery-1.webp", alt: "[TBD — describe this photo]" },
      { src: "/images/gallery/gallery-2.webp", alt: "[TBD — describe this photo]" },
      { src: "/images/gallery/gallery-3.webp", alt: "[TBD — describe this photo]" },
      { src: "/images/gallery/gallery-4.webp", alt: "[TBD — describe this photo]" },
      { src: "/images/gallery/gallery-5.webp", alt: "[TBD — describe this photo]" },
      { src: "/images/gallery/gallery-6.webp", alt: "[TBD — describe this photo]" },
    ] as GalleryPhoto[],
  },

  /* ==========================================================================
     4. SCHEDULE  — add/remove events by copying a { ... } block
     ======================================================================== */
  schedule: {
    intro:
      "A weekend of celebration on Oʻahu. Final times will be confirmed closer to the date — please check back, and watch your invitation for any updates.",
    events: [
      {
        title: "Catholic Ceremony",
        day: "Saturday, February 13, 2027",
        time: "10:00 AM",
        venue: "Mystical Rose Oratory, Chaminade University",
        address: "3140 Waialae Avenue, Honolulu, HI 96816",
        note: "We will be married in a Catholic Mass. Please plan to arrive 20–30 minutes early to be seated before the ceremony begins.",
        attire: "Island Formal",
      },
      {
        title: "Pau Hana",
        day: "Saturday, February 13, 2027",
        time: "5:30 PM",
        venue: "La Pietra",
        address: "2933 Poni Moi Rd, Honolulu, HI 96815",
        note: "Cocktail hour to follow the ceremony.",
        attire: "Isalnd Formal",
      },
      {
        title: "Reception",
        day: "Saturday, February 13, 2027",
        time: "6:30 PM",
        venue: "La Pietra - Main Corridor",
        address: "2933 Poni Moi Rd, Honolulu, HI 96815",
        note: "Dinner, and dancing to follow the Cocktail hour. Come ready to celebrate",
        attire: "Island casual",
      },
    ] as ScheduleEvent[],
  },

  /* ==========================================================================
     5. TRAVEL
     ======================================================================== */
  travel: {
    intro:
      "Most guests will fly into Honolulu and stay near Waikīkī and Diamond Head, just minutes from our celebrations. Here's what we suggest for a smooth trip.",
    bannerImage: "/images/travel-banner.webp",
    bannerImageAlt: "Aerial view of the Oʻahu coastline",
    sections: [
      {
        heading: "Getting here",
        body: [
          "Fly into Daniel K. Inouye International Airport (airport code HNL) in Honolulu — the main airport for Oʻahu, served by direct flights from most major U.S. cities.",
          "February is a popular time to visit Hawaiʻi, so we recommend booking flights early for the best fares.",
        ],
      },
      {
        heading: "Getting around the island",
        body: [
          "A rental car is the easiest way to explore Oʻahu, and we recommend one if you'd like to sightsee. Reserve early, as cars book up around busy weekends.",
          "Rideshare (Uber and Lyft) and taxis are readily available in Honolulu and Waikīkī if you'd rather not drive. Our venues are a short ride from most hotels.",
        ],
      },
      {
        heading: "Parking & directions",
        body: [
          "[TBD — Parking guidance for the ceremony and reception, including whether valet or self-parking is available.]",
          "Driving times between Waikīkī, the ceremony, and the reception are all roughly 10–20 minutes.",
        ],
      },
      {
        heading: "Weather & what to pack",
        body: [
          "February on Oʻahu is warm and pleasant — generally in the high 70s to low 80s°F by day and cooler in the evening, with a chance of passing showers.",
          "Bring a light layer for the evening, comfortable shoes, sunscreen, and your formalwear for the wedding day. An umbrella never hurts.",
        ],
      },
    ] as TravelSection[],
  },

  /* ==========================================================================
     6. WHERE TO STAY  — add/remove hotels by copying a { ... } block
     ======================================================================== */
  stay: {
    intro:
      "We recommend staying near Waikīkī or Diamond Head to be close to the celebrations. Here are a few options across price ranges. (We'll note any room blocks here once arranged.)",
    roomBlockNote:
      "[TBD — If you reserve a hotel room block, add the hotel name, booking link, and code here so guests can book at your group rate.]",
    hotels: [
      {
        name: "[TBD — Hotel Name]",
        neighborhood: "Waikīkī / Diamond Head",
        priceTier: "$$$",
        distance: "≈ 10 min to the ceremony",
        description:
          "A refined oceanfront option for guests who'd like to be steps from the water and a short drive from our venues.",
        bookingUrl: "#",
        bookingLabel: "View hotel",
        image: "/images/hotel-1.webp",
        imageAlt: "[TBD — Hotel exterior]",
      },
      {
        name: "[TBD — Hotel Name]",
        neighborhood: "Waikīkī",
        priceTier: "$$",
        distance: "≈ 15 min to the ceremony",
        description:
          "A comfortable mid-range choice in the heart of Waikīkī, close to dining, the beach, and rideshare.",
        bookingUrl: "#",
        bookingLabel: "View hotel",
        image: "/images/hotel-2.webp",
        imageAlt: "[TBD — Hotel exterior]",
      },
      {
        name: "[TBD — Hotel Name]",
        neighborhood: "Kāhala",
        priceTier: "$$$$",
        distance: "≈ 10 min to the reception",
        description:
          "A quiet, luxurious retreat just east of Diamond Head for guests who'd like a special stay.",
        bookingUrl: "#",
        bookingLabel: "View hotel",
        image: "/images/hotel-3.webp",
        imageAlt: "[TBD — Hotel exterior]",
      },
    ] as Hotel[],
  },

  /* ==========================================================================
     7. RSVP
     To turn the RSVP form on: create a form at https://tally.so, publish it,
     copy its share link (looks like https://tally.so/r/XXXXXX), and paste it
     between the quotes below. Leave it as "" to show a "coming soon" message.
     ======================================================================== */
  rsvp: {
    intro:
      "We would be honored to have you celebrate with us. Kindly let us know if you can join by the date below.",
    deadline: "[TBD — e.g. December 1, 2026]",
    formEmbedUrl: "", // paste your Tally form link here, e.g. "https://tally.so/r/abc123"
    fallbackEmail: "[TBD — your-email@example.com]",
  },

  /* ==========================================================================
     8. REGISTRY
     ======================================================================== */
  registry: {
    eyebrow: "Registry",
    note: "Your presence on Oʻahu is the greatest gift of all. For those who have asked, we've gathered a few things here — and a contribution toward our honeymoon is always appreciated.",
    bannerImage: "/images/registry-banner.webp",
    bannerImageAlt: "A quiet still life",
    /* Add your registry links here. Remove the [TBD] ones until you have them. */
    links: [
      { label: "[TBD — Registry Name]", url: "#" },
      { label: "[TBD — Honeymoon Fund]", url: "#" },
    ] as RegistryLink[],
  },

  /* ==========================================================================
     9. FAQ  — add/remove questions by copying a { ... } block
     ======================================================================== */
  faq: {
    intro:
      "A few answers to help you plan. Don't see your question? Reach out any time on the Contact page.",
    items: [
      {
        q: "What should I wear?",
        a: "The ceremony and reception are formal / black-tie optional. Think elegant island formal — a cooling breeze is likely in the evening, so a light layer is a good idea. [TBD — adjust to your preference.]",
      },
      {
        q: "Are children welcome?",
        a: "[TBD — State your kids policy here, e.g. 'We love your little ones, but our celebration will be adults-only,' or 'Children are welcome.']",
      },
      {
        q: "Can I bring a guest?",
        a: "[TBD — State your plus-one policy here.] Your invitation will indicate the number of seats reserved in your honor.",
      },
      {
        q: "Where exactly are the ceremony and reception?",
        a: "The Catholic ceremony will be held at the Mystical Rose Oratory on the Chaminade University campus, with the reception to follow at La Pietra. Full addresses and times are on the Schedule page. [TBD — confirm details.]",
      },
      {
        q: "What's the weather like in February?",
        a: "Warm and pleasant — typically high 70s to low 80s°F during the day, cooler in the evening, with a chance of brief passing showers. See the Travel page for packing tips.",
      },
      {
        q: "How do I get around the island?",
        a: "A rental car is easiest if you'd like to explore, and rideshare is readily available around Honolulu and Waikīkī. Our venues are a short ride from most hotels. More on the Travel page.",
      },
      {
        q: "When should I RSVP by?",
        a: "Please RSVP by the date noted on the RSVP page so we can finalize our headcount. [TBD — confirm deadline.]",
      },
      {
        q: "Is there a registry?",
        a: "Your presence is the greatest gift. For those who've asked, a few options — including a honeymoon contribution — are on the Registry page.",
      },
    ] as FaqItem[],
  },

  /* ==========================================================================
     10. CONTACT
     ======================================================================== */
  contact: {
    intro:
      "Have a question about the weekend, travel, or anything else? We're happy to help.",
    email: "[TBD — your-email@example.com]",
    phone: "", // optional — leave "" to hide
    coordinatorName: "", // optional — name of a planner/contact, leave "" to hide
    note: "For the quickest answer, take a look at the FAQ first — and if you still need us, reach out below.",
  },

  /* ==========================================================================
     FOOTER
     ======================================================================== */
  footer: {
    note: "With love and gratitude — we can't wait to celebrate with you.",
  },
};

export type Site = typeof site;
