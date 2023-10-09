<script lang="ts">
	import { size, clientHeight, clientWidth, navigating, navTarget, columns, rows } from '$stores';
	import anime from 'animejs';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount, createEventDispatcher } from 'svelte';
	export let href: string;
	export let text: string;
	export let color: string;
	export let textColor: string;

	const dispatch = createEventDispatcher();

	let header: HTMLElement | undefined | null = undefined;

	$: console.log($size);

	const top = tweened(-1845, {
		easing: cubicOut,
		duration: 1200
	});
	const left = tweened(-1845, {
		easing: cubicOut,
		duration: 1200
	});

	let textTop = -3136;
	let textLeft = 6054;

	const textMoveTop = tweened(textTop, {
		easing: cubicOut,
		duration: 1200
	});
	const textMoveLeft = tweened(textLeft, {
		easing: cubicOut,
		duration: 1200
	});

	const textCalc = (): number => {
		if ($clientWidth >= 2000) {
			return $size * (3 / 4);
		} else {
			return $size * (7 / 12);
		}
	};

	top.subscribe((value: number) => {
		if (!$navigating) {
			textTop = value + textCalc();
			$textMoveTop = textTop;
		}
	});
	left.subscribe((value: number) => {
		if (!$navigating) {
			textLeft = value + textCalc();
			$textMoveLeft = textLeft;
		}
	});

	$: circleDims = $size / 2;

	const posCalc = (): number => {
		if ($clientWidth >= 2000) {
			return (-2 * $size) / 3;
		} else {
			return (-1 * $size) / 2;
		}
	};

	$: {
		if (!$navigating && $size) {
			$top = posCalc();
			$left = posCalc();
		}
	}

	const move = 100;
	let xMove = 50;
	let yMove = 50;
	onMount(() => {
		document.addEventListener('mousemove', (e: MouseEvent) => {
			if (!$navigating) {
				xMove = ((0 - e.pageX) / $size) * (move * 2) - move + 50;
				yMove = ((0 - e.pageY) / $size) * (move * 2) - move + 50;
			}
		});
	});

	let popupPositionTop = 0;
	let popupPositionLeft = 0;

	function follow(e: MouseEvent) {
		if (!$navigating) {
			$top = popupPositionTop + ((e.offsetY / $size) * (move * 2) - move);
			$left = popupPositionLeft + ((e.offsetX / $size) * (move * 2) - move);
		}
	}

	const popup = () => {
		if (!$navigating) {
			$top = (-7 * $size) / 12;
			$left = (-7 * $size) / 12;
			popupPositionTop = (-7 * $size) / 12;
			popupPositionLeft = (-7 * $size) / 12;
			if (header && header !== null) {
				header.style.transform = 'scale(1.5)';
			}
			document.addEventListener('mousemove', follow);
		}
	};

	const godown = () => {
		if (!$navigating) {
			$top = posCalc();
			$left = posCalc();
			if (header && header !== null) {
				header.style.transform = '';
			}
		}
		document.removeEventListener('mousemove', follow);
	};

	const dropListerners = (e: { currentTarget: EventTarget }) => {
		e.currentTarget.removeEventListener('onmouseenter', popup);
		e.currentTarget.removeEventListener('onmouseover', popup);
		e.currentTarget.removeEventListener('onfocusin', popup);
		e.currentTarget.removeEventListener('onfocus', popup);
		e.currentTarget.removeEventListener('onmouseout', godown);
		e.currentTarget.removeEventListener('onfocusout', godown);
		e.currentTarget.removeEventListener('onblur', godown);
	};

	const beginNavigate = (e: { currentTarget: EventTarget }) => {
		$navigating = true;
		dropListerners(e);

		xMove = 50;
		yMove = 50;

		$navTarget = 'top-left';

		textMoveTop.subscribe((value: number) => {
			textTop = value;
		});

		textMoveLeft.subscribe((value: number) => {
			textLeft = value;
		});

		$top = $clientHeight / 2 - $size / 2;
		$left = $clientWidth / 2 - $size / 2;

		if (header && header !== null) {
			const size = header.getBoundingClientRect();
			$textMoveTop = $clientHeight / 2 - size.height / 2;
			$textMoveLeft = $clientWidth / 2 - size.width / 2;
		}

		anime({
			targets: '.grid-item',
			scale: [{ value: 0, easing: 'easeOutSine', duration: 300 }],
			delay: anime.stagger(100, {
				grid: [$columns, $rows],
				from: 'center'
			})
		});

		anime({
			targets: header,
			scale: 0,
			duration: 1500,
			delay: 1500,
			opacity: 0,
			easing: 'easeInSine'
		});

		anime({
			targets: '#top-left-svg',
			scale: 3,
			duration: 1500,
			delay: 1500,
			easing: 'easeInSine',
			opacity: 0
		});

		dispatch('navigate', {
			location: href
		});
	};

	navTarget.subscribe((value) => {
		if (value && value !== 'top-left') {
			$top = -1 * $size;
			$left = -1 * $size;
			textMoveTop.subscribe((value: number) => {
				textTop = value;
			});

			textMoveLeft.subscribe((value: number) => {
				textLeft = value;
			});

			$textMoveTop = $top;
			$textMoveLeft = $left;
		}
	});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	class="fixed pointer-events-none"
	style="left: {$left}px; top: {$top}px;"
	height={$size}
	width={$size}
	id="top-left-svg"
>
	<defs>
		<radialGradient id="top-left-circle" fx="50%" fy="50%" cx="50%" cy="50%">
			<stop offset="15%" stop-color="#fff" stop-opacity="0.3" />
			<stop offset="100%" stop-color="#fff" stop-opacity="0" />
		</radialGradient>
	</defs>
	<circle
		on:mouseenter={popup}
		on:mouseover={popup}
		on:mouseout={godown}
		on:focusin={popup}
		on:focus={popup}
		on:focusout={godown}
		on:blur={godown}
		on:click={beginNavigate}
		on:keypress={beginNavigate}
		role="link"
		tabindex="0"
		style="fill: rgb(var({color}) / 0.2)"
		class="opacity-50 pointer-events-auto cursor-pointer"
		cx={circleDims}
		cy={circleDims}
		r={circleDims}
	/>
	<circle
		style="transform: translate({xMove}px, {yMove}px);"
		class="pointer-events-none"
		fill="url('#top-left-circle')"
		cx={circleDims}
		cy={circleDims}
		r={circleDims}
	/>
</svg>

<h4
	class="fixed text-4xl {textColor} pointer-events-none transition-transform duration-700"
	bind:this={header}
	style="left: {textLeft}px; top: {textTop}px;"
>
	{text}
</h4>
