import { h } from '../utils/dom.js';
import { GALLERY, GALLERY_TAGS } from '../data/gallery.js';
import { observe } from '../utils/dom.js';

export function renderGallery() {
  const tags = h('div', { class: 'gal__tags', role: 'tablist' },
    GALLERY_TAGS.map((t, i) =>
      h('button', {
        class: 'gal__tag' + (i === 0 ? ' is-active' : ''),
        type: 'button',
        role: 'tab',
        'aria-selected': i === 0 ? 'true' : 'false',
        'data-tag': t.id,
      }, t.label)
    )
  );

  const grid = h('div', { class: 'gal__grid', role: 'list' });

  const lightbox = h('div', {
    class: 'lightbox', id: 'lightbox', hidden: true, role: 'dialog', 'aria-label': 'Photo viewer', 'aria-modal': 'true',
  }, [
    h('button', { class: 'lightbox__close', type: 'button', 'aria-label': 'Close' }, 'Close'),
    h('button', { class: 'lightbox__prev',   type: 'button', 'aria-label': 'Previous photo' }, '\u2190'),
    h('button', { class: 'lightbox__next',   type: 'button', 'aria-label': 'Next photo' }, '\u2192'),
    h('figure', { class: 'lightbox__fig' }, [
      h('img', { class: 'lightbox__img', alt: '' }),
      h('figcaption', { class: 'lightbox__cap' }),
    ]),
  ]);

  function renderGrid(tag = 'all') {
    grid.innerHTML = '';
    const items = tag === 'all' ? GALLERY : GALLERY.filter((g) => g.tag === tag);
    items.forEach((g, i) => {
      const fig = h('figure', {
        class: `gal__item gal__item--${g.span}`,
        role: 'listitem',
        tabindex: '0',
        dataset: { idx: String(i), tag: g.tag },
      }, [
        h('img', { src: g.src, alt: g.alt, loading: 'lazy', decoding: 'async' }),
        h('figcaption', { class: 'gal__cap' }, g.caption),
      ]);
      const open = () => openLightbox(i, tag);
      fig.addEventListener('click', open);
      fig.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
      grid.appendChild(fig);
    });
    observe(grid, () => grid.classList.add('gal__grid--in'));
  }

  let currentTag = 'all';
  let currentIndex = 0;
  function openLightbox(idx, tag) {
    currentTag = tag;
    currentIndex = idx;
    const list = tag === 'all' ? GALLERY : GALLERY.filter((g) => g.tag === tag);
    showAt(currentIndex, list);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox__close').focus();
  }
  function showAt(i, list) {
    if (!list.length) return;
    currentIndex = (i + list.length) % list.length;
    const item = list[currentIndex];
    const img = lightbox.querySelector('.lightbox__img');
    const cap = lightbox.querySelector('.lightbox__cap');
    img.src = item.src;
    img.alt = item.alt;
    cap.textContent = item.caption;
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  function next() {
    const list = currentTag === 'all' ? GALLERY : GALLERY.filter((g) => g.tag === currentTag);
    showAt(currentIndex + 1, list);
  }
  function prev() {
    const list = currentTag === 'all' ? GALLERY : GALLERY.filter((g) => g.tag === currentTag);
    showAt(currentIndex - 1, list);
  }

  lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox__next').addEventListener('click', next);
  lightbox.querySelector('.lightbox__prev').addEventListener('click', prev);
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft')  prev();
  });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  tags.addEventListener('click', (e) => {
    const btn = e.target.closest('.gal__tag');
    if (!btn) return;
    tags.querySelectorAll('.gal__tag').forEach((t) => {
      t.classList.toggle('is-active', t === btn);
      t.setAttribute('aria-selected', t === btn ? 'true' : 'false');
    });
    renderGrid(btn.dataset.tag);
  });

  renderGrid('all');

  return h('section', { class: 'gal', id: 'gallery' }, [
    h('div', { class: 'gal__head' }, [
      h('span', { class: 'eyebrow' }, 'The Gallery'),
      h('h2',   { class: 'gal__title' }, 'The Croft House, frame by frame.'),
    ]),
    tags,
    grid,
    lightbox,
  ]);
}
