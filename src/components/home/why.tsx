import { Building2, Handshake, MapPinned, ShieldCheck } from "lucide-react";
import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import { WHY } from "@/data/catalog";

const ICONS = [MapPinned, ShieldCheck, Building2, Handshake];

export function Why() {
  return (
    <section className="bg-ink-2 py-24 text-paper md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            invert
            align="center"
            eyebrow="Why Rastaah"
            title="Why Choose Rastaah Marketing?"
            body="A focused property practice for clients looking at Wah Cantt and nearby developments."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item, i) => {
            const Icon = ICONS[i] ?? MapPinned;
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="h-full rounded-xl border border-paper/10 bg-ink-3 p-6">
                  <Icon className="size-5 text-gold" />
                  <h3 className="mt-6 font-display text-2xl tracking-display">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/65">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
