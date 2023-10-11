
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
	export const NIX_HARDENING_ENABLE: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const OP_PLUGIN_ALIASES_SOURCED: string;
	export const AS: string;
	export const HOST_PATH: string;
	export const fish_color_param: string;
	export const AR: string;
	export const STARSHIP_SHELL: string;
	export const npm_package_devDependencies_prettier: string;
	export const MANPATH: string;
	export const NIX_PROFILES: string;
	export const base16_fish_shell_background: string;
	export const ABBR_TIPS_PROMPT: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const fish_color_normal: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_typescript: string;
	export const NIX_CC: string;
	export const dontAddDisableDepTrack: string;
	export const propagatedBuildInputs: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const __sandboxProfile: string;
	export const depsHostHost: string;
	export const SHELL: string;
	export const NM: string;
	export const npm_package_devDependencies__types_cookie: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
	export const npm_package_devDependencies_vite_plugin_tailwind_purgecss: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_package_scripts_lint: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const DIRENV_DIR: string;
	export const npm_package_scripts_dev: string;
	export const NIX_IGNORE_LD_THROUGH_GCC: string;
	export const SIZE: string;
	export const __ABBR_TIPS_KEYS: string;
	export const WINDOWID: string;
	export const fish_color_escape: string;
	export const SOURCE_DATE_EPOCH: string;
	export const buildPhase: string;
	export const builder: string;
	export const __ABBR_TIPS_VALUES: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const cmakeFlags: string;
	export const depsTargetTarget: string;
	export const npm_package_private: string;
	export const PNPM_HOME: string;
	export const name: string;
	export const USER: string;
	export const fish_color_operator: string;
	export const npm_package_license: string;
	export const __impureHostDeps: string;
	export const depsBuildBuild: string;
	export const NIX_DONT_SET_RPATH: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const nativeBuildInputs: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const fish_color_autosuggestion: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_postcss: string;
	export const fish_color_search_match: string;
	export const npm_package_devDependencies_eslint: string;
	export const NIX_STORE: string;
	export const mesonFlags: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_web_vitals: string;
	export const stdenv: string;
	export const npm_package_devDependencies_tslib: string;
	export const __darwinAllowLocalNetworking: string;
	export const npm_package_devDependencies_svelte: string;
	export const PAGER: string;
	export const npm_package_devDependencies_emailjs: string;
	export const DIRENV_WATCHES: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
	export const STRINGS: string;
	export const npm_config_frozen_lockfile: string;
	export const system: string;
	export const XDG_CONFIG_DIRS: string;
	export const fish_color_match: string;
	export const doInstallCheck: string;
	export const fish_pager_color_progress: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const NIX_LDFLAGS: string;
	export const __structuredAttrs: string;
	export const PATH: string;
	export const TERMINFO_DIRS: string;
	export const fish_color_selection: string;
	export const outputs: string;
	export const npm_config_engine_strict: string;
	export const shellHook: string;
	export const fish_color_user: string;
	export const LD: string;
	export const __CFBundleIdentifier: string;
	export const npm_package_devDependencies__skeletonlabs_tw_plugin: string;
	export const NIX_PATH: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_command: string;
	export const STRIP: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const KITTY_PID: string;
	export const npm_package_devDependencies__skeletonlabs_skeleton: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const phases: string;
	export const depsHostHostPropagated: string;
	export const fish_pager_color_prefix: string;
	export const depsBuildTarget: string;
	export const fish_color_history_current: string;
	export const npm_config_resolution_mode: string;
	export const NODE_PATH: string;
	export const PATH_LOCALE: string;
	export const npm_package_scripts_build: string;
	export const shell: string;
	export const fish_color_quote: string;
	export const npm_package_devDependencies_vitest: string;
	export const fish_color_cancel: string;
	export const XPC_FLAGS: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const NIX_SSL_CERT_FILE: string;
	export const fish_color_error: string;
	export const doCheck: string;
	export const depsBuildTargetPropagated: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__vercel_analytics: string;
	export const npm_package_version: string;
	export const CXX: string;
	export const DIRENV_FILE: string;
	export const out: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const fish_color_comment: string;
	export const fish_color_cwd_root: string;
	export const HOMEBREW_BUNDLE_NO_LOCK: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const CONFIG_SHELL: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const HOME: string;
	export const configureFlags: string;
	export const ABBR_TIPS_REGEXES: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies__types_animejs: string;
	export const TERMINFO: string;
	export const npm_package_devDependencies__sveltejs_adapter_vercel: string;
	export const fish_color_end: string;
	export const HOMEBREW_PREFIX: string;
	export const fish_color_command: string;
	export const preferLocalBuild: string;
	export const __propagatedImpureHostDeps: string;
	export const fish_color_cwd: string;
	export const __propagatedSandboxProfile: string;
	export const patches: string;
	export const IN_NIX_SHELL: string;
	export const NIX_DONT_SET_RPATH_FOR_BUILD: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_scripts_format: string;
	export const LOGNAME: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const NIX_NO_SELF_RPATH: string;
	export const npm_lifecycle_script: string;
	export const fish_pager_color_description: string;
	export const XDG_DATA_DIRS: string;
	export const strictDeps: string;
	export const buildInputs: string;
	export const fish_pager_color_completion: string;
	export const RANLIB: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_config_user_agent: string;
	export const npm_package_devDependencies__iconify_svelte: string;
	export const KITTY_WINDOW_ID: string;
	export const depsBuildBuildPropagated: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const NPM_PACKAGES: string;
	export const HOMEBREW_CELLAR: string;
	export const propagatedNativeBuildInputs: string;
	export const INFOPATH: string;
	export const NIX_BUILD_CORES: string;
	export const npm_package_devDependencies__types_node: string;
	export const CC: string;
	export const npm_package_dependencies_animejs: string;
	export const npm_package_dependencies__floating_ui_dom: string;
	export const KITTY_LISTEN_ON: string;
	export const DIRENV_DIFF: string;
	export const LD_DYLD_PATH: string;
	export const NIX_BINTOOLS: string;
	export const HOMEBREW_BUNDLE_FILE: string;
	export const fish_color_redirection: string;
	export const depsTargetTargetPropagated: string;
	export const fish_color_valid_path: string;
	export const npm_package_scripts_check: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const fish_color_host: string;
	export const KITTY_PUBLIC_KEY: string;
	export const __NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
	export const npm_package_scripts_test_unit: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
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
		NIX_HARDENING_ENABLE: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		OP_PLUGIN_ALIASES_SOURCED: string;
		AS: string;
		HOST_PATH: string;
		fish_color_param: string;
		AR: string;
		STARSHIP_SHELL: string;
		npm_package_devDependencies_prettier: string;
		MANPATH: string;
		NIX_PROFILES: string;
		base16_fish_shell_background: string;
		ABBR_TIPS_PROMPT: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		fish_color_normal: string;
		NODE: string;
		INIT_CWD: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_typescript: string;
		NIX_CC: string;
		dontAddDisableDepTrack: string;
		propagatedBuildInputs: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		__sandboxProfile: string;
		depsHostHost: string;
		SHELL: string;
		NM: string;
		npm_package_devDependencies__types_cookie: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
		npm_package_devDependencies_vite_plugin_tailwind_purgecss: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_package_scripts_lint: string;
		NIX_ENFORCE_NO_NATIVE: string;
		DIRENV_DIR: string;
		npm_package_scripts_dev: string;
		NIX_IGNORE_LD_THROUGH_GCC: string;
		SIZE: string;
		__ABBR_TIPS_KEYS: string;
		WINDOWID: string;
		fish_color_escape: string;
		SOURCE_DATE_EPOCH: string;
		buildPhase: string;
		builder: string;
		__ABBR_TIPS_VALUES: string;
		npm_config_registry: string;
		npm_package_devDependencies__sveltejs_kit: string;
		__fish_nixos_env_preinit_sourced: string;
		npm_package_devDependencies_svelte_preprocess: string;
		NIX_CFLAGS_COMPILE: string;
		cmakeFlags: string;
		depsTargetTarget: string;
		npm_package_private: string;
		PNPM_HOME: string;
		name: string;
		USER: string;
		fish_color_operator: string;
		npm_package_license: string;
		__impureHostDeps: string;
		depsBuildBuild: string;
		NIX_DONT_SET_RPATH: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		nativeBuildInputs: string;
		PNPM_SCRIPT_SRC_DIR: string;
		fish_color_autosuggestion: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_postcss: string;
		fish_color_search_match: string;
		npm_package_devDependencies_eslint: string;
		NIX_STORE: string;
		mesonFlags: string;
		npm_execpath: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_web_vitals: string;
		stdenv: string;
		npm_package_devDependencies_tslib: string;
		__darwinAllowLocalNetworking: string;
		npm_package_devDependencies_svelte: string;
		PAGER: string;
		npm_package_devDependencies_emailjs: string;
		DIRENV_WATCHES: string;
		NIX_CC_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
		STRINGS: string;
		npm_config_frozen_lockfile: string;
		system: string;
		XDG_CONFIG_DIRS: string;
		fish_color_match: string;
		doInstallCheck: string;
		fish_pager_color_progress: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		NIX_LDFLAGS: string;
		__structuredAttrs: string;
		PATH: string;
		TERMINFO_DIRS: string;
		fish_color_selection: string;
		outputs: string;
		npm_config_engine_strict: string;
		shellHook: string;
		fish_color_user: string;
		LD: string;
		__CFBundleIdentifier: string;
		npm_package_devDependencies__skeletonlabs_tw_plugin: string;
		NIX_PATH: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_command: string;
		STRIP: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		KITTY_PID: string;
		npm_package_devDependencies__skeletonlabs_skeleton: string;
		npm_package_name: string;
		LANG: string;
		phases: string;
		depsHostHostPropagated: string;
		fish_pager_color_prefix: string;
		depsBuildTarget: string;
		fish_color_history_current: string;
		npm_config_resolution_mode: string;
		NODE_PATH: string;
		PATH_LOCALE: string;
		npm_package_scripts_build: string;
		shell: string;
		fish_color_quote: string;
		npm_package_devDependencies_vitest: string;
		fish_color_cancel: string;
		XPC_FLAGS: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		NIX_SSL_CERT_FILE: string;
		fish_color_error: string;
		doCheck: string;
		depsBuildTargetPropagated: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__vercel_analytics: string;
		npm_package_version: string;
		CXX: string;
		DIRENV_FILE: string;
		out: string;
		npm_package_devDependencies_svelte_check: string;
		fish_color_comment: string;
		fish_color_cwd_root: string;
		HOMEBREW_BUNDLE_NO_LOCK: string;
		npm_package_devDependencies_autoprefixer: string;
		CONFIG_SHELL: string;
		SHLVL: string;
		npm_package_type: string;
		HOME: string;
		configureFlags: string;
		ABBR_TIPS_REGEXES: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies__types_animejs: string;
		TERMINFO: string;
		npm_package_devDependencies__sveltejs_adapter_vercel: string;
		fish_color_end: string;
		HOMEBREW_PREFIX: string;
		fish_color_command: string;
		preferLocalBuild: string;
		__propagatedImpureHostDeps: string;
		fish_color_cwd: string;
		__propagatedSandboxProfile: string;
		patches: string;
		IN_NIX_SHELL: string;
		NIX_DONT_SET_RPATH_FOR_BUILD: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_scripts_format: string;
		LOGNAME: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		NIX_NO_SELF_RPATH: string;
		npm_lifecycle_script: string;
		fish_pager_color_description: string;
		XDG_DATA_DIRS: string;
		strictDeps: string;
		buildInputs: string;
		fish_pager_color_completion: string;
		RANLIB: string;
		KITTY_INSTALLATION_DIR: string;
		npm_config_user_agent: string;
		npm_package_devDependencies__iconify_svelte: string;
		KITTY_WINDOW_ID: string;
		depsBuildBuildPropagated: string;
		npm_package_devDependencies__playwright_test: string;
		NPM_PACKAGES: string;
		HOMEBREW_CELLAR: string;
		propagatedNativeBuildInputs: string;
		INFOPATH: string;
		NIX_BUILD_CORES: string;
		npm_package_devDependencies__types_node: string;
		CC: string;
		npm_package_dependencies_animejs: string;
		npm_package_dependencies__floating_ui_dom: string;
		KITTY_LISTEN_ON: string;
		DIRENV_DIFF: string;
		LD_DYLD_PATH: string;
		NIX_BINTOOLS: string;
		HOMEBREW_BUNDLE_FILE: string;
		fish_color_redirection: string;
		depsTargetTargetPropagated: string;
		fish_color_valid_path: string;
		npm_package_scripts_check: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		NIX_USER_PROFILE_DIR: string;
		fish_color_host: string;
		KITTY_PUBLIC_KEY: string;
		__NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
		npm_package_scripts_test_unit: string;
		COLORTERM: string;
		NODE_ENV: string;
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
