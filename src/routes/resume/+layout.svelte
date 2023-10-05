<script lang="ts">
	import '../../app.postcss';
	import { onMount } from 'svelte';
	import { waitForElem } from '$lib';
	import { blur } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let mounted = false;
	onMount(async () => {
		const e = await waitForElem('body#root');
		if (!e) {
			console.error('unable to find the body element');
		} else {
			const body = e as HTMLBodyElement;
			const attr = body.getAttribute('data-theme');
			if (!attr || attr !== 'mono') {
				console.log(attr);
				body.setAttribute('data-theme', 'mono');
			}
		}
		mounted = true;
	});
</script>

{#if mounted}
	<div
		in:blur={{ duration: 500, easing: cubicIn, opacity: 0.5 }}
		out:blur={{ duration: 500, easing: cubicOut, opacity: 0.5 }}
	>
		<slot />
	</div>
{/if}
