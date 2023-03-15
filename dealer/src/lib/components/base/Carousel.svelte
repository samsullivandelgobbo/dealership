<script lang="ts">

import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/svelte-splide/css';

export let images:object[] = []
console.log(images)



</script>

<Splide aria-label="My Favorite Images">
  
  {#each images as image}
  <SplideSlide>
    <img src={image.url} />
  </SplideSlide>
{/each}


</Splide>

