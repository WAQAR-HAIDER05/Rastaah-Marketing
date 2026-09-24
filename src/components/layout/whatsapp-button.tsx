import { Link } from "@tanstack/react-router";
import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  const href = whatsappHref();
  const className =
    "fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-gold text-ink shadow-lift transition-transform duration-150 hover:bg-gold-2 active:scale-[0.96] md:right-8 md:bottom-8";

  const icon = (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.4L1 23l5.8-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.4.6.6-3.3-.2-.3a9.1 9.1 0 1 1 7.9 4.5Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.2 5.2 0 0 0 1.1 2.7 12 12 0 0 0 4.6 4.1 5.3 5.3 0 0 0 3.2.9 2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} aria-label="Chat on WhatsApp">
        {icon}
      </a>
    );
  }

  return (
    <Link to="/contact" className={className} aria-label="Contact Rastaah Marketing on WhatsApp">
      {icon}
    </Link>
  );
}
