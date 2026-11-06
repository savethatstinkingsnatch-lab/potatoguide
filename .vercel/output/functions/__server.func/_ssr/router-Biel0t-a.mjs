import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-Dq_4xpzb.js
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var PHASE_LABEL = {
	off: "Off season",
	prep: "Prep seed or slips",
	plant: "Plant",
	grow: "Growing",
	harvest: "Harvest"
};
function shiftMonths(north, hemisphere) {
	if (hemisphere === "north") return [...north];
	return north.map((_, i) => north[(i + 6) % 12]);
}
var CLIMATES = [
	{
		id: "cold",
		title: "Cold, short summer",
		zones: "USDA 3–4, high latitude, high elevation",
		summary: "Frost leaves late and comes back early. You get one tight window, and only varieties that finish.",
		potato: "Chit seed indoors while the ground is still frozen. Plant as soon as the soil is workable and about 45°F / 7°C, usually late spring. Use early and midseason varieties. Cover the bag if a late frost is forecast — frozen tops cost you weeks you do not have.",
		sweet: "Most years there is not enough heat. Georgia Jet is the only sweet potato worth trying, in the warmest spot you have, and you should expect small roots or none. Potatoes are the crop.",
		risks: [
			"A June frost blackens tops. Row cover or an old sheet overnight is enough if the bag is small.",
			"Late varieties (Russet Burbank, German Butterball, purple sweets) will still be sizing when the vines die.",
			"Cold soil at planting just sits there. Sprouts rot instead of rooting."
		],
		potatoMonths: [
			"off",
			"off",
			"prep",
			"prep",
			"plant",
			"grow",
			"grow",
			"grow",
			"harvest",
			"off",
			"off",
			"off"
		],
		sweetMonths: [
			"off",
			"off",
			"off",
			"off",
			"off",
			"plant",
			"grow",
			"grow",
			"harvest",
			"off",
			"off",
			"off"
		]
	},
	{
		id: "cool",
		title: "Cool temperate",
		zones: "USDA 5–6, classic potato country",
		summary: "A real summer that still cools off at night. This is the climate both the storage potato and a careful sweet potato can share.",
		potato: "Plant two to four weeks before the last frost, once soil is about 45°F / 7°C. Early, mid, and many late varieties finish. Russets and German Butterball belong here if water stays even.",
		sweet: "Start slips indoors about a month before last frost. Plant out only when the bag stays at 65°F / 18°C — often late May or June. Choose 90 to 100 day oranges and creams. Long-season purple sweets usually miss.",
		risks: [
			"A wet July invites late blight on lush vines, especially Kennebec. Don't compost infected leaves.",
			"Scab shows up if the mix is alkaline or the bag dries out right as tubers set.",
			"Sweet potato slips planted into cold mix stall and sometimes rot at the stem."
		],
		potatoMonths: [
			"off",
			"off",
			"prep",
			"plant",
			"grow",
			"grow",
			"grow",
			"grow",
			"harvest",
			"harvest",
			"off",
			"off"
		],
		sweetMonths: [
			"off",
			"off",
			"prep",
			"prep",
			"plant",
			"grow",
			"grow",
			"grow",
			"harvest",
			"harvest",
			"off",
			"off"
		]
	},
	{
		id: "warm",
		title: "Warm summer",
		zones: "USDA 7–8",
		summary: "Potatoes want the edges of the year. Sweet potatoes want the middle. Plant them on different calendars.",
		potato: "Spring crop goes in late winter or early spring and comes out before the worst heat. A second planting in late summer can give a fall crop where frost waits until November. Skip baking russets in the hot stretch — tubers stall above about 80°F / 27°C soil.",
		sweet: "This is their climate. Plant from midspring into early summer and harvest before frost. You have enough heat for orange, cream, and, if you plant promptly, purple-fleshed sweets.",
		risks: [
			"Dark canvas in July can cook potato roots even when the air feels fine. Shade the bag, not the leaves.",
			"Drought then a downpour cracks sweet potatoes and knobs Irish potatoes.",
			"Fall potato seed is hard to find in August. Order it in spring and keep it cool."
		],
		potatoMonths: [
			"prep",
			"plant",
			"plant",
			"grow",
			"grow",
			"harvest",
			"off",
			"plant",
			"grow",
			"grow",
			"harvest",
			"harvest"
		],
		sweetMonths: [
			"off",
			"prep",
			"prep",
			"plant",
			"plant",
			"grow",
			"grow",
			"grow",
			"grow",
			"harvest",
			"harvest",
			"off"
		]
	},
	{
		id: "hot",
		title: "Hot, winter potato",
		zones: "USDA 9–10, Gulf, desert, southern coasts",
		summary: "Grow potatoes in the cool season and sweet potatoes through the heat. Summer is the wrong time for a russet.",
		potato: "Plant in fall or winter and harvest before heat builds. White Rose, Desiree, Red Norland, and Yukon Gold are the reliable ones. Certified seed often sells out — order ahead and store it cool, not in a hot shed.",
		sweet: "A full season, all colors, including Okinawan and Stokes Purple if they go in on time. Harvest before any rare frost, and cure them. The refrigerator will ruin the texture.",
		risks: [
			"Potato tubers quit setting once the bag stays hot. If flowers never turn into size, the soil was too warm.",
			"Nematodes build up in ground soil. New mix in the bag each year sidesteps that.",
			"Desert wind dries canvas in a day. Plan on morning irrigation, not a weekly soak."
		],
		potatoMonths: [
			"plant",
			"plant",
			"grow",
			"grow",
			"harvest",
			"off",
			"off",
			"off",
			"prep",
			"plant",
			"grow",
			"grow"
		],
		sweetMonths: [
			"off",
			"prep",
			"plant",
			"plant",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"harvest",
			"harvest",
			"harvest"
		]
	},
	{
		id: "tropical",
		title: "Tropical lowland",
		zones: "USDA 11 and hotter lowlands",
		summary: "Sweet potatoes are the staple. Potatoes are a cool-season experiment that often fails on heat and day length.",
		potato: "Near the equator, days stay near 12 hours and nights stay warm. Many temperate varieties never get a strong signal to tuberize, and bacterial wilt is common. If you try, use the coolest months only, certified seed, and a short-season variety. Highlands with real chill are a different climate — use Cool temperate instead.",
		sweet: "Plant whenever you can give them about four hot months and a drier week at the end for harvest and curing. Vines root anywhere they touch soil, so you can take slips year-round.",
		risks: [
			"Potato seed from a grocery store is a fast way to import disease you cannot rotate out of a small garden.",
			"Sweet potato weevil finds roots left in the ground too long. Bags you can tip on time are an advantage.",
			"Curing in humid heat is easy; storing without rot afterward means a cooler, drier room than the porch."
		],
		potatoMonths: [
			"grow",
			"harvest",
			"off",
			"off",
			"off",
			"off",
			"off",
			"off",
			"off",
			"off",
			"prep",
			"plant"
		],
		sweetMonths: [
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow",
			"grow"
		]
	}
];
var CLIMATE_MAP = Object.fromEntries(CLIMATES.map((c) => [c.id, c]));
var COLOR_FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "russet",
		label: "Russet"
	},
	{
		id: "white",
		label: "White"
	},
	{
		id: "yellow",
		label: "Gold"
	},
	{
		id: "red",
		label: "Red"
	},
	{
		id: "purple",
		label: "Purple & blue"
	},
	{
		id: "orange",
		label: "Orange"
	},
	{
		id: "cream",
		label: "Cream"
	},
	{
		id: "fingerling",
		label: "Fingerling"
	}
];
var ATLAS = [
	{
		id: "russet",
		label: "Russet",
		skin: "#8a6240",
		flesh: "#f3e6c8",
		line: "Brown netted skin, white floury flesh. The baker and the fry potato.",
		crop: "potato"
	},
	{
		id: "white",
		label: "White",
		skin: "#e4d3a8",
		flesh: "#f7f1dc",
		line: "Pale thin skin, white flesh. All-purpose, and the usual inside of a red potato.",
		crop: "potato"
	},
	{
		id: "yellow",
		label: "Gold",
		skin: "#e2b84a",
		flesh: "#f0c84a",
		line: "Yellow flesh, buttery, the easiest potato in a bag. Yukon Gold is the type.",
		crop: "potato"
	},
	{
		id: "red",
		label: "Red",
		skin: "#a33b45",
		flesh: "#f4e4c8",
		line: "Red or pink skin. Flesh is usually white or gold — red flesh is the exception.",
		crop: "potato"
	},
	{
		id: "purple",
		label: "Purple",
		skin: "#3a2756",
		flesh: "#5c3d86",
		line: "Blue or purple flesh from anthocyanins. Roast or steam so the color stays.",
		crop: "all"
	},
	{
		id: "fingerling",
		label: "Fingerling",
		skin: "#c46a78",
		flesh: "#f0c84a",
		line: "A shape, not a color. Small, long, yellow, rose, or purple. Salad and roasting.",
		crop: "potato"
	},
	{
		id: "orange",
		label: "Orange sweet",
		skin: "#c46a32",
		flesh: "#e36a1e",
		line: "The moist sweet potato sold as a yam in US stores. It is not a yam.",
		crop: "sweet"
	},
	{
		id: "cream",
		label: "Cream sweet",
		skin: "#d7c4a4",
		flesh: "#f3e6c4",
		line: "Drier and nuttier, closer to chestnut than to pie filling.",
		crop: "sweet"
	}
];
var VARIETIES = [
	{
		id: "russet-burbank",
		name: "Russet Burbank",
		crop: "potato",
		color: "russet",
		shape: "blocky",
		skin: "Netted russet",
		flesh: "White, dry",
		skinHex: "#8d6844",
		fleshHex: "#f4e7cc",
		days: [100, 130],
		texture: "Floury, high starch",
		kitchen: "Baked, mashed, fries. Falls apart in soup.",
		climates: ["cool"],
		bag: "Needs a 20-gallon bag or larger and even water. In anything smaller, grow Norkotah or Yukon instead.",
		watch: "Knobs and hollow heart if water swings or nitrogen runs high. Scab if the mix is sweet (alkaline) or dries at tuber set. Not a short-season potato."
	},
	{
		id: "russet-norkotah",
		name: "Russet Norkotah",
		crop: "potato",
		color: "russet",
		shape: "blocky",
		skin: "Russet",
		flesh: "White",
		skinHex: "#a07848",
		fleshHex: "#f6ead2",
		days: [85, 110],
		texture: "Floury, a bit less dry than Burbank",
		kitchen: "Baked and roasted. Milder flavor.",
		climates: ["cold", "cool"],
		bag: "The russet to put in a 15-gallon canvas bag. Still wants steady moisture and no lime.",
		watch: "Flavor is plainer than Burbank. That is the trade for finishing earlier."
	},
	{
		id: "kennebec",
		name: "Kennebec",
		crop: "potato",
		color: "white",
		shape: "oblong",
		skin: "Buff white, thin",
		flesh: "White",
		skinHex: "#e6d7b0",
		fleshHex: "#f7f1de",
		days: [80, 100],
		texture: "Medium starch, all-purpose",
		kitchen: "New potatoes, fries, mash, storage.",
		climates: [
			"cold",
			"cool",
			"warm",
			"hot"
		],
		bag: "A workhorse in 10 gallons and up. Thin skin means you can eat them young without a fight.",
		watch: "Susceptible to late blight in wet, warm spells. Do not save tubers from a blighted bag as seed."
	},
	{
		id: "white-rose",
		name: "White Rose",
		crop: "potato",
		color: "white",
		shape: "oblong",
		skin: "White, thin",
		flesh: "White",
		skinHex: "#efe4c4",
		fleshHex: "#f8f3e4",
		days: [80, 100],
		texture: "Medium, slightly waxy",
		kitchen: "Boiled, roasted, early summer potato salads.",
		climates: [
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "The classic winter-crop potato for hot climates, and it behaves in a bag if you harvest before heat.",
		watch: "Does not store as long as a russet. Eat it through the cool season rather than holding it until next year. In the tropics, still a gamble."
	},
	{
		id: "yukon-gold",
		name: "Yukon Gold",
		crop: "potato",
		color: "yellow",
		shape: "round",
		skin: "Yellow, thin, pink eyes",
		flesh: "Buttery gold",
		skinHex: "#e2b84a",
		fleshHex: "#f0c84a",
		days: [70, 90],
		texture: "Medium, moist for a potato",
		kitchen: "The all-purpose: roast, mash, boil, gratin.",
		climates: [
			"cold",
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "The default canvas-bag potato. One or two pieces in 10 gallons is a full crop. Early enough for short summers and winter plantings.",
		watch: "Stores a medium time, not all winter like a late russet. In deep tropics, heat can still cut the set."
	},
	{
		id: "german-butterball",
		name: "German Butterball",
		crop: "potato",
		color: "yellow",
		shape: "round",
		skin: "Gold, netted",
		flesh: "Deep yellow",
		skinHex: "#d4a84a",
		fleshHex: "#e8b83a",
		days: [100, 120],
		texture: "Medium-floury, rich",
		kitchen: "Roast and mash. Many growers' favorite eating potato.",
		climates: ["cool", "warm"],
		bag: "Worth a 15-gallon bag where the season is long enough. In warm zones, grow it as the spring crop only.",
		watch: "Too late for a short northern summer. Flavor is the reason to wait."
	},
	{
		id: "nicola",
		name: "Nicola",
		crop: "potato",
		color: "yellow",
		shape: "oblong",
		skin: "Yellow",
		flesh: "Yellow",
		skinHex: "#efd078",
		fleshHex: "#f6de8a",
		days: [90, 110],
		texture: "Waxy",
		kitchen: "Salads and boiling. Stays in slices.",
		climates: ["cool", "warm"],
		bag: "Happy in 10 gallons. Don't hill past the top of the bag hoping for giant tubers — these stay moderate and numerous.",
		watch: "Not a baker. If you want fluffy, grow a russet beside it."
	},
	{
		id: "red-norland",
		name: "Red Norland",
		crop: "potato",
		color: "red",
		shape: "round",
		skin: "Red, smooth",
		flesh: "White",
		skinHex: "#b23b42",
		fleshHex: "#f6ead4",
		days: [70, 90],
		texture: "Waxy to medium",
		kitchen: "New potatoes, potato salad, roast halves.",
		climates: [
			"cold",
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "Early, so it is the red to pick when the season is short or you need them out before summer heat. Excellent in 7 to 10 gallons.",
		watch: "Skin color is the red. The inside is white. Flesh stays firm if you don't overcook it."
	},
	{
		id: "red-pontiac",
		name: "Red Pontiac",
		crop: "potato",
		color: "red",
		shape: "round",
		skin: "Deep red, thin",
		flesh: "White",
		skinHex: "#9d3040",
		fleshHex: "#f4e6d0",
		days: [80, 100],
		texture: "Waxy-medium, moist",
		kitchen: "Boiled, mashed, hashed. A big red.",
		climates: [
			"cold",
			"cool",
			"warm",
			"hot"
		],
		bag: "Produces heavily if water is even. Give it 10 to 15 gallons so the tubers aren't jammed into the canvas.",
		watch: "Eyes run deep, so there is more waste when you peel. Stores reasonably."
	},
	{
		id: "desiree",
		name: "Desiree",
		crop: "potato",
		color: "red",
		shape: "oblong",
		skin: "Pink-red",
		flesh: "Yellow",
		skinHex: "#c45a62",
		fleshHex: "#f0c56a",
		days: [90, 110],
		texture: "Medium, holds together",
		kitchen: "Roast, fry, boil. A European all-rounder.",
		climates: [
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "One of the better potatoes where summers run hot, as long as the bag itself is shaded. 10 gallons is enough.",
		watch: "Can scab. Keep the mix slightly acidic and don't let it dry out as tubers set. Tropical lowlands are still a maybe."
	},
	{
		id: "french-fingerling",
		name: "French Fingerling",
		crop: "potato",
		color: "red",
		shape: "fingerling",
		skin: "Rose",
		flesh: "Yellow with pink streaks",
		skinHex: "#c46a78",
		fleshHex: "#f0c84a",
		days: [90, 110],
		texture: "Firm, waxy",
		kitchen: "Roasted whole, salads. The pink stays as flecks.",
		climates: [
			"cold",
			"cool",
			"warm"
		],
		bag: "Two pieces in 10 to 15 gallons. Crowding makes a bag of marbles.",
		watch: "Fingerlings are a shape. This one is red-skinned and gold inside, not red throughout."
	},
	{
		id: "russian-banana",
		name: "Russian Banana",
		crop: "potato",
		color: "yellow",
		shape: "fingerling",
		skin: "Yellow",
		flesh: "Yellow",
		skinHex: "#e6c35a",
		fleshHex: "#f3d56a",
		days: [90, 110],
		texture: "Waxy",
		kitchen: "Roast with the skin, steam for salads.",
		climates: [
			"cold",
			"cool",
			"warm"
		],
		bag: "Prolific. One or two pieces in a 10-gallon bag is plenty or you will pick a hundred tiny ones.",
		watch: "Long slender tubers bruise if you dump the bag from waist height. Tip onto a tarp."
	},
	{
		id: "red-thumb",
		name: "Red Thumb",
		crop: "potato",
		color: "red",
		shape: "fingerling",
		skin: "Red",
		flesh: "Pink-red",
		skinHex: "#a3323c",
		fleshHex: "#c45a68",
		days: [90, 110],
		texture: "Waxy",
		kitchen: "Roast and salads, anywhere you want color on the plate.",
		climates: ["cool", "warm"],
		bag: "Treat like other fingerlings: few pieces, wide bag, no extra nitrogen or you get vines instead of color.",
		watch: "This is the red-fleshed one. Most 'red potatoes' are white inside. Say so when you share the harvest."
	},
	{
		id: "all-blue",
		name: "All Blue",
		crop: "potato",
		color: "purple",
		shape: "oblong",
		skin: "Blue-purple",
		flesh: "Blue-purple",
		skinHex: "#2c3a66",
		fleshHex: "#3d4f86",
		days: [90, 110],
		texture: "Medium, earthy",
		kitchen: "Roast, steam, or microwave. Boiling hard washes the color toward gray.",
		climates: [
			"cold",
			"cool",
			"warm",
			"hot"
		],
		bag: "Striking in a 10-gallon bag. Hill well — any light on the tuber muddies the skin and greens the flesh under it.",
		watch: "Color is the point, and it fades in a pot of boiling water. Acid in the dressing (lemon, vinegar) helps the pigment hold."
	},
	{
		id: "purple-majesty",
		name: "Purple Majesty",
		crop: "potato",
		color: "purple",
		shape: "oblong",
		skin: "Purple",
		flesh: "Deep purple",
		skinHex: "#4a2d6a",
		fleshHex: "#5c3478",
		days: [90, 110],
		texture: "Medium-floury",
		kitchen: "Roast, mash, even chips. Color holds better than All Blue.",
		climates: [
			"cold",
			"cool",
			"warm",
			"hot"
		],
		bag: "As easy as a Yukon in a 10 to 15 gallon bag, with a midseason clock. A good first purple.",
		watch: "Still a cool-season potato. In hot zones, grow it in the winter window, not in July."
	},
	{
		id: "magic-molly",
		name: "Magic Molly",
		crop: "potato",
		color: "purple",
		shape: "fingerling",
		skin: "Purple",
		flesh: "Nearly black purple",
		skinHex: "#2a1838",
		fleshHex: "#3a2150",
		days: [100, 120],
		texture: "Firm, earthy",
		kitchen: "Roasted whole. The darkest flesh most gardens will grow.",
		climates: ["cool", "warm"],
		bag: "A 15-gallon bag suits it. It is later than Yukon — don't pick it for a 70-day window.",
		watch: "Very late for cold short summers. Flavor is potato-y and mineral, not sweet."
	},
	{
		id: "beauregard",
		name: "Beauregard",
		crop: "sweet",
		color: "orange",
		shape: "oblong",
		skin: "Copper-rose",
		flesh: "Deep orange",
		skinHex: "#c46a32",
		fleshHex: "#e36a1e",
		days: [90, 100],
		texture: "Moist, sweet after curing",
		kitchen: "Baked, mashed, pies. The standard orange sweet potato.",
		climates: [
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "One slip in a 10 to 15 gallon bag, filled to the top once. Do not hill it like a potato.",
		watch: "Roots split if the bag goes bone dry and then gets flooded. Cure before you judge the sweetness."
	},
	{
		id: "covington",
		name: "Covington",
		crop: "sweet",
		color: "orange",
		shape: "oblong",
		skin: "Rose-copper",
		flesh: "Orange",
		skinHex: "#d07a48",
		fleshHex: "#e87830",
		days: [100, 110],
		texture: "Moist, sweet",
		kitchen: "Same uses as Beauregard. Often a smoother root.",
		climates: [
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "Same bag method as Beauregard. A little slower, so in cool zones don't wait to plant.",
		watch: "Bred for shape and disease tolerance in the field. In a fresh bag mix that advantage is smaller, but it is still an excellent orange."
	},
	{
		id: "jewel",
		name: "Jewel",
		crop: "sweet",
		color: "orange",
		shape: "oblong",
		skin: "Copper",
		flesh: "Orange",
		skinHex: "#c47840",
		fleshHex: "#e07028",
		days: [100, 120],
		texture: "Moist, stores well",
		kitchen: "Baking and storage. A classic older orange.",
		climates: [
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "Give it 15 gallons if you can. It wants the full days on the label.",
		watch: "Less sweet if you eat it uncured, straight from the bag."
	},
	{
		id: "garnet",
		name: "Garnet",
		crop: "sweet",
		color: "orange",
		shape: "oblong",
		skin: "Deep red",
		flesh: "Orange",
		skinHex: "#8e3040",
		fleshHex: "#e25a20",
		days: [100, 120],
		texture: "Very moist and sweet",
		kitchen: "Baking. Often sold as a 'garnet yam' — still a sweet potato.",
		climates: [
			"warm",
			"hot",
			"tropical",
			"cool"
		],
		bag: "Red skin, orange heart. One slip per 10 to 15 gallon bag. The red skin scuffs; tip the bag gently.",
		watch: "The grocery name 'yam' is marketing. True yams are a different plant and not in this guide."
	},
	{
		id: "georgia-jet",
		name: "Georgia Jet",
		crop: "sweet",
		color: "orange",
		shape: "oblong",
		skin: "Purple-red",
		flesh: "Orange",
		skinHex: "#7a3858",
		fleshHex: "#ef7a28",
		days: [80, 90],
		texture: "Moist, milder until cured",
		kitchen: "The short-season orange. Better after a week of curing.",
		climates: [
			"cold",
			"cool",
			"warm",
			"hot"
		],
		bag: "The sweet potato for a cold summer, and still a gamble there. Black fabric under the bag and the hottest corner of the patio.",
		watch: "Roots can be irregular. Flavor catches up only if you cure. In zone 3, consider it an experiment."
	},
	{
		id: "o-henry",
		name: "O'Henry",
		crop: "sweet",
		color: "cream",
		shape: "oblong",
		skin: "Cream to tan",
		flesh: "Cream",
		skinHex: "#e6d2ae",
		fleshHex: "#f3e4c4",
		days: [90, 100],
		texture: "Drier, nutty, less syrupy",
		kitchen: "Roast in wedges, soups, anywhere you don't want pie sweetness.",
		climates: [
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "A cream-fleshed sport of Beauregard, so it fits the same 10-gallon bag and a shorter season.",
		watch: "People expecting orange candy will think it failed. It didn't. It's a different potato."
	},
	{
		id: "bonita",
		name: "Bonita",
		crop: "sweet",
		color: "cream",
		shape: "oblong",
		skin: "Tan with a pink blush",
		flesh: "White",
		skinHex: "#e4c8b0",
		fleshHex: "#f7f0e0",
		days: [100, 110],
		texture: "Dry, mild, slightly sweet",
		kitchen: "Fries, roast, mashed with butter rather than marshmallow.",
		climates: [
			"cool",
			"warm",
			"hot",
			"tropical"
		],
		bag: "One slip, full bag, no hilling. White flesh under a pale skin — don't confuse it with a purple-skinned Murasaki.",
		watch: "Needs the cure to taste like something. Freshly dug it can be starchy and plain."
	},
	{
		id: "murasaki",
		name: "Murasaki",
		crop: "sweet",
		color: "cream",
		shape: "oblong",
		skin: "Purple",
		flesh: "Creamy white",
		skinHex: "#6a3a78",
		fleshHex: "#f4ead4",
		days: [100, 120],
		texture: "Dry, chestnut, not syrupy",
		kitchen: "Roast and steam. A Japanese-type sweet potato.",
		climates: [
			"warm",
			"hot",
			"tropical"
		],
		bag: "Purple outside, white inside. Say that out loud before someone plants it for purple mash. Wants real heat. 15 gallons is kinder.",
		watch: "Cool summers leave it starchy and small. This is not the purple-fleshed sweet."
	},
	{
		id: "okinawan",
		name: "Okinawan",
		crop: "sweet",
		color: "purple",
		shape: "oblong",
		skin: "Pale tan",
		flesh: "Vivid purple",
		skinHex: "#e2c8a8",
		fleshHex: "#7a3e8c",
		days: [110, 130],
		texture: "Dense, sweet, a little dry",
		kitchen: "Bake, steam, desserts. The color is the flesh, not the skin.",
		climates: [
			"warm",
			"hot",
			"tropical"
		],
		bag: "One slip in 15 to 20 gallons, planted as soon as the mix is warm. Short seasons don't color or size it.",
		watch: "Also called a Hawaiian sweet potato. Skin looks boring. Cut one open before you decide the crop failed."
	},
	{
		id: "stokes-purple",
		name: "Stokes Purple",
		crop: "sweet",
		color: "purple",
		shape: "oblong",
		skin: "Purple",
		flesh: "Deep purple",
		skinHex: "#4a2860",
		fleshHex: "#5c2e78",
		days: [110, 130],
		texture: "Dense and sweet after curing",
		kitchen: "Baked whole. Color holds. Spectacular next to an orange Garnet.",
		climates: [
			"warm",
			"hot",
			"tropical"
		],
		bag: "Long season, so the bag has to stay warm for four months. One slip, 15 gallons or more, mulch the rim.",
		watch: "Do not plant this in a cool zone and blame the bag. It needs heat and time. Cure it or it tastes flat."
	}
];
function varietiesFor(climate, crop) {
	return VARIETIES.filter((v) => v.crop === crop && v.climates.includes(climate)).sort((a, b) => a.days[0] - b.days[0]);
}
function cropLabel(crop) {
	return crop === "potato" ? "Potato" : "Sweet potato";
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Biel0t-a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var BAG_PRESETS = [
	5,
	7,
	10,
	15,
	20,
	25
];
var POTATO_YIELD = [
	[
		5,
		1.5,
		3
	],
	[
		10,
		3,
		6
	],
	[
		15,
		4.5,
		8
	],
	[
		20,
		6,
		10
	],
	[
		25,
		7,
		12
	],
	[
		40,
		9,
		15
	]
];
var SWEET_YIELD = [
	[
		5,
		1,
		2.5
	],
	[
		10,
		2.5,
		5
	],
	[
		15,
		4,
		8
	],
	[
		20,
		5,
		10
	],
	[
		25,
		6,
		12
	],
	[
		40,
		8,
		14
	]
];
function interp(table, gallons) {
	if (gallons <= table[0][0]) {
		const scale = gallons / table[0][0];
		return [table[0][1] * scale, table[0][2] * scale];
	}
	const last = table[table.length - 1];
	if (gallons >= last[0]) return [last[1], last[2]];
	for (let i = 0; i < table.length - 1; i++) {
		const [g0, lo0, hi0] = table[i];
		const [g1, lo1, hi1] = table[i + 1];
		if (gallons >= g0 && gallons <= g1) {
			const t = (gallons - g0) / (g1 - g0);
			return [lo0 + (lo1 - lo0) * t, hi0 + (hi1 - hi0) * t];
		}
	}
	return [last[1], last[2]];
}
function yieldPerBag(gallons, crop) {
	const [lo, hi] = interp(crop === "potato" ? POTATO_YIELD : SWEET_YIELD, gallons);
	return [round1(lo), round1(hi)];
}
function seedPieces(gallons) {
	if (gallons < 8) return 1;
	if (gallons < 16) return 2;
	if (gallons < 24) return 3;
	return 4;
}
function slipsPerBag(gallons) {
	if (gallons < 18) return 1;
	if (gallons < 30) return 2;
	return 2;
}
/** Cylinder estimate: diameter and height in inches → US gallons. */
function cylinderGallons(diameterIn, heightIn) {
	if (diameterIn <= 0 || heightIn <= 0) return 0;
	return .0034 * diameterIn * diameterIn * heightIn;
}
function mixFor(totalGal, crop) {
	const parts = crop === "potato" ? {
		potting: .6,
		compost: .3,
		perlite: .1
	} : {
		potting: .7,
		compost: .18,
		perlite: .12
	};
	const pottingGal = totalGal * parts.potting;
	const compostGal = totalGal * parts.compost;
	const perliteGal = totalGal * parts.perlite;
	return {
		gallons: totalGal,
		cuFt: galToCuFt(totalGal),
		pottingGal,
		compostGal,
		perliteGal,
		pottingCuFt: galToCuFt(pottingGal),
		compostCuFt: galToCuFt(compostGal),
		perliteCuFt: galToCuFt(perliteGal)
	};
}
function galToCuFt(gallons) {
	return gallons / 7.4805;
}
function formatLb(n) {
	const rounded = round1(n);
	return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}
function formatGal(n) {
	if (n >= 10) return String(Math.round(n));
	const r = round1(n);
	return Number.isInteger(r) ? String(r) : r.toFixed(1);
}
function formatCuFt(n) {
	const up = Math.ceil(n * 2) / 2;
	return Number.isInteger(up) ? String(up) : up.toFixed(1);
}
function round1(n) {
	return Math.round(n * 10) / 10;
}
/** Tablespoons of a 5-10-10 style blend for the whole fill. */
function blendTbsp(totalGal, crop) {
	return (crop === "potato" ? 8 : 3) * totalGal / 10;
}
function kelpTbsp(totalGal, crop) {
	return (crop === "potato" ? 3 : 2) * totalGal / 10;
}
function formatTbsp(tbsp) {
	if (tbsp >= 12) {
		const cups = tbsp / 16;
		const quarters = Math.round(cups * 4) / 4;
		const label = quarters === .25 ? "1/4" : quarters === .5 ? "1/2" : quarters === .75 ? "3/4" : String(quarters);
		return `${quarters > 1 && quarters % 1 === .25 ? `${Math.floor(quarters)} 1/4` : quarters > 1 && quarters % 1 === .5 ? `${Math.floor(quarters)} 1/2` : quarters > 1 && quarters % 1 === .75 ? `${Math.floor(quarters)} 3/4` : label} cup${quarters === 1 ? "" : "s"}`;
	}
	return `${Math.max(.5, Math.round(tbsp * 2) / 2)} Tbsp`;
}
function planCrop(crop, bags, gallonsEach) {
	const totalGal = bags * gallonsEach;
	const plantsEach = crop === "potato" ? seedPieces(gallonsEach) : slipsPerBag(gallonsEach);
	const plantsTotal = plantsEach * bags;
	const [lo, hi] = yieldPerBag(gallonsEach, crop);
	return {
		crop,
		bags,
		gallonsEach,
		totalGal,
		mix: mixFor(totalGal, crop),
		plantsEach,
		plantsTotal,
		seedLb: crop === "potato" ? round1(plantsTotal * 2 / 16) : null,
		yieldLo: round1(lo * bags),
		yieldHi: round1(hi * bags),
		blend: formatTbsp(blendTbsp(totalGal, crop)),
		kelp: formatTbsp(kelpTbsp(totalGal, crop))
	};
}
function waterLine(climate, gallons) {
	const small = gallons <= 7;
	if (climate === "hot" || climate === "tropical" || climate === "warm") return small ? "In warm weather a small canvas bag can dry out between breakfast and dinner. Check every morning. Water until the fabric weeps, then stop." : "Check daily once days are warm. Water when the top inch is dry, deeply enough that the canvas darkens and drips, then let it breathe. Never leave it in a saucer.";
	return small ? "Even in a cool summer, 5 and 7 gallon canvas dries faster than a bed. Every day or two while tubers are sizing. Skip only if the top inch is still cool and damp." : "Every two or three days in ordinary weather, daily in a hot spell. The wall of the bag is part of the evaporating surface — that is the price of the drainage.";
}
function heatLine(climate, mode) {
	if (!(climate === "warm" || climate === "hot" || climate === "tropical")) {
		if (mode !== "sweet" && climate === "cold") return "Cold soil is the risk here, not heat. Don't plant until the mix is workable and near 45°F. A black bag in spring actually helps it warm.";
		return null;
	}
	if (mode === "sweet") return "Sweet potatoes want the heat. Mulch the soil surface anyway so the canvas rim doesn't cook the stem where it enters the bag.";
	if (mode === "both") return "Shade potato bags from afternoon sun once the soil would feel hot to your wrist. Sweet potato bags can stay in the sun; mulch their rims. Don't give both crops the same spot if the patio bakes.";
	return "Dark canvas in full sun can push potato soil past 80°F and stop tuber set. Shade the bag — a board, a skirt of cardboard, afternoon shade — and mulch the surface. Leaves still need sun.";
}
function checklist(mode, climate) {
	const tasks = [];
	const add = (group, crop, slug, label) => {
		tasks.push({
			id: `${mode}:${climate}:${slug}`,
			group,
			crop,
			label
		});
	};
	add("The bags", "either", "empty", "Empty last year's mix. Do not reuse it for potatoes, sweet potatoes, tomatoes, peppers, or eggplant.");
	add("The bags", "either", "wash", "Hose the canvas and dry it in full sun until the cloth is bone dry before you fill it again.");
	if (mode !== "sweet") {
		add("Before planting", "potato", "seed", "Buy certified seed potatoes. Grocery tubers are often treated so they won't sprout, and they can carry disease.");
		add("Before planting", "potato", "chit", "Chit them in bright, cool light for two to three weeks. You want short stout sprouts, not long white threads in a dark cupboard.");
		add("Before planting", "potato", "cut", "Cut large seed potatoes into pieces about the size of an egg (1½ to 2 oz), each with 2 or 3 eyes. Let the cut sides dry and heal for 1 to 3 days in a cool, airy spot before planting, so they don't rot. Small seed potatoes (egg-size) can be planted whole without cutting.");
	}
	if (mode !== "potato") add("Before planting", "sweet", "slips", "Start slips four to six weeks ahead, or order them to arrive after the mix will hold 65°F / 18°C.");
	if (mode !== "sweet") {
		add("Planting", "potato", "hill-plant", "Roll the bag down. Add 4 inches of mix, set the seed eyes-up, and cover with another 4 inches. Leaves, once they exist, stay in the light.");
		add("Planting", "potato", "hill-up", "Each time stems are 6–8 inches tall, unroll the bag and add mix, leaving the top leaves out. Stop when the bag is full or flowering is heavy.");
	}
	if (mode !== "potato") {
		add("Planting", "sweet", "fill", "Fill the sweet potato bag to the top once. Do not keep burying the vine the way you hill a potato.");
		add("Planting", "sweet", "slip-in", "Plant slips deep enough to bury the stem, with the top leaves above the mix, and only once the bag is truly warm.");
		add("Planting", "sweet", "mulch", "Mulch the surface so the canvas rim doesn't scorch the stem.");
	}
	add("Through the season", "either", "water", "Water when the top inch is dry, until the canvas weeps. Feet or bricks under the bag. No saucer of standing water.");
	if (mode !== "sweet") add("Through the season", "potato", "nitrogen", "If the leaves are deep green and rushing, skip extra nitrogen. Pale, slow leaves can have one light feeding, then plain mix when you hill.");
	if (mode !== "potato") {
		add("Through the season", "sweet", "vines", "Lift vines that root into the ground or into the next bag, unless you are trying to make more slips on purpose.");
		add("Through the season", "sweet", "no-n", "Do not side-dress sweet potatoes with nitrogen. Lush vines and pencil roots are the usual result.");
	}
	if (climate === "cold" && mode !== "sweet") add("Through the season", "potato", "frost", "Keep a cover handy. A late frost burns potato tops back to the soil and you may not have weeks to spare.");
	if (climate === "cold" && mode !== "potato") add("Through the season", "sweet", "experiment", "Treat sweet potatoes here as an experiment: warmest corner, and small roots are a success.");
	if ((climate === "hot" || climate === "tropical") && mode !== "sweet") add("Through the season", "potato", "cool-season", "Keep potatoes on the cool-season calendar. Do not plant them into the hottest months.");
	if (climate === "warm" && mode !== "sweet") add("Through the season", "potato", "two-crops", "Pull the spring potatoes before the worst heat. A second bag can go in for fall if frost is still a long way off.");
	if (mode !== "sweet") {
		add("Harvest", "potato", "set-skins", "For storage potatoes, stop watering when the vines yellow and wait 10–14 days so skins set. New potatoes can come earlier — eat those soon.");
		add("Harvest", "potato", "tip", "Tip the bag onto a tarp in the shade. An afternoon of sun greens the tubers.");
		add("Harvest", "potato", "store", "Cure storage tubers 10–14 days around 50–60°F in the dark, then keep table potatoes near 45°F. Not next to apples. Sweet potatoes are cured warm and never refrigerated — the pantry chapter has both.");
	}
	if (mode !== "potato") {
		add("Harvest", "sweet", "before-frost", "Harvest sweet potatoes before frost. Cold injury shows up later as hard spots and rot.");
		add("Harvest", "sweet", "gentle", "Tip gently and brush the soil. Don't wash them yet — wet roots rot in cure.");
		add("Harvest", "sweet", "cure", "Cure about a week as close as you can get to 80–85°F and high humidity, then store at 55–60°F. Never the refrigerator.");
	}
	add("Afterward", "either", "dry-bags", "Dump, brush, and sun-dry the canvas until it is bone dry. Fold it only then. Wet cloth mildews and the fibers rot.");
	return tasks;
}
function climateTitle(id) {
	return CLIMATE_MAP[id].title;
}
function clampBags(n) {
	if (!Number.isFinite(n)) return 1;
	return Math.min(40, Math.max(1, Math.round(n)));
}
function clampGallons(n) {
	if (!Number.isFinite(n)) return 10;
	return Math.min(40, Math.max(3, Math.round(n * 10) / 10));
}
var useGardenStore = create()(persist((set) => ({
	climate: "cool",
	hemisphere: "north",
	mode: "potato",
	gallons: 10,
	potatoBags: 4,
	sweetBags: 2,
	checks: {},
	setClimate: (climate) => set({ climate }),
	setHemisphere: (hemisphere) => set({ hemisphere }),
	setMode: (mode) => set({ mode }),
	setGallons: (gallons) => set({ gallons: clampGallons(gallons) }),
	setPotatoBags: (potatoBags) => set({ potatoBags: clampBags(potatoBags) }),
	setSweetBags: (sweetBags) => set({ sweetBags: clampBags(sweetBags) }),
	toggleCheck: (id) => set((state) => ({ checks: {
		...state.checks,
		[id]: !state.checks[id]
	} })),
	resetChecks: () => set({ checks: {} })
}), {
	name: "potato-plot",
	skipHydration: true
}));
var SIZE = {
	sm: "size-8",
	md: "size-12",
	lg: "size-16",
	xl: "size-24"
};
function Tuber({ skin, flesh, label, size = "md" }) {
	const mark = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"aria-hidden": label ? void 0 : true,
		className: `relative inline-block shrink-0 ${SIZE[size]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tuber-skin",
			style: { backgroundColor: skin }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tuber-flesh",
			style: { backgroundColor: flesh }
		})]
	});
	if (!label) return mark;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		role: "img",
		"aria-label": label,
		className: "inline-flex",
		children: mark
	});
}
var NAV = [
	{
		to: "/",
		label: "Guide"
	},
	{
		to: "/start",
		label: "Start"
	},
	{
		to: "/varieties",
		label: "Colors"
	},
	{
		to: "/climate",
		label: "Climate"
	},
	{
		to: "/fertilizer",
		label: "Fertilizer"
	},
	{
		to: "/bags",
		label: "Canvas bags"
	},
	{
		to: "/ground",
		label: "Ground & boxes"
	},
	{
		to: "/pantry",
		label: "Pantry"
	},
	{
		to: "/planner",
		label: "Planner"
	},
	{
		to: "/glossary",
		label: "Glossary"
	}
];
function isCurrent(pathname, to) {
	if (to === "/") return pathname === "/";
	return pathname === to || pathname.startsWith(`${to}/`);
}
function SiteShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const climate = useGardenStore((s) => s.climate);
	const hemisphere = useGardenStore((s) => s.hemisphere);
	const mode = useGardenStore((s) => s.mode);
	const gallons = useGardenStore((s) => s.gallons);
	const potatoBags = useGardenStore((s) => s.potatoBags);
	const sweetBags = useGardenStore((s) => s.sweetBags);
	(0, import_react.useEffect)(() => {
		useGardenStore.persist.rehydrate();
	}, []);
	const bags = mode === "potato" ? potatoBags : mode === "sweet" ? sweetBags : potatoBags + sweetBags;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 pt-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-h-11 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tuber, {
								skin: "#8d6844",
								flesh: "#f0c84a",
								label: "",
								size: "sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl leading-none tracking-tight",
								children: "Potatoes: The Potato Plot"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/planner",
							className: "hidden min-h-11 items-center text-sm text-muted md:inline-flex",
							children: [
								CLIMATE_MAP[climate].title,
								" · ",
								hemisphere === "north" ? "Northern" : "Southern",
								" ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 tabular-nums text-ink",
									children: [
										bags,
										" × ",
										formatGal(gallons),
										" gal"
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Guide",
						className: "flex flex-wrap gap-1 pb-3",
						children: NAV.map((item) => {
							const on = isCurrent(pathname, item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								"aria-current": on ? "page" : void 0,
								className: on ? "inline-flex min-h-11 items-center rounded-full bg-ink px-3.5 text-sm font-medium text-cream" : "inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-muted",
								children: item.label
							}, item.to);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-8 text-sm leading-relaxed text-muted sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: "Potatoes: The Potato Plot"
						}),
						" by Blue and the Awesome Dudes. Part of The Education Revolution pocket guide series. Home-garden guidance, not a soil test and not a pesticide label. Potatoes (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Solanum tuberosum" }),
						") and sweet potatoes (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Ipomoea batatas" }),
						") are different plants. A US grocery “yam” is almost always an orange sweet potato, not a true yam."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "Privacy: This guide does not collect your name, email, or any personal information. Your planner choices are saved only on your own device."
					})]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-bk24VAxm.css";
var APP_NAME = "Potatoes: The Potato Plot";
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "A grower's guide to potatoes and sweet potatoes — every color, the climate they actually like, how to feed them, and how to grow them in canvas bags."
			},
			{
				name: "theme-color",
				content: "#f3eee6"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$9 = () => import("./routes-BZx9H5LF.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Potatoes: The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./bags-Dy_77z_Y.mjs");
var Route$8 = createFileRoute("/bags")({
	head: () => ({ meta: [{ title: "Canvas grow bags · The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./climate-BRurk0NA.mjs");
var Route$7 = createFileRoute("/climate")({
	head: () => ({ meta: [{ title: "Climate guide · The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./fertilizer-VxbSTNFe.mjs");
var Route$6 = createFileRoute("/fertilizer")({
	head: () => ({ meta: [{ title: "Fertilizer · The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./glossary-CteZwNgK.mjs");
var Route$5 = createFileRoute("/glossary")({
	head: () => ({ meta: [{ title: "Glossary · Potatoes: The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./ground-DfpJkgu5.mjs");
var Route$4 = createFileRoute("/ground")({
	head: () => ({ meta: [{ title: "Ground and boxes · The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./pantry-CNFVPT5f.mjs");
var Route$3 = createFileRoute("/pantry")({
	head: () => ({ meta: [{ title: "Storage, canning, recipes · The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./planner-ClOouR6P.mjs");
var Route$2 = createFileRoute("/planner")({
	head: () => ({ meta: [{ title: "Bag planner · The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./start-8c25ip1d.mjs");
var Route$1 = createFileRoute("/start")({
	head: () => ({ meta: [{ title: "Start here · Potatoes: The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./varieties-DJPOQyqq.mjs");
var COLORS = new Set(COLOR_FILTERS.map((c) => c.id));
var Route = createFileRoute("/varieties")({
	validateSearch: (search) => {
		return {
			crop: search.crop === "potato" || search.crop === "sweet" ? search.crop : "all",
			color: typeof search.color === "string" && COLORS.has(search.color) ? search.color : "all",
			pick: typeof search.pick === "string" && search.pick.length > 0 ? search.pick : void 0
		};
	},
	head: () => ({ meta: [{ title: "Colors and varieties · The Potato Plot" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	BagsRoute: Route$8.update({
		id: "/bags",
		path: "/bags",
		getParentRoute: () => Route$10
	}),
	ClimateRoute: Route$7.update({
		id: "/climate",
		path: "/climate",
		getParentRoute: () => Route$10
	}),
	FertilizerRoute: Route$6.update({
		id: "/fertilizer",
		path: "/fertilizer",
		getParentRoute: () => Route$10
	}),
	GlossaryRoute: Route$5.update({
		id: "/glossary",
		path: "/glossary",
		getParentRoute: () => Route$10
	}),
	GroundRoute: Route$4.update({
		id: "/ground",
		path: "/ground",
		getParentRoute: () => Route$10
	}),
	PantryRoute: Route$3.update({
		id: "/pantry",
		path: "/pantry",
		getParentRoute: () => Route$10
	}),
	PlannerRoute: Route$2.update({
		id: "/planner",
		path: "/planner",
		getParentRoute: () => Route$10
	}),
	StartRoute: Route$1.update({
		id: "/start",
		path: "/start",
		getParentRoute: () => Route$10
	}),
	VarietiesRoute: Route.update({
		id: "/varieties",
		path: "/varieties",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { varietiesFor as C, shiftMonths as S, COLOR_FILTERS as _, BAG_PRESETS as a, VARIETIES as b, cylinderGallons as c, formatLb as d, heatLine as f, CLIMATES as g, ATLAS as h, useGardenStore as i, formatCuFt as l, waterLine as m, Route as n, checklist as o, planCrop as p, Tuber as r, climateTitle as s, router_exports as t, formatGal as u, MONTHS as v, cropLabel as x, PHASE_LABEL as y };
