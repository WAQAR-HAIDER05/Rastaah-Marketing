import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/primitives";
import { SiteShell } from "@/components/layout/site-shell";
import { listingById } from "@/data/catalog";

export const Route = createFileRoute("/properties/$id")({
  component: ListingPage,
  loader: ({ params }) => {
    const listing = listingById(params.id);
    if (!listing) throw notFound();
    return listing;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Property"} · Rastaah Marketing` }],
  }),
});

function ListingPage() {
  const listing = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="bg-ink pt-28 pb-12 md:pt-32">
        <Container>
          <p className="text-xs uppercase tracking-luxury text-gold">
            {listing.location} · {listing.purpose}
          </p>
          <h1 className="mt-3 font-display text-5xl text-paper md:text-6xl">{listing.title}</h1>
          <p className="mt-4 text-paper/70">
            {listing.type} · {listing.size}
          </p>
        </Container>
      </section>
      <section className="bg-paper py-12 md:py-16">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full rounded-2xl object-cover"
            />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {listing.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="aspect-4/3 w-full rounded-lg object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="mt-8 text-base leading-relaxed text-earth">{listing.summary}</p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              {listing.details.map((line) => (
                <li key={line} className="border-b border-ink/8 py-3">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-ink/10 bg-paper-2 p-6">
              <p className="text-xs uppercase tracking-luxury text-gold">Indicative price</p>
              <p className="mt-2 font-display text-4xl text-ink">{listing.priceLabel}</p>
              <p className="mt-2 text-xs text-muted">
                Sample figure for this demonstration — replace with live pricing.
              </p>
              <Button asChild className="mt-6 w-full">
                <Link to="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="line" className="mt-3 w-full">
                <Link to="/properties">Back to listings</Link>
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </SiteShell>
  );
}
