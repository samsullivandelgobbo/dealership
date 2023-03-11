<script lang="ts">
  import type { PageData } from './$types'

  import VehicleCard from '$lib/components/base/inventory/VehicleCard.svelte';

  export let data: PageData
  console.log(data)

</script>

<!-- <h1>{JSON.stringify(data)}</h1> -->


<VehicleCard {data}/>
