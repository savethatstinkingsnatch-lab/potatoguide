import { createFileRoute, Link } from "@tanstack/react-router";
import { ATLAS } from "@/data/guide";
import { Tuber } from "@/components/tuber";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "The Potato Plot — a grower's guide" }],
  }),
  component: Home,
});

const ROWS: { label: string; potato: string; sweet: string }[] = [
  {
    label: "Plant",
    potato: "Solanum tuberosum, a nightshade. Same family as tomato and eggplant.",
    sweet: "Ipomoea batatas, a morning glory. Not a potato, and not a yam.",
  },
  {
    label: "You start with",
    potato: "Certified seed pieces, each with an eye. Chit them in the light first.",
    sweet: "Slips — rooted sprouts. A whole root left in a bag will not behave like seed potato.",
  },
  {
    label: "The weather they want",
    potato: "Cool soil. Tubers slow down once the bag stays much above 80°F / 27°C.",
    sweet: "Heat. Wait until the mix holds 65°F / 18°C, then give them a long hot run.",
  },
  {
    label: "In a canvas bag",
    potato: "Roll the sides down and hill: bury the stem as it grows, leave the leaves in the light.",
    sweet: "Fill the bag once and stop. Burying the vine again and again gives you stem, not roots.",
  },
  {
    label: "How you feed them",
    potato: "Modest nitrogen, real potassium. Lush vines with no tubers means you overdid the nitrogen.",
    sweet: "Even leaner. Compost is often the whole feeding. Extra nitrogen makes a beautiful vine and pencil roots.",
  },
  {
    label: "After harvest",
    potato: "Cure in the dark, then store near 45°F. Light turns them green and bitter.",
    sweet: "Cure warm and humid, then store near 55–60°F. The refrigerator ruins them.",
  },
];

const CHAPTERS = [
  {
    n: "01",
    href: "/varieties",
    title: "Every color",
    text: "Russet, white, gold, red, purple, and the fingerlings — then orange, cream, and purple sweet potatoes, which are a different plant wearing some of the same words.",
  },
  {
    n: "02",
    href: "/climate",
    title: "Climate",
    text: "A month strip for five kinds of weather, both hemispheres. Potatoes ride the cool edge of the year. Sweet potatoes ride the heat.",
  },
  {
    n: "03",
    href: "/fertilizer",
    title: "Fertilizer",
    text: "What 5-10-10 actually means, why lime and fresh manure cause scab, and when a pale leaf is asking for food versus showing off too much of it.",
  },
  {
    n: "04",
    href: "/bags",
    title: "Canvas bags",
    text: "You already have the bags. How to fold, fill, water, and keep the cloth alive — and the one method that must not be copied from potatoes onto sweets.",
  },
  {
    n: "05",
    href: "/ground",
    title: "Ground and boxes",
    text: "If the potatoes are not already buried, cover the stems with hay and then dirt each time they stand up. Boxes get another board before each lift. Sweet potatoes never do.",
  },
  {
    n: "06",
    href: "/pantry",
    title: "Storage, canning, cooking",
    text: "A cold dark hold for potatoes, a warm cure for sweet potatoes, pressure-canner times, and a few pans that match the color you grew.",
  },
] as const;

