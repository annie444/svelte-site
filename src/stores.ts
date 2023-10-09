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
export const disabled: Writable<boolean> = writable(false);
export const sectionHeight: Writable<number> = writable(1080);
