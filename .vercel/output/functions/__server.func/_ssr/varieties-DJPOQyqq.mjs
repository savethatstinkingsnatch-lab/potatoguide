import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as COLOR_FILTERS, b as VARIETIES, n as Route, r as Tuber, x as cropLabel } from "./router-Biel0t-a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/varieties-DJPOQyqq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function matches(v, crop, color) {
	if (crop !== "all" && v.crop !== crop) return false;
	if (color === "all") return true;
	if (color === "fingerling") return v.shape === "fingerling";
	return v.color === color;
}
function emptyCopy(crop, color) {
	if (color === "fingerling" && crop === "sweet") return "Fingerling is a potato shape. Sweet potatoes don’t come that way — switch to Potatoes, or look at cream and purple sweets instead.";
	if ((color === "orange" || color === "cream") && crop === "potato") return "Orange and cream, in this guide, are sweet-potato flesh colors. Irish potatoes in those tones are listed under Gold and White.";
	if (color === "russet" && crop === "sweet") return "Russet is a netted potato skin. Sweet potatoes aren’t russets — try Orange, Cream, or Purple.";
	return "Nothing sits in that combination. Clear one filter and the row will fill back in.";
}
function VarietiesPage() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const [openId, setOpenId] = (0, import_react.useState)(search.pick ?? null);
	(0, import_react.useEffect)(() => {
		if (!search.pick) return;
		setOpenId(search.pick);
		document.getElementById(search.pick)?.scrollIntoView({ block: "center" });
	}, [search.pick]);
	const matched = VARIETIES.filter((v) => matches(v, search.crop, search.color));
	const picked = VARIETIES.find((v) => v.id === search.pick);
	const list = picked && !matched.some((v) => v.id === picked.id) ? [picked, ...matched] : matched;
	function setCrop(crop) {
		navigate({ search: {
			...search,
			crop,
			pick: void 0
		} });
	}
	function setColor(color) {
		navigate({ search: {
			...search,
			color,
			pick: void 0
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-russet-deep uppercase",
						children: "Colors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
						children: "Skin, flesh, and the odd shape"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: "Twenty-six varieties. Color here means the color gardeners shop by: russet and red are mostly skin, gold and purple are flesh, orange and cream belong to sweet potatoes. Fingerling is a shape that comes in more than one color."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Crop",
				children: [
					["all", "Both plants"],
					["potato", "Potatoes"],
					["sweet", "Sweet potatoes"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": search.crop === id,
					onClick: () => setCrop(id),
					className: search.crop === id ? "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream" : "inline-flex min-h-11 items-center rounded-full bg-cream px-4 text-sm font-medium text-ink shadow-card",
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-2 overflow-x-auto pb-1",
				role: "group",
				"aria-label": "Color",
				children: COLOR_FILTERS.map((filter) => {
					const count = VARIETIES.filter((v) => matches(v, search.crop, filter.id)).length;
					const on = search.color === filter.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setColor(filter.id),
						className: on ? "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-russet-deep px-4 text-sm font-medium text-cream" : "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted",
						children: [filter.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums opacity-80",
							children: count
						})]
					}, filter.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-3xl text-sm leading-relaxed text-muted",
				children: "Potatoes and sweet potatoes are grown from tubers and slips, so every plant is a copy of its parent. “Open-pollinated” and “hybrid” don’t matter here. Some newer varieties are protected by a patent or a Plant Variety Protection certificate, and the tag or catalog will say so. You can grow those for your own table, but you may not sell or give away tubers or slips of them for planting. Older varieties are free to share."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted tabular-nums",
				children: [
					list.length,
					" ",
					list.length === 1 ? "variety" : "varieties",
					search.crop !== "all" || search.color !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 font-medium text-russet-deep",
							onClick: () => void navigate({ search: {
								crop: "all",
								color: "all"
							} }),
							children: "Clear filters"
						})
					] }) : null
				]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl rounded-2xl bg-cream p-5 text-muted shadow-card",
				children: emptyCopy(search.crop, search.color)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((v) => {
					const open = openId === v.id;
					const forced = picked?.id === v.id && !matched.some((m) => m.id === v.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						id: v.id,
						className: "scroll-mt-36",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col rounded-2xl bg-cream p-4 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tuber, {
										skin: v.skinHex,
										flesh: v.fleshHex,
										label: `${v.name}, ${v.skin} skin, ${v.flesh} flesh`,
										size: "lg"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-medium tracking-widest text-muted uppercase",
												children: [cropLabel(v.crop), v.shape === "fingerling" ? " · fingerling" : ""]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "font-display text-2xl leading-tight text-ink",
												children: v.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-sm text-muted tabular-nums",
												children: [
													v.days[0],
													"–",
													v.days[1],
													" days"
												]
											})
										]
									})]
								}),
								forced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-russet-deep",
									children: "Shown even though filters hide it."
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-4 grid grid-cols-2 gap-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Skin"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v.skin })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Flesh"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v.flesh })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Texture"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v.texture })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Kitchen"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v.kitchen })] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-expanded": open,
									onClick: () => setOpenId(open ? null : v.id),
									className: "mt-4 inline-flex min-h-11 items-center self-start text-sm font-medium text-russet-deep",
									children: open ? "Hide growing notes" : "Growing notes"
								}),
								open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 space-y-3 text-sm leading-relaxed text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-ink",
											children: "In canvas. "
										}), v.bag] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-ink",
											children: "Watch. "
										}), v.watch] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/climate",
											className: "font-medium text-russet-deep",
											children: "Check it against your climate"
										}) })
									]
								}) : null
							]
						})
					}, v.id);
				})
			})
		]
	});
}
//#endregion
export { VarietiesPage as component };
