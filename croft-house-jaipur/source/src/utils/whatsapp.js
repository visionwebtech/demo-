// Pure helpers; no DOM. Tested mentally against the wa.me spec:
// wa.me/<digits>?text=<URL-encoded message>

export function buildWaLink(number, text) {
  const cleaned = String(number).replace(/[^\d]/g, '');
  const t = text == null ? '' : String(text);
  const encoded = encodeURIComponent(t);
  return encoded.length
    ? `https://wa.me/${cleaned}?text=${encoded}`
    : `https://wa.me/${cleaned}`;
}

export function buildReservationMessage({ name, phone, date, time, guests, message }) {
  const lines = [
    'Hi Croft House,',
    '',
    'I would like to reserve a table.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Guests: ${guests}`,
  ];
  if (message && message.trim()) lines.push('', `Note: ${message.trim()}`);
  lines.push('', 'Please confirm availability. Thank you.');
  return lines.join('\n');
}

// Minimal escaping for the form — used in toast output only.
export function escape(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}
