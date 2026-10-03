import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';

export function renderHeader() {
  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#menu',       label: 'Menu' },
    { href: '#gallery',    label: 'Gallery' },
    { href: '#location',   label: 'Location' },
  ];

  const nav = h('nav', { class: 'nav__links', 'aria-label': 'Primary' },
    links.map((l) => h('a', { href: l.href, class: 'nav__link' }, l.label))
  );

  const brand = h('a', { href: '#top', class: 'nav__brand', 'aria-label': 'Croft House — to the top' },
    [
      h('span', { class: 'nav__monogram',  'aria-hidden': 'true' }, 'CH'),
      h('span', { class: 'nav__wordmark' }, 'Croft House'),
    ]
  );

  const cta = h('a', {
    href: '#reserve',
    class: 'nav__cta',
    'aria-label': 'Reserve a table at Croft House',
  }, 'Reserve');

  const burger = h('button', {
    class: 'nav__burger',
    type: 'button',
    'aria-label': 'Open menu',
    'aria-expanded': 'false',
    'aria-controls': 'mobile-menu',
  }, [
    h('span', { class: 'nav__burger-bar' }),
    h('span', { class: 'nav__burger-bar' }),
    h('span', { class: 'nav__burger-bar' }),
  ]);

  const header = h('header', { class: 'nav', id: 'nav' }, [brand, nav, cta, burger]);

  // Mobile menu (off-canvas) — populated only when burger is opened.
  const mobile = h('div', { class: 'mobile-menu', id: 'mobile-menu', hidden: true, role: 'dialog', 'aria-label': 'Menu' }, [
    h('button', { class: 'mobile-menu__close', type: 'button', 'aria-label': 'Close menu' }, 'Close'),
    h('div', { class: 'mobile-menu__inner' },
      links.concat([
        { href: '#reserve',  label: 'Reserve' },
        { href: SITE.phone.tel, label: 'Call' },
        { href: `https://wa.me/${SITE.whatsapp.wa}`, label: 'WhatsApp' },
      ]).map((l) => h('a', { href: l.href, class: 'mobile-menu__link' }, l.label))
    ),
  ]);

  burger.addEventListener('click', () => {
    mobile.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });
  mobile.querySelector('.mobile-menu__close').addEventListener('click', () => {
    mobile.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
  mobile.querySelectorAll('.mobile-menu__link').forEach((a) =>
    a.addEventListener('click', () => {
      mobile.hidden = true;
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    })
  );

  // Scroll behaviour: solid background appears once the user scrolls
  const onScroll = () => {
    if (window.scrollY > 24) header.classList.add('nav--solid');
    else header.classList.remove('nav--solid');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  return [header, mobile];
}
