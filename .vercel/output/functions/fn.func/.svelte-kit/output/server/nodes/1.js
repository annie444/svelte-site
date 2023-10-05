

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a9e2cb3a.js","_app/immutable/chunks/index.10b48672.js","_app/immutable/chunks/singletons.20ceb601.js","_app/immutable/chunks/index.321d787c.js"];
export const stylesheets = [];
export const fonts = [];
