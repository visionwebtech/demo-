import { h } from '../utils/dom.js';

export function renderExperience() {
  const left = h('div', { class: 'exp__copy' }, [
    h('span', { class: 'eyebrow' }, 'The Croft House Experience'),
    h('h2', { class: 'exp__title' }, 'A café on the corner, in Jaipur.'),
    h('p',  { class: 'exp__lede' },
      'Croft House sits on a quiet corner of Malviya Marg \u2014 a small, modern room built from warm brick, light, and conversation. Pull up a chair; stay for the coffee, stay for the quiet.'
    ),
    h('ul', { class: 'exp__list' }, [
      h('li', {},  [h('span', { class: 'exp__num' }, '01'), 'Coffee & conversation']),
      h('li', {},  [h('span', { class: 'exp__num' }, '02'), 'Bricks, plants, slow light']),
      h('li', {},  [h('span', { class: 'exp__num' }, '03'), 'Bookable tables \u2014 no rush']),
      h('li', {},  [h('span', { class: 'exp__num' }, '04'), 'C Scheme, Ashok Nagar, Jaipur']),
    ]),
  ]);

  const right = h('div', { class: 'exp__media' }, [
    h('img', {
      src: './public/images/hero-1.jpg',
      alt: 'Interior detail at Croft House, Jaipur.',
      loading: 'lazy', decoding: 'async',
    }),
    h('span', { class: 'exp__caption' }, 'Inside the corner room.'),
  ]);

  const stats = [
    { value: '4.5',       label: 'Google rating' },
    { value: '\u221E',   label: 'Slow afternoons' },
    { value: 'C Scheme', label: 'Jaipur' },
  ];
  const statsBar = h('div', { class: 'exp__stats' },
    stats.map((s) => h('div', { class: 'exp__stat' }, [
      h('span', { class: 'exp__stat-value' }, s.value),
      h('span', { class: 'exp__stat-label' }, s.label),
    ]))
  );

  return h('section', { class: 'exp', id: 'experience' }, [
    h('div', { class: 'exp__grid' }, [left, right]),
    statsBar,
  ]);
}
