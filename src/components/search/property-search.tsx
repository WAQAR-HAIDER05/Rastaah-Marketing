import { useNavigate } from "@tanstack/react-router";
import { type FormEvent, type ReactNode } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SelectField } from "@/components/ui/select-field";
import {
  LOCATIONS,
  PRICE_RANGES,
  PROPERTY_TYPES,
  PURPOSES,
} from "@/data/catalog";
import { cn } from "@/lib/utils";

export type SearchValues = {
  location?: string;
  type?: string;
  purpose?: string;
  range?: string;
};

export function PropertySearch({
  variant = "float",
  defaults,
}: {
  variant?: "float" | "page";
  defaults?: SearchValues;
}) {
  const navigate = useNavigate();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const location = String(data.get("location") ?? "");
    const type = String(data.get("type") ?? "");
    const purpose = String(data.get("purpose") ?? "");
    const range = String(data.get("range") ?? "");
    void navigate({
      to: "/properties",
      search: {
        location: location && location !== "any" ? location : undefined,
        type: type && type !== "any" ? type : undefined,
        purpose: purpose && purpose !== "any" ? purpose : undefined,
        range: range && range !== "any" ? range : undefined,
      },
    });
  }

  const floating = variant === "float";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border p-5 shadow-lift md:p-7",
        floating
          ? "border-gold/20 bg-paper/92 backdrop-blur-md"
          : "border-ink/10 bg-paper",
      )}
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-luxury text-gold">
            Search
          </p>
          <h2 className="mt-1 font-display text-2xl tracking-display text-ink md:text-3xl">
            Find Your Property
          </h2>
        </div>
        <Search className="hidden size-5 text-gold md:block" aria-hidden="true" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Field label="Location" htmlFor="filter-location">
          <SelectField
            id="filter-location"
            name="location"
            defaultValue={defaults?.location ?? "any"}
          >
            <option value="any">All locations</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label="Property Type" htmlFor="filter-type">
          <SelectField
            id="filter-type"
            name="type"
            defaultValue={defaults?.type ?? "any"}
          >
            <option value="any">All types</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label="Purpose" htmlFor="filter-purpose">
          <SelectField
            id="filter-purpose"
            name="purpose"
            defaultValue={defaults?.purpose ?? "any"}
          >
            <option value="any">Any purpose</option>
            {PURPOSES.map((purpose) => (
              <option key={purpose} value={purpose}>
                {purpose}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label="Price Range" htmlFor="filter-range">
          <SelectField
            id="filter-range"
            name="range"
            defaultValue={defaults?.range ?? "any"}
          >
            {PRICE_RANGES.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </SelectField>
        </Field>
        <div className="flex items-end">
          <Button type="submit" className="w-full" size="md">
            Search Properties
          </Button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
