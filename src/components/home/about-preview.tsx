import { Link } from "@tanstack/react-router";
import { Compass, Handshake, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import { ABOUT_FEATURES } from "@/data/catalog";

const ICONS = [Compass, LineChart, Handshake];

export function AboutPreview() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/about.jpg"
                alt="Planned residential streets with houses and landscaping"
                className="aspect-4/5 w-full object-cover md:aspect-4/3"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                <p className="text-xs uppercase tracking-luxury text-gold">Wah Cantt corridor</p>
                <p className="mt-2 font-display text-2xl text-paper">A clearer path to property</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="About Rastaah Marketing"
                title="Connecting buyers with the right property path"
                body="Rastaah Marketing connects buyers and investors with property opportunities across Wah Cantt, New City and surrounding developments."
              />
            </Reveal>
            <div className="mt-10 grid gap-4">
              {ABOUT_FEATURES.map((feature, i) => {
                const Icon = ICONS[i] ?? Compass;
                return (
                  <Reveal key={feature.title} delay={0.08 * i}>
                    <div className="flex gap-4 rounded-xl border border-ink/8 bg-paper-2/60 p-5">
                      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md border border-gold/30 text-gold">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <h3 className="font-medium text-ink">{feature.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-earth">{feature.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={0.2}>
              <Button asChild variant="ink" className="mt-8">
                <Link to="/about">Discover Our Approach</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
