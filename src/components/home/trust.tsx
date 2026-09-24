import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Reveal } from "@/components/layout/primitives";

const POINTS = [
  "Clear Property Information",
  "Local Market Focus",
  "Personal Assistance",
];

export function Trust() {
  return (
    <section className="bg-paper-2 py-24 md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-luxury text-gold">
              A considered process
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-display text-ink md:text-5xl">
              A Better Way to Explore Property
            </h2>
            <ul className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-ink">
                  <span className="flex size-8 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check className="size-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl bg-ink p-8 text-paper md:p-10">
              <p className="text-xs uppercase tracking-luxury text-gold">Wah Cantt</p>
              <h3 className="mt-3 font-display text-3xl tracking-display">
                Looking for a Property in Wah Cantt?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">
                Tell us what you're looking for and our team can help you explore
                suitable options.
              </p>
              <Button asChild className="mt-8">
                <Link to="/contact">Contact Rastaah Marketing</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
