<script lang="ts">
  import { enhance } from "$app/forms"

  export let isFavorite: boolean = false
  export let vehicle: object = {}

  let vehicleData = {
    id: vehicle.vehicleId,
    year: vehicle.vehicle.year,
    make: vehicle.vehicle.make,
    model: vehicle.vehicle.model,
    trim: vehicle.vehicle.trim,
    price: vehicle.vehicle.price,
    odometer: vehicle.vehicle.odometer,
    media: vehicle.vehicle.media[0].url,
  }

  let title =
    vehicleData.year +
    " " +
    vehicleData.make +
    " " +
    vehicleData.model +
    " " +
    vehicleData.trim
  let src: string = vehicleData.media
</script>

<div
  class="w-full max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 "
>
  <div class="flex relative">
    <div class="absolute top-4 right-4 z-2 p-2">
      <form action="/inventory?/favorite" method="POST" use:enhance>

        <input type="hidden" name="vehicleId" value={vehicleData.id} />
        <button
          on:click= {() => isFavorite = !isFavorite}
          type="submit"
          class="hover:scale-125 transition duration-150 ease-in-out "
        >
  
          {#if isFavorite}
            <!-- Red Heart if isFavorite -->
            <svg
              class="stroke-slate-100 fill-red-400"
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
              class="stroke-slate-900 fill-white"
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
      </form>
    </div>
    <a href="/inventory/{vehicleData.id}">
      <img class="p-4 rounded-3xl" {src} alt="vehicle" />
    </a>
  </div>
  <div class="px-5 pb-5">
    <a href="#">
      <h5
        class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h5>

      <div class="flex items-center justify-between">
        <span class="text-sm font-md text-gray-500 dark:text-white"
          >${vehicleData.price.toLocaleString()}</span
        >
        <span class="text-sm font-md text-gray-500 dark:text-white"
          >{vehicleData.odometer.toLocaleString()}km</span
        >
      </div>
    </a>
  </div>
</div>
