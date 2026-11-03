import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ClimateId, Hemisphere } from "@/data/guide";
import type { CropMode } from "@/data/plan";

type GardenState = {
  climate: ClimateId;
  hemisphere: Hemisphere;
  mode: CropMode;
  gallons: number;
  potatoBags: number;
  sweetBags: number;
  checks: Record<string, boolean>;
  setClimate: (climate: ClimateId) => void;
  setHemisphere: (hemisphere: Hemisphere) => void;
  setMode: (mode: CropMode) => void;
  setGallons: (gallons: number) => void;
  setPotatoBags: (n: number) => void;
  setSweetBags: (n: number) => void;
  toggleCheck: (id: string) => void;
  resetChecks: () => void;
};

function clampBags(n: number): number {
  if (!Number.isFinite(n)) return 1;
  return Math.min(40, Math.max(1, Math.round(n)));
}

function clampGallons(n: number): number {
  if (!Number.isFinite(n)) return 10;
  return Math.min(40, Math.max(3, Math.round(n * 10) / 10));
}

export const useGardenStore = create<GardenState>()(
  persist(
    (set) => ({
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
      toggleCheck: (id) =>
        set((state) => ({ checks: { ...state.checks, [id]: !state.checks[id] } })),
      resetChecks: () => set({ checks: {} }),
    }),
    { name: "potato-plot", skipHydration: true },
  ),
);

