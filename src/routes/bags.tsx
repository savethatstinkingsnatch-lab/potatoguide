import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/bags")({
  head: () => ({
    meta: [{ title: "Canvas grow bags · The Potato Plot" }],
  }),
  component: BagsPage,
});

const POTATO_STEPS = [
  "Roll the sides of the bag down until the cloth is about a foot tall.",
  "Add 4 inches of the potato mix. Set seed pieces eyes-up, a few inches in from the canvas, not touching each other.",
  "Cover with another 4 inches. Water until the cloth weeps, then stop.",
  "When stems stand 6–8 inches above the mix, unroll a little and add mix, leaving the top leaves in the light. Stems that get buried will make more tuber-bearing stem.",
  "Repeat until the bag is full, or until flowering is heavy — whichever comes first. Don’t bury the growing tip.",
  "Mulch the surface. From here the job is even water, not more soil.",
];

const SWEET_STEPS = [
  "Fill the bag completely before you plant. There is no fold-down stage.",
  "Wait until the mix itself stays at 65°F / 18°C. Air temperature is not the measurement.",
  "Plant one slip in a 10–15 gallon bag, two only if the bag is 20 gallons or more. Bury the stem; leave the newest leaves out.",
  "Water it in once, then mulch so the rim of the canvas doesn’t cook the stem.",
  "Let the vines run. If they root into the patio or the next bag, lift them — unless you want slips more than roots.",
  "Do not hill. Adding mix over the crown all season is how sweet potatoes fail in a potato bag.",
];

function BagsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">
          Canvas bags
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Breathable cloth is a tool, not a pot with handles
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Canvas and felt drain fast, air-prune circling roots, and let you hill a potato by
          unrolling the side. They also evaporate from every wall, heat up if they’re dark, and
          rot if you fold them away wet. The crop method depends on which plant is in the bag.
          In the ground or a wooden box, potatoes are covered with hay and then dirt as the stems
          grow — that guide is separate, because a bag does not have path dirt to hill with.
        </p>
      </header>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-ink p-6 text-cream">
          <p className="text-xs font-medium tracking-widest text-cream/70 uppercase">Potato</p>
          <h2 className="mt-2 font-display text-3xl">Fold, plant shallow, hill up</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
            {POTATO_STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-lg text-cream/70 tabular-nums">0{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm text-cream/80">
            <Link to="/ground" className="font-medium text-cream underline decoration-cream/40 underline-offset-4">
              In the ground or a box, use hay and dirt instead
            </Link>
          </p>
        </article>
        <article className="rounded-2xl bg-cream p-6 shadow-card">
          <p className="text-xs font-medium tracking-widest text-sage-ink uppercase">Sweet potato</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Fill once, then leave the vine alone</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            {SWEET_STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-lg text-russet tabular-nums">0{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Two mixes, not one</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Don’t fill a grow bag with garden soil. It compacts, holds too much water against the
          cloth, and brings last year’s diseases with it. Buy the full volume even if you will add
          a potato’s mix in layers — the upper layers are the same recipe, minus a second dose of
          fertilizer.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-cream p-6 shadow-card">
            <h3 className="font-display text-2xl">Potato mix</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex justify-between gap-4 border-b border-line py-2">
                <span>Potting mix</span>
                <span className="font-medium text-ink tabular-nums">60%</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-line py-2">
                <span>Finished compost</span>
                <span className="font-medium text-ink tabular-nums">30%</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-line py-2">
                <span>Extra perlite</span>
                <span className="font-medium text-ink tabular-nums">10%</span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Plus the pre-plant feeding in the{" "}
              <Link to="/fertilizer" className="font-medium text-russet-deep">
                fertilizer guide
              </Link>
              : ½ cup of a low-nitrogen blend per 10 gallons, mixed through, not tucked under the
              seed. No lime.
            </p>
          </article>
          <article className="rounded-2xl bg-cream p-6 shadow-card">
            <h3 className="font-display text-2xl">Sweet potato mix</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex justify-between gap-4 border-b border-line py-2">
                <span>Potting mix</span>
                <span className="font-medium text-ink tabular-nums">70%</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-line py-2">
                <span>Finished compost</span>
                <span className="font-medium text-ink tabular-nums">18%</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-line py-2">
                <span>Extra perlite</span>
                <span className="font-medium text-ink tabular-nums">12%</span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Leaner on purpose. Rich mix grows a beautiful morning-glory vine and skinny roots.
              Optional 3 tablespoons of the same low-nitrogen blend per 10 gallons. Then stop.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-ink">Water is the canvas tax</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <p>
              A plastic pot loses water from the top. Canvas loses it from the top and the entire
              wall. In warm weather a 5 or 7 gallon bag can go from damp to dusty in a day. A 15
              or 20 gallon bag is more forgiving and usually grows a better potato.
            </p>
            <p>
              Push a finger in to the first knuckle. If it is dry, water until the fabric darkens
              and drips, then stop. Morning is the right time. Lift the bag onto bricks or pot
              feet so the bottom can breathe — a saucer of standing water rots both the cloth and
              the tubers.
            </p>
            <p>
              The critical stretch for potatoes is flowering through bulking. Swinging from wilted
              to flooded is how you get knobs, cracks, and hollow hearts. Sweet potatoes split for
              the same reason, later in the season.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl text-ink">Heat, weight, and the cloth itself</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <p>
              Dark canvas in afternoon sun can push potato soil past the temperature where tubers
              set. Shade the bag, not the leaves: a board against the sunny side, cardboard, or a
              spot that gets morning light and afternoon shade. Mulch the surface either way.
              Sweet potatoes want that heat — just don’t let the bare rim brand the stem.
            </p>
            <p>
              Wet mix is heavy. Ten gallons of damp soil is on the order of 70–80 pounds. Slide
              the bag. Don’t ask one stitched handle to take the whole weight, and don’t hang a
              full bag from a railing.
            </p>
            <p>
              Don’t line the whole bag. A liner cancels the drainage you bought the canvas for. If
              fine mix sifts out a seam, a scrap of burlap at the bottom is enough.
            </p>
            <p>
              Green film on the outside is usually algae, and it is harmless. Black mildew that
              makes the fibers soft means that bag is done for food. Between crops: dump, brush,
              hose, dry in full sun until the cloth is bone dry, then fold. Wet canvas stored in a
              shed rots by spring.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">How many plants, honestly</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Crowding a bag feels thrifty and returns a pile of marbles. Fingerlings are the worst
          offenders because each plant already makes a lot of small tubers.
        </p>
        <div className="mt-6 max-w-full overflow-x-auto">
          <table className="w-full min-w-xl text-left text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="py-3 pr-4 font-medium">Bag</th>
                <th className="py-3 pr-4 font-medium">Potato seed pieces</th>
                <th className="py-3 pr-4 font-medium">Sweet potato slips</th>
                <th className="py-3 font-medium">A fair potato yield</th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {[
                ["5 gal", "1", "1", "1½–3 lb"],
                ["7 gal", "1", "1", "2–4 lb"],
                ["10 gal", "2", "1", "3–6 lb"],
                ["15 gal", "2", "1", "4½–8 lb"],
                ["20 gal", "3", "2", "6–10 lb"],
                ["25 gal", "3", "2", "7–12 lb"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-line">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className="py-3 pr-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted">
          Sweet potato yields in the same sizes run a little lower in a small bag and similar once
          the bag is 15 gallons and the season is actually hot. The{" "}
          <Link to="/planner" className="font-medium text-russet-deep">
            planner
          </Link>{" "}
          scales this to your count, including odd sizes.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Five things you will actually see</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Green potatoes", "They saw light. Solanine is bitter and not for eating — peel a small patch or discard a fully green tuber. Hill and harvest in the shade. Sweet potatoes don’t green this way."],
            ["Corky scab", "Peel and eat. Next bag: no lime, no ash, no fresh manure, and don’t let the mix dry out as tubers set."],
            ["Striped beetles", "Colorado potato beetles and their soft larvae eat potato leaves. Pick them into soapy water. They are not a sweet-potato pest — different plant."],
            ["Brown wrecked leaves in wet warmth", "Late blight. Remove the foliage, don’t compost it, and don’t save those tubers as seed. Kennebec is notably easy to lose this way."],
            ["A flap of new potatoes", "Some canvas bags have a side window. Taking a few early is fine. For a storage crop, wait until vines yellow, stop water, and give skins 10–14 days to set before you tip the bag onto a tarp."],
            ["Voles, or rather none", "A bag off the ground sidesteps a lot of wireworms and voles. The trade is water and heat. Harvest sweets before frost and cure them warm — the fridge will leave hard, off-flavored roots."],
          ].map(([title, body]) => (
            <li key={title} className="rounded-2xl bg-cream p-5 shadow-card">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">
          Cure, cellar, pressure canning, and a few recipes are in the{" "}
          <Link to="/pantry" className="font-medium text-russet-deep">
            pantry
          </Link>
          .
        </p>
      </section>

      <section className="mt-12 rounded-2xl bg-cream p-6 shadow-card sm:p-8">
        <h2 className="font-display text-3xl text-ink">If the bag isn’t labeled</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Measure the diameter across the top and the height of the usable side, in inches. A
          cylinder holds about diameter × diameter × height × 0.0034 gallons. Bags bulge and taper,
          so treat the number as a gallon or two generous. A 16-inch-wide bag that is 14 inches
          tall is roughly 12 gallons — a good everyday potato bag, two seed pieces, one sweet
          potato slip.
        </p>
        <Link
          to="/planner"
          className="mt-5 inline-flex min-h-11 items-center rounded-full bg-russet-deep px-5 text-sm font-medium text-cream"
        >
          Measure it in the planner
        </Link>
      </section>
    </main>
  );
}
