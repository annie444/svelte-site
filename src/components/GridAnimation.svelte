<script lang="ts">
  import GridItem from "$components/GridItem.svelte";
  import { onMount } from "svelte";
  import { columns, rows, total, gridItems } from "$stores";
  import { clientHeight, clientWidth } from '$stores';

  let gridRef: HTMLDivElement;

  total.subscribe((value: number) => {
    $gridItems = Array.from(Array(value)).map((_, i: number) => {
      return {
        id: i,
        i: i,
        key: i,
        columns: $columns,
        rows: $rows,
      }
    });
  }); 

  $: total.set($columns * $rows);

  onMount(() => {
    clientWidth.subscribe((value: number) => {
      columns.set(Math.floor(value / 50));  
    });
    clientHeight.subscribe((value: number) => {
      rows.set(Math.floor(value / 50));
    });
    columns.subscribe((value: number) => {
      gridRef.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    });
    rows.subscribe((value: number) => {
      gridRef.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    });
  });


</script>

<div
  class='w-screen h-screen grid fixed gap-0 content-center bg-transparent justify-center'
  bind:this={gridRef}
>
  <GridItem />
</div>
