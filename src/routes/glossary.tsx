import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [{ title: "Glossary · Potatoes: The Potato Plot" }],
  }),
  component: GlossaryPage,
});

const TERMS: { term: string; def: string }[] = [
  {
    term: "Seed potato",
    def: "A potato grown and sold for planting.",
  },
  {
    term: "Certified seed",
    def: "Seed potatoes inspected and found free of major diseases.",
  },
  {
    term: "Chitting",
    def: "Sprouting seed potatoes in light before planting.",
  },
  {
    term: "Seed piece",
    def: "A cut chunk of seed potato with eyes.",
  },
  {
    term: "Eye",
    def: "A bud on a potato that grows into a sprout.",
  },
  {
    term: "Hilling",
    def: "Piling soil or mix around the stems.",
  },
  {
    term: "Slip",
    def: "A rooted sweet potato sprout.",
  },
  {
    term: "Curing",
    def: "Holding harvested tubers so skins toughen and cuts heal.",
  },
  {
    term: "Solanine",
    def: "A natural poison in green potatoes.",
  },
  {
    term: "Volunteer",
    def: "A potato that sprouts on its own from last year.",
  },
  {
    term: "TPS (true potato seed)",
    def: "Seed from potato berries. It doesn’t grow true.",
  },
];

function GlossaryPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">Words</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Glossary</h1>
      <dl className="mt-8 divide-y divide-line">
        {TERMS.map((item) => (
          <div key={item.term} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
            <dt className="font-display text-xl text-ink sm:col-span-4">{item.term}</dt>
            <dd className="text-sm leading-relaxed text-muted sm:col-span-8">{item.def}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
