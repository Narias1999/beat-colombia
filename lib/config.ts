// Central site configuration.
//
// Translated pages live on this clone (internal routes). Everything we have NOT
// translated — login, cart, First Team, Shop, and the footer info pages —
// points back to the original beatcyclingclub.com site, per requirements.

export const ORIGINAL = 'https://www.beatcyclingclub.com';

// Build a URL to one of the original site's real assets on the Uploadcare CDN.
export const uc = (id: string, name = 'image.png', size = 1200) =>
  `https://ucarecdn.com/${id}/-/format/auto/-/preview/${size}x${size}/-/quality/normal/${name}`;

// Internal (translated) routes on this clone
export const routes = {
  club: '/club',
  about: '/about',
  firstTeam: '/first-team',
  benefits: '/membership-benefits',
  clubhouse: '/clubhouse',
  join: '/join',
  challenges: '/challenges',
  inauguration: '/inauguration',
};

// External links — redirect to the original site (or the real shop)
export const ext = {
  // The shop stays on its own domain; Strava is BEAT Colombia's own club.
  // Everything else used to point at the Dutch site and has been removed.
  shop: 'https://beatcycling.shop/',
  strava: 'https://www.strava.com/clubs/BEATCOLOMBIA',
  // Meeting point for the inaugural ride, as shared by the club.
  rideMeetingPoint: 'https://maps.app.goo.gl/QowpaAwFfkteV8kR6',
};

// Keyless Google Maps iframe (the classic /maps?q= embed needs no API key).
export const RIDE_MEETING_POINT_EMBED =
  'https://maps.google.com/maps?q=4.612662,-74.069497&z=16&output=embed';

// Official partner/supplier logos — the site's real assets (white marks).
export const partners = [
  { src: uc('b2dec311-34d0-4e5d-bbc6-a954c841c4ce', 'partner.png', 500), alt: 'Official partner' },
  { src: uc('58037670-82ac-4f4d-b80a-c6d70db41c9a', 'partner.png', 500), alt: 'Official partner' },
  { src: uc('b1df5e4c-57a0-4766-8594-5f31096ec5fd', 'partner.png', 500), alt: 'Official partner' },
  { src: uc('e634ecf2-24e9-4366-b772-ea9eff30a8a3', 'partner.png', 500), alt: 'Official partner' },
  { src: uc('766b813c-37e0-4ecc-9972-8af07d5a823e', 'partner.png', 500), alt: 'Official partner' },
  { src: uc('899be456-832f-4509-9048-64b8507d9877', 'partner.png', 500), alt: 'Official partner' },
  { src: uc('81498ed3-cd31-4419-ab4a-5ef33bf55bc3', 'partner.png', 500), alt: 'Official partner' },
];
