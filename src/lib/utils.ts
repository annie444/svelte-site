import { writable, type Writable } from 'svelte/store';
import type { InjectionKey } from '$lib/context';
import type { Config, Layer } from '$lib/types';

export function writableSet<T>(value: Set<T> = new Set()) {
	const store: Writable<Set<T>> = writable(value);

	const wrap = (method: 'add' | 'delete') => {
		return (arg: T) => {
			let output;
			store.update((value: Set<T>) => {
				output = value[method](arg);
				return value;
			});
			return output;
		};
	};
	return {
		...store,
		add: wrap('add'),
		delete: wrap('delete')
	};
}

export interface WritableSet<T> extends Writable<Set<T>> {
	add: (arg: T) => this;
	delete: (arg: T) => boolean;
}

export const clamp = (val: number, min: number, max: number): number => {
	return val < min ? min : val > max ? max : val;
};

export const contextKey: InjectionKey<{
	config: Config;
	addLayer: (layer: Layer) => void;
	removeLayer: (layer: Layer) => void;
}> = Symbol('parallax');
