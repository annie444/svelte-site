

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.57a45c50.js","_app/immutable/chunks/scheduler.21029ae3.js","_app/immutable/chunks/index.2a05704c.js","_app/immutable/chunks/singletons.66bdcafc.js","_app/immutable/chunks/index.427e088d.js"];
export const stylesheets = [];
export const fonts = [];
