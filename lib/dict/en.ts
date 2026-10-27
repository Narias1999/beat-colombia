// English dictionary (default locale).
// Images hotlink the original site's real assets on the Uploadcare CDN.

import { routes, ext, uc, ORIGINAL } from '../config';
import { localePath } from '../i18n';

const p = (path: string) => localePath('en', path);

export const en = {
  /* ------------------------------------------------------------------ UI -- */
  ui: {
    htmlLang: 'en',
    joinNow: 'Join Now!',
    shop: 'Shop',
    login: 'Log in',
    account: 'Account',
    home: 'BEAT Cycling Club home',
    menu: 'Menu',
    partnersHeading: 'Official Partners & Suppliers',
    footerBlurb:
      'BEAT Cycling Club — a rider-owned club for everyone who wants more out of cycling, on and off the bike.',
    footerRights: '© 2026 BEAT Cycling Club. All rights reserved.',
    footerBuilt: 'English clone — built with Next.js (SSG).',
    poweredBy: 'Powered by',
  },

  meta: {
    home: {
      title: 'BEAT Cycling Club — the first professional cycling club',
      description:
        'Join the first professional cycling club: 1,500 members, a pro team, challenges, events and exclusive member benefits.',
    },
    club: { title: 'The Club – BEAT Cycling Club' },
    benefits: { title: 'Member Benefits – BEAT Cycling Club' },
    clubhouse: { title: 'Online Clubhouse – BEAT Cycling Club' },
    join: { title: 'Become a Member – BEAT Cycling Club' },
    challenges: { title: 'Challenges 2026 – BEAT Cycling Club' },
    about: { title: 'About BEAT – BEAT Cycling Club' },
  },

  nav: [
    { label: 'About BEAT', href: p(routes.about) },
    { label: 'First Team', href: ext.firstTeam },
    { label: 'Club', href: p(routes.club) },
  ],

  footer: {
    columns: [
      {
        heading: 'The Club',
        links: [
          { label: 'Club', href: p(routes.club) },
          { label: 'Membership Benefits', href: p(routes.benefits) },
          { label: 'Online Clubhouse', href: p(routes.clubhouse) },
          { label: 'Challenges', href: p(routes.challenges) },
          { label: 'Become a Member', href: p(routes.join) },
        ],
      },
      {
        heading: 'BEAT',
        links: [
          { label: 'Organisation', href: ext.organisation },
          { label: 'Careers', href: ext.careers },
          { label: 'Sustainability', href: ext.sustainability },
          { label: 'Partners', href: ext.partners },
          { label: 'Contact', href: ext.contact },
          { label: 'Terms & Conditions', href: ext.terms },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- Homepage -- */
  home: {
    hero: {
      title: 'Welcome to the club',
      paragraphs: [
        'We are the first professional cycling club ever. Not a cycling team with fans around it, but a club of 1,500 members that you are part of — with a pro team on its way to the top of the sport.',
        'As a member you experience pro cycling from the inside out. You don’t just follow, you take part. And as a Rider you get more out of your own cycling ambitions, supported by the same environment as our pros.',
      ],
      cta: { label: 'Become a Member', href: p(routes.join) },
      promoImage: uc('f0aeec22-0e6a-4af3-9377-ad8d230e1eb4', 'become-a-member.png', 1400),
      promoKicker: 'Become a BEAT member now',
      promoHeadline: 'Be part of one club — pros and members together',
    },
    news: {
      heading: 'What’s happening in the club',
      href: ORIGINAL,
      items: [
        { title: 'Warre van den Meersche joins the First Team as a trainee', tag: 'News', cta: 'More info', image: uc('2ab9fe73-05ae-46d4-9d4e-041d00770bd0', 'news1.png') },
        { title: '10 years of BEAT: celebrate a decade with the whole club', tag: 'Event', cta: 'Get your ticket', image: uc('20120f41-c5e1-4223-bdbf-22ee73737487', 'news2.png') },
        { title: 'Jochem Kerckhaert third at the National Road Championships', tag: 'News', cta: 'See more', image: uc('ddf09791-11c6-4df8-9158-ddce11e11d33', 'news3.png') },
        { title: 'A professional, non-pro bike fit', tag: 'Blog', cta: 'Read more', image: uc('85998d7d-bdf7-49f8-a9bd-9a00b97f2532', 'news4.png') },
        { title: 'Our own documentary on Amazon Prime Video', tag: 'News', cta: 'Read more', image: uc('beb68b7e-08bc-4667-910e-9c7e01780199', 'news5.png') },
        { title: 'Free BEAT x VASAD bag (worth €50) with your membership', tag: 'Offer', cta: 'Claim your credit', image: uc('016f98a4-ae59-4597-8606-df5fc80c1c66', 'news6.png') },
        { title: 'David Dekker wins the Omloop van de Braakman', tag: 'News', cta: 'Read more', image: uc('6ebdcd1b-79c9-4888-84aa-b8338e5119fd', 'news7.png') },
        { title: 'Saxo returns to the peloton as main sponsor of BEAT', tag: 'News', cta: 'More info', image: uc('031701e4-c83e-47c5-82be-5c161cbced14', 'news8.png') },
        { title: 'David Dekker sprints to seventh in the Scheldeprijs', tag: 'News', cta: 'Read more', image: uc('01252ece-e3b9-458e-8240-da796510b919', 'news9.png') },
        { title: 'How BEAT CC puts the cycling community in the spotlight', tag: 'Press', cta: 'Read the article', image: uc('66ab5e17-09ee-464a-b067-5cfe13f6ec05', 'news10.png') },
        { title: 'Michiel Coppens wins the GP Vermarc', tag: 'News', cta: 'Read more', image: uc('3431ede7-6122-4dec-9551-323e1efc7c4c', 'news11.png') },
        { title: 'BEAT welcomes VOYAH as new mobility partner', tag: 'News', cta: 'More info', image: uc('6cbe3eaf-ec1e-425f-960a-d7ed2c91aadc', 'news12.png') },
        { title: 'The new AGU x BEAT Club Collection 2026 is live!', tag: 'Shop', cta: 'Shop now', image: uc('8f0f0a32-e9a2-43ab-90e5-78b1c09c52f1', 'news13.png') },
        { title: 'BEAT welcomes Eneve as a new partner', tag: 'News', cta: 'More info', image: uc('894af1ac-05f6-41a0-8699-6b00f0bb42d2', 'news14.png') },
        { title: 'This is our new BEAT x Ridley machine!', tag: 'News', cta: 'More info', image: uc('412e7afc-5f62-4963-9edd-e794c72ef82e', 'news15.png') },
        { title: 'The BEAT Big 5: five iconic gravel & Gran Fondo races', tag: 'News', cta: 'More info', image: uc('16890c71-2772-4150-94df-39c0259669bc', 'news16.png') },
      ],
    },
    podcast: {
      heading: 'Listen to our podcast!',
      body: 'Go behind the scenes of the First Team and the club with Thijs Zonneveld and guests.',
      image: uc('6309207f-c082-4f93-8289-2be0fb89e17f', 'podcast.jpg', 1400),
      cta: { label: 'Listen to the podcast', href: `${ORIGINAL}/pages/podcast` },
    },
    membership: {
      heading: 'Become a BEAT member',
      sub: 'You can join in two ways: as a Rider or as a Friend.',
      body: 'Sign up as a BEAT member and join the first — and largest — professional cycling club in the world.',
      becomeA: 'Become a',
      options: [
        { name: 'Rider', desc: 'Come along on the bike: teams, challenges, events and pro-level support.', price: '€60 / year', href: p(routes.join) },
        { name: 'Friend', desc: 'Come along behind the scenes: community, updates and the Online Clubhouse.', price: '€30 / year', href: p(routes.join) },
      ],
    },
    collection: {
      heading: 'BEAT Club Collection 2026',
      sub: 'The new AGU x BEAT club collection 2026 is live now.',
      shopNow: 'Shop now',
      href: ext.shop,
      products: [
        { name: 'AGU Armwarmers', image: uc('746a0043-c1a1-4ae6-9b93-24bed287c0c5', 'armwarmers.png', 800) },
        { name: 'AGU Windbreaker', image: uc('1403f6ff-b095-4f1b-b848-4f48ee72f3ea', 'windbreaker.png', 800) },
        { name: 'BEAT Socks', image: uc('610043f2-4788-4157-91fb-beb8346c8283', 'socks.png', 800) },
        { name: 'AGU Racesuit', image: uc('fdb705ec-a811-4675-ad7f-bcc2823a20ea', 'racesuit.png', 800) },
        { name: 'AGU Bibtight', image: uc('3ac7d34a-640d-45ae-9c03-23581a4b09cb', 'bibtight.png', 800) },
        { name: 'AGU Legwarmers', image: uc('b0636823-9ec0-4d5e-bcce-59ae0411226d', 'legwarmers.png', 800) },
        { name: 'AGU Proshirt', image: uc('29203284-2d22-4f00-b8be-07fe58b86cb9', 'proshirt.png', 800) },
        { name: 'AGU Clubshirt', image: uc('1609036b-3b2b-4a5c-afb5-1eb1e0610585', 'clubshirt.png', 800) },
        { name: 'AGU Bibshort', image: uc('0f92fb9e-8c6b-4fe1-986e-8ddf31195511', 'bibshort.png', 800) },
        { name: 'AGU Longsleeve', image: uc('350cc000-13bd-4186-a479-fa832308c270', 'longsleeve.png', 800) },
        { name: 'AGU Pro Bibshort', image: uc('a2f15a01-1f74-44bd-bf7c-d0575b48c0b2', 'pro-bibshort.png', 800) },
      ],
    },
  },

  /* ----------------------------------------------------------------- Club -- */
  club: {
    hero: {
      title: 'The Club',
      lead: 'Step into the club and get everything out of your cycling ambitions, on and off the bike.',
      paragraphs: [
        'In the Online Clubhouse you experience BEAT from the inside out. Through the BEAT Teams you get to know other riders in the club and lift each other to a higher level.',
        'The BEAT Challenges push you toward new adventures on the bike, and at events you meet your clubmates in real life. You also get access to exclusive benefits from the club and our partners that take you further.',
      ],
      image: uc('f0aeec22-0e6a-4af3-9377-ad8d230e1eb4', 'club-hero.png', 1400),
      imageAlt: 'BEAT Cycling Club riders on a road ride',
    },
    features: [
      { title: 'Challenges', href: p(routes.challenges), image: uc('6a0bd0d1-6358-4249-a42a-b1d54968864f', 'challenges.png'), alt: 'BEAT Challenges' },
      { title: 'Member Benefits', href: p(routes.benefits), image: uc('85fb048f-123a-4588-b388-a86d4b5ac2b7', 'benefits.png'), alt: 'Member benefits' },
      { title: 'BEAT Teams', href: p(routes.clubhouse), image: uc('21caadfe-f35c-49ab-b76c-af5e3910c75a', 'teams.png'), alt: 'BEAT Teams riding together' },
      { title: 'Online Clubhouse', href: p(routes.clubhouse), image: uc('78108abb-4c0e-45f1-aca1-847ec4ff1a23', 'clubhouse.png'), alt: 'The Online Clubhouse' },
    ],
  },

  /* ------------------------------------------------------------- Benefits -- */
  benefits: {
    hero: {
      title: 'Member Benefits',
      lead: 'At BEAT we give our members the same access to knowledge and equipment as the First Team.',
      paragraphs: [
        'No scattered discounts, but a complete ecosystem built to improve your performance — from gear and medical guidance to logistics and licences.',
      ],
      image: uc('355a64e4-343c-4aba-aa55-f7570fbaff78', 'benefits-hero.png', 1400),
      imageAlt: 'BEAT riders celebrating',
    },
    groups: [
      {
        title: 'Equipment & Gear',
        image: uc('fc29479c-5026-4519-8c63-a0af751e82c1', 'equipment.png', 1200),
        intro: 'We make sure our members ride with the same equipment as the First Team.',
        items: [
          { name: 'BEAT Shop', desc: '20% club discount on all clothing and partner products from Maurten, U-Sport, Wahoo and more.' },
          { name: 'Ridley Bikes', desc: '10% off Ridley frames (Noah, Astr, Falcn) including a free, exclusive BEAT design (worth €399).' },
          { name: 'Vredestein Tyres', desc: 'Direct access to the ambassador programme for sharp pricing on race and training tyres.' },
        ],
      },
      {
        title: 'Training & Medical Guidance',
        image: uc('e2c9ecaa-9535-4af4-a580-5a559f11fad1', 'training.png', 1200),
        intro: 'Improve your performance with the knowledge and tools our pros use too.',
        items: [
          { name: 'Sports Medicine Central Netherlands', desc: '20% off performance tests, bike fitting and medical sports screenings.' },
          { name: 'JOIN & TrainingPeaks', desc: 'Use the official BEAT training plans with 25% off JOIN Cycling or 20% off a TrainingPeaks annual subscription.' },
          { name: 'Nutrition Advice', desc: '20% off personal coaching with Iris van Kleef, the First Team’s sports dietitian.' },
        ],
      },
      {
        title: 'Logistics & Memberships',
        image: uc('fb8b0009-00df-4e3a-a348-5de2a7b94205', 'logistics.png', 1200),
        intro: 'The practical benefits of your membership.',
        items: [
          { name: 'Care Packages', desc: 'Exclusive support along the route at selected Gran Fondos and gravel races.' },
          { name: 'NTFU Membership', desc: '10% off an NTFU membership, insurance and extra benefits included.' },
          { name: 'KNWU Licence', desc: 'Apply for an official racing licence through BEAT and race under the BEAT banner.' },
        ],
      },
    ],
    cta: {
      title: 'Ready to get everything out of the club?',
      body: 'Every tool and every bit of support is waiting for you inside the club. Become a member and unlock it all.',
      buttons: [
        { label: 'Become a Member', href: p(routes.join), variant: 'solid' as const },
        { label: 'Online Clubhouse', href: p(routes.clubhouse), variant: 'outline' as const },
      ],
    },
  },

  /* ------------------------------------------------------------ Clubhouse -- */
  clubhouse: {
    hero: {
      title: 'Online Clubhouse',
      lead: 'The Online Clubhouse is where it all happens inside BEAT Cycling Club.',
      paragraphs: [
        'It is the place where you look behind the scenes, meet the other 1,500+ BEAT members and experience BEAT for real. From race analysis to ride planning — this is BEAT from the inside.',
      ],
      image: uc('940662e8-c2aa-4c77-b323-990535f893ed', 'clubhouse-hero.png', 1400),
      imageAlt: 'The Online Clubhouse app',
    },
    callouts: [
      {
        title: 'Not a member yet?',
        body: 'Join the club to unlock full access to the Online Clubhouse and everything inside it.',
        cta: { label: 'Become a Member', href: p(routes.join) },
      },
      {
        title: 'Already a member with access issues?',
        body: 'Reach out and our team will get you back into the clubhouse.',
        cta: { label: 'Contact Support', href: ext.contact },
      },
    ],
    appCta: { label: 'Go to the Online Clubhouse', href: ext.clubhouseApp },
    featuresHeading: 'What is the Online Clubhouse?',
    featuresIntro: 'We ride in the “real” world, but meet each other daily in the Online Clubhouse. This is what happens there:',
    featuresImage: uc('eaeadb75-e634-4f00-80d7-14f01d940fe5', 'clubhouse-collage.png', 1400),
    features: [
      { title: 'Behind the scenes', desc: 'Blogs from the boardroom, vlogs from the bike, and everything happening at the cycling club.' },
      { title: 'First Team', desc: 'Exclusive insights: race analysis, background on the choices we make, and live updates from races.' },
      { title: 'Challenges', desc: 'In the Clubhouse you find continuous new challenges to lift your own cycling to a higher level.' },
      { title: 'Community', desc: 'Meet the 1,500+ clubmates, get inspired by their stories, ask questions and plan new adventures.' },
      { title: 'Shop', desc: 'Nowhere else are you this close to the development of club clothing and other gear — always in the know.' },
    ],
    joinBand: {
      heading: 'Want to join us?',
      body: 'Become a member via the button below and discover the clubhouse for yourself!',
      cta: { label: 'Become a Member', href: p(routes.join) },
    },
  },

  /* ----------------------------------------------------------------- Join -- */
  join: {
    hero: {
      title: 'Become a BEAT Member',
      lead: 'At BEAT you are not on the sidelines — you are right in the heart of the club.',
      paragraphs: [
        'You become part of a community of 1,500 members who ride together, support together, laugh together, grow together and dream of more together.',
        'Professional cycling, with a club feeling.',
      ],
      image: uc('8dff8bd0-7fa8-4115-8f37-7d5afd375d6b', 'join-hero.png', 1400),
      imageAlt: 'BEAT members riding together',
    },
    chooseHeading: 'Choose how you want to join',
    chooseSub: 'The difference is simple: as a Rider you come along on the bike. As a Friend you come along behind the scenes.',
    mostChosen: 'Most chosen',
    payNote: 'Memberships are completed on the official BEAT Cycling Club site.',
    lead: {
      heading: 'Want more information?',
      body: 'Leave us your details and we will get in touch with everything you need to know about joining the club.',
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      phone: 'Phone',
      phonePlaceholder: '300 000 0000',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Thanks! We have your details and will be in touch soon.',
      error: 'Something went wrong. Please try again.',
      invalidEmail: 'Please enter a valid email address.',
      required: 'Please fill in all the fields.',
      privacy: 'We only use your details to contact you about the club.',
      notConfigured: 'The form is not connected yet. Please try again later.',
    },
    plans: [
      {
        name: 'Rider Membership',
        price: '€60',
        period: 'per year',
        href: ext.register,
        button: 'Become a Rider',
        highlight: true,
        groups: [
          {
            label: 'Community',
            items: [
              'Part of the first professional cycling club ever',
              'Meet like-minded cyclists',
              'Find your place within the BEAT Teams (Road, Gravel, GF, MTB, eRacing)',
              'Take part in challenges, rides and events',
            ],
          },
          {
            label: 'Behind the scenes',
            items: [
              'Exclusive First Team updates by Thijs Zonneveld',
              'Direct access to knowledge from coaches and pro riders',
              'Access to the Online Clubhouse',
            ],
          },
          {
            label: 'Benefits',
            items: ['Discounts at BEAT partners', 'KNWU and NTFU affiliation', 'Bidon support at races'],
          },
        ],
      },
      {
        name: 'Friend Membership',
        price: '€30',
        period: 'per year',
        href: ext.register,
        button: 'Become a Friend',
        highlight: false,
        groups: [
          {
            label: 'Community',
            items: ['Part of the first professional cycling club ever', 'Connected with 1,500 members'],
          },
          {
            label: 'Behind the scenes',
            items: ['Exclusive First Team updates', 'Access to the Online Clubhouse'],
          },
          { label: 'Benefits', items: ['Discounts at BEAT partners'] },
        ],
      },
    ],
    testimonials: [
      {
        quote: 'Through BEAT I discovered Gran Fondos and started racing in places I would never have gone otherwise. With teammates we travel across Europe to ride and race together. BEAT brings riders together.',
        name: 'Ton Ippel',
        role: 'BEAT Rider',
        image: uc('7f73c99d-27cd-4b98-82b3-d3186df6e1c0', 'rider1.png', 800),
      },
      {
        quote: 'BEAT has given me so much as a rider. The best part is riding together with like-minded people who each have their own ambition. Within the club there is a place for every cyclist, whatever your level.',
        name: 'Thomas Bogaard',
        role: 'BEAT Rider',
        image: uc('9768f19f-b43a-485c-a7ea-189d089d7daa', 'rider2.png', 800),
      },
      {
        quote: 'Thanks to BEAT I got back on the bike with one simple goal: to finish Unbound. Reality turned out even better, with an unexpected spot on the podium — a goosebumps moment I would never have had without BEAT.',
        name: 'Arjan Eekelder',
        role: 'BEAT Rider',
        image: uc('002a4657-ef67-4bc3-b60a-022e758c8a24', 'rider3.png', 800),
      },
    ],
    podcast: {
      heading: 'Listen to BEAT on De Rode Lantaarn',
      body: 'In this episode of the cycling podcast De Rode Lantaarn, our sport director Thijs Zonneveld takes a seat behind the microphone. He talks about his role and the story of the club, the development of BEAT, working with a pro team, and his view on Dutch cycling.',
      image: uc('c0969bc5-e713-4999-bd03-ceda40ed3c54', 'podcast.png', 1200),
      cta: { label: 'Listen to the podcast', href: `${ORIGINAL}/pages/podcast` },
    },
    press: {
      heading: 'Read about BEAT on Sporza',
      body: 'Our club was recently in the spotlight at Sporza. The article looks at how BEAT is seen as a new model in cycling — from the role of the community to the road toward the highest level. It’s great to see how what we are building together is viewed from the outside.',
      image: uc('8394de53-86dc-4328-891b-698ca484bba1', 'sporza.png', 1200),
      cta: { label: 'Read the article', href: ORIGINAL },
    },
  },

  /* ----------------------------------------------------------- Challenges -- */
  challenges: {
    hero: {
      title: 'Challenges 2026',
      lead: 'In 2026 we challenge you to get more out of your rides than ever before.',
      paragraphs: [
        'With three different challenges — Strikhedonia, the SHIMANO SOS Challenge and BEAT Every Day — there is always a moment for you to jump in.',
      ],
      image: uc('ac1da7ec-aa18-4714-8e42-6e10fd20d073', 'challenges-hero.jpeg', 1400),
      imageAlt: 'BEAT riders taking on a challenge',
    },
    howLabel: 'How does it work?',
    itemCta: 'Check the Online Clubhouse',
    items: [
      {
        title: 'Strikhedonia',
        tagline: 'Challenge Your Limit',
        blurb: 'To hell with it. Strikhedonia is back again this year — the biggest BEAT Do-It-Yourself challenge of the year and the chance to find your own limit.',
        how: 'Put Saturday 13 and Sunday 14 June in your calendar. The challenge is simple: ride 200 or 400 km in a single activity. Get to know ultra cycling and maybe ride one of the longest rides of your life. How you approach it is entirely up to you — a five-star hotel, a bus shelter, or no sleep at all? It’s your adventure.',
        meta: ['13–14 June 2026', 'Ride 200 or 400 km in a single activity'],
        video: 'c2cT44Cko-o',
        image: uc('44f7363a-ac3f-43f2-9134-8edc167056f5', 'strikhedonia.png', 1200),
        href: ext.clubhouseApp,
      },
      {
        title: 'SHIMANO SOS Challenge',
        tagline: 'Challenge Your Creativity',
        blurb: 'From Saturday 11 July to 2 August we take on the SHIMANO SOS Challenge together with the club.',
        how: 'Hunt down points: every SOS pole is worth 5 points and every Shimano Service Center 2 points. There are extra points to earn through bonus challenges. The rider who scores the most points wins a prize, and everyone lands a spot in the grand prize draw — plus a separate social prize for the best photo.',
        meta: ['11 July – 2 August', '5 pts per SOS pole · 2 pts per Service Center'],
        video: 'Lzv7WUmh1do',
        image: uc('c4233d85-2613-4a5c-8673-ab18149c5b84', 'sos.png', 1200),
        href: ext.clubhouseApp,
      },
      {
        title: 'BEAT Every Day',
        tagline: 'Challenge Your Consistency',
        blurb: 'The longest-running BEAT challenge is coming up again. Tradition kicks off in September.',
        how: 'The challenge is simple: ride every single day, at least 25 km, no rest days. Push your own endurance and try to keep it up for the whole month. Edwin Gulickx — co-founder of BEAT and the spiritual father of this challenge — keeps everyone up to date every day in the Online Clubhouse around BEAT Every Day.',
        meta: ['Starts September', 'Minimum 25 km every day'],
        video: 'CLbkJhgkNhs',
        image: uc('128421c4-54a0-41f7-bb77-5ea0bba65902', 'everyday.png', 1200),
        href: ext.clubhouseApp,
      },
    ],
    eventsHeading: 'Wherever we ride together',
    events: [
      { date: '30 May', name: 'REBOUND', place: 'Netherlands' },
      { date: '20 Sep', name: 'Saxo Dam tot Dam Fietsclassic', place: 'Netherlands' },
      { date: '24 Oct', name: '10 Years of BEAT party', place: 'Netherlands' },
    ],
    strava: {
      title: 'Track it all on Strava',
      body: 'Every BEAT challenge syncs with Strava. Join the BEAT Cycling Club on Strava to log your rides, follow the leaderboards and cheer on your clubmates.',
      cta: { label: 'Join us on Strava', href: ext.strava },
    },
  },

  /* ---------------------------------------------------------------- About -- */
  about: {
    hero: {
      title: 'The first and only professional cycling club',
      lead: 'BEAT is built as a club to belong to.',
      paragraphs: [
        'Not a traditional cycling team that stands at a distance, but a professional cycling club where pros and members are part of the same thing.',
        'Founded in 2016 as a sustainable alternative to sponsor-dependent teams: members are not spectators but active participants, and the professional team and the community share one identity and one ambition.',
      ],
      image: uc('0f2d5ac9-fadb-4c6a-8cc3-c7e00b60a7ad', 'about-hero.png', 1400),
      imageAlt: 'A collage of BEAT Cycling Club riders and results',
      cta: { label: 'Become a Member', href: p(routes.join) },
    },
    historyHeading: 'Our club history',
    timeline: [
      { year: '2016', text: 'Started with an idea — no team, no sponsor structure.' },
      { year: '2017', text: 'Launched the first member activities and established a UCI Track Team.' },
      { year: '2018', text: 'First World Cup victory: team sprint with Theo Bos, Roy van den Berg and Matthijs Büchli.' },
      { year: '2019', text: 'Founded a UCI Continental Team. Piotr Havik won the Ronde van Overijssel.' },
      { year: '2020', text: 'BEAT Every Day launched with 110 participants. First road win: Piotr Havik at GP Zottegem.' },
      { year: '2021', text: 'Matthijs Büchli won the keirin world title. The Online Clubhouse was established.' },
      { year: '2022', text: 'Büchli won Olympic gold in the team sprint. Yoeri Havik won the points-race world title.' },
      { year: '2023', text: 'Community growth across Gran Fondo and gravel. UCI Rainbow Award for our sustainability work.' },
      { year: '2024', text: 'Michiel Coppens won the GP Slovenian Istria. Frits Biesterbos took 2nd at the World Gravel Championship.' },
      { year: '2025', text: 'Saxo became primary sponsor; the team is renamed “BEAT CC powered by Saxo”.' },
    ],
    future: {
      heading: 'This is just the beginning',
      paragraphs: [
        'BEAT is not finished. Over the coming years we keep building — from the current UCI Continental Team toward a UCI ProTeam.',
        'With one goal: to compete in the biggest races in the world. A professional team supported by a membership community is more durable than a traditional sponsorship structure.',
      ],
      leaders: [
        { name: 'Thijs Zonneveld', role: 'Sport Director' },
        { name: 'Geert Broekhuizen', role: 'Founder' },
      ],
      image: uc('c9ea386b-bda5-4e6c-9b85-78ceaf0f6599', 'about-future.png', 1200),
      imageAlt: 'The future of BEAT Cycling Club',
    },
  },
};

export type Dict = typeof en;
