import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/layout/primitives";
import { PropertySearch } from "@/components/search/property-search";
import { LazyHeroScene } from "@/components/three/lazy-scene";
import { SITE } from "@/lib/site";

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink text-paper"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        });
      }}
    >
      <div className="parallax-layer absolute inset-0 scale-105">
        <img
          src="/images/hero.jpg"
          alt="Aerial view of a planned residential development at golden hour"
          className="kenburns absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

      <Container className="relative flex flex-1 flex-col justify-center pt-28 pb-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{SITE.name}</Eyebrow>
            <h1 className="mt-5 max-w-xl font-display text-5xl leading-display tracking-display text-paper md:text-7xl">
              Find the Right Path to Your Property
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/75 md:text-lg">
              Explore property opportunities across Wah Cantt, New City and
              surrounding developments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/properties">Explore Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
            <p className="mt-10 text-xs uppercase tracking-luxury text-gold/90">
              Real Estate · Property · Investment
            </p>
          </div>
          <div className="relative hidden h-96 lg:col-span-5 lg:block">
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-gold/20 bg-ink/20 shadow-lift backdrop-blur-sm">
              <LazyHeroScene pointer={pointer} />
            </div>
            <p className="pointer-events-none absolute bottom-4 left-5 text-xs uppercase tracking-luxury text-gold/80">
              Plot visualisation
            </p>
          </div>
        </div>
      </Container>

      <div className="relative z-10 pb-8">
        <Container>
          <PropertySearch />
        </Container>
      </div>
    </section>
  );
}
