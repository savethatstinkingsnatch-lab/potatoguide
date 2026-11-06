import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CLIMATES, type ClimateId } from "@/data/guide";
import {
  BAG_PRESETS,
  checklist,
  climateTitle,
  cylinderGallons,
  formatCuFt,
  formatGal,
  formatLb,
  heatLine,
  planCrop,
  waterLine,
  type CropMode,
  type CropPlan,
} from "@/data/plan";
import { useGardenStore } from "@/lib/garden-store";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [{ title: "Bag planner · The Potato Plot" }],
  }),
  component: PlannerPage,
});

function Stepper({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-ink">{label}</p>
      <div className="mt-2 flex items-center gap-3">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full bg-cream text-xl shadow-card disabled:opacity-40"
          onClick={() => onChange(value - 1)}
          disabled={value <= 1}
          aria-label={`Fewer ${label}`}
        >
          −
        </button>
        <span className="w-8 text-center font-display text-3xl tabular-nums">{value}</span>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full bg-cream text-xl shadow-card disabled:opacity-40"
          onClick={() => onChange(value + 1)}
          disabled={value >= 40}
          aria-label={`More ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

function PlanBlock({ plan }: { plan: CropPlan }) {
  const name = plan.crop === "potato" ? "Potatoes" : "Sweet potatoes";
  const unit = plan.crop === "potato" ? "seed pieces" : "slips";
  return (
    <article className="rounded-2xl bg-cream p-5 shadow-card sm:p-6">
      <h2 className="font-display text-2xl text-ink">{name}</h2>
      <p className="mt-1 text-sm text-muted tabular-nums">
        {plan.bags} {plan.bags === 1 ? "bag" : "bags"} · {formatGal(plan.gallonsEach)} gal each ·{" "}
        {plan.plantsEach} {unit} per bag
      </p>
      <p className="mt-5 font-display text-4xl text-ink tabular-nums">
        {formatLb(plan.yieldLo)}–{formatLb(plan.yieldHi)}
        <span className="ml-2 font-sans text-base text-muted">lb, a rough guess</span>
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Not a guaranteed harvest. Variety, spacing, weather, watering, and how large you let them
        grow all move it. A smaller bag usually grows less.
      </p>
      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">Buy, about</dt>
          <dd className="mt-1 font-medium tabular-nums">
            {formatCuFt(plan.mix.pottingCuFt)} cu ft potting mix
          </dd>
          <dd className="text-muted tabular-nums">
            {formatCuFt(plan.mix.compostCuFt)} cu ft finished compost
          </dd>
          <dd className="text-muted tabular-nums">
            {formatCuFt(plan.mix.perliteCuFt)} cu ft extra perlite
          </dd>
        </div>
        <div>
          <dt className="text-muted">Start with</dt>
          <dd className="mt-1 font-medium">
            {plan.plantsTotal} {unit}
            {plan.seedLb != null ? (
              <span className="font-normal text-muted"> · about {formatLb(plan.seedLb)} lb of seed</span>
            ) : null}
          </dd>
          <dd className="mt-2 text-muted">
            Any fertilizer depends on the product and on what is already in the mix. Follow the
            label for this crop, or a local recommendation. This planner does not prescribe
            spoonfuls.
          </dd>
        </div>
      </dl>
    </article>
  );
}

function PlannerPage() {
  const climate = useGardenStore((s) => s.climate);
  const setClimate = useGardenStore((s) => s.setClimate);
  const mode = useGardenStore((s) => s.mode);
  const setMode = useGardenStore((s) => s.setMode);
  const gallons = useGardenStore((s) => s.gallons);
  const setGallons = useGardenStore((s) => s.setGallons);
  const potatoBags = useGardenStore((s) => s.potatoBags);
  const sweetBags = useGardenStore((s) => s.sweetBags);
  const setPotatoBags = useGardenStore((s) => s.setPotatoBags);
  const setSweetBags = useGardenStore((s) => s.setSweetBags);
  const checks = useGardenStore((s) => s.checks);
  const toggleCheck = useGardenStore((s) => s.toggleCheck);
  const resetChecks = useGardenStore((s) => s.resetChecks);

  const [diameter, setDiameter] = useState("16");
  const [height, setHeight] = useState("14");
  const exact = cylinderGallons(Number(diameter) || 0, Number(height) || 0);
  const preset = (BAG_PRESETS as readonly number[]).includes(gallons);

  const plans: CropPlan[] = [];
  if (mode !== "sweet") plans.push(planCrop("potato", potatoBags, gallons));
  if (mode !== "potato") plans.push(planCrop("sweet", sweetBags, gallons));

  const tasks = checklist(mode, climate);
  const done = tasks.filter((task) => checks[task.id]).length;
  const groups = [...new Set(tasks.map((task) => task.group))];
  const heat = heatLine(climate, mode);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">Planner</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          How much bag, how much crop
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Built for canvas you already own. Yields are home-bag ranges, not a promise — crowding,
          heat, and a dry week move them more than the fertilizer does. Climate is shared with the{" "}
          <Link to="/climate" className="font-medium text-russet-deep">
            climate guide
          </Link>
          .
        </p>
      </header>

      <section className="mt-8 rounded-2xl bg-cream p-5 shadow-card sm:p-6">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Crop">
          {(
            [
              ["potato", "Potatoes"],
              ["sweet", "Sweet potatoes"],
              ["both", "Both"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              onClick={() => setMode(id as CropMode)}
              className={
                mode === id
                  ? "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream"
                  : "inline-flex min-h-11 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink"
              }
            >
              {label}
            </button>
          ))}
        </div>

        <label className="mt-6 block text-sm font-medium" htmlFor="climate">
          Climate
        </label>
        <select
          id="climate"
          value={climate}
          onChange={(e) => setClimate(e.target.value as ClimateId)}
          className="mt-2 min-h-11 w-full max-w-md rounded-xl bg-paper px-3 text-ink shadow-card"
        >
          {CLIMATES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>

        <p className="mt-6 text-sm font-medium">Bag size</p>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Bag size">
          {BAG_PRESETS.map((size) => (
            <button
              key={size}
              type="button"
              aria-pressed={gallons === size}
              onClick={() => setGallons(size)}
              className={
                gallons === size
                  ? "inline-flex min-h-11 items-center rounded-full bg-russet-deep px-4 text-sm font-medium text-cream tabular-nums"
                  : "inline-flex min-h-11 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink tabular-nums"
              }
            >
              {size} gal
            </button>
          ))}
          {!preset ? (
            <span className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream tabular-nums">
              Custom · {formatGal(gallons)} gal
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-8">
          {mode !== "sweet" ? (
            <Stepper label="Potato bags" value={potatoBags} onChange={setPotatoBags} />
          ) : null}
          {mode !== "potato" ? (
            <Stepper label="Sweet potato bags" value={sweetBags} onChange={setSweetBags} />
          ) : null}
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <h2 className="font-display text-xl">Unlabeled bag?</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Diameter across the top and usable height, in inches. This treats the bag as a
            cylinder — if it tapers, the real volume is a little less.
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-3">
            <label className="text-sm">
              Diameter
              <input
                inputMode="decimal"
                value={diameter}
                onChange={(e) => setDiameter(e.target.value)}
                className="mt-1 block min-h-11 w-28 rounded-xl bg-paper px-3 shadow-card"
              />
            </label>
            <label className="text-sm">
              Height
              <input
                inputMode="decimal"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 block min-h-11 w-28 rounded-xl bg-paper px-3 shadow-card"
              />
            </label>
            <button
              type="button"
              disabled={exact < 3}
              onClick={() => setGallons(Math.min(40, exact))}
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream disabled:opacity-40"
            >
              Use this size
            </button>
          </div>
          <p className="mt-3 text-sm text-muted tabular-nums">
            {exact > 0
              ? `About ${formatGal(exact)} gallons.`
              : "Enter both measurements."}{" "}
            {exact > 40 ? "That’s closer to a tote. The planner caps a single bag at 40 gallons." : null}
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4">
        {plans.map((plan) => (
          <PlanBlock key={plan.crop} plan={plan} />
        ))}
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-cream p-5 shadow-card">
          <h2 className="font-display text-xl">Water · {climateTitle(climate)}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{waterLine(climate, gallons)}</p>
        </article>
        {heat ? (
          <article className="rounded-2xl bg-ink p-5 text-cream">
            <h2 className="font-display text-xl">Heat on canvas</h2>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">{heat}</p>
          </article>
        ) : (
          <article className="rounded-2xl bg-cream p-5 shadow-card">
            <h2 className="font-display text-xl">Don’t reuse the mix</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              When you tip the bags, that soil is finished for potatoes, sweet potatoes, tomatoes,
              peppers, and eggplant. Use it on flowers or compost it hot. Dry the canvas bone-dry
              before it goes away.
            </p>
          </article>
        )}
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-3xl text-ink">Season list</h2>
            <p className="mt-2 text-sm text-muted tabular-nums">
              {done} of {tasks.length} checked · saved on this device
            </p>
          </div>
          <button
            type="button"
            onClick={() => resetChecks()}
            className="inline-flex min-h-11 items-center text-sm font-medium text-russet-deep"
          >
            Clear checks
          </button>
        </div>
        <div className="mt-6 space-y-8">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="text-xs font-medium tracking-widest text-muted uppercase">{group}</h3>
              <ul className="mt-2 divide-y divide-line border-y border-line">
                {tasks
                  .filter((task) => task.group === group)
                  .map((task) => {
                    const on = Boolean(checks[task.id]);
                    return (
                      <li key={task.id}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggleCheck(task.id)}
                          className="flex w-full items-start gap-3 py-3 text-left"
                        >
                          <span className={on ? "check-box on" : "check-box"} aria-hidden>
                            {on ? "✓" : ""}
                          </span>
                          <span className="min-w-0">
                            {task.crop !== "either" ? (
                              <span className="mb-1 block text-xs font-medium tracking-widest text-russet-deep uppercase">
                                {task.crop === "potato" ? "Potato" : "Sweet potato"}
                              </span>
                            ) : null}
                            <span className={on ? "text-muted line-through decoration-line" : "text-ink"}>
                              {task.label}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
