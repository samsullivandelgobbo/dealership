<script lang="ts">
  import type { PageData } from "./$types"
  import Vehicle from "$lib/components/blocks/inventory/Vehicle.svelte"


  export let data: PageData
  let vehicle:object = data.vehicle || {}

</script>

<Vehicle {vehicle}></Vehicle>


