import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/fertilizer")({
  head: () => ({
    meta: [{ title: "Fertilizer · The Potato Plot" }],
  }),
  component: FertilizerPage,
});

const STAGES: { when: string; potato: string; sweet: string }[] = [
  {
    when: "In the mix, before anything is planted",
    potato:
      "This is the main chance to feed, and only if the potting mix is not already fertilized. Use a vegetable product with a small first number — near 5-10-10, or an organic blend in that shape — at the rate on its label for the volume of mix you are using. Do not invent a spoonful, and do not pile it against the seed piece.",
    sweet:
      "Compost in the mix is often enough. If you add fertilizer, use a sweet-potato or low-nitrogen product and the rate on its label. Rich compost plus a full dose is how you get vines and pencil roots.",
  },
  {
    when: "When growth is a few inches tall",
    potato:
      "Look at the leaves before you add anything. Deep green and rushing: hill with plain mix, no fertilizer. Pale, yellowish, and slow: a light feeding at the label rate, around the edge, then hill.",
    sweet:
      "Don't side-dress on a calendar. Excess nitrogen makes vine instead of roots. A pale, stalled vine can still need nitrogen — Utah and other extensions side-dress in some conditions. Follow a sweet-potato label or your local recommendation.",
  },
  {
    when: "Flowering and bulking",
    potato:
      "Potassium matters more than more nitrogen now. Don't add a nitrogen boost unless the plants are clearly pale and the label allows it. Uneven water in this window causes knobs, cracks, and hollow heart — more often than a missing nutrient does.",
    sweet:
      "Keep water even. Drought followed by a soak splits roots. Don't add fertilizer unless the label or a local recommendation says this crop still needs it.",
  },
  {
    when: "The last month",
    potato:
      "Usually nothing. Late nitrogen makes watery tubers that store badly. Stop watering when the vines yellow so skins can set.",
    sweet:
      "Nothing extra. Ease off water in the last week so the roots aren't waterlogged when you tip the bag.",
  },
];

function FertilizerPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">Fertilizer</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Potassium for the crop. Nitrogen is the mistake.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A bag of 5-10-10 is 5% nitrogen, 10% phosphorus (as P₂O₅), and 10% potassium (as K₂O).
          Potatoes want that shape of analysis: a small first number. Sweet potatoes want even
          less, though a stalled vine can still need some nitrogen. How much is on the product
          label, and it depends on what the mix already holds. This page does not give a spoonful
          that fits every bag.
        </p>
      </header>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl bg-cream p-5 shadow-card">
          <h2 className="font-display text-2xl">Nitrogen</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Leaves. A little at the beginning gets potatoes out of the ground. Excess delays
            tubers and, on sweet potatoes, turns the bag into vine. A pale, stalled sweet-potato
            vine is a different case — follow the product label or a local recommendation. Lawn
            fertilizer is the wrong bag: high nitrogen, and sometimes a herbicide.
          </p>
        </article>
        <article className="rounded-2xl bg-cream p-5 shadow-card">
          <h2 className="font-display text-2xl">Phosphorus</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Roots and early energy. Useful in the pre-plant mix, especially in cool soil. Bone
            meal works slowly and nudges pH up, so skip it if you have ever had scab. Most potting
            mixes already contain some.
          </p>
        </article>
        <article className="rounded-2xl bg-cream p-5 shadow-card">
          <h2 className="font-display text-2xl">Potassium</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The nutrient that sizes and stores the crop. Sulfate of potash or kelp supplies it
            without the pH jump of wood ash. Ash is a potassium source you should not use on
            potatoes the same season — it sweetens the soil and scab follows.
          </p>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Through the season</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Amounts below are for 10 gallons of mix. The{" "}
          <Link to="/planner" className="font-medium text-russet-deep">
            planner
          </Link>{" "}
          multiplies them by the bags you own. These are starting points, not a soil test.
        </p>
        <div className="mt-6 hidden overflow-hidden rounded-2xl bg-cream shadow-card sm:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="w-40 px-5 py-4 font-medium text-muted">When</th>
                <th className="px-5 py-4 font-display text-lg font-medium">Potato</th>
                <th className="px-5 py-4 font-display text-lg font-medium">Sweet potato</th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((stage) => (
                <tr key={stage.when} className="border-b border-line last:border-0">
                  <th className="px-5 py-4 align-top font-medium text-ink">{stage.when}</th>
                  <td className="px-5 py-4 align-top leading-relaxed text-muted">{stage.potato}</td>
                  <td className="px-5 py-4 align-top leading-relaxed text-muted">{stage.sweet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:hidden">
          {STAGES.map((stage) => (
            <article key={stage.when} className="rounded-2xl bg-cream p-4 shadow-card">
              <h3 className="font-medium text-ink">{stage.when}</h3>
              <p className="mt-3 text-sm leading-relaxed">
                <span className="font-medium">Potato. </span>
                <span className="text-muted">{stage.potato}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                <span className="font-medium">Sweet potato. </span>
                <span className="text-muted">{stage.sweet}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-ink p-6 text-cream">
          <h2 className="font-display text-2xl">pH and scab</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Potatoes prefer slightly acidic mix, about 5.0–6.0. Common scab — corky patches,
            still edible if you peel them — likes alkaline, dry soil right when tubers set. Don’t
            lime a potato bag. Don’t add wood ash. Don’t use fresh manure. Keep moisture even for
            the fortnight after flowering starts.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Sweet potatoes are fine a little higher, roughly 5.8–6.5, and a normal peat or coir
            potting mix near 6 suits both. If the bag is only growing sweets, you still don’t need
            lime.
          </p>
        </article>
        <article className="rounded-2xl bg-cream p-6 shadow-card">
          <h2 className="font-display text-2xl">What the leaves are saying</h2>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
            <li>
              <span className="font-medium text-ink">Pale older leaves, slow plant. </span>
              Short on nitrogen. One light feeding, not a handful.
            </li>
            <li>
              <span className="font-medium text-ink">Huge dark vines, few flowers, few tubers. </span>
              Too much nitrogen. Stop. Hill with plain mix.
            </li>
            <li>
              <span className="font-medium text-ink">Purple leaves on a green variety. </span>
              Often cold soil, sometimes low phosphorus. It is not the same thing as a purple
              variety.
            </li>
            <li>
              <span className="font-medium text-ink">Hollow center. </span>
              A growth swing — water or nitrogen — not something you fix with eggshells.
            </li>
            <li>
              <span className="font-medium text-ink">Sweet potato: all vine, roots like pencils. </span>
              Too much nitrogen, too little sun, or you dug too early.
            </li>
          </ul>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Leave these out of the bag</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Fresh manure", "Scab, weeds, and soft watery growth. Rotted manure from a previous season, in a bed, is a different product. In a bag this year, use finished compost."],
            ["Lawn fertilizer", "The first number is too high, and weed-and-feed products can cripple the crop."],
            ["Wood ash and lime", "They raise pH. Fine for some brassicas. Wrong tool beside a potato."],
            ["Last year’s potato soil", "Blight, scab, and wilt don’t care that the bag is new. Dump it on ornamentals, not on nightshades."],
          ].map(([title, body]) => (
            <li key={title} className="rounded-2xl bg-cream p-5 shadow-card">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          Canvas changes the dose only because water runs through it. Feed lightly at the start,
          watch the leaves, and don’t “catch up” with a strong liquid feed in August. The{" "}
          <Link to="/bags" className="font-medium text-russet-deep">
            bag method
          </Link>{" "}
          and the{" "}
          <Link to="/planner" className="font-medium text-russet-deep">
            planner
          </Link>{" "}
          use the same numbers.
        </p>
      </section>
    </main>
  );
}
