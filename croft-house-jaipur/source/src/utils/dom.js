// Tiny DOM helper so every component file stays short.

export function h(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function')
      el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else el.setAttribute(k, v);
  }
  const list = Array.isArray(children) ? children : [children];
  for (const c of list) {
    if (c == null || c === false) continue;
    el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return el;
}

export function mount(parent, el) {
  parent.appendChild(el);
  return el;
}

export function observe(el, cb, opts = {}) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && cb(e)),
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15, ...opts }
  );
  io.observe(el);
  return io;
}
