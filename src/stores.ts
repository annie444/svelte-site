import { writable, type Writable } from "svelte/store";
import type { Square } from "$lib/types";
import { tweened } from "svelte/motion";
import { cubicOut } from "svelte/easing";

export const columns: Writable<number> = writable(0);
export const rows: Writable<number> = writable(0);
export const total: Writable<number> = writable(0);
export const gridItems: Writable<Array<Square>> = writable([]);
export const clientWidth: Writable<number> = writable(0);
export const clientHeight: Writable<number> = writable(0);
export const navigating: Writable<boolean> = writable(false);
export const navTarget: Writable<"top-left" | "top-right" | "bottom" | undefined> = writable(undefined);
export const size: Writable<number> = tweened(0, {
  easing: cubicOut,
  duration: 500
});
clientWidth.subscribe((value: number) => {
    size.set((((value / 2) - 75) < 0) ? 0 : ((value / 2) - 75));
});
export const disabled: Writable<boolean> = writable(false);
