

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.56cd4831.js","_app/immutable/chunks/index.10b48672.js","_app/immutable/chunks/singletons.39d1e720.js","_app/immutable/chunks/index.321d787c.js"];
export const stylesheets = [];
export const fonts = [];
