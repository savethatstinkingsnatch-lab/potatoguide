import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-8c25ip1d.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"Order certified seed potatoes or sweet potato slips early.",
	"Pick a grow bag (10 gallons or more) or a sunny bed with loose soil.",
	"Sprout potatoes in bright light for 2 to 3 weeks.",
	"Plant potatoes when the soil is about 45°F, 2 to 4 weeks before your last frost. Plant sweet potatoes when the soil is warm, after all frost.",
	"Hill potatoes as they grow so no tuber sees light. Do not hill sweet potatoes.",
	"Harvest, cure, and store using the pantry chapter."
];
function StartPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-russet-deep uppercase",
				children: "New to potatoes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
				children: "Start here"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-4",
				children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 rounded-2xl bg-cream p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl text-russet tabular-nums",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-1 text-sm leading-relaxed text-ink",
						children: step
					})]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted",
				children: [
					"The pantry chapter has the cure, the cellar, and the canner.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pantry",
						className: "font-medium text-russet-deep",
						children: "Open it when the vines are done."
					})
				]
			})
		]
	});
}
//#endregion
export { StartPage as component };
