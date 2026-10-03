import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';

export function renderMobileBar() {
  const wa = `https://wa.me/${SITE.whatsapp.wa}?text=${encodeURIComponent('Hi Croft House, ')}`;
  const items = [
    { href: SITE.phone.tel,    label: 'Call',        glyph: '\u260E' },
    { href: wa,                label: 'WhatsApp',    glyph: '\u2709', target: '_blank' },
    { href: '#menu',           label: 'Menu',        glyph: '\u2630' },
    { href: '#reserve',        label: 'Reserve',     glyph: '\u25EF' },
    { href: SITE.maps.directions, label: 'Directions', glyph: '\u2197', target: '_blank' },
  ];
  const el = h('nav', { class: 'mbar', 'aria-label': 'Quick actions' },
    items.map((it) => {
      const attrs = { class: 'mbar__item', href: it.href, 'aria-label': it.label };
      if (it.target) { attrs.target = '_blank'; attrs.rel = 'noopener'; }
      return h('a', attrs, [
        h('span', { class: 'mbar__glyph', 'aria-hidden': 'true' }, it.glyph),
        h('span', { class: 'mbar__label' }, it.label),
      ]);
    })
  );
  document.body.appendChild(el);
}
