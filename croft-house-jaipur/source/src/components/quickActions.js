import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';

export function renderQuickActions() {
  const wa = `https://wa.me/${SITE.whatsapp.wa}?text=${encodeURIComponent('Hi Croft House, ')}`;

  const actions = [
    { href: SITE.phone.tel,          icon: '\u260E', label: 'Call',        sub: SITE.phone.display },
    { href: wa,                      icon: '\u2709', label: 'WhatsApp',    sub: 'Verified',             target: '_blank' },
    { href: '#reserve',              icon: '\u25EF', label: 'Reserve',     sub: 'Via WhatsApp' },
    { href: '#menu',                 icon: '\u2630', label: 'Menu',        sub: 'See current' },
    { href: '#menu',                 icon: '\u29C9', label: 'Order',       sub: 'Partners',              disabled: SITE.orderOnline == null ? false : false },
    { href: SITE.maps.directions,    icon: '\u2197', label: 'Directions',  sub: 'Open in Maps',          target: '_blank' },
  ];

  return h('section', { class: 'quick', 'aria-label': 'Quick actions' },
    h('div', { class: 'quick__inner' },
      actions.map((a) => {
        const attrs = {
          href: a.href,
          class: 'quick__item',
          'aria-label': `${a.label} \u2014 ${a.sub}`,
        };
        if (a.target) { attrs.target = '_blank'; attrs.rel = 'noopener'; }
        return h('a', attrs, [
          h('span', { class: 'quick__icon',  'aria-hidden': 'true' }, a.icon),
          h('span', { class: 'quick__label' }, a.label),
          h('span', { class: 'quick__sub'   }, a.sub),
        ]);
      })
    )
  );
}
