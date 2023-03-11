<script lang="ts">
  import HyundaiHomePage from "$lib/components/dealer/template/hyundai/HyundaiHomePage.svelte";
  import Hero from "$lib/components/base/Hero.svelte";

  let images = [
    "https://www.hyundaicanada.com/-/media/hyundai/global/homepage/promo-1-4/promo-1---retail/promo-1-english---cz-and-wz/desktop/2021/3028_hase_se_pr_1100x800_en.jpg",
    "https://www.hyundaicanada.com/-/media/hyundai/global/homepage/promo-1-4/promo-2-english/elantran_spotlight_1100x800-en.jpg",
  ];
</script>

<HyundaiHomePage />

<Hero {images} />
