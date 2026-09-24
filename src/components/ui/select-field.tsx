import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  invert?: boolean;
};

export function SelectField({ className, invert = false, children, ...props }: Props) {
  return (
    <div className="relative">
      <select
        suppressHydrationWarning
        className={cn(
          "h-12 w-full appearance-none rounded-md border px-4 pr-10 text-sm outline-none transition-[border-color,box-shadow] duration-150 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/30",
          invert
            ? "border-paper/15 bg-ink-3 text-paper"
            : "border-ink/12 bg-paper text-ink",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className={cn(
          "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2",
          invert ? "text-gold" : "text-earth",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
