<script lang="ts">
  import '../../app.postcss';
  import { onMount } from "svelte";
  import { waitForElem } from "$lib";
  import { AppShell, AppBar } from "@skeletonlabs/skeleton"
  import { blur } from "svelte/transition";
  import { cubicIn } from "svelte/easing";
  import { disabled, scroll } from "$stores"
  import Icon from "@iconify/svelte";

  let mounted = false;
  onMount(async () => {
    const e = await waitForElem("body#root");
    if(!e) {
      console.error("unable to find the body element");
    } else {
      const body = e as HTMLBodyElement;
      const attr = body.getAttribute("data-theme");
      if(!attr || attr !== "warm") {
        console.log(attr);
        body.setAttribute("data-theme", "warm");
      }
    }
    mounted = true;
  });
</script>

{#if mounted}
  <AppShell transitionIn={blur} on:scroll={(e) => { $scroll = e.currentTarget.scrollTop }} transitionInParams={{ duration: 500, easing: cubicIn, opacity: 0.5 }}>
    <svelte:fragment slot="header">
      <AppBar>Skeleton</AppBar>
      <button class="btn btn-icon variant-filled" type="button" on:click={() => $disabled = !$disabled}>
        <Icon icon="solar:accessibility-bold" color="fill-token" width="43px" />
      </button>
    </svelte:fragment>
    <slot /> 
  </AppShell>
{/if}

