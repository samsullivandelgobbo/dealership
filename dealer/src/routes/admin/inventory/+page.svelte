<script lang="ts">
  import type { PageData } from './$types'

  import AdminInventoryTable from '$lib/components/blocks/admin/AdminInventoryTable.svelte';
  import AddVehicleModal from '$lib/components/blocks/admin/AddVehicleModal.svelte'


  export let data: PageData
  console.log(data)


</script>

<AdminInventoryTable>
  <AddVehicleModal/>
</AdminInventoryTable>



