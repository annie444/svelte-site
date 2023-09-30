<script lang="ts">
  import anime from "animejs";
  import { onMount } from "svelte";
	import type { KeyboardEventHandler, MouseEventHandler } from "svelte/elements";
  import { columns, rows, gridItems } from "$stores";

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    cursor.set("cursor-wait pointer-events-none");
    anime({
      targets: '.grid-item',
      scale: [
        { value: 0.1, easing: 'easeOutSine', duration: 500 },
        { value: 1.1, easing: 'easeInOutQuad', duration: 1200 },
      ],
      delay: anime.stagger(200, {
        grid: [$columns, $rows],
        from: parseInt(e.currentTarget.id),
      }),
      update: enableCursor,
    });
  }

  const keyboardHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
    anime({
      targets: '.grid-item',
      scale: [
        { value: 0.1, easing: 'easeOutSine', duration: 500 },
        { value: 1.1, easing: 'easeInOutQuad', duration: 1200 },
      ],
      delay: anime.stagger(200, {
        grid: [$columns, $rows],
        from: parseInt(e.currentTarget.id),
      }),
      update: enableCursor,
    });
  }

  const enableCursor = (a: anime.AnimeInstance) => {
    if(Math.round(a.progress) > 98) {
      cursor.set("cursor-pointer pointer-events-auto");
    }
  };

  onMount(() => {
    anime({
      targets: '.grid-item',
      scale: [
        { value: 0.1, easing: 'easeOutSine', duration: 500 },
        { value: 1.1, easing: 'easeInOutQuad', duration: 1200 },
      ],
      delay: anime.stagger(200, {
        grid: [$columns, $rows],
        from: 'center',
      }),
      update: enableCursor,
    });
    cursor.set("cursor-wait pointer-events-none");
  })
</script>

<script context="module" lang="ts">
  import { writable, type Writable } from "svelte/store";
  
  const cursor: Writable<string> = writable("cursor-pointer pointer-events-auto");
</script>

{#each $gridItems as square (square.id)}
  <div role="none" class="min-w-full min-h-full {$cursor} relative z-10 bg-primary-500 border-primary-500 grid-item" style="transform: scale(1.1)" id={square.id.toString()} on:click={clickHandler} on:keypress={keyboardHandler}></div>
{/each}
