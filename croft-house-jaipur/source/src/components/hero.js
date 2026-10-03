import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';

export function renderHero() {
  const wa = `https://wa.me/${SITE.whatsapp.wa}?text=${encodeURIComponent('Hi Croft House, I would like to know more.')}`;
  const buttons = h('div', { class: 'hero__buttons' }, [
    h('a', { href: '#reserve', class: 'btn btn--primary' }, 'Reserve a table'),
    h('a', { href: '#menu',    class: 'btn btn--ghost'   }, 'Explore menu'),
    h('a', { href: wa,         class: 'btn btn--ghost', target: '_blank', rel: 'noopener' }, 'WhatsApp'),
    h('a', { href: SITE.phone.tel, class: 'btn btn--ghost' }, 'Call'),
  ]);

  return h('section', { class: 'hero', id: 'top' }, [
    h('div', { class: 'hero__media', 'aria-hidden': 'true' }, [
      h('img', {
        src: './public/images/exterior.jpg',
        alt: '',
        loading: 'eager',
        decoding: 'async',
        fetchpriority: 'high',
      }),
      h('div', { class: 'hero__veil' }),
    ]),
    h('div', { class: 'hero__grid' }, [
      h('div', { class: 'hero__copy' }, [
        h('span', { class: 'eyebrow' }, 'Caf\u00e9 \u00b7 Coffee \u00b7 C Scheme'),
        h('h1',  { class: 'hero__title' }, [SITE.name]),
        h('p',   { class: 'hero__lede'  }, SITE.tagline),
        buttons,
      ]),
      h('div', { class: 'hero__meta' }, [
        h('span', { class: 'hero__rating' }, [
          h('strong', {}, `${SITE.rating.toFixed(1)}`),
          ' / 5 on Google',
        ]),
        h('span', { class: 'hero__address' }, SITE.address.full),
      ]),
    ]),
  ]);
}
