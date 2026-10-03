import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';

export function renderLocation() {
  const card = h('div', { class: 'loc__card' }, [
    h('span', { class: 'eyebrow' }, 'Plan your visit'),
    h('h2',   { class: 'loc__title' }, 'Find the corner.'),
    h('address', { class: 'loc__addr' }, [
      h('strong', {}, SITE.name),
      h('br'),
      SITE.address.line1,
      h('br'),
      SITE.address.line2,
      h('br'),
      `${SITE.address.city}, ${SITE.address.state} ${SITE.address.postal}`,
    ]),
    h('div', { class: 'loc__row' }, [
      h('a', { class: 'btn btn--primary', href: SITE.maps.directions, target: '_blank', rel: 'noopener' }, 'Get directions'),
      h('a', { class: 'btn btn--ghost',   href: SITE.maps.placeOnMaps, target: '_blank', rel: 'noopener' }, 'Open in Google Maps'),
    ]),
    h('div', { class: 'loc__contact' }, [
      contactItem('\u260E', 'Call', SITE.phone.display, SITE.phone.tel),
      contactItem('\u2709', 'WhatsApp', SITE.whatsapp.display, `https://wa.me/${SITE.whatsapp.wa}`),
    ]),
  ]);

  // No API key was supplied, so we render a premium preview card that opens
  // Google Maps in a new tab when clicked. No fabricated embedded map.
  const preview = h('button', {
    class: 'loc__preview', type: 'button',
    'aria-label': 'Open Croft House on Google Maps',
    onclick: () => window.open(SITE.maps.placeOnMaps, '_blank', 'noopener'),
  }, [
    h('img', { src: './public/images/hero-3.jpg', alt: '', loading: 'lazy', decoding: 'async' }),
    h('span', { class: 'loc__preview-overlay' }, [
      h('span', { class: 'loc__pin', 'aria-hidden': 'true' }, '\u25C7'),
      h('span', { class: 'loc__preview-text' }, 'K-7 Malviya Marg, C Scheme'),
    ]),
  ]);

  return h('section', { class: 'loc', id: 'location' }, [
    h('div', { class: 'loc__grid' }, [preview, card]),
  ]);
}

function contactItem(glyph, label, value, href) {
  return h('a', { class: 'loc__contact-item', href }, [
    h('span', { class: 'loc__contact-glyph', 'aria-hidden': 'true' }, glyph),
    h('span', { class: 'loc__contact-label' }, label),
    h('span', { class: 'loc__contact-value' }, value),
  ]);
}
