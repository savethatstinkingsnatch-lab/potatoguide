import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BAG_PRESETS, c as cylinderGallons, d as formatLb, f as heatLine, g as CLIMATES, i as useGardenStore, l as formatCuFt, m as waterLine, o as checklist, p as planCrop, s as climateTitle, u as formatGal } from "./router-pT1nR7Nm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planner-DEOArWI8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Stepper({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-medium text-ink",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-11 items-center justify-center rounded-full bg-cream text-xl shadow-card disabled:opacity-40",
				onClick: () => onChange(value - 1),
				disabled: value <= 1,
				"aria-label": `Fewer ${label}`,
				children: "−"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-center font-display text-3xl tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-11 items-center justify-center rounded-full bg-cream text-xl shadow-card disabled:opacity-40",
				onClick: () => onChange(value + 1),
				disabled: value >= 40,
				"aria-label": `More ${label}`,
				children: "+"
			})
		]
	})] });
}
function PlanBlock({ plan }) {
	const name = plan.crop === "potato" ? "Potatoes" : "Sweet potatoes";
	const unit = plan.crop === "potato" ? "seed pieces" : "slips";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl bg-cream p-5 shadow-card sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted tabular-nums",
				children: [
					plan.bags,
					" ",
					plan.bags === 1 ? "bag" : "bags",
					" · ",
					formatGal(plan.gallonsEach),
					" gal each ·",
					" ",
					plan.plantsEach,
					" ",
					unit,
					" per bag"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 font-display text-4xl text-ink tabular-nums",
				children: [
					formatLb(plan.yieldLo),
					"–",
					formatLb(plan.yieldHi),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 font-sans text-base text-muted",
						children: "lb, if the season cooperates"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid gap-4 text-sm sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Buy, about"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-1 font-medium tabular-nums",
						children: [formatCuFt(plan.mix.pottingCuFt), " cu ft potting mix"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "text-muted tabular-nums",
						children: [formatCuFt(plan.mix.compostCuFt), " cu ft finished compost"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "text-muted tabular-nums",
						children: [formatCuFt(plan.mix.perliteCuFt), " cu ft extra perlite"]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Start with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-1 font-medium",
						children: [
							plan.plantsTotal,
							" ",
							unit,
							plan.seedLb != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-normal text-muted",
								children: [
									" · about ",
									formatLb(plan.seedLb),
									" lb of seed"
								]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-2 text-muted",
						children: [
							"Stir ",
							plan.blend,
							" of a low-nitrogen blend (5-10-10 or close) through the whole mix, plus",
							" ",
							plan.kelp,
							" kelp meal."
						]
					})
				] })]
			})
		]
	});
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
	const [diameter, setDiameter] = (0, import_react.useState)("16");
	const [height, setHeight] = (0, import_react.useState)("14");
	const exact = cylinderGallons(Number(diameter) || 0, Number(height) || 0);
	const preset = BAG_PRESETS.includes(gallons);
	const plans = [];
	if (mode !== "sweet") plans.push(planCrop("potato", potatoBags, gallons));
	if (mode !== "potato") plans.push(planCrop("sweet", sweetBags, gallons));
	const tasks = checklist(mode, climate);
	const done = tasks.filter((task) => checks[task.id]).length;
	const groups = [...new Set(tasks.map((task) => task.group))];
	const heat = heatLine(climate, mode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-russet-deep uppercase",
						children: "Planner"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
						children: "How much bag, how much crop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: [
							"Built for canvas you already own. Yields are home-bag ranges, not a promise — crowding, heat, and a dry week move them more than the fertilizer does. Climate is shared with the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/climate",
								className: "font-medium text-russet-deep",
								children: "climate guide"
							}),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-2xl bg-cream p-5 shadow-card sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "group",
						"aria-label": "Crop",
						children: [
							["potato", "Potatoes"],
							["sweet", "Sweet potatoes"],
							["both", "Both"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": mode === id,
							onClick: () => setMode(id),
							className: mode === id ? "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream" : "inline-flex min-h-11 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink",
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-6 block text-sm font-medium",
						htmlFor: "climate",
						children: "Climate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "climate",
						value: climate,
						onChange: (e) => setClimate(e.target.value),
						className: "mt-2 min-h-11 w-full max-w-md rounded-xl bg-paper px-3 text-ink shadow-card",
						children: CLIMATES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.id,
							children: item.title
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm font-medium",
						children: "Bag size"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						role: "group",
						"aria-label": "Bag size",
						children: [BAG_PRESETS.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": gallons === size,
							onClick: () => setGallons(size),
							className: gallons === size ? "inline-flex min-h-11 items-center rounded-full bg-russet-deep px-4 text-sm font-medium text-cream tabular-nums" : "inline-flex min-h-11 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink tabular-nums",
							children: [size, " gal"]
						}, size)), !preset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream tabular-nums",
							children: [
								"Custom · ",
								formatGal(gallons),
								" gal"
							]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-8",
						children: [mode !== "sweet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Potato bags",
							value: potatoBags,
							onChange: setPotatoBags
						}) : null, mode !== "potato" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Sweet potato bags",
							value: sweetBags,
							onChange: setSweetBags
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-line pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Unlabeled bag?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm text-muted",
								children: "Diameter across the top and usable height, in inches. This treats the bag as a cylinder — if it tapers, the real volume is a little less."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap items-end gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-sm",
										children: ["Diameter", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											inputMode: "decimal",
											value: diameter,
											onChange: (e) => setDiameter(e.target.value),
											className: "mt-1 block min-h-11 w-28 rounded-xl bg-paper px-3 shadow-card"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-sm",
										children: ["Height", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											inputMode: "decimal",
											value: height,
											onChange: (e) => setHeight(e.target.value),
											className: "mt-1 block min-h-11 w-28 rounded-xl bg-paper px-3 shadow-card"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: exact < 3,
										onClick: () => setGallons(Math.min(40, exact)),
										className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream disabled:opacity-40",
										children: "Use this size"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted tabular-nums",
								children: [
									exact > 0 ? `About ${formatGal(exact)} gallons.` : "Enter both measurements.",
									" ",
									exact > 40 ? "That’s closer to a tote. The planner caps a single bag at 40 gallons." : null
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-6 grid gap-4",
				children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanBlock, { plan }, plan.crop))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-cream p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl",
						children: ["Water · ", climateTitle(climate)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: waterLine(climate, gallons)
					})]
				}), heat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-ink p-5 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Heat on canvas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-cream/80",
						children: heat
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-cream p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Don’t reuse the mix"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "When you tip the bags, that soil is finished for potatoes, sweet potatoes, tomatoes, peppers, and eggplant. Use it on flowers or compost it hot. Dry the canvas bone-dry before it goes away."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: "Season list"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted tabular-nums",
						children: [
							done,
							" of ",
							tasks.length,
							" checked · saved on this device"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => resetChecks(),
						className: "inline-flex min-h-11 items-center text-sm font-medium text-russet-deep",
						children: "Clear checks"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-8",
					children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: group
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 divide-y divide-line border-y border-line",
						children: tasks.filter((task) => task.group === group).map((task) => {
							const on = Boolean(checks[task.id]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": on,
								onClick: () => toggleCheck(task.id),
								className: "flex w-full items-start gap-3 py-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: on ? "check-box on" : "check-box",
									"aria-hidden": true,
									children: on ? "✓" : ""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [task.crop !== "either" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-xs font-medium tracking-widest text-russet-deep uppercase",
										children: task.crop === "potato" ? "Potato" : "Sweet potato"
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: on ? "text-muted line-through decoration-line" : "text-ink",
										children: task.label
									})]
								})]
							}) }, task.id);
						})
					})] }, group))
				})]
			})
		]
	});
}
//#endregion
export { PlannerPage as component };
