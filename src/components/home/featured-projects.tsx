import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Reveal, SectionHeader } from "@/components/layout/primitives";
import { PROJECTS } from "@/data/catalog";

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-paper-2 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Featured"
            title="Explore Featured Properties"
            body="A selection of project areas Rastaah Marketing can help you review. Replace these with live inventory when ready."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group relative block overflow-hidden rounded-2xl bg-ink"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="aspect-16/10 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-luxury text-gold">{project.location}</p>
                    <h3 className="mt-2 font-display text-3xl text-paper md:text-4xl">{project.name}</h3>
                    <p className="mt-2 max-w-sm text-sm text-paper/75">{project.type}</p>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="size-4" />
                    <span className="sr-only">View Details</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
