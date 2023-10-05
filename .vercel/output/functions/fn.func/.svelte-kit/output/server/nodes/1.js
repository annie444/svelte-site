

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1191942d.js","_app/immutable/chunks/index.10b48672.js","_app/immutable/chunks/stores.776c9622.js","_app/immutable/chunks/singletons.3fe7922b.js"];
export const stylesheets = [];
export const fonts = [];
