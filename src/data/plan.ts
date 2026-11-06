import type { ClimateId, CropId } from "@/data/guide";
import { CLIMATE_MAP } from "@/data/guide";

export type CropMode = "potato" | "sweet" | "both";

export const BAG_PRESETS = [5, 7, 10, 15, 20, 25] as const;

const POTATO_YIELD: [number, number, number][] = [
  [5, 1.5, 3],
  [10, 3, 6],
  [15, 4.5, 8],
  [20, 6, 10],
  [25, 7, 12],
  [40, 9, 15],
];

const SWEET_YIELD: [number, number, number][] = [
  [5, 1, 2.5],
  [10, 2.5, 5],
  [15, 4, 8],
  [20, 5, 10],
  [25, 6, 12],
  [40, 8, 14],
];

function interp(table: [number, number, number][], gallons: number): [number, number] {
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

export function yieldPerBag(gallons: number, crop: CropId): [number, number] {
  const table = crop === "potato" ? POTATO_YIELD : SWEET_YIELD;
  const [lo, hi] = interp(table, gallons);
  return [round1(lo), round1(hi)];
}

export function seedPieces(gallons: number): number {
  if (gallons < 8) return 1;
  if (gallons < 16) return 2;
  if (gallons < 24) return 3;
  return 4;
}

export function slipsPerBag(gallons: number): number {
  if (gallons < 18) return 1;
  if (gallons < 30) return 2;
  return 2;
}

/** Cylinder estimate: diameter and height in inches → US gallons. */
export function cylinderGallons(diameterIn: number, heightIn: number): number {
  if (diameterIn <= 0 || heightIn <= 0) return 0;
  return 0.0034 * diameterIn * diameterIn * heightIn;
}

export type Mix = {
  gallons: number;
  cuFt: number;
  pottingGal: number;
  compostGal: number;
  perliteGal: number;
  pottingCuFt: number;
  compostCuFt: number;
  perliteCuFt: number;
};

function mixFor(totalGal: number, crop: CropId): Mix {
  const parts =
    crop === "potato"
      ? { potting: 0.6, compost: 0.3, perlite: 0.1 }
      : { potting: 0.7, compost: 0.18, perlite: 0.12 };
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
    perliteCuFt: galToCuFt(perliteGal),
  };
}

export function galToCuFt(gallons: number): number {
  return gallons / 7.4805;
}

