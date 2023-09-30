<script lang="ts">
	import { Parallax, ParallaxLayer } from 'svelte-parallax'
  import { disabled, scroll } from '$stores';
  import Icon from "@iconify/svelte";
  import { onMount } from 'svelte';
	
	let parallax: Parallax;
  let top: number;
  let height: number;

  onMount(() => {
    console.log(parallax);
    top = parallax.getBoundingClientRect().top
    height = window.innerHeight;
  })

  const scrollTo = (section: number) => {
    const s = top + (height * (section - 1));
    window.scrollTo({
      top: s,
      behavior: "smooth"
    });
  }
</script>

<Parallax sections={3} scroll={scroll} disabled={$disabled} bind:this={parallax}>

  <ParallaxLayer
    offset={0}
    rate={2}
    class="flex justify-center items-center pointer-events-none"
  >
    <div class="flex card w-[25%] h-[40%] ml-[20%] mb-[10%] variant-filled-tertiary"></div>
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    rate={3}
    class="flex justify-center items-center pointer-events-none"
  >
    <div class="flex card w-[25%] h-[20%] ml-[-20%] mb-[-20%] variant-filled-warning"></div>
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    rate={4}
    class="flex justify-center items-center pointer-events-none"
  >
    <button class="btn bnt-icon pointer-events-auto cursor-pointer variant-filled-tertiary w-[65px] h-[65px] rounded-token ml-[-40%] mb-[-20%]" on:click={() => scrollTo(2)}>
      <Icon icon="solar:arrow-down-broken" height={60} />
    </button>
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    rate={0.5}
    class="flex justify-center items-center pointer-events-none"
  >
    <div class="flex card w-[30%] h-[40rem] p-4 variant-filled-primary pointer-events-none">
      <ParallaxLayer 
        offset={0} 
        rate={-5}
        class="card-header pointer-events-none"
      >
        <header class="text-5xl font-bold">Publications</header>
      </ParallaxLayer>
    </div>
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    rate={1}
    class="flex justify-center items-center pointer-events-none"
  >
    <div class="flex flex-col card ml-[5%] mb-[11rem] w-[30%] p-4 variant-filled-secondary pointer-events-none">
      <header class="text-2xl">Transduction of pig small airway epithelial cells and distal lung progenitor cells by AAV4</header>
      <section class="text-base">O. Chen, S. E Mather, C. M Brommel, B. A Hamilton, A. Ehler, R. A Villacreses, R. E Girgis, M. Abou Alaiwa, D. A Stoltz, J. Zabner, X. Li</section>
      <footer class="text-xl"><i>Cells</i> 2021 Apr 25</footer>
    </div>
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    rate={3}
    class="flex justify-center items-center pointer-events-none"
  >
    <div class="flex flex-col card ml-[5%] mt-[14rem] w-[30%] p-4 variant-filled-secondary pointer-events-none">
      <header class="text-2xl">V-type ATPase Mediates Airway Surface Liquid Acidification in Pig Small Airway Epithelial Cells</header>
      <section class="text-base">X. Li, I. Thornell, R. Villacreses Rada, C. Brommel, L. Lu, S. Mather, A. Ehler, P. Karp, M. Welsh, J. Zabner</section>
      <footer class="text-xl"><i>American Journal of Respiratory Cell and Molecular Biology</i> 2021 Mar 30</footer>
    </div>
  </ParallaxLayer>

  
  <ParallaxLayer
    offset={1}
    rate={0.5}
    class="flex justify-center items-center pointer-events-none"
  >
    <div class="flex card mr-[20rem] w-[30rem] h-[20rem] p-4 variant-filled-success"></div>
  </ParallaxLayer>

  <ParallaxLayer 
    offset={1} 
    rate={-0.5}
    class="flex justify-center items-center card-header pointer-events-none"
  >
    <header class="text-5xl mr-[20rem] text-black mb-[10rem] font-bold">Education</header>
  </ParallaxLayer>

  <ParallaxLayer
    offset={1}
    rate={3}
    class="flex justify-center items-center pointer-events-none"
  >
    <div id="education" class="flex card ml-[5%] w-[30%] h-[11rem] variant-filled-secondary">
      <section>
        <ParallaxLayer 
          offset={0.3} 
          rate={0.3}
          class="card-header"
        >
          <header class="text-2xl w-[28%]">Bachelors of the Arts</header>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={0.6} 
          rate={0.6}
          class="p-4"
        >
          <section class="text-base mt-[4.875rem] w-[28%]">Hampshire College <i>Amherst, MA</i></section>
        </ParallaxLayer>
      </section>
    </div>
  </ParallaxLayer>

  
  <ParallaxLayer 
    offset={2}
    rate={-0}
    class="flex items-center justify-center" 
  >
    <div class="block card card-hover p-4">
      Card 3
    </div>	
  </ParallaxLayer>
</Parallax>
