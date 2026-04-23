import { create } from "zustand";

export type KioskMode = "attract" | "interactive";

interface KioskState {
  mode: KioskMode;
  lastInteractionTime: number;
  setMode: (mode: KioskMode) => void;
  resetTimer: () => void;
}

export const useKioskStore = create<KioskState>((set) => ({
  mode: "interactive",
  lastInteractionTime: Date.now(),

  setMode: (mode) => set({ mode }),

  resetTimer: () =>
    set({
      lastInteractionTime: Date.now(),
      mode: "interactive",
    }),
}));
