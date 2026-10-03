// Cinematic intro orchestration.
// The intro markup is in index.html (so the first paint shows it instantly).
// This file handles the sequence.

export function playIntro(introEl, onDone) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    introEl.remove();
    onDone();
    return;
  }

  // Phase 1: borrow the building image, then push in.
  // We use CSS variables so timings stay in style.
  requestAnimationFrame(() => introEl.classList.add('intro--stage-1'));
  setTimeout(() => introEl.classList.add('intro--stage-2'), 700);
  setTimeout(() => introEl.classList.add('intro--stage-3'), 1300);
  setTimeout(() => {
    introEl.classList.add('intro--exit');
    setTimeout(() => {
      introEl.remove();
      onDone();
    }, 620);
  }, 1700);
}
