import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/layout/primitives";
import { SiteShell } from "@/components/layout/site-shell";
import { PROJECTS } from "@/data/catalog";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [{ title: "Projects · Rastaah Marketing" }],
  }),
});

function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Projects"
        title="Areas and opportunities we can help you review"
        body="These project pages are structured for live notes, plots and documents. They do not claim approvals or sales figures."
        image="/images/project-new-city.jpg"
      />
      <section className="bg-paper py-16 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group overflow-hidden rounded-2xl bg-ink"
            >
              <img
                src={project.image}
                alt={project.name}
                className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="-mt-24 relative flex items-end justify-between gap-4 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6">
                <div>
                  <p className="text-xs uppercase tracking-luxury text-gold">{project.location}</p>
                  <h2 className="mt-2 font-display text-3xl text-paper">{project.name}</h2>
                  <p className="mt-2 text-sm text-paper/70">{project.type}</p>
                </div>
                <ArrowUpRight className="size-5 text-gold" />
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </SiteShell>
  );
}