function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">
            A book by Jessica McIntosh
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl text-ink sm:text-6xl">
            Every color. Both plants. The bags you already have.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            A practical plot guide: which tuber you are actually growing, what climate it will
            stand, how to feed it, and how to run a serious crop in breathable canvas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/bags"
              className="inline-flex min-h-11 items-center rounded-full bg-russet-deep px-5 text-sm font-medium text-cream"
            >
              Start with the canvas bags
            </Link>
            <Link
              to="/planner"
              className="inline-flex min-h-11 items-center rounded-full bg-cream px-5 text-sm font-medium text-ink shadow-card"
            >
              Size a bag
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-end gap-3 sm:gap-4" aria-hidden>
            <Tuber skin="#8d6844" flesh="#f4e7cc" label="" size="xl" />
            <Tuber skin="#b23b42" flesh="#f6ead4" label="" size="lg" />
            <Tuber skin="#e2b84a" flesh="#f0c84a" label="" size="xl" />
            <Tuber skin="#3a2756" flesh="#5c3d86" label="" size="lg" />
            <Tuber skin="#c46a32" flesh="#e36a1e" label="" size="xl" />
            <Tuber skin="#e6d2ae" flesh="#f3e4c4" label="" size="md" />
            <Tuber skin="#4a2860" flesh="#5c2e78" label="" size="lg" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Skin and flesh are different facts. A red potato is usually white inside. A purple
            sweet potato may have dull tan skin.
          </p>
        </div>
      </section>

      <section id="plants" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">They only share a nickname</h2>
          <p className="mt-3 max-w-2xl text-muted">
            If a method worked on one, check the other column before you do it again. Most bag
            failures are a potato technique used on a sweet potato, or the reverse.
          </p>
          <div className="mt-8 hidden overflow-hidden rounded-2xl bg-cream shadow-card sm:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-5 py-4 font-medium text-muted"> </th>
                  <th className="px-5 py-4 font-display text-lg font-medium text-ink">Potato</th>
                  <th className="px-5 py-4 font-display text-lg font-medium text-ink">
                    Sweet potato
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-0">
                    <th className="w-36 px-5 py-4 align-top font-medium text-ink">{row.label}</th>
                    <td className="px-5 py-4 align-top text-muted">{row.potato}</td>
                    <td className="px-5 py-4 align-top text-muted">{row.sweet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-3 sm:hidden">
            {ROWS.map((row) => (
              <article key={row.label} className="rounded-2xl bg-cream p-4 shadow-card">
                <h3 className="text-xs font-medium tracking-widest text-russet-deep uppercase">
                  {row.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">
                  <span className="font-medium">Potato. </span>
                  <span className="text-muted">{row.potato}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  <span className="font-medium">Sweet potato. </span>
                  <span className="text-muted">{row.sweet}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="colors" className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl text-ink sm:text-4xl">The colors, named properly</h2>
              <p className="mt-3 text-muted">
                Shop by flesh when you care about the plate, and by skin when you care about the
                catalog photo. Fingerling is a shape. “Yam,” in an American store, is usually just
                a moist orange sweet potato.
              </p>
            </div>
            <Link
              to="/varieties"
              search={{ crop: "all", color: "all" }}
              className="inline-flex min-h-11 items-center text-sm font-medium text-russet-deep"
            >
              Open the full list
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {ATLAS.map((item) => (
              <li key={item.id}>
                <Link
                  to="/varieties"
                  search={{ crop: item.crop, color: item.id }}
                  className="flex min-h-11 items-center gap-4 rounded-2xl bg-paper p-3 shadow-card"
                >
                  <Tuber skin={item.skin} flesh={item.flesh} label="" size="lg" />
                  <span>
                    <span className="block font-medium text-ink">{item.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{item.line}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">The rest of the plot</h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {CHAPTERS.map((chapter) => (
              <li key={chapter.href}>
                <Link
                  to={chapter.href}
                  className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-2xl text-russet tabular-nums sm:col-span-2">
                    {chapter.n}
                  </span>
                  <span className="font-display text-2xl text-ink sm:col-span-3">{chapter.title}</span>
                  <span className="text-sm leading-relaxed text-muted sm:col-span-7">
                    {chapter.text}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink px-5 py-6 text-cream sm:px-8">
            <div>
              <p className="font-display text-2xl">You have the bags. Size the crop.</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/80">
                Gallons, seed pieces or slips, compost, a low-nitrogen feeding, and a harvest
                range — scaled to the canvas you actually own.
              </p>
            </div>
            <Link
              to="/planner"
              className="inline-flex min-h-11 items-center rounded-full bg-cream px-5 text-sm font-medium text-ink"
            >
              Open the planner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
