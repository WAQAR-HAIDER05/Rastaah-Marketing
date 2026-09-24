import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ink hover:bg-gold-2",
        ink: "bg-ink text-paper hover:bg-ink-2",
        outline:
          "border border-gold/50 bg-transparent text-gold hover:bg-gold/10",
        ghost: "bg-transparent text-paper hover:text-gold",
        paper: "bg-paper text-ink hover:bg-paper-2",
        line: "border border-ink/15 bg-transparent text-ink hover:border-gold hover:text-gold-deep",
      },
      size: {
        sm: "h-10 rounded-md px-4 text-sm",
        md: "h-12 rounded-md px-6 text-sm",
        lg: "h-14 rounded-lg px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
