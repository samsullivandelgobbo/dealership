<script lang="ts">
  import type { ActionData } from '../../$types'
  import vinDecode from '$lib/data/vinDecode';

  function onKeyDown(e) {
    console.log(e)
    console.log(e.target.value)
    vinDecode(e.target.value)
  }

  export let form: ActionData
</script>

<section class="bg-white dark:bg-gray-900">
  <div class=" px-4 mx-auto max-w-full ">
    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
      Add a new vehicle
    </h2>
    <form method="POST" action="/admin/inventory/add?/vehicle" enctype="multipart/form-data">
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="sm:col-span-2">
          <label
            for="vin"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Vehicle Identification Number</label
          >
          <input
            on:keydown={onKeyDown}
            type="text"
            name="vin"
            id="vin"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type vehicle VIN"
            required=""
          />
        </div>
        <div class="w-full">
          <label
            for="make"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Make</label
          >
          <input
            type="text"
            name="make"
            id="make"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vehicle make"
            required=""
          />
        </div>
        
        <div class="w-full">
          <label
            for="price"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Price</label
          >
          <input
            type="number"
            name="price"
            id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="$24599"
            required=""
          />
        </div>

        <div class="w-full">
          <label
            for="model"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Model</label
          >
          <input
            type="text"
            name="model"
            id="model"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vehicle model"
            required=""
          />
        </div>

        <div class="w-full">
          <label
            for="year"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Year</label
          >
          <input
            type="number"
            name="year"
            id="year"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="2021"
            required=""
          />
        </div>

        <div class="w-full">
          <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vehicle color"
            required=""
          />
        </div>

        <!-- Interior Color -->

        <div class="w-full">
          <label for="interior_color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Interior Color</label>
          <input
            type="text"
            name="interior_color"
            id="interior_color"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vehicle interior color"
            required=""
          />
        </div>

        <!-- Trim -->

        <div class="w-full">
          <label for="trim" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trim</label>
          <input
            type="text"
            name="trim"
            id="trim"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vehicle trim"
            required=""
          />
        </div>


        <div class="w-full">
          <label
            for="odometer"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Odometer</label
          >
          <input
            type="number"
            name="odometer"
            id="odometer"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Odometer"
            required=""
          />
        </div>


        

        <div class="sm:col-span-2">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Description</label
          >
          <textarea
            id="description"
            rows="8"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your description here"
          />
        </div>


        <div class="sm:col-span-2">
   
          


        <!-- Image Upload -->
        <div class="flex items-center justify-center w-full">
          <label
            for="file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                /></svg
              >
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, GIF up to 25MB
              </p>
            </div>
            <input id="file" name="file" type="file" class="hidden" multiple/>
          </label>
        </div>
      </div>



      </div>
      <button
        type="submit"
        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Add Vehicle
      </button>
    </form>
  </div>
</section>
