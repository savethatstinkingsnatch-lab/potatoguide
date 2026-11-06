import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [{ title: "Start here · Potatoes: The Potato Plot" }],
  }),
  component: StartPage,
});

const STEPS = [
  "Order certified seed potatoes or sweet potato slips early.",
  "Pick a grow bag (10 gallons or more) or a sunny bed with loose soil.",
  "Sprout potatoes in bright light for 2 to 3 weeks.",
  "Plant potatoes when the soil is about 45°F, 2 to 4 weeks before your last frost. Plant sweet potatoes when the soil is warm, after all frost.",
  "Hill potatoes as they grow so no tuber sees light. Do not hill sweet potatoes.",
  "Harvest, cure, and store using the pantry chapter.",
];

function StartPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">New to potatoes</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Start here</h1>
      <ol className="mt-8 space-y-4">
        {STEPS.map((step, i) => (
          <li key={step} className="flex gap-4 rounded-2xl bg-cream p-5 shadow-card">
            <span className="font-display text-2xl text-russet tabular-nums">0{i + 1}</span>
            <p className="pt-1 text-sm leading-relaxed text-ink">{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm text-muted">
        The pantry chapter has the cure, the cellar, and the canner.{" "}
        <Link to="/pantry" className="font-medium text-russet-deep">
          Open it when the vines are done.
        </Link>
      </p>
    </main>
  );
}
