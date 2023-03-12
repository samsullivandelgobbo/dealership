<script lang="ts">
  import VehicleCard from "$lib/components/base/inventory/VehicleCard.svelte"

  export let vehicles: any
  export let favorites: any = []

  console.log(vehicles)
  console.log(favorites)


</script>

<div class="w-full py-16 px-4 sm:px-6">
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
    {#each vehicles as vehicle}
      {#if favorites.includes(vehicle.vehicleId)}
      <VehicleCard {vehicle} isFavorite={true}  />
      {:else}
      <VehicleCard {vehicle} isFavorite={false}  />
      {/if}
    {/each}
  </div>
</div>
