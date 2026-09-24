export function PlotFallback({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex h-full w-full items-center justify-center"}>
      <svg viewBox="0 0 320 240" className="h-full w-full p-8" aria-hidden="true">
        <defs>
          <linearGradient id="plot-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d4bc94" />
            <stop offset="100%" stopColor="#9a7b4f" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }, (_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const x = 70 + col * 48 - row * 28;
          const y = 58 + row * 28 + col * 14;
          const built = i === 1 || i === 6 || i === 10;
          return (
            <g key={i}>
              <polygon
                points={`${x},${y} ${x + 40},${y + 12} ${x + 12},${y + 34} ${x - 28},${y + 22}`}
                fill={built ? "#cfc3b3" : "none"}
                fillOpacity={built ? 0.35 : 0}
                stroke="url(#plot-gold)"
                strokeWidth="1.2"
              />
              {built ? (
                <polygon
                  points={`${x + 4},${y + 6} ${x + 20},${y + 12} ${x + 20},${y - 10} ${x + 4},${y - 16}`}
                  fill="#d9cbb8"
                  stroke="#c4a574"
                  strokeWidth="0.8"
                />
              ) : null}
            </g>
          );
        })}
        <path
          d="M40 150 L250 70"
          stroke="#c4a574"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
