import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import { CATEGORIES } from "@/data/catalog";

export function Categories() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Categories"
            title="Property by purpose"
            body="Start with the kind of property you want. Each card opens the matching sample listings."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <Link
                to="/properties"
                search={cat.search}
                className="group relative block min-h-72 overflow-hidden rounded-2xl"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/45 transition-colors duration-300 group-hover:bg-ink/35" />
                <div className="relative flex h-full min-h-72 flex-col justify-end p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl text-paper md:text-4xl">{cat.title}</h3>
                      <p className="mt-2 text-sm text-paper/80">{cat.line}</p>
                    </div>
                    <ArrowUpRight className="size-5 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
