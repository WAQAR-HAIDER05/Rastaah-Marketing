import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import { MAP_POINTS } from "@/data/catalog";

export function LocationsPreview() {
  const [active, setActive] = useState<(typeof MAP_POINTS)[number]>(MAP_POINTS[0]);

  return (
    <section id="locations" className="bg-paper-2 py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Locations"
              title="Wah Cantt & Surrounding Areas"
              body="An abstract guide to the corridor — not a surveyed map and not exact project boundaries."
            />
            <ul className="mt-8 space-y-3">
              {MAP_POINTS.map((point) => (
                <li key={point.id}>
                  <button
                    type="button"
                    onClick={() => setActive(point)}
                    className={`w-full rounded-xl border px-4 py-4 text-left transition-colors duration-200 ${
                      active.id === point.id
                        ? "border-gold bg-paper"
                        : "border-ink/8 bg-paper/40 hover:border-gold/40"
                    }`}
                  >
                    <p className="font-medium text-ink">{point.name}</p>
                    <p className="mt-1 text-sm text-earth">{point.note}</p>
                  </button>
                </li>
              ))}
            </ul>
            <Button asChild variant="ink" className="mt-8">
              <Link to="/locations">Explore Locations</Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl bg-ink">
              <img
                src="/images/location-aerial.jpg"
                alt="Aerial landscape of planned housing and roads"
                className="aspect-4/5 w-full object-cover opacity-70 md:aspect-square"
                loading="lazy"
              />
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full"
                aria-hidden="true"
              >
                <path
                  d="M12 78 C 28 70, 34 52, 40 48 S 55 38, 70 42 88 58, 90 30"
                  fill="none"
                  stroke="#c4a574"
                  strokeWidth="0.6"
                  opacity="0.85"
                />
                <path
                  d="M18 30 L 42 48 L 74 36"
                  fill="none"
                  stroke="#c4a574"
                  strokeWidth="0.35"
                  opacity="0.5"
                />
              </svg>
              {MAP_POINTS.map((point) => (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setActive(point)}
                  className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink bg-gold"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  aria-label={point.name}
                >
                  <span className="absolute left-5 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-xs text-paper md:block">
                    {point.name}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
