import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';

export function renderFooter() {
  const colAddress = h('div', { class: 'ft__col' }, [
    h('h3', { class: 'ft__col-title' }, 'Croft House'),
    h('address', { class: 'ft__addr' }, [
      SITE.address.line1, h('br'),
      SITE.address.line2, h('br'),
      `${SITE.address.city}, ${SITE.address.state} ${SITE.address.postal}`,
    ]),
  ]);

  const wa = `https://wa.me/${SITE.whatsapp.wa}`;
  const colVisit = h('div', { class: 'ft__col' }, [
    h('h3', { class: 'ft__col-title' }, 'Visit'),
    h('ul', { class: 'ft__list' }, [
      li('Reserve', '#reserve'),
      li('Menu',     '#menu'),
      li('Gallery',  '#gallery'),
      li('Directions', SITE.maps.directions, true),
    ]),
  ]);

  const colReach = h('div', { class: 'ft__col' }, [
    h('h3', { class: 'ft__col-title' }, 'Reach us'),
    h('ul', { class: 'ft__list' }, [
      li('Call',     SITE.phone.tel),
      li('WhatsApp', wa, true),
      li('Email',    null),
    ]),
    h('p', { class: 'ft__small' },
      'Verified contact details, sourced from Google Maps. No social handles were present in the verified source.'
    ),
  ]);

  const legal = h('div', { class: 'ft__legal' }, [
    h('span', {}, `\u00A9 ${new Date().getFullYear()} ${SITE.name}`),
    h('span', {}, SITE.credits),
  ]);

  return h('footer', { class: 'ft' }, [
    h('div', { class: 'ft__grid' }, [colAddress, colVisit, colReach]),
    legal,
  ]);
}

function li(label, href, external = false) {
  if (!href) {
    return h('li', { class: 'ft__li ft__li--muted' }, label);
  }
  const attrs = { class: 'ft__a', href };
  if (external) { attrs.target = '_blank'; attrs.rel = 'noopener'; }
  return h('li', { class: 'ft__li' }, h('a', attrs, label));
}
