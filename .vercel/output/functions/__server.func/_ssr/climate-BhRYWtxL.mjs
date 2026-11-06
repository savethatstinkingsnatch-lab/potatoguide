import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as varietiesFor, S as shiftMonths, g as CLIMATES, i as useGardenStore, v as MONTHS, y as PHASE_LABEL } from "./router-Cj4KMphb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/climate-BhRYWtxL.js
var import_jsx_runtime = require_jsx_runtime();
var PHASES = [
	"prep",
	"plant",
	"grow",
	"harvest",
	"off"
];
function MonthStrip({ label, phases, hemisphere }) {
	const shown = shiftMonths(phases, hemisphere);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mb-2 text-sm font-medium text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-full overflow-x-auto pb-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "month-grid",
				children: shown.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `month-cell phase-${phase}`,
						title: `${MONTHS[i]}: ${PHASE_LABEL[phase]}`,
						role: "img",
						"aria-label": `${MONTHS[i]}: ${PHASE_LABEL[phase]}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-muted tabular-nums",
						children: MONTHS[i]
					})]
				}, MONTHS[i]))
			})
		})]
	});
}
function ClimatePage() {
	const climate = useGardenStore((s) => s.climate);
	const hemisphere = useGardenStore((s) => s.hemisphere);
	const setClimate = useGardenStore((s) => s.setClimate);
	const setHemisphere = useGardenStore((s) => s.setHemisphere);
	const current = CLIMATES.find((c) => c.id === climate) ?? CLIMATES[1];
	const potatoes = varietiesFor(current.id, "potato");
	const sweets = varietiesFor(current.id, "sweet");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-russet-deep uppercase",
						children: "Climate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
						children: "Plant by soil heat, not by a zone number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: "USDA zones only tell you how cold winter gets. Potatoes tuberize in cool soil, roughly 60–65°F, and stall when the bag stays above about 80°F. Sweet potatoes wait until the mix holds 65°F and then want months of heat. Pick the pattern closest to your garden — the bag planner follows this choice."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Hemisphere",
				children: [["north", "Northern hemisphere"], ["south", "Southern hemisphere"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": hemisphere === id,
					onClick: () => setHemisphere(id),
					className: hemisphere === id ? "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream" : "inline-flex min-h-11 items-center rounded-full bg-cream px-4 text-sm font-medium text-ink shadow-card",
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted",
				children: "Southern months are the northern calendar shifted by half a year. Coasts, monsoons, and elevation still beat the chart. If you garden in tropical highlands with real chill, use Cool temperate, not Tropical lowland."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 lg:grid-cols-5",
				children: CLIMATES.map((item) => {
					const on = item.id === climate;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setClimate(item.id),
						className: on ? "rounded-2xl bg-ink p-4 text-left text-cream" : "rounded-2xl bg-cream p-4 text-left text-ink shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl leading-tight",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-2 block text-xs ${on ? "text-cream/75" : "text-muted"}`,
							children: item.zones
						})]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-8 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 lg:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: current.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthStrip, {
								label: "Potatoes",
								phases: current.potatoMonths,
								hemisphere
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthStrip, {
								label: "Sweet potatoes",
								phases: current.sweetMonths,
								hemisphere
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-x-4 gap-y-2",
							"aria-label": "Season legend",
							children: PHASES.map((phase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block size-3 rounded-sm phase-${phase}` }), PHASE_LABEL[phase]]
							}, phase))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: "These months are a sketch for a season of this length, not a planting date from a USDA zone. Slide them to your last frost, your first frost, and the week the soil is actually warm enough. A hardiness zone only describes how cold winter usually gets."
						}),
						current.id === "tropical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "The sweet-potato strip is solid on purpose. Start a crop any month you can give it about four hot months and a drier week at the end to harvest and cure."
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-cream p-5 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-ink",
							children: "Soil, not the air"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 space-y-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium",
								children: "Potatoes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-muted",
								children: "Plant when soil is workable and about 45°F / 7°C. Two to four inches of settled mix over the seed. Frost kills tops; a hilled tuber usually survives a light one."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium",
								children: "Sweet potatoes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-muted",
								children: "Plant slips only after the bag stays at 65°F / 18°C and frost is finished. They need a long frost-free run after that — often about three to four months, longer for purple flesh. Count from planting day. Catalog “days” are approximate."
							})] })]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-cream p-5 shadow-card sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "Potatoes here"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: current.potato
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: potatoes.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/varieties",
								search: {
									crop: "potato",
									color: "all",
									pick: v.id
								},
								className: "inline-flex min-h-11 items-center rounded-full bg-paper px-3 text-sm text-ink shadow-card",
								children: v.name
							}) }, v.id))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-cream p-5 shadow-card sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "Sweet potatoes here"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: current.sweet
						}),
						sweets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "No sweet potato on this list is a fair bet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: sweets.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/varieties",
								search: {
									crop: "sweet",
									color: "all",
									pick: v.id
								},
								className: "inline-flex min-h-11 items-center rounded-full bg-paper px-3 text-sm text-ink shadow-card",
								children: v.name
							}) }, v.id))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "What usually goes wrong"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: current.risks.map((risk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-2xl bg-cream p-4 text-sm leading-relaxed text-muted shadow-card",
							children: risk
						}, risk))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted",
						children: [
							"Feeding changes with the weather too.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/fertilizer",
								className: "font-medium text-russet-deep",
								children: "Read the fertilizer guide"
							}),
							" ",
							"before you top up a bag that already looks lush."
						]
					})
				]
			})
		]
	});
}
//#endregion
export { ClimatePage as component };
