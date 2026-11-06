import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ground")({
  head: () => ({
    meta: [{ title: "Ground and boxes · The Potato Plot" }],
  }),
  component: GroundPage,
});

const GROUND_STEPS = [
  "Work the row loose, about a foot deep. Don’t walk on it afterward. Leave the paths firm so you have dirt to pull up later.",
  "Set certified seed pieces 10–12 inches apart, eyes up, in a trench about 4 inches deep. Rows 30–36 inches apart. Cover with 4 inches of soil, no more.",
  "When the stems stand 6–8 inches above that soil, lay a loose flake of hay around them. Do not pack it onto the leaves.",
  "Pull dirt from the paths over the hay the same day, enough to bury the stem and hold the hay down. Leave the top leaves, about 4 inches, in the light.",
  "Each time they stand up again, hay first, then dirt. Stop when the hill is about 8–12 inches above the original soil, or when flowering is heavy. Don’t bury the tip.",
];

const BOX_STEPS = [
  "Use an open-bottom box, a pallet collar, or four boards on loose ground. About 2 feet square, or a long box 12–16 inches wide. Cedar, pine, or untreated boards. Skip lumber that was stained or pressure-treated for ground contact.",
  "Start one board high, roughly 8–10 inches. Put in 4 inches of soil, set two seed pieces in a 2-foot box (not a handful), cover with 3 inches of soil and a loose layer of hay.",
  "When the leaves clear the rim by about 6 inches, add the next board and screw or wire the corners. Hay around the stems, then dirt up to just under the leaves.",
  "Two or three lifts is the crop. A box filled past about 24 inches stays wet at the bottom and does not make more potatoes.",
  "If the box has a solid bottom, drill drainage holes before you plant. A swamp at the bottom rots the first tubers.",
];

const NOT_YET = [
  {
    title: "Stems are up and almost bare",
    body: "You are not late. Today, tuck hay around the stems and pull dirt over the hay. Light greens a shallow tuber in an afternoon.",
  },
  {
    title: "You have hay and no spare dirt",
    body: "Hay alone works if it stays dark around the stems. Add it loose, a few inches at a time, up to about a foot by flowering. Weight the edges with boards or a little soil so the wind doesn’t strip it.",
  },
  {
    title: "You have dirt and no hay",
    body: "Hill with soil only. Hay is the loose layer that makes the harvest easier. Dirt is what actually shuts out the light. Don’t skip the hill because the hay hasn’t been delivered.",
  },
  {
    title: "They are already flowering",
    body: "One modest cover is all you add. Burying a flowering top to “catch up” shades the leaves that are feeding the tubers. Leave the top 4 inches in the sun.",
  },
];

function GroundPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">
          Ground and boxes
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          If it isn’t buried yet, bury it as it grows
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A potato in the ground or in a box makes new tubers along the stem you cover. Each time
          that stem stands in the light, lay hay around it and dirt over the hay, and leave only
          the top leaves out. This is not the canvas-bag fold. And it is not for sweet potatoes.
        </p>
      </header>

      <section className="mt-8 rounded-2xl bg-ink p-6 text-cream sm:p-8">
        <h2 className="font-display text-3xl">The cover, in order</h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            ["1", "Hay", "A loose flake around the stem. Not against the growing tip."],
            ["2", "Dirt", "Pulled over the hay so light and wind can’t get under it."],
            ["3", "Leaves out", "The top few inches stay green. A buried tip stops the plant."],
          ].map(([n, title, body]) => (
            <li key={n}>
              <p className="font-display text-3xl text-cream/50 tabular-nums">{n}</p>
              <p className="mt-2 font-display text-2xl">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Already planted, and not covered</h2>
        <p className="mt-3 max-w-2xl text-muted">
          If the seed went in under a thin scratch of soil and the stems are standing in the open,
          start the hay and dirt now. Don’t wait for a free weekend.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {NOT_YET.map((item) => (
            <li key={item.title} className="rounded-2xl bg-cream p-5 shadow-card">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-cream p-6 shadow-card">
          <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">
            In the ground
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">A trench, then a hill of hay and dirt</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            {GROUND_STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-lg text-russet tabular-nums">0{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>
        <article className="rounded-2xl bg-cream p-6 shadow-card">
          <p className="text-xs font-medium tracking-widest text-sage-ink uppercase">In a box</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Add a board, then hay, then dirt</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            {BOX_STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-lg text-russet tabular-nums">0{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-ink">What the hay is for</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <p>
              Hay or straw keeps the hill loose, holds water, and lets tubers form where you can
              find them by pulling the cover back. Dirt over it is what blocks the light. Hay with
              no dirt can work. Dirt with no hay is the ordinary hill. Both together is the method.
            </p>
            <p>
              Use hay that was not sprayed with a persistent pasture herbicide, and don’t use
              manure from animals that ate treated hay. Those residues pass through and twist a
              potato crop. If you don’t know the field, use straw or chopped leaves instead.
            </p>
            <p>
              Dry hay sheds the first watering. Soak it until the soil under it is actually wet.
              After that it holds moisture, which is what you want while tubers are sizing — and
              what causes rot if the box has no way to drain.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl text-ink">Sweet potatoes do not get this</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <p>
              A sweet potato slip is planted once, in warm ground or in a box filled to the top.
              A light mulch of hay on the surface keeps the soil moist. You do not add boards and
              you do not bury the vine under dirt every week. That is how you get stem instead of
              roots.
            </p>
            <p>
              In the ground, slips go 12–18 inches apart after the soil holds 65°F / 18°C, buried
              to the top leaves on planting day only. The vines run on top of the mulch. Lift any
              that root down the row if you want the energy in the roots you planted.
            </p>
            <p>
              Potatoes in the same garden still get the hay-and-dirt lifts. The two crops can
              share a bed’s weather and not share a method.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Harvest the hill, not the whole bed</h2>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          <p>
            For new potatoes, pull the hay back a few weeks after flowering and take what is
            sitting in the straw. Push the cover back so the rest stay dark.
          </p>
          <p>
            For a storage crop, wait until the vines yellow. Pull the hay off, then lift the dirt
            hill from the side with a fork, starting wider than you think the tubers reached.
            Leave them on the soil only long enough to dry the dirt. An afternoon of sun greens
            them. Do not eat extensive green, and do not eat the sprouts. The pantry chapter is the cure and the shelf: dark, near 45°F after a short
            cure. Sweet potatoes from the same garden still get a warm cure and never the
            refrigerator.
          </p>
        </div>
        <p className="mt-6 text-sm text-muted">
          Feeding is the same judgment as everywhere else — little nitrogen, no lime on the potato
          ground.{" "}
          <Link to="/fertilizer" className="font-medium text-russet-deep">
            The fertilizer guide
          </Link>{" "}
          has the rates. Canvas bags hill with potting mix instead of hay and path dirt.{" "}
          <Link to="/bags" className="font-medium text-russet-deep">
            That method stays on the bag page.
          </Link>{" "}
          Storage, canning, and a few recipes are in the{" "}
          <Link to="/pantry" className="font-medium text-russet-deep">
            pantry
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
