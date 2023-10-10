
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
	export const AS: string;
	export const HOST_PATH: string;
	export const fish_color_param: string;
	export const STARSHIP_SHELL: string;
	export const AR: string;
	export const MANPATH: string;
	export const NIX_PROFILES: string;
	export const base16_fish_shell_background: string;
	export const ABBR_TIPS_PROMPT: string;
	export const fish_color_normal: string;
	export const NIX_CC: string;
	export const propagatedBuildInputs: string;
	export const SHELL: string;
	export const __sandboxProfile: string;
	export const dontAddDisableDepTrack: string;
	export const depsHostHost: string;
	export const TERM: string;
	export const NM: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const DIRENV_DIR: string;
	export const SIZE: string;
	export const __ABBR_TIPS_KEYS: string;
	export const NIX_IGNORE_LD_THROUGH_GCC: string;
	export const WINDOWID: string;
	export const fish_color_escape: string;
	export const SOURCE_DATE_EPOCH: string;
	export const buildPhase: string;
	export const __ABBR_TIPS_VALUES: string;
	export const builder: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const cmakeFlags: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const depsTargetTarget: string;
	export const PNPM_HOME: string;
	export const name: string;
	export const fish_color_operator: string;
	export const USER: string;
	export const NIX_DONT_SET_RPATH: string;
	export const depsBuildBuild: string;
	export const __impureHostDeps: string;
	export const COMMAND_MODE: string;
	export const nativeBuildInputs: string;
	export const fish_color_autosuggestion: string;
	export const SSH_AUTH_SOCK: string;
	export const mesonFlags: string;
	export const NIX_STORE: string;
	export const fish_color_search_match: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const stdenv: string;
	export const PAGER: string;
	export const __darwinAllowLocalNetworking: string;
	export const STRINGS: string;
	export const DIRENV_WATCHES: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
	export const system: string;
	export const XDG_CONFIG_DIRS: string;
	export const fish_color_match: string;
	export const doInstallCheck: string;
	export const fish_pager_color_progress: string;
	export const NIX_LDFLAGS: string;
	export const __structuredAttrs: string;
	export const fish_color_selection: string;
	export const PATH: string;
	export const TERMINFO_DIRS: string;
	export const outputs: string;
	export const shellHook: string;
	export const LD: string;
	export const __CFBundleIdentifier: string;
	export const fish_color_user: string;
	export const NIX_PATH: string;
	export const PWD: string;
	export const STRIP: string;
	export const KITTY_PID: string;
	export const EDITOR: string;
	export const LANG: string;
	export const phases: string;
	export const fish_pager_color_prefix: string;
	export const depsBuildTarget: string;
	export const depsHostHostPropagated: string;
	export const fish_color_history_current: string;
	export const PATH_LOCALE: string;
	export const NODE_PATH: string;
	export const shell: string;
	export const fish_color_quote: string;
	export const fish_color_cancel: string;
	export const XPC_FLAGS: string;
	export const NIX_SSL_CERT_FILE: string;
	export const doCheck: string;
	export const fish_color_error: string;
	export const depsBuildTargetPropagated: string;
	export const XPC_SERVICE_NAME: string;
	export const DIRENV_FILE: string;
	export const CXX: string;
	export const HOMEBREW_BUNDLE_NO_LOCK: string;
	export const fish_color_comment: string;
	export const out: string;
	export const fish_color_cwd_root: string;
	export const configureFlags: string;
	export const SHLVL: string;
	export const CONFIG_SHELL: string;
	export const HOME: string;
	export const ABBR_TIPS_REGEXES: string;
	export const TERMINFO: string;
	export const fish_color_command: string;
	export const fish_color_end: string;
	export const HOMEBREW_PREFIX: string;
	export const fish_color_cwd: string;
	export const __propagatedSandboxProfile: string;
	export const preferLocalBuild: string;
	export const __propagatedImpureHostDeps: string;
	export const patches: string;
	export const IN_NIX_SHELL: string;
	export const STARSHIP_SESSION_KEY: string;
	export const NIX_DONT_SET_RPATH_FOR_BUILD: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const LOGNAME: string;
	export const NIX_NO_SELF_RPATH: string;
	export const XDG_DATA_DIRS: string;
	export const fish_pager_color_description: string;
	export const strictDeps: string;
	export const buildInputs: string;
	export const fish_pager_color_completion: string;
	export const RANLIB: string;
	export const KITTY_WINDOW_ID: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const propagatedNativeBuildInputs: string;
	export const NPM_PACKAGES: string;
	export const NIX_BUILD_CORES: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const depsBuildBuildPropagated: string;
	export const CC: string;
	export const KITTY_LISTEN_ON: string;
	export const DIRENV_DIFF: string;
	export const NIX_BINTOOLS: string;
	export const LD_DYLD_PATH: string;
	export const fish_color_redirection: string;
	export const depsTargetTargetPropagated: string;
	export const fish_color_valid_path: string;
	export const HOMEBREW_BUNDLE_FILE: string;
	export const __NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
	export const COLORTERM: string;
	export const fish_color_host: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const KITTY_PUBLIC_KEY: string;
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
		AS: string;
		HOST_PATH: string;
		fish_color_param: string;
		STARSHIP_SHELL: string;
		AR: string;
		MANPATH: string;
		NIX_PROFILES: string;
		base16_fish_shell_background: string;
		ABBR_TIPS_PROMPT: string;
		fish_color_normal: string;
		NIX_CC: string;
		propagatedBuildInputs: string;
		SHELL: string;
		__sandboxProfile: string;
		dontAddDisableDepTrack: string;
		depsHostHost: string;
		TERM: string;
		NM: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		NIX_ENFORCE_NO_NATIVE: string;
		DIRENV_DIR: string;
		SIZE: string;
		__ABBR_TIPS_KEYS: string;
		NIX_IGNORE_LD_THROUGH_GCC: string;
		WINDOWID: string;
		fish_color_escape: string;
		SOURCE_DATE_EPOCH: string;
		buildPhase: string;
		__ABBR_TIPS_VALUES: string;
		builder: string;
		__fish_nixos_env_preinit_sourced: string;
		cmakeFlags: string;
		NIX_CFLAGS_COMPILE: string;
		depsTargetTarget: string;
		PNPM_HOME: string;
		name: string;
		fish_color_operator: string;
		USER: string;
		NIX_DONT_SET_RPATH: string;
		depsBuildBuild: string;
		__impureHostDeps: string;
		COMMAND_MODE: string;
		nativeBuildInputs: string;
		fish_color_autosuggestion: string;
		SSH_AUTH_SOCK: string;
		mesonFlags: string;
		NIX_STORE: string;
		fish_color_search_match: string;
		__CF_USER_TEXT_ENCODING: string;
		stdenv: string;
		PAGER: string;
		__darwinAllowLocalNetworking: string;
		STRINGS: string;
		DIRENV_WATCHES: string;
		NIX_CC_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
		system: string;
		XDG_CONFIG_DIRS: string;
		fish_color_match: string;
		doInstallCheck: string;
		fish_pager_color_progress: string;
		NIX_LDFLAGS: string;
		__structuredAttrs: string;
		fish_color_selection: string;
		PATH: string;
		TERMINFO_DIRS: string;
		outputs: string;
		shellHook: string;
		LD: string;
		__CFBundleIdentifier: string;
		fish_color_user: string;
		NIX_PATH: string;
		PWD: string;
		STRIP: string;
		KITTY_PID: string;
		EDITOR: string;
		LANG: string;
		phases: string;
		fish_pager_color_prefix: string;
		depsBuildTarget: string;
		depsHostHostPropagated: string;
		fish_color_history_current: string;
		PATH_LOCALE: string;
		NODE_PATH: string;
		shell: string;
		fish_color_quote: string;
		fish_color_cancel: string;
		XPC_FLAGS: string;
		NIX_SSL_CERT_FILE: string;
		doCheck: string;
		fish_color_error: string;
		depsBuildTargetPropagated: string;
		XPC_SERVICE_NAME: string;
		DIRENV_FILE: string;
		CXX: string;
		HOMEBREW_BUNDLE_NO_LOCK: string;
		fish_color_comment: string;
		out: string;
		fish_color_cwd_root: string;
		configureFlags: string;
		SHLVL: string;
		CONFIG_SHELL: string;
		HOME: string;
		ABBR_TIPS_REGEXES: string;
		TERMINFO: string;
		fish_color_command: string;
		fish_color_end: string;
		HOMEBREW_PREFIX: string;
		fish_color_cwd: string;
		__propagatedSandboxProfile: string;
		preferLocalBuild: string;
		__propagatedImpureHostDeps: string;
		patches: string;
		IN_NIX_SHELL: string;
		STARSHIP_SESSION_KEY: string;
		NIX_DONT_SET_RPATH_FOR_BUILD: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		LOGNAME: string;
		NIX_NO_SELF_RPATH: string;
		XDG_DATA_DIRS: string;
		fish_pager_color_description: string;
		strictDeps: string;
		buildInputs: string;
		fish_pager_color_completion: string;
		RANLIB: string;
		KITTY_WINDOW_ID: string;
		KITTY_INSTALLATION_DIR: string;
		propagatedNativeBuildInputs: string;
		NPM_PACKAGES: string;
		NIX_BUILD_CORES: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		depsBuildBuildPropagated: string;
		CC: string;
		KITTY_LISTEN_ON: string;
		DIRENV_DIFF: string;
		NIX_BINTOOLS: string;
		LD_DYLD_PATH: string;
		fish_color_redirection: string;
		depsTargetTargetPropagated: string;
		fish_color_valid_path: string;
		HOMEBREW_BUNDLE_FILE: string;
		__NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
		COLORTERM: string;
		fish_color_host: string;
		NIX_USER_PROFILE_DIR: string;
		KITTY_PUBLIC_KEY: string;
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
