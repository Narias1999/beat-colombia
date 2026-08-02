// Page content (English translation of beatcyclingclub.com). Copy lives here,
// apart from markup, so it is easy to edit or re-translate. All imagery hotlinks
// the original site's real assets on the Uploadcare CDN via uc().

import { routes, ext, uc, ORIGINAL } from './config';

/* ------------------------------------------------------------------ Club -- */

export const club = {
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
    { title: 'Challenges', href: routes.challenges, image: uc('6a0bd0d1-6358-4249-a42a-b1d54968864f', 'challenges.png'), alt: 'BEAT Challenges' },
    { title: 'Member Benefits', href: routes.benefits, image: uc('85fb048f-123a-4588-b388-a86d4b5ac2b7', 'benefits.png'), alt: 'Member benefits' },
    { title: 'BEAT Teams', href: routes.clubhouse, image: uc('21caadfe-f35c-49ab-b76c-af5e3910c75a', 'teams.png'), alt: 'BEAT Teams riding together' },
    { title: 'Online Clubhouse', href: routes.clubhouse, image: uc('78108abb-4c0e-45f1-aca1-847ec4ff1a23', 'clubhouse.png'), alt: 'The Online Clubhouse' },
  ],
};

/* ------------------------------------------------------ Member Benefits -- */

export const benefits = {
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
      { label: 'Become a Member', href: routes.join, variant: 'solid' as const },
      { label: 'Online Clubhouse', href: routes.clubhouse, variant: 'outline' as const },
    ],
  },
};

/* ------------------------------------------------------- Online Clubhouse -- */

export const clubhouse = {
  hero: {
    title: 'Online Clubhouse',
    lead: 'The Online Clubhouse is where it all happens inside BEAT Cycling Club.',
    paragraphs: [
      'It is the place where you look behind the scenes, meet the other 1,500+ BEAT members and experience BEAT for real. From race analysis to ride planning — this is BEAT from the inside.',
    ],
    image: uc('940662e8-c2aa-4c77-b323-990535f893ed', 'clubhouse-hero.png', 1400),
    imageAlt: 'The Online Clubhouse app',
  },
  showcase: [
    uc('940662e8-c2aa-4c77-b323-990535f893ed', 'clubhouse-a.png', 1200),
    uc('eaeadb75-e634-4f00-80d7-14f01d940fe5', 'clubhouse-b.png', 1200),
  ],
  callouts: [
    {
      title: 'Not a member yet?',
      body: 'Join the club to unlock full access to the Online Clubhouse and everything inside it.',
      cta: { label: 'Become a Member', href: routes.join },
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
    cta: { label: 'Become a Member', href: routes.join },
  },
};

/* --------------------------------------------------------- Join / Buy -- */

export const join = {
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
};

/* ------------------------------------------------------------ Challenges -- */

export const challenges = {
  hero: {
    title: 'Challenges 2026',
    lead: 'In 2026 we challenge you to get more out of your rides than ever before.',
    paragraphs: [
      'With three different challenges — Strikhedonia, the SHIMANO SOS Challenge and BEAT Every Day — there is always a moment for you to jump in.',
    ],
    image: uc('ac1da7ec-aa18-4714-8e42-6e10fd20d073', 'challenges-hero.jpeg', 1400),
    imageAlt: 'BEAT riders taking on a challenge',
  },
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
};

/* --------------------------------------------------------------- About -- */

export const about = {
  hero: {
    title: 'The first and only professional cycling club',
    lead: 'BEAT is built as a club to belong to.',
    paragraphs: [
      'Not a traditional cycling team that stands at a distance, but a professional cycling club where pros and members are part of the same thing.',
      'Founded in 2016 as a sustainable alternative to sponsor-dependent teams: members are not spectators but active participants, and the professional team and the community share one identity and one ambition.',
    ],
    image: uc('0f2d5ac9-fadb-4c6a-8cc3-c7e00b60a7ad', 'about-hero.png', 1400),
    imageAlt: 'A collage of BEAT Cycling Club riders and results',
    cta: { label: 'Become a Member', href: routes.join },
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
};
