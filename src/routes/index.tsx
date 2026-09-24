import { createFileRoute } from "@tanstack/react-router";
import { AboutPreview } from "@/components/home/about-preview";
import { Categories } from "@/components/home/categories";
import { ContactPreview } from "@/components/home/contact-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { Journey } from "@/components/home/journey";
import { LocationsPreview } from "@/components/home/locations-preview";
import { Trust } from "@/components/home/trust";
import { Visualize } from "@/components/home/visualize";
import { Why } from "@/components/home/why";
import { SiteShell } from "@/components/layout/site-shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Rastaah Marketing · Your Path to Better Property Investment" }],
  }),
});

function Home() {
  return (
    <SiteShell overlayNav>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <Visualize />
      <Why />
      <Journey />
      <LocationsPreview />
      <Categories />
      <Trust />
      <ContactPreview />
    </SiteShell>
  );
}
