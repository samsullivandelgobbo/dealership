<script lang="ts">
  import type {PageData} from './types'

  export let data: PageData

  console.log(data.inStockVehicles)

  let firstName = data.user.firstName

  import VehicleCard from '$lib/components/base/inventory/VehicleCard.svelte';

</script>


<header class="bg-white shadow">
  <div class=" flex py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-2xl font-bold tracking-tight text-gray-900">Hi {firstName}</h1>
  </div>
</header>
<main>
  <div class="flex w-1/2 p-6 lg:p-8">
  <h1 class="text-2xl font-bold tracking-tight text-gray-900">Favorites</h1>
</div>
  <div class="flex p-16 w-full">
    
    {#each data.userFavorites as vehicle}
      <VehicleCard {vehicle} isFavorite={true} />
    {/each}

    <slot></slot>

</main>