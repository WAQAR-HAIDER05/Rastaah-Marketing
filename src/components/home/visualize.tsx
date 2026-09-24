import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { COMMUNITY_PLOTS } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/layout/primitives";
import { LazyCommunityScene } from "@/components/three/lazy-scene";

const STATUS_COPY = {
  available: "Available",
  reserved: "Reserved",
  built: "Built",
} as const;

export function Visualize() {
  const initial = COMMUNITY_PLOTS.find((p) => p.id === "A-12") ?? COMMUNITY_PLOTS[0];
  const [selected, setSelected] = useState(initial);

  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>3D property experience</Eyebrow>
            <h2 className="mt-3 font-display text-4xl tracking-display md:text-5xl">
              Visualize Your Investment
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              An illustrative plotted community using dummy data. Rotate the model,
              hover a plot, and replace these records with live inventory later.
            </p>
          </div>
          <p className="text-xs uppercase tracking-luxury text-gold/80">
            Drag to rotate · Scroll to zoom
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-gold/20 lg:grid-cols-12">
          <div className="relative min-h-96 bg-ink-2 lg:col-span-8 lg:min-h-[34rem]">
            <LazyCommunityScene selectedId={selected.id} onSelect={setSelected} />
          </div>
          <aside className="border-t border-gold/20 bg-ink-3 p-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:p-8">
            <p className="text-xs uppercase tracking-luxury text-gold">Selected plot</p>
            <h3 className="mt-3 font-display text-4xl tracking-display">{selected.label}</h3>
            <dl className="mt-6 space-y-3 text-sm">
              <Row label="Type" value={selected.type} />
              <Row label="Size" value={selected.size} />
              <Row label="Status" value={STATUS_COPY[selected.status]} />
              <Row label="Reference" value={selected.id} />
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-paper/60">
              Sample record only. Plot boundaries and availability are not a survey
              of a live project.
            </p>
            <Button asChild className="mt-8 w-full">
              <Link to="/contact">Ask about this plot</Link>
            </Button>
            <ul className="mt-8 space-y-2 text-xs text-paper/55">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold" /> Available
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold-deep" /> Reserved
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-earth" /> Built
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-paper/8 pb-3">
      <dt className="text-paper/50">{label}</dt>
      <dd className="text-paper">{value}</dd>
    </div>
  );
}
