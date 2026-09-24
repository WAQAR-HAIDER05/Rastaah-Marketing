import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

export function SiteShell({
  children,
  overlayNav = false,
}: {
  children: ReactNode;
  overlayNav?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <Navbar overlay={overlayNav} />
      <main id="main">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
