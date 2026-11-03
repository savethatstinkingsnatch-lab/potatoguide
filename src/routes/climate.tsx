import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CLIMATES,
  MONTHS,
  PHASE_LABEL,
  shiftMonths,
  varietiesFor,
  type ClimateId,
  type Hemisphere,
  type Phase,
} from "@/data/guide";
import { useGardenStore } from "@/lib/garden-store";

export const Route = createFileRoute("/climate")({
  head: () => ({
    meta: [{ title: "Climate guide · The Potato Plot" }],
  }),
  component: ClimatePage,
});

const PHASES: Phase[] = ["prep", "plant", "grow", "harvest", "off"];

function MonthStrip({
  label,
  phases,
  hemisphere,
}: {
  label: string;
  phases: Phase[];
  hemisphere: Hemisphere;
}) {
  const shown = shiftMonths(phases, hemisphere);
  return (
    <figure className="min-w-0">
      <figcaption className="mb-2 text-sm font-medium text-ink">{label}</figcaption>
      <div className="max-w-full overflow-x-auto pb-1">
        <div className="month-grid">
          {shown.map((phase, i) => (
            <div key={MONTHS[i]} className="text-center">
              <div
                className={`month-cell phase-${phase}`}
                title={`${MONTHS[i]}: ${PHASE_LABEL[phase]}`}
                role="img"
                aria-label={`${MONTHS[i]}: ${PHASE_LABEL[phase]}`}
              />
              <div className="mt-1 text-xs text-muted tabular-nums">{MONTHS[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function ClimatePage() {
  const climate = useGardenStore((s) => s.climate);
  const hemisphere = useGardenStore((s) => s.hemisphere);
  const setClimate = useGardenStore((s) => s.setClimate);
  const setHemisphere = useGardenStore((s) => s.setHemisphere);
  const current = CLIMATES.find((c) => c.id === climate) ?? CLIMATES[1];
  const potatoes = varietiesFor(current.id, "potato");
  const sweets = varietiesFor(current.id, "sweet");

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">Climate</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Plant by soil heat, not by a zone number
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          USDA zones only tell you how cold winter gets. Potatoes tuberize in cool soil, roughly
          60–65°F, and stall when the bag stays above about 80°F. Sweet potatoes wait until the
          mix holds 65°F and then want months of heat. Pick the pattern closest to your garden —
          the bag planner follows this choice.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Hemisphere">
        {(
          [
            ["north", "Northern hemisphere"],
            ["south", "Southern hemisphere"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={hemisphere === id}
            onClick={() => setHemisphere(id)}
            className={
              hemisphere === id
                ? "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream"
                : "inline-flex min-h-11 items-center rounded-full bg-cream px-4 text-sm font-medium text-ink shadow-card"
            }
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Southern months are the northern calendar shifted by half a year. Coasts, monsoons, and
        elevation still beat the chart. If you garden in tropical highlands with real chill, use
        Cool temperate, not Tropical lowland.
      </p>

      <div className="mt-8 grid gap-3 lg:grid-cols-5">
        {CLIMATES.map((item) => {
          const on = item.id === climate;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={on}
              onClick={() => setClimate(item.id as ClimateId)}
              className={
                on
                  ? "rounded-2xl bg-ink p-4 text-left text-cream"
                  : "rounded-2xl bg-cream p-4 text-left text-ink shadow-card"
              }
            >
              <span className="block font-display text-xl leading-tight">{item.title}</span>
              <span className={`mt-2 block text-xs ${on ? "text-cream/75" : "text-muted"}`}>
                {item.zones}
              </span>
            </button>
          );
        })}
      </div>

      <section className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="min-w-0 lg:col-span-3">
          <h2 className="font-display text-3xl text-ink">{current.title}</h2>
          <p className="mt-3 text-muted">{current.summary}</p>
          <div className="mt-6 space-y-5">
            <MonthStrip label="Potatoes" phases={current.potatoMonths} hemisphere={hemisphere} />
            <MonthStrip
              label="Sweet potatoes"
              phases={current.sweetMonths}
              hemisphere={hemisphere}
            />
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2" aria-label="Season legend">
            {PHASES.map((phase) => (
              <li key={phase} className="flex items-center gap-2 text-xs text-muted">
                <span className={`inline-block size-3 rounded-sm phase-${phase}`} />
                {PHASE_LABEL[phase]}
              </li>
            ))}
          </ul>
          {current.id === "tropical" ? (
            <p className="mt-4 text-sm text-muted">
              The sweet-potato strip is solid on purpose. Start a crop any month you can give it
              about four hot months and a drier week at the end to harvest and cure.
            </p>
          ) : null}
        </div>
        <aside className="lg:col-span-2">
          <div className="rounded-2xl bg-cream p-5 shadow-card">
            <h3 className="font-display text-xl text-ink">Soil, not the air</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium">Potatoes</dt>
                <dd className="text-muted">
                  Plant when soil is workable and about 45°F / 7°C. Two to four inches of settled
                  mix over the seed. Frost kills tops; a hilled tuber usually survives a light one.
                </dd>
              </div>
              <div>
                <dt className="font-medium">Sweet potatoes</dt>
                <dd className="text-muted">
                  Plant slips only after the bag stays at 65°F / 18°C and frost is finished. They
                  need roughly 90 to 120 frost-free days after that, more for purple flesh.
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl bg-cream p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Potatoes here</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{current.potato}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {potatoes.map((v) => (
              <li key={v.id}>
                <Link
                  to="/varieties"
                  search={{ crop: "potato", color: "all", pick: v.id }}
                  className="inline-flex min-h-11 items-center rounded-full bg-paper px-3 text-sm text-ink shadow-card"
                >
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl bg-cream p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Sweet potatoes here</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{current.sweet}</p>
          {sweets.length === 0 ? (
            <p className="mt-4 text-sm text-muted">No sweet potato on this list is a fair bet.</p>
          ) : (
            <ul className="mt-4 flex flex-wrap gap-2">
              {sweets.map((v) => (
                <li key={v.id}>
                  <Link
                    to="/varieties"
                    search={{ crop: "sweet", color: "all", pick: v.id }}
                    className="inline-flex min-h-11 items-center rounded-full bg-paper px-3 text-sm text-ink shadow-card"
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-ink">What usually goes wrong</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {current.risks.map((risk) => (
            <li key={risk} className="rounded-2xl bg-cream p-4 text-sm leading-relaxed text-muted shadow-card">
              {risk}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Feeding changes with the weather too.{" "}
          <Link to="/fertilizer" className="font-medium text-russet-deep">
            Read the fertilizer guide
          </Link>{" "}
          before you top up a bag that already looks lush.
        </p>
      </section>
    </main>
  );
}
