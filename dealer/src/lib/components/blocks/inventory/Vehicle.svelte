<script lang="ts">
  import Carousel from "$lib/components/base/Carousel.svelte"
  import Tabs from "$lib/components/base/Tabs.svelte";
  import Login from "$lib/components/base/Login.svelte";
  import Register from "$lib/components/base/Register.svelte";

  interface Vehicle {
    id: number
    year: number
    make: string
    model: string
    trim: string
    price: number
    media: object[]
  }

  export let vehicle: Vehicle
  console.log(vehicle)

  let title =
    vehicle.year + " " + vehicle.make + " " + vehicle.model + " " + vehicle.trim
  let images: object[] = vehicle.media

  let biWeekly = Math.floor(vehicle.price / 132.5)

  export let isFavorite: boolean = false

  async function handleFavorite(): Promise<void> {
    const response = await fetch("/inventory?/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vehicleId: vehicle.id,
      }),
    })
    isFavorite = !isFavorite
  }



  let tabs = {
    tabs: [
      {
        name: "Description",
        content: Login,
      },
      {
        name: "Features",
        content: Register,
      },
  
    ],
    activeTab: 0,
  }

</script>



<div class="">
  <div
    class="mx-auto mt-2 lg:mt-8 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-16"
  >
    <div
      class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4"
    >
      <Carousel {images} />
    </div>
    <div class="p-2 mx-4 mt-8 lg:mt-0 content-center  ">
      <h1 class="lg:p-2 text-xl font-bold text-gray-900 sm:text-2xl">
        {title}
      </h1>
      <div class="flex flex-row lg:p-2 mt-2">
        <h2 class="mt-2 text-xl font-medium text-gray-900 sm:text-2xl">
          ${vehicle.price.toLocaleString()}
        </h2>
        <!-- Bi weekly payment -->

        <h2 class="p-2 mx-2 text-md font-medium text-gray-600 sm:text-md">
          &lpar${biWeekly.toLocaleString()}/biweekly&rpar
        </h2>
      </div>
      <div class="flex py-8 space-x-4">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg w-40 px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Get Started</button
        >

        <button
          type="submit"
          class="hover:scale-125 transition duration-150 ease-in-out pb-2"
          on:click={handleFavorite}
        >
          {#if isFavorite}
            <!-- Red Heart if isFavorite -->
            <svg
              class="stroke-slate-100 fill-red-500"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill=""
                d="M11.4989 19.1C11.6404 19.1001 11.7766 19.0456 11.8786 18.9477L11.8787 18.9477L20.2832 10.8833C20.2832 10.8833 20.2833 10.8832 20.2834 10.8831C20.8573 10.3401 21.3143 9.68674 21.6266 8.96261C21.9389 8.23839 22.1 7.45854 22.1 6.67046C22.1 5.88238 21.9389 5.10253 21.6266 4.37831C21.3143 3.65409 20.8572 3.00062 20.2832 2.4576C19.2262 1.45759 17.8234 0.9 16.3649 0.9C14.9064 0.9 13.5036 1.45759 12.4467 2.4576L12.4462 2.45809L11.499 3.36717L10.5539 2.45817L10.5533 2.4576C9.49636 1.45759 8.09356 0.9 6.63506 0.9C5.17657 0.9 3.77377 1.45759 2.71684 2.4576C2.14282 3.00063 1.68574 3.65409 1.37341 4.37831C1.06107 5.10253 0.9 5.88238 0.9 6.67046C0.9 7.45854 1.06107 8.23839 1.37341 8.96261C1.6857 9.68674 2.1427 10.3401 2.71661 10.8831C2.71669 10.8832 2.71676 10.8833 2.71684 10.8833L11.1191 18.9477L11.1191 18.9477C11.2212 19.0456 11.3573 19.1001 11.4989 19.1ZM11.4989 19.1C11.4988 19.1 11.4988 19.1 11.4988 19.1L11.4989 19L11.499 19.1C11.499 19.1 11.4989 19.1 11.4989 19.1Z"
              /></svg
            >
          {:else}
            <svg
              class="stroke-red-500 fill-white"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill="#FFFFFF"
                d="M11.4989 19.1C11.6404 19.1001 11.7766 19.0456 11.8786 18.9477L11.8787 18.9477L20.2832 10.8833C20.2832 10.8833 20.2833 10.8832 20.2834 10.8831C20.8573 10.3401 21.3143 9.68674 21.6266 8.96261C21.9389 8.23839 22.1 7.45854 22.1 6.67046C22.1 5.88238 21.9389 5.10253 21.6266 4.37831C21.3143 3.65409 20.8572 3.00062 20.2832 2.4576C19.2262 1.45759 17.8234 0.9 16.3649 0.9C14.9064 0.9 13.5036 1.45759 12.4467 2.4576L12.4462 2.45809L11.499 3.36717L10.5539 2.45817L10.5533 2.4576C9.49636 1.45759 8.09356 0.9 6.63506 0.9C5.17657 0.9 3.77377 1.45759 2.71684 2.4576C2.14282 3.00063 1.68574 3.65409 1.37341 4.37831C1.06107 5.10253 0.9 5.88238 0.9 6.67046C0.9 7.45854 1.06107 8.23839 1.37341 8.96261C1.6857 9.68674 2.1427 10.3401 2.71661 10.8831C2.71669 10.8832 2.71676 10.8833 2.71684 10.8833L11.1191 18.9477L11.1191 18.9477C11.2212 19.0456 11.3573 19.1001 11.4989 19.1ZM11.4989 19.1C11.4988 19.1 11.4988 19.1 11.4988 19.1L11.4989 19L11.499 19.1C11.499 19.1 11.4989 19.1 11.4989 19.1Z"
              /></svg
            >
          {/if}
        </button>
      </div>
      <Tabs data={tabs} />
    </div>
  </div>
</div>
