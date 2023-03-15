<script lang="ts">
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/svelte-splide/css';

  let images = [
    "https://www.hyundaicanada.com/-/media/hyundai/feature/homepage-carousel/2021-electrification-digital-campaign/3250---electrification-digital-campaign-hp-1920x710.mp4"
  ]
</script>

<Splide aria-label="My Favorite Images">
  

  <SplideSlide>
    <video autoplay loop muted>
      <source src={images[0]} type="video/mp4" />
  </SplideSlide>

</Splide>