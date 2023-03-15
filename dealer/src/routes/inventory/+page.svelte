<script lang="ts">
  import type { ActionData, PageData } from "./$types"

  import Inventory from "$lib/components/blocks/inventory/Inventory.svelte"

  export let data: PageData
  export let form: ActionData
  let favorites: string[] = []

  if (data.user) {
    favorites = data.user.favorites
  }

  let vehicles = data.inStockVehicles



</script>

<Inventory {vehicles} {favorites} />

