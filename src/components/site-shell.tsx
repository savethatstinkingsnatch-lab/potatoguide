import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { CLIMATE_MAP } from "@/data/guide";
import { formatGal } from "@/data/plan";
import { useGardenStore } from "@/lib/garden-store";
import { Tuber } from "@/components/tuber";

const NAV = [
  { to: "/", label: "Guide" },
  { to: "/start", label: "Start" },
  { to: "/varieties", label: "Colors" },
  { to: "/climate", label: "Climate" },
  { to: "/fertilizer", label: "Fertilizer" },
  { to: "/bags", label: "Canvas bags" },
  { to: "/ground", label: "Ground & boxes" },
  { to: "/pantry", label: "Pantry" },
  { to: "/planner", label: "Planner" },
  { to: "/glossary", label: "Glossary" },
] as const;

function isCurrent(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const climate = useGardenStore((s) => s.climate);
  const hemisphere = useGardenStore((s) => s.hemisphere);
  const mode = useGardenStore((s) => s.mode);
  const gallons = useGardenStore((s) => s.gallons);
  const potatoBags = useGardenStore((s) => s.potatoBags);
  const sweetBags = useGardenStore((s) => s.sweetBags);

  useEffect(() => {
    void useGardenStore.persist.rehydrate();
  }, []);

  const bags =
    mode === "potato" ? potatoBags : mode === "sweet" ? sweetBags : potatoBags + sweetBags;

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pt-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex min-h-11 items-center gap-2.5">
              <Tuber skin="#8d6844" flesh="#f0c84a" label="" size="sm" />
              <span className="font-display text-xl leading-none tracking-tight">
                Potatoes: The Potato Plot
              </span>
            </Link>
            <Link
              to="/planner"
              className="hidden min-h-11 items-center text-sm text-muted md:inline-flex"
            >
              {CLIMATE_MAP[climate].title} · {hemisphere === "north" ? "Northern" : "Southern"} ·{" "}
              <span className="ml-1 tabular-nums text-ink">
                {bags} × {formatGal(gallons)} gal
              </span>
            </Link>
          </div>
          <nav aria-label="Guide" className="flex flex-wrap gap-1 pb-3">
            {NAV.map((item) => {
              const on = isCurrent(pathname, item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={on ? "page" : undefined}
                  className={
                    on
                      ? "inline-flex min-h-11 items-center rounded-full bg-ink px-3.5 text-sm font-medium text-cream"
                      : "inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-muted"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div id="content" className="flex-1">
        {children}
      </div>
      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-relaxed text-muted sm:px-6">
          <p>
            <span className="text-ink">Potatoes: The Potato Plot</span> by Blue and the Awesome
            Dudes. Part of The Education Revolution pocket guide series. Home-garden guidance, not
            a soil test and not a pesticide label. Potatoes (<em>Solanum tuberosum</em>) and sweet
            potatoes (<em>Ipomoea batatas</em>) are different plants. A US grocery “yam” is almost
            always an orange sweet potato, not a true yam.
          </p>
          <p className="mt-3">
            Privacy: This guide does not collect your name, email, or any personal information.
            Your planner choices are saved only on your own device.
          </p>
        </div>
      </footer>
    </div>
  );
}
