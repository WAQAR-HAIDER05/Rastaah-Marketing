import { Container, Eyebrow } from "@/components/layout/primitives";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 pb-20 md:pt-36 md:pb-28">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight tracking-display text-paper md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70">{body}</p>
      </Container>
    </section>
  );
}
