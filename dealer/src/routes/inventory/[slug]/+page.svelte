<script lang="ts">
  import type { PageData } from "./$types"
  import VehicleComponent from "$lib/components/blocks/inventory/Vehicle.svelte"
  import type { Vehicle } from "$lib/components/blocks/inventory/Vehicle.svelte"

  export let data: PageData
  let vehicle:Vehicle = data.vehicle || {} as Vehicle

  // compare id to user favorites

  let isFavorite: boolean = false

  if (data.user && data.user.favorites) {
    console.log(data.user)
    if (data.user.favorites.includes(vehicle.id)) {
      isFavorite = true
    } else {
      isFavorite = false
    }
  }
</script>

<VehicleComponent {vehicle} {isFavorite} />


