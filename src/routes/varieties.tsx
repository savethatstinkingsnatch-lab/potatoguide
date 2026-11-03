import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  COLOR_FILTERS,
  VARIETIES,
  cropLabel,
  type ColorId,
  type CropId,
  type Variety,
} from "@/data/guide";
import { Tuber } from "@/components/tuber";

type VarietySearch = {
  crop: "all" | CropId;
  color: "all" | ColorId | "fingerling";
  pick?: string;
};

const COLORS = new Set(COLOR_FILTERS.map((c) => c.id));

export const Route = createFileRoute("/varieties")({
  validateSearch: (search: Record<string, unknown>): VarietySearch => {
    const crop = search.crop === "potato" || search.crop === "sweet" ? search.crop : "all";
    const color =
      typeof search.color === "string" && COLORS.has(search.color as VarietySearch["color"])
        ? (search.color as VarietySearch["color"])
        : "all";
    const pick = typeof search.pick === "string" && search.pick.length > 0 ? search.pick : undefined;
    return { crop, color, pick };
  },
  head: () => ({
    meta: [{ title: "Colors and varieties · The Potato Plot" }],
  }),
  component: VarietiesPage,
});

function matches(v: Variety, crop: VarietySearch["crop"], color: VarietySearch["color"]) {
  if (crop !== "all" && v.crop !== crop) return false;
  if (color === "all") return true;
  if (color === "fingerling") return v.shape === "fingerling";
  return v.color === color;
}

function emptyCopy(crop: VarietySearch["crop"], color: VarietySearch["color"]) {
  if (color === "fingerling" && crop === "sweet") {
    return "Fingerling is a potato shape. Sweet potatoes don’t come that way — switch to Potatoes, or look at cream and purple sweets instead.";
  }
  if ((color === "orange" || color === "cream") && crop === "potato") {
    return "Orange and cream, in this guide, are sweet-potato flesh colors. Irish potatoes in those tones are listed under Gold and White.";
  }
  if (color === "russet" && crop === "sweet") {
    return "Russet is a netted potato skin. Sweet potatoes aren’t russets — try Orange, Cream, or Purple.";
  }
  return "Nothing sits in that combination. Clear one filter and the row will fill back in.";
}

function VarietiesPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [openId, setOpenId] = useState<string | null>(search.pick ?? null);

  useEffect(() => {
    if (!search.pick) return;
    setOpenId(search.pick);
    const node = document.getElementById(search.pick);
    node?.scrollIntoView({ block: "center" });
  }, [search.pick]);

  const matched = VARIETIES.filter((v) => matches(v, search.crop, search.color));
  const picked = VARIETIES.find((v) => v.id === search.pick);
  const list =
    picked && !matched.some((v) => v.id === picked.id) ? [picked, ...matched] : matched;

  function setCrop(crop: VarietySearch["crop"]) {
    void navigate({ search: { ...search, crop, pick: undefined } });
  }
  function setColor(color: VarietySearch["color"]) {
    void navigate({ search: { ...search, color, pick: undefined } });
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-russet-deep uppercase">Colors</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Skin, flesh, and the odd shape
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Twenty-six varieties. Color here means the color gardeners shop by: russet and red are
          mostly skin, gold and purple are flesh, orange and cream belong to sweet potatoes.
          Fingerling is a shape that comes in more than one color.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Crop">
        {(
          [
            ["all", "Both plants"],
            ["potato", "Potatoes"],
            ["sweet", "Sweet potatoes"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={search.crop === id}
            onClick={() => setCrop(id)}
            className={
              search.crop === id
                ? "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream"
                : "inline-flex min-h-11 items-center rounded-full bg-cream px-4 text-sm font-medium text-ink shadow-card"
            }
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Color">
        {COLOR_FILTERS.map((filter) => {
          const count = VARIETIES.filter((v) => matches(v, search.crop, filter.id)).length;
          const on = search.color === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={on}
              onClick={() => setColor(filter.id)}
              className={
                on
                  ? "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-russet-deep px-4 text-sm font-medium text-cream"
                  : "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted"
              }
            >
              {filter.label}
              <span className="tabular-nums opacity-80">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-muted tabular-nums">
        {list.length} {list.length === 1 ? "variety" : "varieties"}
        {search.crop !== "all" || search.color !== "all" ? (
          <>
            {" "}
            ·{" "}
            <button
              type="button"
              className="min-h-11 font-medium text-russet-deep"
              onClick={() => void navigate({ search: { crop: "all", color: "all" } })}
            >
              Clear filters
            </button>
          </>
        ) : null}
      </p>

      {list.length === 0 ? (
        <p className="mt-6 max-w-xl rounded-2xl bg-cream p-5 text-muted shadow-card">
          {emptyCopy(search.crop, search.color)}
        </p>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v) => {
            const open = openId === v.id;
            const forced = picked?.id === v.id && !matched.some((m) => m.id === v.id);
            return (
              <li key={v.id} id={v.id} className="scroll-mt-36">
                <article className="flex h-full flex-col rounded-2xl bg-cream p-4 shadow-card">
                  <div className="flex items-start gap-3">
                    <Tuber
                      skin={v.skinHex}
                      flesh={v.fleshHex}
                      label={`${v.name}, ${v.skin} skin, ${v.flesh} flesh`}
                      size="lg"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-widest text-muted uppercase">
                        {cropLabel(v.crop)}
                        {v.shape === "fingerling" ? " · fingerling" : ""}
                      </p>
                      <h2 className="font-display text-2xl leading-tight text-ink">{v.name}</h2>
                      <p className="mt-1 text-sm text-muted tabular-nums">
                        {v.days[0]}–{v.days[1]} days
                      </p>
                    </div>
                  </div>
                  {forced ? (
                    <p className="mt-3 text-xs text-russet-deep">Shown even though filters hide it.</p>
                  ) : null}
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-muted">Skin</dt>
                      <dd>{v.skin}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Flesh</dt>
                      <dd>{v.flesh}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Texture</dt>
                      <dd>{v.texture}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Kitchen</dt>
                      <dd>{v.kitchen}</dd>
                    </div>
                  </dl>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : v.id)}
                    className="mt-4 inline-flex min-h-11 items-center self-start text-sm font-medium text-russet-deep"
                  >
                    {open ? "Hide growing notes" : "Growing notes"}
                  </button>
                  {open ? (
                    <div className="mt-1 space-y-3 text-sm leading-relaxed text-muted">
                      <p>
                        <span className="font-medium text-ink">In canvas. </span>
                        {v.bag}
                      </p>
                      <p>
                        <span className="font-medium text-ink">Watch. </span>
                        {v.watch}
                      </p>
                      <p>
                        <Link to="/climate" className="font-medium text-russet-deep">
                          Check it against your climate
                        </Link>
                      </p>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