export function formatLb(n: number): string {
  const rounded = round1(n);
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

export function formatGal(n: number): string {
  if (n >= 10) return String(Math.round(n));
  const r = round1(n);
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
}

export function formatCuFt(n: number): string {
  const up = Math.ceil(n * 2) / 2;
  return Number.isInteger(up) ? String(up) : up.toFixed(1);
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export type CropPlan = {
  crop: CropId;
  bags: number;
  gallonsEach: number;
  totalGal: number;
  mix: Mix;
  plantsEach: number;
  plantsTotal: number;
  seedLb: number | null;
  yieldLo: number;
  yieldHi: number;
};

export function planCrop(crop: CropId, bags: number, gallonsEach: number): CropPlan {
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
    seedLb: crop === "potato" ? round1((plantsTotal * 2) / 16) : null,
    yieldLo: round1(lo * bags),
    yieldHi: round1(hi * bags),
  };
}

export function waterLine(climate: ClimateId, gallons: number): string {
  const small = gallons <= 7;
  if (climate === "hot" || climate === "tropical" || climate === "warm") {
    return small
      ? "In warm weather a small canvas bag can dry out between breakfast and dinner. Check by feel, often in the morning. Water when the top inch is dry, enough to moisten the mix through, then let it drain. Don't follow a clock, and don't leave it in a saucer. Bone-dry, then a flood, misshapes tubers."
      : "Check often once days are warm. Water when the top inch is dry, deeply enough that the mix is moist through, then let the bag drain. How fast it dries depends on the mix and the weather. Never leave it in a saucer.";
  }
  return small
    ? "Even in a cool summer, a small canvas bag dries faster than a bed. Check the top inch. Water when it is dry, enough to wet the mix, then let it drain. Skip a day if it is still damp."
    : "Check every couple of days in ordinary weather, and more often in a hot spell. The wall of the bag evaporates. Water for even moisture, not a set schedule.";
}

export function heatLine(climate: ClimateId, mode: CropMode): string | null {
  const hot = climate === "warm" || climate === "hot" || climate === "tropical";
  if (!hot) {
    if (mode !== "sweet" && climate === "cold") {
      return "Cold soil is the risk here, not heat. Don't plant until the mix is workable and near 45°F. A black bag in spring actually helps it warm.";
    }
    return null;
  }
  if (mode === "sweet") {
    return "Sweet potatoes want the heat. Mulch the soil surface anyway so the canvas rim doesn't cook the stem where it enters the bag.";
  }
  if (mode === "both") {
    return "Shade potato bags from afternoon sun once the soil would feel hot to your wrist. Sweet potato bags can stay in the sun; mulch their rims. Don't give both crops the same spot if the patio bakes.";
  }
  return "Dark canvas in full sun can push potato soil past 80°F and stop tuber set. Shade the bag — a board, a skirt of cardboard, afternoon shade — and mulch the surface. Leaves still need sun.";
}

export type Task = {
  id: string;
  group: string;
  label: string;
  crop: "potato" | "sweet" | "either";
};

export function checklist(mode: CropMode, climate: ClimateId): Task[] {
  const tasks: Task[] = [];
  const add = (group: string, crop: Task["crop"], slug: string, label: string) => {
    tasks.push({ id: `${mode}:${climate}:${slug}`, group, crop, label });
  };

  add(
    "The bags",
    "either",
    "empty",
    "Empty last year's mix. Do not reuse it for potatoes, sweet potatoes, tomatoes, peppers, or eggplant.",
  );
  add(
    "The bags",
    "either",
    "wash",
    "Hose the canvas and dry it in full sun until the cloth is bone dry before you fill it again.",
  );

  if (mode !== "sweet") {
    add(
      "Before planting",
      "potato",
      "seed",
      "Buy certified seed potatoes. Grocery tubers are often treated so they won't sprout, and they can carry disease.",
    );
    add(
      "Before planting",
      "potato",
      "chit",
      "Chit them in bright, cool light for two to three weeks. You want short stout sprouts, not long white threads in a dark cupboard.",
    );
    add(
      "Before planting",
      "potato",
      "cut",
      "Cut large seed potatoes into pieces about the size of an egg (1½ to 2 oz), each with 2 or 3 eyes. Let the cut sides dry and heal for 1 to 3 days in a cool, airy spot before planting, so they don't rot. Small seed potatoes (egg-size) can be planted whole without cutting.",
    );
  }
  if (mode !== "potato") {
    add(
      "Before planting",
      "sweet",
      "slips",
      "Start slips four to six weeks ahead, or order them to arrive after the mix will hold 65°F / 18°C.",
    );
  }

  if (mode !== "sweet") {
    add(
      "Planting",
      "potato",
      "hill-plant",
      "Roll the bag down. Add 4 inches of mix, set the seed eyes-up, and cover with another 4 inches. Leaves, once they exist, stay in the light.",
    );
    add(
      "Planting",
      "potato",
      "hill-up",
      "Each time stems are 6–8 inches tall, unroll the bag and add mix, leaving the top leaves out. Stop when the bag is full or flowering is heavy.",
    );
  }
  if (mode !== "potato") {
    add(
      "Planting",
      "sweet",
      "fill",
      "Fill the sweet potato bag to the top once. Do not keep burying the vine the way you hill a potato.",
    );
    add(
      "Planting",
      "sweet",
      "slip-in",
      "Plant slips deep enough to bury the stem, with the top leaves above the mix, and only once the bag is truly warm.",
    );
    add(
      "Planting",
      "sweet",
      "mulch",
      "Mulch the surface so the canvas rim doesn't scorch the stem.",
    );
  }

  add(
    "Through the season",
    "either",
    "water",
    "Water when the top inch is dry, enough to moisten the mix through, then let the bag drain. Feet or bricks under it. No saucer of standing water. Bags and mixes dry at different rates — check by feel, and keep the moisture even. Dry, then a flood, knobs and cracks potatoes and splits sweet potatoes.",
  );
  if (mode !== "sweet") {
    add(
      "Through the season",
      "potato",
      "nitrogen",
      "If the leaves are deep green and rushing, skip extra nitrogen. Pale, slow leaves can have one light feeding, then plain mix when you hill.",
    );
  }
  if (mode !== "potato") {
    add(
      "Through the season",
      "sweet",
      "vines",
      "Lift vines that root into the ground or into the next bag, unless you are trying to make more slips on purpose.",
    );
    add(
      "Through the season",
      "sweet",
      "no-n",
      "Avoid extra nitrogen. Lush vines and pencil roots are what too much nitrogen usually does. A pale, stalled vine can still need a light side-dressing — follow a sweet-potato fertilizer label or your local extension, not a ban and not a calendar.",
    );
  }

  if (climate === "cold" && mode !== "sweet") {
    add(
      "Through the season",
      "potato",
      "frost",
      "Keep a cover handy. A late frost burns potato tops back to the soil and you may not have weeks to spare.",
    );
  }
  if (climate === "cold" && mode !== "potato") {
    add(
      "Through the season",
      "sweet",
      "experiment",
      "Treat sweet potatoes here as an experiment: warmest corner, and small roots are a success.",
    );
  }
  if ((climate === "hot" || climate === "tropical") && mode !== "sweet") {
    add(
      "Through the season",
      "potato",
      "cool-season",
      "Keep potatoes on the cool-season calendar. Do not plant them into the hottest months.",
    );
  }
  if (climate === "warm" && mode !== "sweet") {
    add(
      "Through the season",
      "potato",
      "two-crops",
      "Pull the spring potatoes before the worst heat. A second bag can go in for fall if frost is still a long way off.",
    );
  }

  if (mode !== "sweet") {
    add(
      "Harvest",
      "potato",
      "set-skins",
      "For storage potatoes, stop watering when the vines yellow and wait 10–14 days so skins set. New potatoes can come earlier — eat those soon.",
    );
    add(
      "Harvest",
      "potato",
      "tip",
      "Tip the bag onto a tarp in the shade. An afternoon of sun greens the tubers. Don't eat extensive green, and don't eat the sprouts.",
    );
    add(
      "Harvest",
      "potato",
      "store",
      "Cure storage tubers 10–14 days around 50–60°F in the dark, then keep table potatoes near 45°F. Not next to apples. Sweet potatoes are cured warm and never refrigerated — the pantry chapter has both.",
    );
  }
  if (mode !== "potato") {
    add(
      "Harvest",
      "sweet",
      "before-frost",
      "Harvest sweet potatoes before frost. Cold injury shows up later as hard spots and rot.",
    );
    add(
      "Harvest",
      "sweet",
      "gentle",
      "Tip gently and brush the soil. Don't wash them yet — wet roots rot in cure.",
    );
    add(
      "Harvest",
      "sweet",
      "cure",
      "Cure 7–14 days as close as you can get to 80–85°F and high humidity, then store around 55–60°F. Never the refrigerator.",
    );
  }

  add(
    "Afterward",
    "either",
    "dry-bags",
    "Dump, brush, and sun-dry the canvas until it is bone dry. Fold it only then. Wet cloth mildews and the fibers rot.",
  );

  return tasks;
}

export function climateTitle(id: ClimateId): string {
  return CLIMATE_MAP[id].title;
}
