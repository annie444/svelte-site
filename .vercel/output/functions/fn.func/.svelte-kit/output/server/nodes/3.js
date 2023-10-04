

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.cd502ee7.js","_app/immutable/chunks/scheduler.21029ae3.js","_app/immutable/chunks/index.2a05704c.js","_app/immutable/chunks/index.384f6c3d.js","_app/immutable/chunks/index.c0a58b45.js"];
export const stylesheets = ["_app/immutable/assets/index.84cc7863.css"];
export const fonts = [];
