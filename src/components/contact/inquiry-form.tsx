import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectField } from "@/components/ui/select-field";
import { Textarea } from "@/components/ui/textarea";
import { LOCATIONS, PROPERTY_TYPES } from "@/data/catalog";

const STORAGE_KEY = "rastaah-inquiries";

export function InquiryForm({ invert = false }: { invert?: boolean }) {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const message = String(data.message ?? "").trim();
    if (name.length < 2 || phone.length < 7 || message.length < 8) {
      toast.error("Please add your name, phone number and a short message.");
      return;
    }
    setPending(true);
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      existing.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      setSent(true);
      form.reset();
      toast.success("Request received. Replace this inbox with live follow-up when ready.");
    } catch {
      toast.error("Could not save this request locally. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-gold/30 bg-ink-2 p-8 text-paper">
        <p className="text-xs font-medium uppercase tracking-luxury text-gold">Thank you</p>
        <h3 className="mt-3 font-display text-3xl tracking-display">
          Your consultation request is noted.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-paper/70">
          This demo stores the message on this device so the form can be tested.
          Connect live phone, WhatsApp and email details to route real inquiries.
        </p>
        <Button type="button" className="mt-6" onClick={() => setSent(false)}>
          Send another request
        </Button>
      </div>
    );
  }

  const fieldClass = invert ? "text-paper/80" : undefined;

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <Label className={fieldClass} htmlFor="full-name">
          Full Name
        </Label>
        <Input id="full-name" name="name" autoComplete="name" required />
      </div>
      <div>
        <Label className={fieldClass} htmlFor="phone">
          Phone Number
        </Label>
        <Input id="phone" name="phone" autoComplete="tel" required />
      </div>
      <div>
        <Label className={fieldClass} htmlFor="email">
          Email
        </Label>
        <Input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div>
        <Label className={fieldClass} htmlFor="interest">
          Property Interest
        </Label>
        <SelectField id="interest" name="interest" defaultValue="">
          <option value="" disabled>
            Select interest
          </option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
          <option value="Investment">Investment</option>
        </SelectField>
      </div>
      <div>
        <Label className={fieldClass} htmlFor="preferred-location">
          Preferred Location
        </Label>
        <SelectField id="preferred-location" name="location" defaultValue="">
          <option value="" disabled>
            Select location
          </option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </SelectField>
      </div>
      <div className="md:col-span-2">
        <Label className={fieldClass} htmlFor="message">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us what you are looking for."
        />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending…" : "Request a Consultation"}
        </Button>
      </div>
    </form>
  );
}
