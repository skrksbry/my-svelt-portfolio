import { writable } from 'svelte/store';

export const viewStack = writable("");
export const modelLoaded = writable(false);