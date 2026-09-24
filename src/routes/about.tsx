import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Handshake, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import { SiteShell } from "@/components/layout/site-shell";
import { ABOUT_FEATURES, JOURNEY } from "@/data/catalog";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About · Rastaah Marketing" }],
  }),
});

const ICONS = [Compass, LineChart, Handshake];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="A straightforward path to property in Wah Cantt"
        body="Rastaah Marketing connects buyers and investors with property opportunities across Wah Cantt, New City and surrounding developments."
        image="/images/about.jpg"
      />
      <section className="bg-paper py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              title="Locally focused, clearly explained"
              body="The name Rastaah speaks to a path: helping clients move from a first inquiry to a property that matches what they actually need. We keep the process personal, and we do not dress listings with claims that cannot be verified."
            />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-earth">
              Wah Cantt sits in Punjab with access toward Taxila, GT Road and the
              M-1 Motorway, and Islamabad is typically under an hour away. That
              geography is why many families and investors look here — this site
              is a place to start that conversation, not a catalogue of invented
              statistics.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <img
              src="/images/project-wah-cantt.jpg"
              alt="Quiet residential street in a cantonment neighbourhood at dusk"
              className="rounded-2xl object-cover"
              loading="lazy"
            />
          </Reveal>
        </Container>
      </section>
      <section className="bg-paper-2 py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {ABOUT_FEATURES.map((feature, i) => {
              const Icon = ICONS[i] ?? Compass;
              return (
                <article key={feature.title} className="rounded-xl bg-paper p-7">
                  <Icon className="size-5 text-gold" />
                  <h2 className="mt-5 font-display text-2xl">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-earth">{feature.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-ink py-20 text-paper">
        <Container>
          <SectionHeader invert title="How we work with you" />
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {JOURNEY.map((item) => (
              <div key={item.step}>
                <p className="font-display text-3xl text-gold">{item.step}</p>
                <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-paper/65">{item.body}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-12">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </Container>
      </section>
    </SiteShell>
  );
}
