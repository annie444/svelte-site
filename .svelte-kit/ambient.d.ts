
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const npm_package_scripts_generate_types: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_package_devDependencies__types_node: string;
	export const XPC_FLAGS: string;
	export const npm_package_repository_url: string;
	export const fish_color_cancel: string;
	export const npm_package_devDependencies_marked: string;
	export const npm_package_exports___hooks_import: string;
	export const fish_pager_color_completion: string;
	export const npm_config_resolution_mode: string;
	export const NODE: string;
	export const fish_color_command: string;
	export const npm_package_scripts_test_cross_platform_build: string;
	export const __CFBundleIdentifier: string;
	export const npm_package_exports___node_polyfills_types: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_dependencies_mime: string;
	export const npm_package_devDependencies_dts_buddy: string;
	export const fish_color_valid_path: string;
	export const __ABBR_TIPS_VALUES: string;
	export const npm_package_peerDependencies_svelte: string;
	export const HOMEBREW_PREFIX: string;
	export const KITTY_PID: string;
	export const npm_package_exports___import: string;
	export const EDITOR: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_dependencies_sade: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const fish_color_end: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const fish_color_param: string;
	export const MANPATH: string;
	export const NIX_PATH: string;
	export const __NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
	export const npm_package_exports___node_import: string;
	export const KITTY_PUBLIC_KEY: string;
	export const npm_package_dependencies_cookie: string;
	export const npm_package_dependencies_sirv: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const npm_package_bugs_url: string;
	export const ABBR_TIPS_PROMPT: string;
	export const npm_package_exports___node_types: string;
	export const npm_package_exports___vite_types: string;
	export const fish_pager_color_progress: string;
	export const fish_color_operator: string;
	export const COMMAND_MODE: string;
	export const __ABBR_TIPS_KEYS: string;
	export const HOMEBREW_BUNDLE_NO_LOCK: string;
	export const HOME: string;
	export const fish_color_cwd_root: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_version: string;
	export const STARSHIP_SHELL: string;
	export const fish_color_host: string;
	export const NIX_SSL_CERT_FILE: string;
	export const KITTY_WINDOW_ID: string;
	export const npm_package_files_0: string;
	export const npm_package_scripts_check_all: string;
	export const npm_package_files_1: string;
	export const npm_package_files_2: string;
	export const npm_package_files_3: string;
	export const npm_package_repository_type: string;
	export const npm_package_files_4: string;
	export const npm_package_files_5: string;
	export const npm_package_files_6: string;
	export const npm_package_scripts_test_integration: string;
	export const fish_color_redirection: string;
	export const TMPDIR: string;
	export const npm_package_exports___vite_import: string;
	export const fish_color_history_current: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const npm_package_dependencies_kleur: string;
	export const npm_package_devDependencies_rollup: string;
	export const INIT_CWD: string;
	export const fish_color_comment: string;
	export const npm_package_scripts_test_cross_platform_dev: string;
	export const fish_color_cwd: string;
	export const npm_package_scripts_format: string;
	export const STARSHIP_SESSION_KEY: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const fish_color_selection: string;
	export const npm_package_peerDependencies_vite: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const npm_package_name: string;
	export const fish_color_autosuggestion: string;
	export const npm_config_prefix: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_exports___types: string;
	export const fish_color_quote: string;
	export const fish_color_normal: string;
	export const npm_package_dependencies_undici: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_homepage: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_package_devDependencies__types_mime: string;
	export const fish_color_user: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const npm_package_dependencies__types_cookie: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_package_dependencies_magic_string: string;
	export const PAGER: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_package_devDependencies__types_connect: string;
	export const npm_package_devDependencies__types_sade: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const TERMINFO_DIRS: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const fish_color_error: string;
	export const KITTY_LISTEN_ON: string;
	export const npm_package_scripts_generate_version: string;
	export const npm_package_dependencies_esm_env: string;
	export const npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_bin_svelte_kit: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const PATH: string;
	export const fish_color_match: string;
	export const npm_package_dependencies_devalue: string;
	export const npm_config_node_gyp: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const npm_package_exports___hooks_types: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_license: string;
	export const npm_package_scripts_postinstall: string;
	export const fish_color_search_match: string;
	export const base16_fish_shell_background: string;
	export const npm_config_registry: string;
	export const npm_package_repository_directory: string;
	export const HOMEBREW_BUNDLE_FILE: string;
	export const fish_pager_color_prefix: string;
	export const ABBR_TIPS_REGEXES: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const fish_color_escape: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const npm_package_types: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const fish_pager_color_description: string;
	export const npm_package_engines_node: string;
	export const _: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		WINDOWID: string;
		COLORTERM: string;
		npm_package_scripts_generate_types: string;
		XDG_CONFIG_DIRS: string;
		npm_package_devDependencies__types_node: string;
		XPC_FLAGS: string;
		npm_package_repository_url: string;
		fish_color_cancel: string;
		npm_package_devDependencies_marked: string;
		npm_package_exports___hooks_import: string;
		fish_pager_color_completion: string;
		npm_config_resolution_mode: string;
		NODE: string;
		fish_color_command: string;
		npm_package_scripts_test_cross_platform_build: string;
		__CFBundleIdentifier: string;
		npm_package_exports___node_polyfills_types: string;
		SSH_AUTH_SOCK: string;
		npm_package_dependencies_mime: string;
		npm_package_devDependencies_dts_buddy: string;
		fish_color_valid_path: string;
		__ABBR_TIPS_VALUES: string;
		npm_package_peerDependencies_svelte: string;
		HOMEBREW_PREFIX: string;
		KITTY_PID: string;
		npm_package_exports___import: string;
		EDITOR: string;
		npm_package_scripts_test_unit: string;
		npm_package_dependencies_sade: string;
		PWD: string;
		NIX_PROFILES: string;
		fish_color_end: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		fish_color_param: string;
		MANPATH: string;
		NIX_PATH: string;
		__NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
		npm_package_exports___node_import: string;
		KITTY_PUBLIC_KEY: string;
		npm_package_dependencies_cookie: string;
		npm_package_dependencies_sirv: string;
		npm_package_dependencies_tiny_glob: string;
		npm_package_bugs_url: string;
		ABBR_TIPS_PROMPT: string;
		npm_package_exports___node_types: string;
		npm_package_exports___vite_types: string;
		fish_pager_color_progress: string;
		fish_color_operator: string;
		COMMAND_MODE: string;
		__ABBR_TIPS_KEYS: string;
		HOMEBREW_BUNDLE_NO_LOCK: string;
		HOME: string;
		fish_color_cwd_root: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		npm_package_version: string;
		STARSHIP_SHELL: string;
		fish_color_host: string;
		NIX_SSL_CERT_FILE: string;
		KITTY_WINDOW_ID: string;
		npm_package_files_0: string;
		npm_package_scripts_check_all: string;
		npm_package_files_1: string;
		npm_package_files_2: string;
		npm_package_files_3: string;
		npm_package_repository_type: string;
		npm_package_files_4: string;
		npm_package_files_5: string;
		npm_package_files_6: string;
		npm_package_scripts_test_integration: string;
		fish_color_redirection: string;
		TMPDIR: string;
		npm_package_exports___vite_import: string;
		fish_color_history_current: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		npm_package_dependencies_kleur: string;
		npm_package_devDependencies_rollup: string;
		INIT_CWD: string;
		fish_color_comment: string;
		npm_package_scripts_test_cross_platform_dev: string;
		fish_color_cwd: string;
		npm_package_scripts_format: string;
		STARSHIP_SESSION_KEY: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		fish_color_selection: string;
		npm_package_peerDependencies_vite: string;
		TERM: string;
		TERMINFO: string;
		npm_package_name: string;
		fish_color_autosuggestion: string;
		npm_config_prefix: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		npm_package_devDependencies_vitest: string;
		npm_package_exports___types: string;
		fish_color_quote: string;
		fish_color_normal: string;
		npm_package_dependencies_undici: string;
		npm_package_exports___package_json: string;
		npm_package_homepage: string;
		HOMEBREW_CELLAR: string;
		npm_package_devDependencies__types_mime: string;
		fish_color_user: string;
		npm_package_dependencies_set_cookie_parser: string;
		npm_package_dependencies__types_cookie: string;
		npm_package_exports___node_polyfills_import: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_package_dependencies_magic_string: string;
		PAGER: string;
		HOMEBREW_REPOSITORY: string;
		npm_package_devDependencies__types_connect: string;
		npm_package_devDependencies__types_sade: string;
		XPC_SERVICE_NAME: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		TERMINFO_DIRS: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies_svelte_preprocess: string;
		fish_color_error: string;
		KITTY_LISTEN_ON: string;
		npm_package_scripts_generate_version: string;
		npm_package_dependencies_esm_env: string;
		npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_bin_svelte_kit: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		PATH: string;
		fish_color_match: string;
		npm_package_dependencies_devalue: string;
		npm_config_node_gyp: string;
		__fish_nixos_env_preinit_sourced: string;
		npm_package_exports___hooks_types: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_license: string;
		npm_package_scripts_postinstall: string;
		fish_color_search_match: string;
		base16_fish_shell_background: string;
		npm_config_registry: string;
		npm_package_repository_directory: string;
		HOMEBREW_BUNDLE_FILE: string;
		fish_pager_color_prefix: string;
		ABBR_TIPS_REGEXES: string;
		KITTY_INSTALLATION_DIR: string;
		fish_color_escape: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		npm_package_types: string;
		__CF_USER_TEXT_ENCODING: string;
		fish_pager_color_description: string;
		npm_package_engines_node: string;
		_: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
