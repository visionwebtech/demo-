import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';

export function renderMenu() {
  // No verified menu contents. We deliberately show only the verified
  // partner listings where the live, current menu lives.

  const partners = SITE.menu.external.map((p) =>
    h('a', { class: 'menu__card', href: p.href, target: '_blank', rel: 'noopener' }, [
      h('span', { class: 'menu__card-eyebrow' }, 'Live menu'),
      h('span', { class: 'menu__card-title' }, p.label),
      h('span', { class: 'menu__card-arrow', 'aria-hidden': 'true' }, '\u2197'),
    ])
  );

  const left = h('div', { class: 'menu__copy' }, [
    h('span', { class: 'eyebrow' }, 'The Menu'),
    h('h2', { class: 'menu__title' }, 'Today\u2019s menu, sourced live.'),
    h('p',  { class: 'menu__lede' },
      'Because menus change with the season, the most accurate way to see what\u2019s pouring today is on the partner platforms below. They keep Croft House\u2019s current offering up to date.'
    ),
    h('p',  { class: 'menu__note' },
      SITE.menu.note
    ),
  ]);

  return h('section', { class: 'menu', id: 'menu' }, [
    h('div', { class: 'menu__grid' }, [left, h('div', { class: 'menu__cards' }, partners)]),
  ]);
}
