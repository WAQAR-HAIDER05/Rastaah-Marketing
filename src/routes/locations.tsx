import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/layout/primitives";
import { SiteShell } from "@/components/layout/site-shell";
import { MAP_POINTS } from "@/data/catalog";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [{ title: "Locations · Rastaah Marketing" }],
  }),
});

function LocationsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Locations"
        title="Wah Cantt & surrounding areas"
        body="A concise orientation to the corridor — without fake pins, fake boundaries or invented project maps."
        image="/images/location-aerial.jpg"
      />
      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-ink">
            <img
              src="/images/hero.jpg"
              alt="Aerial view of a planned community"
              className="aspect-square w-full object-cover opacity-75"
            />
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
              <path
                d="M12 78 C 28 70, 34 52, 40 48 S 55 38, 70 42 88 58, 90 30"
                fill="none"
                stroke="#c4a574"
                strokeWidth="0.6"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-display text-4xl text-ink">The corridor at a glance</h2>
            <p className="mt-4 text-sm leading-relaxed text-earth">
              Wah Cantt is a cantonment city in Punjab, close to Taxila, with
              connections along GT Road and the M-1 Motorway. Islamabad is
              typically a 30–45 minute drive. New City and nearby residential
              developments sit within this same corridor. The sketch map on this
              page is stylistic, not a survey.
            </p>
            <ul className="mt-8 space-y-4">
              {MAP_POINTS.map((point) => (
                <li key={point.id} className="rounded-xl border border-ink/8 p-5">
                  <p className="font-medium text-ink">{point.name}</p>
                  <p className="mt-1 text-sm text-earth">{point.note}</p>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/properties">Browse sample properties</Link>
            </Button>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
