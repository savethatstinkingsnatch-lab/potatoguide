import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pantry")({
  head: () => ({
    meta: [{ title: "Storage, canning, recipes · The Potato Plot" }],
  }),
  component: PantryPage,
});

const RECIPES: { title: string; for: string; steps: string[] }[] = [
  {
    title: "New potatoes, the week you dig them",
    for: "Thin-skinned reds, golds, and fingerlings. These do not go in the cellar.",
    steps: [
      "Scrub a pound. Leave the skins on.",
      "Cover with cold water by an inch, salt it, and bring it to a boil. Simmer until a thin knife meets no resistance, usually 12–18 minutes.",
      "Drain. A tablespoon of butter and more salt. Eat them today or tomorrow.",
    ],
  },
  {
    title: "Roast, one color to a tray",
    for: "Any potato that has a set skin. Russets go fluffy. Reds and fingerlings stay in one piece.",
    steps: [
      "Heat the oven to 425°F / 220°C. Cut 2 pounds into even pieces about an inch across.",
      "Toss with 2 tablespoons of oil and salt. Purple flesh stains the oil, so give it its own tray.",
      "Roast 30–40 minutes, turning once, until the edges brown and the center is tender.",
    ],
  },
  {
    title: "A baked russet",
    for: "A storage russet, not a new potato.",
    steps: [
      "Heat the oven to 400°F / 200°C. Scrub, dry, and prick the potato once.",
      "Set it on the rack, not wrapped in foil if you want a dry skin. A large one takes about 55–70 minutes.",
      "It is done when a knife slides into the center with almost no push. Split it and salt it.",
    ],
  },
  {
    title: "Mash, without a blender",
    for: "Yellow or white potatoes. Reds mash, but they stay waxier.",
    steps: [
      "Peel or not. Cut 2 pounds even and simmer in salted water until they break under a fork, 15–20 minutes.",
      "Drain very well. Mash with a masher. A blender turns them to glue.",
      "Add hot milk or a splash of the cooking water until the mash moves. Butter and salt last.",
    ],
  },
  {
    title: "A cured sweet potato, baked",
    for: "Orange, cream, or purple. Cure it first or it tastes starchy.",
    steps: [
      "Heat the oven to 400°F / 200°C. Do not start from the refrigerator.",
      "Set the root on the rack. Depending on thickness, 45–75 minutes.",
      "Done when the center slumps. Purple flesh (Stokes, Okinawan) is supposed to look violet.",
    ],
  },
  {
    title: "Soup for this week, not for a jar",
    for: "A plain potato, an onion, and water or stock.",
    steps: [
      "Simmer a chopped onion and a pound of potato, covered with liquid, until the potato falls apart, 20–25 minutes. Salt it.",
      "Mash some of it into the broth if you want it thicker. Eat it this week, or cool it and freeze it.",
      "Do not can this soup. Can the cubes by the tested method below, and make the soup when you open the jar.",
    ],
  },
];

function PantryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">
          After the harvest
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Storage, the canner, and a few pans
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Potatoes and sweet potatoes leave the garden on different terms, and they do not share a
          shelf. One wants a cold dark cellar. The other is ruined by the refrigerator. Neither is
          safe in a boiling-water bath.
        </p>
      </header>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-ink p-6 text-cream">
          <p className="text-xs font-medium tracking-widest text-cream/70 uppercase">Potato</p>
          <h2 className="mt-2 font-display text-3xl">Cool, dark, and still able to breathe</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
            <li>Brush the dirt. Don’t wash. Water left on the skin is how a crate rots.</li>
            <li>
              Cure 10–14 days around 50–60°F / 10–15°C, humid and dark, so cuts heal and skins set.
            </li>
            <li>
              Then hold table potatoes near 45°F / 7°C, about 90% humidity, in a crate or paper bag.
              Not a sealed plastic bag. Not next to apples, which push them to sprout. For more on
              storing all your root crops, see Volume 12: Root Crops.
            </li>
            <li>
              A kitchen fridge is drier and usually colder. Below about 40°F the starch turns to
              sugar, and the potato browns too dark when you fry it. A week at room temperature
              before frying undoes some of that.
            </li>
            <li>
              New potatoes, dug early with a thin skin, keep a few days. Only mature tubers with a
              set skin belong in storage. Check the crate and pull anything soft.
            </li>
          </ol>
        </article>
        <article className="rounded-2xl bg-cream p-6 shadow-card">
          <p className="text-xs font-medium tracking-widest text-sage-ink uppercase">Sweet potato</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Warm cure, then a mild room</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            <li>Dig before frost. Brush the soil. Don’t wash. Every bruise is a place rot starts.</li>
            <li>
              Cure 4–7 days at 80–85°F / 27–29°C and about 85–90% humidity, up to 10 days if the
              skins were badly scuffed. A crate in a warm room, loosely tented so air still moves
              and water doesn’t drip on the roots.
            </li>
            <li>
              Then store at 55–60°F / 13–16°C, dark, with some humidity and some air. Cured roots
              keep for months. Uncured ones taste flat and rot sooner.
            </li>
            <li>
              Below about 50°F they take chilling injury: hard centers, off flavor, rot when they
              warm up. The refrigerator does this. So does a potato cellar.
            </li>
          </ol>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">What does not get stored or canned</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            [
              "Green potatoes",
              "Light makes them bitter. Peel a small green patch. Throw out a tuber that is green through, or that tastes bitter after you cook a slice.",
            ],
            [
              "Soft, wet, or frozen",
              "One rotten potato takes the crate. Frost-damaged sweets and potatoes do not cure back into sound food.",
            ],
            [
              "A long sprout on a shriveled tuber",
              "Rub a short sprout off a potato that is still firm, and eat it soon. A soft, heavily sprouted one is finished.",
            ],
          ].map(([title, body]) => (
            <li key={title} className="rounded-2xl bg-cream p-5 shadow-card">
              <h3 className="font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Saving your own seed potatoes</h2>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          <p>Potatoes are saved as potatoes, not seeds. Every potato you plant is a copy of its parent.</p>
          <ul className="space-y-3">
            <li>
              Mark your healthiest plants during the season. Only save from plants that had no
              blight, no curled or mottled leaves, and a good crop.
            </li>
            <li>
              Save egg-size potatoes from those plants. Cure them, then store them separately at 38
              to 40°F, dark and humid, labeled “SEED - do not eat.”
            </li>
            <li>
              Diseases, especially viruses, build up in home-saved potatoes over the years. Buy
              fresh certified seed potatoes every 2 to 3 years, or sooner if yields drop or leaves
              look curled or spotted.
            </li>
            <li>
              Never save potatoes from plants with late blight. Dig up and destroy any “volunteer”
              potatoes that sprout on their own, and don’t leave a pile of culls. Blight survives
              the winter in them.
            </li>
            <li>
              The little green berries hold true potato seed. Plants from that seed are new
              potatoes that don’t match the parent, and the berries are poisonous. Leave them for
              experts.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Canning is a pressure canner, or it isn’t canning</h2>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          <p>
            Both plants are low-acid. A boiling-water bath, an atmospheric steam canner, an oven,
            or an open kettle does not get hot enough to deal with botulism risk. The times below
            are the USDA process for peeled pieces in jars, from the Complete Guide to Home Canning
            as published by the National Center for Home Food Preservation. Your elevation changes
            the pressure, not the minutes. The published chart stops at 8,000 feet.
          </p>
          <p>
            Vent the canner so a steady stream of steam escapes for 10 minutes before you put the
            weight on. Start the clock when the canner is at pressure, not when you turn on the
            heat. If the pressure drops, bring it back and start the time over. Salt is optional
            and is not what makes the jar safe.
          </p>
          <p>
            If a lid doesn’t seal, refrigerate the jar and eat it soon. If a sealed jar spurts,
            smells wrong, or looks foamy or mushy in a way you don’t trust, do not taste it.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-cream p-6 shadow-card">
            <h3 className="font-display text-2xl text-ink">White potatoes, cubed or whole</h3>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>
                Use sound, mature potatoes. About 20 pounds fills 7 quarts; about 13 pounds fills 9
                pints. Tubers held below 45°F may discolor in the jar. Whole potatoes should be 1–2
                inches across. Larger ones get cut into ½-inch cubes.
              </li>
              <li>
                Wash, peel, and hold the pieces in water with ascorbic acid so the cut faces don’t
                gray — 1 teaspoon of crystalline ascorbic acid per gallon of water.
              </li>
              <li>Boil cubes 2 minutes, or whole potatoes 10 minutes. Drain.</li>
              <li>
                Pack hot. Add 1 teaspoon of salt per quart if you want it. Cover with fresh boiling
                water, not the cooking water, leaving 1 inch of headspace. The cooking water is
                full of starch and is not the liquid the process was tested with.
              </li>
              <li>Process pints 35 minutes, quarts 40 minutes, at the pressure in the table.</li>
            </ol>
          </article>
          <article className="rounded-2xl bg-cream p-6 shadow-card">
            <h3 className="font-display text-2xl text-ink">Sweet potatoes, pieces or whole</h3>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>
                Use small to medium roots, canned within a couple of months of harvest. About 17½
                pounds fills 7 quarts; about 11 pounds fills 9 pints.
              </li>
              <li>
                Wash. Boil or steam until the skins slip, about 15–20 minutes. Cool just enough to
                handle, then peel. Cut medium roots so the pieces in a jar are even. Small ones may
                stay whole. Do not mash them.
              </li>
              <li>
                Pack hot, leaving 1 inch of headspace. Salt as for white potatoes, if you want it.
                Cover with fresh boiling water, or a syrup from a tested canning chart. Not the
                cooking liquid.
              </li>
              <li>
                Process pints 65 minutes, quarts 90 minutes. Same pressures as white potatoes. The
                clock is longer because the pieces are denser.
              </li>
            </ol>
          </article>
        </div>

        <div className="mt-6 max-w-full overflow-x-auto">
          <table className="w-full min-w-xl text-left text-sm">
            <caption className="mb-3 text-left font-medium text-ink">
              Canner pressure. The minutes do not change with elevation.
            </caption>
            <thead className="text-muted">
              <tr className="border-b border-line">
                <th className="py-2 pr-4 font-medium">Gauge</th>
                <th className="py-2 pr-4 font-medium">Elevation</th>
                <th className="py-2 font-medium">Pressure</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dial", "0–2,000 ft", "11 lb"],
                ["Dial", "2,001–4,000 ft", "12 lb"],
                ["Dial", "4,001–6,000 ft", "13 lb"],
                ["Dial", "6,001–8,000 ft", "14 lb"],
                ["Weighted", "0–1,000 ft", "10 lb"],
                ["Weighted", "Above 1,000 ft", "15 lb"],
              ].map(([gauge, elev, psi]) => (
                <tr key={`${gauge}-${elev}`} className="border-b border-line">
                  <td className="py-2 pr-4 text-ink">{gauge}</td>
                  <td className="py-2 pr-4">{elev}</td>
                  <td className="py-2 tabular-nums">{psi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-6 max-w-3xl space-y-2 text-sm leading-relaxed text-muted">
          <li>Do not can mashed, pureed, or buttered potatoes or sweet potatoes. The jar heats too unevenly.</li>
          <li>Do not can potato salad, fried potatoes, or a thickened soup.</li>
          <li>Do not can unpeeled white potatoes. The tested process starts with peeled ones.</li>
          <li>Do not shorten the time because the pieces looked soft going into the jar.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">A few ways to cook what you grew</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {RECIPES.map((recipe) => (
            <article key={recipe.title} className="rounded-2xl bg-cream p-5 shadow-card">
              <h3 className="font-display text-2xl text-ink">{recipe.title}</h3>
              <p className="mt-2 text-sm text-muted">{recipe.for}</p>
              <ol className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
                {recipe.steps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-display text-russet tabular-nums">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
