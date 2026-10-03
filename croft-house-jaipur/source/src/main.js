import './styles/main.css';
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderQuickActions } from './components/quickActions.js';
import { renderExperience } from './components/experience.js';
import { renderMenu } from './components/menu.js';
import { renderGallery } from './components/gallery.js';
import { renderReserve } from './components/reserve.js';
import { renderLocation } from './components/location.js';
import { renderFooter } from './components/footer.js';
import { renderMobileBar } from './components/mobileBar.js';
import { playIntro } from './components/intro.js';

const root = document.getElementById('app');
const intro = document.getElementById('intro');
const main = document.createElement('main');
main.id = 'main';
main.setAttribute('aria-hidden', 'true');

[renderHeader(), renderHero(), renderQuickActions(), renderExperience(),
 renderMenu(), renderGallery(), renderReserve(), renderLocation(), renderFooter()
].forEach((n) => main.appendChild(n));

main.appendChild(renderFooter());
document.body.appendChild(main);
renderMobileBar();

function reveal() {
  main.removeAttribute('aria-hidden');
  // fade-in the main after a frame for a smooth handover
  requestAnimationFrame(() => main.classList.add('main--in'));
  // begin in-page scroll-reveal observer after the intro finishes
  import('./utils/scroll.js').then((m) => m.observeReveal());
}

playIntro(intro, reveal);
