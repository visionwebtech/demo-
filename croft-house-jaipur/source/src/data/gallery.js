// Only photos I have on disk in /public/images. Categories are honest
// (no made-up dish names). Crop hints help masonry placement.

export const GALLERY = [
  {
    id: 'ext',
    src: './public/images/exterior.jpg',
    alt: 'Croft House exterior — terracotta-brick facade with the cream CH monogram and wordmark.',
    caption: 'The corner, on Malviya Marg.',
    tag: 'exterior',
    span: 'tall',
  },
  {
    id: 'hero-1',
    src: './public/images/hero-1.jpg',
    alt: 'Croft House interior scene.',
    caption: 'Light, texture, a slow afternoon.',
    tag: 'interior',
    span: 'wide',
  },
  {
    id: 'hero-2',
    src: './public/images/hero-2.jpg',
    alt: 'Café atmosphere at Croft House.',
    caption: 'A table that earns its quiet.',
    tag: 'vibe',
    span: 'square',
  },
  {
    id: 'hero-3',
    src: './public/images/hero-3.jpg',
    alt: 'Croft House photography, sourced from a verified listing.',
    caption: 'Frames from C Scheme.',
    tag: 'interior',
    span: 'tall',
  },
  {
    id: 'c1',
    src: './public/images/croft-1.jpg',
    alt: 'Croft House on a partner listing.',
    caption: 'Listed on Zomato & Swiggy Dineout.',
    tag: 'vibe',
    span: 'square',
  },
  {
    id: 'c2',
    src: './public/images/croft-2.jpg',
    alt: 'Editorial photograph from the venue.',
    caption: 'A corner worth the walk.',
    tag: 'exterior',
    span: 'square',
  },
];

export const GALLERY_TAGS = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Inside' },
  { id: 'exterior', label: 'Outside' },
  { id: 'vibe', label: 'Vibe' },
];
