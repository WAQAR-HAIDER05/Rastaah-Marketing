import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import { JOURNEY } from "@/data/catalog";

export function Journey() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="The path"
            title="Property Investment Journey"
            body="A clear sequence from first conversation to a decision that fits your requirements."
          />
        </Reveal>
        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute top-7 right-8 left-8 hidden h-px bg-gold/30 md:block" />
          {JOURNEY.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <article className="relative">
                <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-gold bg-paper font-display text-xl text-gold">
                  {item.step}
                </span>
                <h3 className="mt-6 font-display text-3xl tracking-display text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-earth">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
