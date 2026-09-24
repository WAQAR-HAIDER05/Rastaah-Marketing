import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/layout/primitives";
import { SiteShell } from "@/components/layout/site-shell";
import { PropertySearch } from "@/components/search/property-search";
import { filterListings } from "@/data/catalog";

type Search = {
  location?: string;
  type?: string;
  purpose?: string;
  range?: string;
};

export const Route = createFileRoute("/properties")({
  component: PropertiesPage,
  validateSearch: (search: Record<string, unknown>): Search => ({
    location: typeof search.location === "string" ? search.location : undefined,
    type: typeof search.type === "string" ? search.type : undefined,
    purpose: typeof search.purpose === "string" ? search.purpose : undefined,
    range: typeof search.range === "string" ? search.range : undefined,
  }),
  head: () => ({
    meta: [{ title: "Properties · Rastaah Marketing" }],
  }),
});

function PropertiesPage() {
  const search = Route.useSearch();
  const listings = filterListings(search);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Properties"
        title="Find the right property"
        body="Filter by location, type, purpose and price. Figures shown here can be replaced with live inventory."
        image="/images/cat-investment.jpg"
      />
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <PropertySearch variant="page" defaults={search} />
          <p className="mt-8 text-sm text-earth">
            {listings.length} propert{listings.length === 1 ? "y" : "ies"}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((item) => (
              <Link
                key={item.id}
                to="/properties/$id"
                params={{ id: item.id }}
                className="group overflow-hidden rounded-2xl border border-ink/8 bg-paper"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-luxury text-gold">{item.location}</p>
                  <h2 className="mt-2 font-display text-2xl text-ink">{item.title}</h2>
                  <p className="mt-1 text-sm text-earth">
                    {item.type} · {item.size}
                  </p>
                  <p className="mt-4 font-medium text-ink">{item.priceLabel}</p>
                  <p className="mt-1 text-xs text-muted">Illustrative sample listing</p>
                </div>
              </Link>
            ))}
          </div>
          {listings.length === 0 ? (
            <p className="mt-10 rounded-xl border border-ink/10 bg-paper-2 p-8 text-sm text-earth">
              No sample listings match these filters. Clear a filter or browse all properties.
            </p>
          ) : null}
        </Container>
      </section>
    </SiteShell>
  );
}
