import * as server from '../entries/pages/resume/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/resume/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.9902f901.js","_app/immutable/chunks/scheduler.21029ae3.js","_app/immutable/chunks/index.2a05704c.js","_app/immutable/chunks/index.427e088d.js","_app/immutable/chunks/stores.0d77dcd8.js","_app/immutable/chunks/index.c0a58b45.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.66bdcafc.js","_app/immutable/chunks/navigation.5bcedfcd.js"];
export const stylesheets = ["_app/immutable/assets/5.f6609cab.css"];
export const fonts = [];
