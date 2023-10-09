<script lang="ts">
	import { clientWidth, clientHeight, size, navigating, navTarget, columns, rows } from '$stores';
	import anime from 'animejs';
	import { onMount, createEventDispatcher } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let href: string;
	export let text: string;
	export let color: string;
	export let textColor: string;

	const dispatch = createEventDispatcher();

	let header: HTMLElement | undefined | null = undefined;

	$: circleDims = $size / 2;

	const top = tweened(3083, {
		easing: cubicOut,
		duration: 1200
	});
	const left = tweened(998, {
		easing: cubicOut,
		duration: 1200
	});

	let textHeight = 0;
	let textTop = 3371;
	let textLeft = 1920;
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
			return $size * 0.14 - textHeight;
		} else {
			return $size * 0.2 - textHeight;
		}
	};

	top.subscribe((value: number) => {
		if (!$navigating) {
			textTop = value + textCalc();
			$textMoveTop = textTop;
		}
	});
	left.subscribe((value: number) => {
		if (header && header !== null && !$navigating) {
			textLeft = value + $size / 2 - header.getBoundingClientRect().width / 2;
			$textMoveLeft = textLeft;
		}
	});

	const posCalc = (): number => {
		if ($clientWidth >= 2000) {
			return $size / 4;
		} else {
			return $size / 3;
		}
	};

	$: {
		if (!$navigating && $size) {
			$top = $clientHeight - posCalc();
			$left = $clientWidth / 2 - $size / 2;
		}
	}

	const move = 100;
	let xMove = 50;
	let yMove = 50;
	onMount(() => {
		if (header && header !== null) {
			textHeight = header.getBoundingClientRect().height;
		}
		document.addEventListener('mousemove', (e: MouseEvent) => {
			if (!$navigating) {
				xMove = (($clientWidth / 2 - e.pageX) / $size) * (move * 2) - move + 50;
				yMove = (($clientHeight - e.pageY) / $size) * (move * 2) - move + 50;
			}
		});
	});

	let popupPositionTop = 0;
	let popupPositionLeft = 0;

	function popup() {
		if (!$navigating) {
			$top = $clientHeight - $size / 3;
			$left = $clientWidth / 2 - $size / 2;
			popupPositionTop = $clientHeight - $size / 3;
			popupPositionLeft = $clientWidth / 2 - $size / 2;
			if (header && header !== null) {
				header.style.transform = 'scale(1.5)';
			}
			document.addEventListener('mousemove', follow);
		}
	}

	function follow(e: MouseEvent) {
		if (!$navigating) {
			$top = popupPositionTop + ((e.offsetY / $size) * (move * 2) - move);
			$left = popupPositionLeft + ((e.offsetX / $size) * (move * 2) - move);
		}
	}

	function godown() {
		if (!$navigating) {
			$top = $clientHeight - $size / 4;
			$left = $clientWidth / 2 - $size / 2;
			if (header && header !== null) {
				header.style.transform = '';
			}
		}
		document.removeEventListener('mousemove', follow);
	}

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

		$navTarget = 'bottom';

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
			targets: '#bottom-svg',
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
		if (value && value !== 'bottom') {
			$top = $clientHeight + $size;
			textMoveTop.subscribe((value: number) => {
				textTop = value;
			});
			$textMoveTop = $top;
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
	id="bottom-svg"
>
	<defs>
		<radialGradient id="bottom-circle" fx="50%" fy="50%" cx="50%" cy="50%">
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
		class="pointer-events-auto cursor-pointer"
		style="fill: rgb(var({color}) / 0.2)"
		cx={circleDims}
		cy={circleDims}
		r={circleDims}
	/>
	<circle
		style="transform: translate({xMove}px, {yMove}px);"
		class="pointer-events-none"
		fill="url('#bottom-circle')"
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
