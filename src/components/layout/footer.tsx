import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import {
  displayEmail,
  displayPhone,
  displayWhatsapp,
  FOOTER_PROPERTY,
  mailHref,
  NAV,
  SITE,
  telHref,
} from "@/lib/site";
import { Container, GoldRule } from "@/components/layout/primitives";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.4L1 23l5.8-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.4.6.6-3.3-.2-.3a9.1 9.1 0 1 1 7.9 4.5Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.2 5.2 0 0 0 1.1 2.7 12 12 0 0 0 4.6 4.1 5.3 5.3 0 0 0 3.2.9 2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export function Footer() {
  const phone = telHref();
  const mail = mailHref();

  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl tracking-display">Rastaah Marketing</p>
            <GoldRule className="mt-5" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">
              {SITE.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/50">
              {SITE.city}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-luxury text-gold">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-paper/75 hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-luxury text-gold">
              Property
            </p>
            <ul className="mt-5 space-y-3">
              {FOOTER_PROPERTY.map((item) => (
                <li key={item.label}>
                  <Link
                    to="/properties"
                    search={item.search}
                    className="text-sm text-paper/75 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-medium uppercase tracking-luxury text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              <li>
                {phone ? (
                  <a href={phone} className="hover:text-gold">
                    {displayPhone()}
                  </a>
                ) : (
                  displayPhone()
                )}
              </li>
              <li>WhatsApp: {displayWhatsapp()}</li>
              <li>
                {mail ? (
                  <a href={mail} className="hover:text-gold">
                    {displayEmail()}
                  </a>
                ) : (
                  displayEmail()
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-paper/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-paper/45">
            © 2026 Rastaah Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-paper/70">
            <SocialSlot href={SITE.social.facebook} label="Facebook">
              <Facebook className="size-4" />
            </SocialSlot>
            <SocialSlot href={SITE.social.instagram} label="Instagram">
              <Instagram className="size-4" />
            </SocialSlot>
            <SocialSlot href={SITE.social.whatsapp} label="WhatsApp">
              <WhatsAppGlyph className="size-4" />
            </SocialSlot>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialSlot({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const className =
    "flex size-10 items-center justify-center rounded-md border border-paper/12 hover:border-gold hover:text-gold";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={className}>
        {children}
      </a>
    );
  }
  return (
    <span aria-label={`${label} (add URL)`} title={`Add ${label} URL`} className={className}>
      {children}
    </span>
  );
}
