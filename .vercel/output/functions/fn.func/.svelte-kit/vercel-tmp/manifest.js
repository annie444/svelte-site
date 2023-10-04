export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".otf":"font/otf",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.7a425656.js","app":"_app/immutable/entry/app.dbc9e0c6.js","imports":["_app/immutable/entry/start.7a425656.js","_app/immutable/chunks/scheduler.21029ae3.js","_app/immutable/chunks/singletons.66bdcafc.js","_app/immutable/chunks/index.427e088d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.dbc9e0c6.js","_app/immutable/chunks/scheduler.21029ae3.js","_app/immutable/chunks/index.2a05704c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/(default)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();