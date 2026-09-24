import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/primitives";
import { SiteShell } from "@/components/layout/site-shell";
import { LISTINGS, projectBySlug } from "@/data/catalog";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.name ?? "Project"} · Rastaah Marketing` }],
  }),
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const related = LISTINGS.filter((item) =>
    project.location.toLowerCase().includes(item.location.toLowerCase().split(" ")[0] ?? ""),
  ).slice(0, 3);

  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-ink pt-28 pb-24 md:pt-36">
        <img src={project.image} alt="" className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
        <Container className="relative">
          <p className="text-xs uppercase tracking-luxury text-gold">{project.location}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-paper md:text-7xl">{project.name}</h1>
          <p className="mt-4 text-paper/75">{project.type}</p>
        </Container>
      </section>
      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl text-ink">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-earth">{project.description}</p>
            <p className="mt-4 text-sm text-muted">
              Sample project page. Add site plans, plot lists and verified notes here.
            </p>
            <Button asChild className="mt-8">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-luxury text-gold">Related sample listings</p>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/properties/$id"
                    params={{ id: item.id }}
                    className="flex gap-4 rounded-xl border border-ink/8 p-3 hover:border-gold/40"
                  >
                    <img src={item.image} alt="" className="size-16 rounded-md object-cover" />
                    <span>
                      <span className="block font-medium text-ink">{item.title}</span>
                      <span className="text-sm text-earth">{item.priceLabel}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
