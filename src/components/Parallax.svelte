<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	export let speed: number = 1;
	export let topSpeed: number = 1.5;
	export let bgSpeed: number = 0.5;
	export let root: Element | Document | undefined = undefined;
	export let id: string = '';
	export let bgColor: string | undefined = undefined;

	interface $$Slots {
		default: {};
		top?: {};
	}

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		speed?: number;
		topSpeed?: number;
		bgSpeed?: number;
		root?: Element | Document | undefined;
		id?: string;
		bgColor?: string;
	}

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'style'> {}

	let classes: HTMLAttributes<HTMLDivElement>['class'];
	$: classes = $$restProps.class;
	let styles: HTMLAttributes<HTMLDivElement>['style'];
	$: styles = $$restProps.styles;
	let props: Props = {};
	$: {
		let p: HTMLAttributes<HTMLDivElement> = Object.assign({}, $$restProps);
		delete p['class'];
		delete p['style'];
		props = Object.assign({}, p);
	}

	let bgContainer: HTMLDivElement;
	let container: HTMLDivElement;
	let topContainer: HTMLDivElement;
	let scrollY: number;
	let innerHeight: number;
	let height: number;
	let bgHeight: number;
	let bgTop: number;

	const intersections: Record<string, boolean> = {
		top: false,
		default: false,
		bg: false
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry: IntersectionObserverEntry) => {
				const target = entry.target as HTMLDivElement;
				const label = target.getAttribute('data-container') as string;
				intersections[label] = entry.isIntersecting;
			});
			if (Object.values(intersections).every((inter: boolean) => !inter)) {
				unsubscribe();
			} else if (Object.values(intersections).includes(true)) {
				subscribe();
			}
		},
		{
			root: root ? root : document,
			threshold: 0
		}
	);

	const resizer = new ResizeObserver(getDims);

	function getDims() {
		height = container.getBoundingClientRect().height;
		bgTop = container.getBoundingClientRect().top;
		if (height > innerHeight) {
			console.table([
				[
					'id',
					'height',
					'innerHeight',
					'height - innerHeight',
					'height - innerHeight / 2',
					'height - (height - innerHeight) / 2'
				],
				[
					id,
					height,
					innerHeight,
					height - innerHeight,
					(height - innerHeight) / 2,
					height - (height - innerHeight) / 2
				]
			]);
			bgHeight = height - (height - innerHeight) / 4;
		} else {
			bgHeight = height;
		}
	}

	let subscribed = false;

	function unsubscribe() {
		if (subscribed) {
			document.removeEventListener('scroll', transform);
			subscribed = false;
		}
	}

	function subscribe() {
		if (!subscribed) {
			document.addEventListener('scroll', transform);
			subscribed = true;
		}
	}

	const config = {
		stiffness: 0.017,
		damping: 0.26,
		precision: 0.001
	};

	const translation = spring<number>(undefined, config);
	const topTranslation = spring<number>(undefined, config);
	const bgTranslation = spring<number>(undefined, config);

	translation.subscribe((value: number) => {
		if (container) {
			container.style.transform = `translateY(${value}px)`;
		}
	});
	topTranslation.subscribe((value: number) => {
		if (topContainer) {
			topContainer.style.transform = `translateY(${value}px)`;
		}
	});
	bgTranslation.subscribe((value: number) => {
		if (bgContainer) {
			bgContainer.style.transform = `translateY(${value}px)`;
		}
	});

	function transform() {
		translation.set(-1 * (scrollY - bgTop) * speed);
		topTranslation.set(-1 * (scrollY - bgTop) * speed * topSpeed);
		bgTranslation.set(-1 * (scrollY - bgTop) * speed * bgSpeed);
	}

	onMount(() => {
		observer.observe(container);
		observer.observe(bgContainer);
		observer.observe(topContainer);
		resizer.observe(container);
		setTimeout(getDims, 100);
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div
	bind:this={bgContainer}
	class="parallax-container"
	style="
    position: absolute;
    z-index: 1;
    height: {bgHeight}px;
    overflow-x: hidden;
    top: {bgTop}px;
    background-color: {bgColor ? bgColor : 'transparent'}
  "
	{...props}
	data-container="bg"
/>

<div
	bind:this={container}
	{id}
	class="parallax-container {classes ? classes : ''}"
	style="
    position: relative;
    height: 100%;
    z-index: 2;
    {styles ? styles : ''}
  "
	{...props}
	data-container="default"
>
	<slot />
</div>

<div
	bind:this={topContainer}
	class="parallax-container {classes ? classes : ''}"
	style="
      position: absolute;
      z-index: 3;
      height: {height}px;
      top: {bgTop}px;
      {styles ? styles : ''}
    "
	{...props}
	data-container="top"
>
	<slot name="top" />
</div>

<style>
	.parallax-container {
		overflow-x: hidden;
		width: 100%;
	}
</style>
