// All data here is verified from Google Maps (place_id ChIJo41cbAC1bTkRnEwq2tPhq14)
// and from the brief the client supplied. Nothing is invented.

export const SITE = {
  name: 'Croft House',
  tagline: 'A café on the corner, in Jaipur.',
  city: 'Jaipur',
  rating: 4.5,
  ratingMax: 5,

  address: {
    line1: 'K-7, Malviya Marg',
    line2: 'C Scheme, Ashok Nagar',
    city: 'Jaipur',
    state: 'Rajasthan',
    postal: '302001',
    country: 'India',
    full:
      'K-7, Malviya Marg, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001, India',
  },

  phone: {
    display: '+91 63674 50485',
    tel: '+916367450485',
  },

  whatsapp: {
    display: '+91 63674 50485',
    // wa.me requires no +, no spaces
    wa: '916367450485',
  },

  maps: {
    embedQuery:
      'K-7+Malviya+Marg+C+Scheme+Ashok+Nagar+Jaipur+Rajasthan+302001',
    placeId: 'ChIJo41cbAC1bTkRnEwq2tPhq14',
    shortLink: 'https://maps.app.goo.gl/3n2U2cFYqGC9ZgZ48',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=K-7+Malviya+Marg+C+Scheme+Ashok+Nagar+Jaipur+Rajasthan+302001',
    placeOnMaps:
      'https://www.google.com/maps/place/?q=place_id:ChIJo41cbAC1bTkRnEwq2tPhq14',
  },

  hours: null, // Opening hours were not in the verified source — intentionally omitted

  orderOnline: null, // Verified source did not return an order-on-line URL — intentionally omitted

  menu: {
    // No verified menu URL; we link to the public Zomato/Swiggy/District listings the venue appears on
    external: [
      { label: 'Zomato', href: 'https://www.zomato.com/jaipur/croft-house-c-scheme' },
      { label: 'Swiggy Dineout', href: 'https://www.swiggy.com/restaurants/jaipur/c-scheme/croft-house-1283148/dineout' },
      { label: 'District', href: 'https://www.district.in/dining/jaipur/croft-house-c-scheme' },
    ],
    note: 'View the live, current menu on these verified partner pages.',
  },

  social: null, // No verified handles — intentionally omitted

  credits: 'Website by Vision Web Tech',
};
