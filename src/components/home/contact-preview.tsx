import { InquiryForm } from "@/components/contact/inquiry-form";
import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import {
  displayEmail,
  displayPhone,
  displayWhatsapp,
  mailHref,
  SITE,
  telHref,
} from "@/lib/site";

export function ContactPreview() {
  const phone = telHref();
  const mail = mailHref();

  return (
    <section id="contact" className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              eyebrow="Contact"
              title="Let's Find Your Next Property"
              body="Share a few details and Rastaah Marketing can help you explore suitable options in Wah Cantt and nearby areas."
            />
            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-luxury text-gold">{SITE.name}</dt>
                <dd className="mt-2 text-earth">{SITE.city}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-luxury text-gold">Phone</dt>
                <dd className="mt-2 text-ink">
                  {phone ? <a href={phone}>{displayPhone()}</a> : displayPhone()}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-luxury text-gold">WhatsApp</dt>
                <dd className="mt-2 text-ink">{displayWhatsapp()}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-luxury text-gold">Email</dt>
                <dd className="mt-2 text-ink">
                  {mail ? <a href={mail}>{displayEmail()}</a> : displayEmail()}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-2xl border border-ink/8 bg-paper-2/70 p-6 md:p-8">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
