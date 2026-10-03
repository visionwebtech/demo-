import { h } from '../utils/dom.js';
import { SITE } from '../data/site.js';
import { buildReservationMessage, buildWaLink, escape } from '../utils/whatsapp.js';

export function renderReserve() {
  const today = new Date().toISOString().split('T')[0];

  // Fields
  const fName = field('Your name', 'name', { required: true, autocomplete: 'name' });
  const fPhone = field('Phone', 'phone', { required: true, type: 'tel', autocomplete: 'tel' });
  const fDate = field('Date', 'date', { required: true, type: 'date', min: today });
  const fTime = field('Time', 'time', { required: true, type: 'time' });
  const fGuests = field('Guests', 'guests', { required: true, type: 'number', min: '1', max: '20', value: '2' });
  const fMsg = field('Anything we should know?', 'message', { tag: 'textarea', rows: 4 });

  const form = h('form', { class: 'reserve__form', novalidate: true }, [
    row([fName, fPhone]),
    row([fDate, fTime]),
    row([fGuests]),
    row([fMsg], 'reserve__full'),
    h('button', { class: 'btn btn--primary reserve__submit', type: 'submit' }, 'Send reservation request'),
    h('p', { class: 'reserve__fineprint' },
      'Submits via WhatsApp — no reservation is confirmed on this page. The café confirms directly on WhatsApp.'
    ),
    h('div', { class: 'reserve__sent', id: 'reserve-sent', hidden: true, role: 'status' }),
  ]);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name:   fName.input.value.trim(),
      phone:  fPhone.input.value.trim(),
      date:   fDate.input.value,
      time:   fTime.input.value,
      guests: fGuests.input.value,
      message: fMsg.input.value.trim(),
    };
    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      showSent(form, 'Please fill in name, phone, date, time and guests.', true);
      return;
    }
    const msg = buildReservationMessage(data);
    const link = buildWaLink(SITE.whatsapp.wa, msg);

    // Render an audit row so the user knows what is being sent.
    showSent(form, `
      <strong>Your reservation request is ready to send.</strong><br>
      Sending a WhatsApp message to <code>+${SITE.whatsapp.display}</code> for ${escape(data.guests)} guest(s)
      on ${escape(data.date)} at ${escape(data.time)} under <em>${escape(data.name)}</em>.
      If WhatsApp doesn\u2019t open, <a href="${link}" target="_blank" rel="noopener">click here</a>.
    `, false);

    window.open(link, '_blank', 'noopener');
  });

  const wa = `https://wa.me/${SITE.whatsapp.wa}?text=${encodeURIComponent('Hi Croft House, I would like to reserve a table.')}`;

  const side = h('aside', { class: 'reserve__side' }, [
    h('span', { class: 'eyebrow' }, 'Prefer to type less?'),
    h('h3',   { class: 'reserve__side-title' }, 'Open WhatsApp directly.'),
    h('p',    { class: 'reserve__side-text'  },
      'Skip the form and message the café on the verified number. The team replies on WhatsApp.'
    ),
    h('a', { class: 'btn btn--ghost', href: wa, target: '_blank', rel: 'noopener' }, 'Book via WhatsApp'),
    h('a', { class: 'btn btn--ghost', href: SITE.phone.tel }, 'Or just call'),
  ]);

  return h('section', { class: 'reserve', id: 'reserve' }, [
    h('div', { class: 'reserve__head' }, [
      h('span', { class: 'eyebrow' }, 'Plan your visit'),
      h('h2',   { class: 'reserve__title' }, 'Reserve a table.'),
      h('p',    { class: 'reserve__lede' },
        'Pick a date, a time, and a headcount. We\u2019ll hand the request straight to the team on WhatsApp \u2014 they\u2019ll confirm with you directly.'
      ),
    ]),
    h('div', { class: 'reserve__grid' }, [form, side]),
  ]);
}

function field(label, name, opts = {}) {
  const id = `f-${name}`;
  const isTextarea = opts.tag === 'textarea';
  const input = h(isTextarea ? 'textarea' : 'input', {
    id,
    name,
    class: 'field__input',
    type: opts.type || 'text',
    required: !!opts.required,
    autocomplete: opts.autocomplete,
    min: opts.min,
    max: opts.max,
    rows: opts.rows,
    placeholder: ' ',
  });
  const wrap = h('div', { class: 'field' }, [
    h('label', { for: id, class: 'field__label' }, label),
    input,
  ]);
  wrap.input = input;
  return wrap;
}

function row(els, cls = 'reserve__row') {
  return h('div', { class: cls }, els);
}

function showSent(form, msg, isError) {
  const box = form.querySelector('.reserve__sent');
  box.innerHTML = msg;
  box.hidden = false;
  box.classList.toggle('reserve__sent--err', !!isError);
}
