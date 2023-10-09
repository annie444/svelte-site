<script lang="ts">
	import '../../app.postcss';
	import GridAnimation from '$components/GridAnimation.svelte';
	import { onMount } from 'svelte';
	import { clientHeight, clientWidth, size } from '$stores';
	import { blur } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { waitForElem } from '$lib';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let mounted = false;

	onMount(async () => {
		$clientHeight = window.innerHeight;
		$clientWidth = window.innerWidth;
		window.addEventListener('resize', () => {
			$clientHeight = window.innerHeight;
			$clientWidth = window.innerWidth;
		});
		if ($clientWidth < $clientHeight) {
			clientHeight.subscribe((value: number) => {
				size.set(value / 2 - 75 < 0 ? 0 : value / 2 - 75);
			});
		} else {
			clientWidth.subscribe((value: number) => {
				size.set(value / 2 - 75 < 0 ? 0 : value / 2 - 75);
			});
		}
		const e = await waitForElem('body#root');
		if (!e) {
			console.error('unable to find the body element');
		} else {
			const body = e as HTMLBodyElement;
			const attr = body.getAttribute('data-theme');
			if (!attr || attr !== 'rainbow') {
				body.setAttribute('data-theme', 'rainbow');
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
		<GridAnimation />
		<slot />
	</div>
{/if}
