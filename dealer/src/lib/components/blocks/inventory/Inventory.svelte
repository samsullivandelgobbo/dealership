<script lang="ts">
  import VehicleCard from "$lib/components/base/inventory/VehicleCard.svelte"

  export let vehicles: any
  export let favorites: any = []



</script>

<!-- Search Bar -->
<div class="flex w-full min-w-full place-content-center content-center py-4">
  <div class="lg:w-1/2 w-full p-4 ">
    <form>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            /></svg
          >
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Search</button
        >
      </div>
    </form>
  </div>
</div>

<div class="flex w-full min-w-full">
  <div class="flex content-start justify-start place-content-start">


  </div>
<div
  class="flex w-full content-end justify-end place-content-end px-6"
>
  <!-- Sort Dropdown Selector -->
  <div class="dropdown dropdown-end">
    <label tabindex="-1" class="text-lg font-medium" for="">
      <button class="btn btn-ghost btn-sm rounded-btn hover:bg-transparent px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down mr-1"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>

        Sort By
      </button></label
    >
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  </div>
</div>







<!-- Drop Down Filter Button -->

<!-- Make Model -->









<!-- Vehicles -->

<div class="w-full py-16 px-4 sm:px-6">
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
    {#each vehicles as vehicle}
      {#if favorites.includes(vehicle.vehicleId)}
        <VehicleCard {vehicle} isFavorite={true} />
      {:else}
        <VehicleCard {vehicle} isFavorite={false} />
      {/if}
    {/each}
  </div>
</div>


