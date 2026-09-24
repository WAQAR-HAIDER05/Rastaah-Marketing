import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import type { CommunityPlot } from "@/data/catalog";
import { PlotFallback } from "@/components/three/plot-fallback";
import { cn } from "@/lib/utils";

const HeroScene = lazy(() =>
  import("./hero-scene").then((m) => ({ default: m.HeroScene })),
);
const CommunityScene = lazy(() =>
  import("./community-scene").then((m) => ({ default: m.CommunityScene })),
);

function ClientGate({
  children,
  fallback,
  className,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { rootMargin: "180px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("relative h-full w-full", className)}>
      {mounted && visible ? children : fallback}
    </div>
  );
}

export function LazyHeroScene(props: { pointer: { x: number; y: number } }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="h-full w-full">
      {mounted ? (
        <Suspense fallback={<PlotFallback />}>
          <HeroScene {...props} />
        </Suspense>
      ) : (
        <PlotFallback />
      )}
    </div>
  );
}

export function LazyCommunityScene(props: {
  selectedId: string;
  onSelect: (plot: CommunityPlot) => void;
}) {
  return (
    <ClientGate
      className="h-full min-h-80 w-full"
      fallback={<PlotFallback className="flex h-full min-h-80 items-center justify-center" />}
    >
      <Suspense fallback={<PlotFallback className="flex h-full items-center justify-center" />}>
        <CommunityScene {...props} />
      </Suspense>
    </ClientGate>
  );
}
