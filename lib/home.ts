// Homepage content — English translation of the beatcyclingclub.com root page.
// Images hotlink the original site's real assets on the Uploadcare CDN.

import { routes, ext, ORIGINAL } from './config';

// Build an Uploadcare URL for a given asset id (the real images the site uses).
const uc = (id: string, name = 'image.png', size = 1100) =>
  `https://ucarecdn.com/${id}/-/format/auto/-/preview/${size}x${size}/-/quality/normal/${name}`;

export const home = {
  hero: {
    title: 'Welcome to the club',
    paragraphs: [
      'We are the first professional cycling club ever. Not a cycling team with fans around it, but a club of 1,500 members that you are part of — with a pro team on its way to the top of the sport.',
      'As a member you experience pro cycling from the inside out. You don’t just follow, you take part. And as a Rider you get more out of your own cycling ambitions, supported by the same environment as our pros.',
    ],
    cta: { label: 'Become a Member', href: routes.join },
    // Real celebration photo from the club page (no baked-in text)
    promoImage: uc('f0aeec22-0e6a-4af3-9377-ad8d230e1eb4', 'become-a-member.png', 1400),
    promoKicker: 'Become a BEAT member now',
    promoHeadline: 'Be part of one club — pros and members together',
  },

  news: {
    heading: 'What’s happening in the club',
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
    href: ORIGINAL,
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
    options: [
      { name: 'Rider', desc: 'Come along on the bike: teams, challenges, events and pro-level support.', price: '€60 / year', href: routes.join },
      { name: 'Friend', desc: 'Come along behind the scenes: community, updates and the Online Clubhouse.', price: '€30 / year', href: routes.join },
    ],
  },

  collection: {
    heading: 'BEAT Club Collection 2026',
    sub: 'The new AGU x BEAT club collection 2026 is live now.',
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
};
