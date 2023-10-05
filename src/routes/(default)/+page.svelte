<script lang="ts">
	import { goto } from '$app/navigation';
	import NameAnimation from '$components/NameAnimation.svelte';
	import TopLeftBubble from '$components/TopLeftBubble.svelte';
	import TopRightBubble from '$components/TopRightBubble.svelte';
	import BottomBubble from '$components/BottomBubble.svelte';
	import anime from 'animejs';

	let scaler = 1;

	const handleNavigation = (e: CustomEvent) => {
		anime({
			targets: '#svg21 path',
			strokeDashoffset: [0, anime.setDashoffset],
			easing: 'easeInOutSine',
			duration: 1200,
			delay: function (_, i: number) {
				return i * 100;
			},
			direction: 'normal',
			loop: false
		});
		setTimeout(() => {
			return goto(e.detail.location, {
				invalidateAll: true
			});
		}, 3000);
	};
</script>

<div class="w-screen h-screen flex items-center justify-center">
	<NameAnimation {scaler} />
	<TopLeftBubble
		on:navigate={handleNavigation}
		textColor="text-tertiary-900"
		color="--color-tertiary-500"
		href="/websites"
		text="WebDev"
	/>
	<TopRightBubble
		on:navigate={handleNavigation}
		textColor="text-success-900"
		color="--color-success-500"
		href="/learning"
		text="Tutoring"
	/>
	<BottomBubble
		on:navigate={handleNavigation}
		textColor="text-error-900"
		color="--color-error-500"
		href="/resume"
		text="Resume"
	/>
</div>
