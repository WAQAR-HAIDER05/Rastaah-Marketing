export const SITE = {
  name: "Rastaah Marketing",
  shortName: "Rastaah",
  tagline: "Your Path to Better Property Investment.",
  supporting:
    "Trusted real estate opportunities in Wah Cantt and beyond.",
  city: "Wah Cantt, Pakistan",
  region: "Wah Cantt, New City and surrounding developments",
  phone: "" as string,
  whatsapp: "" as string,
  email: "" as string,
  social: {
    facebook: "" as string,
    instagram: "" as string,
    whatsapp: "" as string,
  },
} as const;

export const PHONE_PLACEHOLDER = "[Add phone number]";
export const WHATSAPP_PLACEHOLDER = "[Add WhatsApp number]";
export const EMAIL_PLACEHOLDER = "[Add email]";

export function displayPhone() {
  return SITE.phone || PHONE_PLACEHOLDER;
}

export function displayWhatsapp() {
  return SITE.whatsapp || WHATSAPP_PLACEHOLDER;
}

export function displayEmail() {
  return SITE.email || EMAIL_PLACEHOLDER;
}

export function telHref() {
  return SITE.phone ? `tel:${SITE.phone.replace(/\s+/g, "")}` : undefined;
}

export function mailHref() {
  return SITE.email ? `mailto:${SITE.email}` : undefined;
}

export function whatsappHref() {
  const n = SITE.whatsapp || SITE.social.whatsapp;
  if (!n) return undefined;
  const digits = n.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/projects", label: "Projects" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact" },
] as const;

export const FOOTER_PROPERTY = [
  { search: { type: "Residential Plot" }, label: "Residential" },
  { search: { type: "Commercial Plot" }, label: "Commercial" },
  { search: { purpose: "For Investment" }, label: "Investment" },
] as const;
