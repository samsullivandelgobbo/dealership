<script lang="ts">
  import Modal from "$lib/components/base/Modal.svelte"
  import AddVehicle from "$lib/components/base/admin/inventory/AddVehicle.svelte"
</script>

<Modal>
  <div
    slot="button"
    class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    Add Vehicle
  </div>
  <div slot="form">
    <AddVehicle />
  </div>
</Modal>
