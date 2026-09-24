import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/contact/inquiry-form";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/layout/primitives";
import { SiteShell } from "@/components/layout/site-shell";
import {
  displayEmail,
  displayPhone,
  displayWhatsapp,
  mailHref,
  SITE,
  telHref,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact · Rastaah Marketing" }],
  }),
});

function ContactPage() {
  const phone = telHref();
  const mail = mailHref();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let's Find Your Next Property"
        body="Tell us what you are looking for. Phone, WhatsApp and email fields below are placeholders until live details are added."
        image="/images/project-commercial.jpg"
      />
      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl text-ink">{SITE.name}</h2>
            <p className="mt-3 text-sm text-earth">{SITE.city}</p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-luxury text-gold">Phone</dt>
                <dd className="mt-2">
                  {phone ? <a href={phone}>{displayPhone()}</a> : displayPhone()}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-luxury text-gold">WhatsApp</dt>
                <dd className="mt-2">{displayWhatsapp()}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-luxury text-gold">Email</dt>
                <dd className="mt-2">
                  {mail ? <a href={mail}>{displayEmail()}</a> : displayEmail()}
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-8 rounded-2xl border border-ink/8 bg-paper-2/70 p-6 md:p-8">
            <InquiryForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
