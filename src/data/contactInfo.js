export const CONTACT_EMAIL = "info@vsachitech.com";

export function buildMailtoLink({
  email = CONTACT_EMAIL,
  subject = "Project inquiry — Vsachi Tech",
  body = "Hi Vsachi Team,\n\n",
} = {}) {
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${email}?${params.toString()}`;
}

export function buildGmailComposeLink({
  email = CONTACT_EMAIL,
  subject = "Project inquiry — Vsachi Tech",
  body = "Hi Vsachi Team,\n\n",
} = {}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}